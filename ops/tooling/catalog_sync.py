import base64
import os
import subprocess
import time
from pathlib import Path

import requests


API_KEY = os.environ.get("GEMINI_API_KEY")
if not API_KEY:
    raise RuntimeError("Set GEMINI_API_KEY before running catalog_sync.py")

URL = (
    "https://generativelanguage.googleapis.com/v1beta/models/"
    f"gemini-1.5-flash:generateContent?key={API_KEY}"
)
DB_DIR = Path("./assets/raw")
PRICE_LIST = Path("./priceList.jpeg")
OUTPUT_CSV = Path("./catalog/asset-catalog.csv")


def get_base64(path: Path) -> str:
    temp_path = Path("temp_process.jpg")
    subprocess.run(
        ["convert", str(path), "-resize", "1024x1024>", str(temp_path)],
        check=True,
    )
    with temp_path.open("rb") as handle:
        data = base64.b64encode(handle.read()).decode("utf-8")
    temp_path.unlink()
    return data


def append_minimal_csv_header() -> None:
    if OUTPUT_CSV.exists():
        return
    OUTPUT_CSV.write_text("Filename,Texture,Length,Type,Price_GHS\n", encoding="utf-8")


append_minimal_csv_header()

print("Processing price list...")
price_b64 = get_base64(PRICE_LIST)

print("Starting AI classification...")
for asset_path in sorted(DB_DIR.iterdir()):
    if not asset_path.is_file():
        continue
    if asset_path.suffix.lower() in {".mov", ".mp4", ".csv", ".md"}:
        continue

    print(f"Processing: {asset_path.name}...", end=" ", flush=True)

    if asset_path.suffix.lower() == ".heic":
        jpg_temp = Path("temp_heic.jpg")
        subprocess.run(
            ["heif-convert", str(asset_path), str(jpg_temp)],
            stdout=subprocess.DEVNULL,
            check=True,
        )
        prod_b64 = get_base64(jpg_temp)
        jpg_temp.unlink()
    else:
        prod_b64 = get_base64(asset_path)

    payload = {
        "contents": [
            {
                "parts": [
                    {
                        "text": (
                            "Image 1: Price List. Image 2: Product. Identify Hair "
                            "Texture, Length, Type. Match to Price. Return ONLY one "
                            "CSV line: Filename, Texture, Length, Type, Price. No "
                            "other text."
                        )
                    },
                    {"inline_data": {"mime_type": "image/jpeg", "data": price_b64}},
                    {"inline_data": {"mime_type": "image/jpeg", "data": prod_b64}},
                ]
            }
        ]
    }

    try:
        response = requests.post(
            URL,
            json=payload,
            headers={"Content-Type": "application/json"},
            timeout=60,
        )
        response.raise_for_status()
        result = response.json()

        if "candidates" in result:
            clean_data = result["candidates"][0]["content"]["parts"][0]["text"].strip()
            csv_parts = clean_data.split(",")
            if len(csv_parts) >= 4:
                final_line = f"{asset_path.name},{','.join(csv_parts[1:])}"
                with OUTPUT_CSV.open("a", encoding="utf-8") as handle:
                    handle.write(final_line + "\n")
                print("done")
            else:
                print("formatting error")
        else:
            print(f"API error: {result.get('error', {}).get('message', 'Unknown')}")
    except Exception as error:
        print(f"connection error: {error}")

    time.sleep(2)

print(f"Finished. Check {OUTPUT_CSV}")
