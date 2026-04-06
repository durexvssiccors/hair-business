import fs from 'fs';
import path from 'path';

const PRICING_MD_PATH = 'catalog/pricing-reference.md';
const OUTPUT_JSON_PATH = 'src/data/pricing.json';

function parsePricing() {
    const content = fs.readFileSync(PRICING_MD_PATH, 'utf-8');
    const pricing = {
        bundle: {
            "12": 45, "14": 50, "16": 55, "18": 60, "20": 65, "22": 70, "24": 75, "26": 80, "28": 85, "30": 90
        },
        lace: {
            "Closure": { "12": 35, "14": 40, "16": 45, "18": 50, "20": 55 },
            "Frontal": { "12": 45, "14": 55, "16": 65, "18": 75, "20": 85 }
        },
        wig: {
            "5x5": {},
            "13x4": {}
        }
    };

    // Parse RAW HAIR WIGS table
    const lines = content.split('\n');
    let inRawTable = false;
    
    for (const line of lines) {
        if (line.includes('### RAW HAIR')) {
            inRawTable = true;
            continue;
        }
        if (inRawTable && line.trim() === '---') {
            inRawTable = false;
            break;
        }
        
        if (inRawTable && line.includes('|') && !line.includes('INCH') && !line.includes('---')) {
            const parts = line.split('|').map(p => p.trim());
            if (parts.length >= 8) {
                const inch = parts[1];
                const p5x5 = parseInt(parts[4]);
                const p13x4 = parseInt(parts[6]);
                
                if (!isNaN(p5x5)) pricing.wig["5x5"][inch] = p5x5;
                if (!isNaN(p13x4)) pricing.wig["13x4"][inch] = p13x4;
            }
        }
    }

    fs.writeFileSync(OUTPUT_JSON_PATH, JSON.stringify(pricing, null, 2));
    console.log(`✅ Pricing synced to ${OUTPUT_JSON_PATH}`);
}

parsePricing();
