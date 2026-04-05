# Asset Schema

This schema defines the structure for all product media in the asset catalog.

| Field | Description | Type | Example |
|---|---|---|---|
| `asset_id` | Unique identifier for the asset | String | AST-0001 |
| `original_file_name` | Original filename from source | String | IMG_2048.MOV |
| `new_file_name` | Renamed file for internal use | String | bone-straight-24-install-01.mov |
| `file_path` | Local path in the repository | String | /assets/raw-imports/bone-straight-24-install-01.mov |
| `file_type` | image, video, document | String | video |
| `media_format` | jpg, png, mp4, mov | String | mov |
| `source_folder` | Folder name in Drive | String | DriveFolderA |
| `source_drive_link` | URL to the original file | String | https://drive.google.com/your-link |
| `import_date` | Date of import | Date | 2026-04-03 |
| `status` | imported, review, approved, archived | String | imported |
| `media_category` | product_photo, install_video, etc. | String | install_video |
| `product_type` | bundle, wig, closure, frontal | String | bundle |
| `texture` | bone_straight, body_wave, etc. | String | bone_straight |
| `length_visible` | Estimated length shown | String | 24 |
| `visual_quality_score` | 1-10 rating | Integer | 9 |
| `usable_for_website` | yes/no | Boolean | yes |
| `usable_for_instagram` | yes/no | Boolean | yes |
| `usable_for_ads` | yes/no | Boolean | yes |
| `usable_for_product_page` | yes/no | Boolean | yes |
| `usable_for_blog` | yes/no | Boolean | no |
| `needs_manual_review` | yes/no | Boolean | no |
| `review_notes` | Notes for review | String | - |
| `candidate_sku` | Predicted SKU | String | SKU-BS-24-3B |
| `candidate_collection`| Predicted collection | String | bone_straight |
| `campaign_angle` | Marketing angle | String | proof |
| `caption_angle` | Messaging focus | String | transformation |
| `customer_persona_fit` | Target persona | String | soft_life_striver |
| `funnel_stage_fit` | awareness, consideration, conversion | String | consideration |
| `priority_rank` | 1-5 importance | Integer | 1 |
| `suggested_alt_text` | SEO alt text | String | Close-up install video... |
| `suggested_title` | SEO title | String | 24 Inch Raw Bone Straight Install |
| `suggested_tags` | comma separated | String | bone straight, raw hair |
| `markdown_path` | Related product file | String | /products/bundles/bone-straight-24-3bundle.md |
