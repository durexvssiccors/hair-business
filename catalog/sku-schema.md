# SKU Schema

This schema defines the structure for all products sold in the SKU master catalog.

| Field | Description | Type | Example |
|---|---|---|---|
| `sku_id` | Unique SKU identifier | String | SKU-BS-24-3B |
| `slug` | URL-friendly product name | String | bone-straight-24-3bundle |
| `product_title` | Public product name | String | Raw Bone Straight 24 Inch - 3 Bundle Set |
| `product_type` | bundle, wig, closure, frontal | String | bundle |
| `status` | draft, published, archived | String | draft |
| `featured_status` | yes/no | Boolean | yes |
| `tier` | entry_premium, core_bundle, elite, custom | String | core_bundle |
| `collection` | bone_straight, body_wave, etc. | String | bone_straight |
| `texture` | texture of the hair | String | bone_straight |
| `origin` | country of origin | String | Vietnam |
| `raw_or_processed` | raw or processed status | String | raw |
| `length_options` | Available lengths | String | 24 |
| `density_notes` | fullness notes | String | full |
| `color` | hair color | String | natural_black |
| `lace_type` | lace type for closures/frontals | String | closure |
| `bundle_count` | Number of bundles included | Integer | 3 |
| `closure_included` | yes/no | Boolean | no |
| `frontal_included` | yes/no | Boolean | no |
| `wig_type` | wig construction type | String | - |
| `recommended_use` | recommended styling use | String | everyday glam |
| `best_for` | Target customer persona | String | soft-life striver |
| `longevity_notes` | How long it lasts | String | can be reused multiple times |
| `care_notes` | Basic maintenance info | String | use sulfate-free products |
| `hero_asset_id` | Main image/video asset ID | String | AST-0001 |
| `gallery_asset_ids` | Additional image/video asset IDs | String | AST-0001\|AST-0002 |
| `video_asset_ids` | Video asset IDs | String | AST-0001 |
| `short_hook` | Marketing hook line | String | Factory-direct luxury without the markup |
| `short_description`| Quick product overview | String | Premium raw Vietnamese bone straight bundles... |
| `long_description` | Full product details | String | This three-bundle set is built for women... |
| `why_it_wins` | Key unique selling point | String | Direct sourcing premium quality... |
| `who_its_for` | Target audience description | String | Women who want a finished expensive look... |
| `how_many_to_buy` | Purchase quantity advice | String | 3 bundles for most full installs |
| `styling_notes` | Tips for styling | String | Pairs beautifully with closure or frontal |
| `faq_snippets` | Relevant FAQ questions | String | How many bundles do I need?\|Is this raw hair? |
| `cost_basis` | internal cost | Float | 0.0 |
| `target_price` | Ideal selling price | Float | 0.0 |
| `sale_price` | Current selling price | Float | 0.0 |
| `cta_primary` | Primary button text | String | Shop Bundle |
| `cta_secondary` | Secondary button text | String | Need Help Choosing? |
| `bundle_upsell` | Related upsell products | String | SKU-CLS-BS-18\|SKU-FRT-BS-18 |
| `cross_sell` | Related cross-sell products | String | SKU-DW-WIG-26 |
| `product_md_path` | Local path to markdown file | String | /products/bundles/bone-straight-24-3bundle.md |
| `seo_title` | SEO optimized title | String | Raw Bone Straight 24 Inch 3 Bundle Set Ghana |
| `seo_description` | SEO meta description | String | Factory-direct raw Vietnamese bone straight... |
| `keywords` | SEO focus keywords | String | raw bone straight ghana, vietnamese hair |
