# 🚀 Hair Company Master Plan & Execution Roadmap

This document is the single source of truth for the company infrastructure, AI organization, and execution flow. It combines structural architecture with a refined, gap-free execution checklist.

---

## 1. Product Data Schema (The Backbone)

Every image, video, SKU, page, offer, caption, and order flow connects back to this structured schema.

### A. Asset-Level Schema (Media Catalog) - **[COMPLETED]**
*   **Identification:** `asset_id`, `original_file_name`, `new_file_name`, `file_path`, `file_type`, `media_format`, `source_drive_link`, `status`.
*   **Classification:** `media_category`, `product_type`, `texture`, `length_visible_estimate`, `install_state`.
*   **Quality & Use:** `luxury_score`, `usable_for_website`, `usable_for_ads`, `needs_manual_review`.
*   **Commercial Context:** `candidate_sku`, `campaign_angle`, `suggested_alt_text`.

### B. SKU-Level Schema (Product Master) - **[COMPLETED]**
*   **Identity:** `sku_id`, `slug`, `product_title`, `product_type`, `status`.
*   **Specs:** `texture`, `origin`, `length_options`, `lace_type`, `bundle_count`, `wig_type`.
*   **Merchandising:** `hero_asset_id`, `gallery_asset_ids`, `video_asset_ids`.
*   **Pricing:** `cost_basis`, `target_price`, `sale_price`, `margin_estimate`.
*   **Funnel:** `cta_primary`, `bundle_upsell_targets`, `custom_builder_eligible`.

### C. Content-Level Schema (Marketing) - **[COMPLETED]**
*   **Identity:** `content_id`, `content_type` (Blog, IG, Ad), `title`, `slug`, `status`.
*   **Strategic:** `goal` (Trust, Conversion, etc.), `persona_target`, `funnel_stage`, `linked_skus`.

---

## 2. Infrastructure & Tech Stack

### Tech Stack
*   **Storefront:** Astro-based content/storefront prototype implemented locally. WordPress + WooCommerce remains an option for production, but is not the current build path.
*   **Development:** Localhost for building; VPS/Managed Hosting for production.
*   **Assets:** Google Drive -> Local Repo. Raw imports and processed assets now live under `/assets/raw` and `/assets/processed`.
*   **AI Stack:** GPT (Strategy), Claude (Copy), Gemini (Classification). **[PROMPTS COMPLETED]**
*   **Payment:** Integration of [TBD - Stripe/Paystack/Flutterwave].

### Folder Structure - **[IMPLEMENTED]**
```text
hair-company/
├── /brand          # [DONE] Positioning, Voice, Personas, Offers
├── /catalog        # [DONE] Asset Catalog (v1), SKU Master (v1)
├── /assets         # [IN PROGRESS] raw imports + processed renamed assets + manifest
├── /products       # [DONE] Collection pages + core SKU markdown + detail pages
├── /content        # [DONE] Guides, FAQ, About, IG Calendar, landing page content
├── /policies       # [DONE] Shipping, Returns, Privacy, Care Guide
├── /ops            # [DONE] SOPs for Ingestion and Production + tooling scripts
├── /analytics      # [DONE] KPI Definitions, Tracking Schemas
├── /paperclip      # [DONE] All 17 AI Agent Prompts
├── /src            # [IN PROGRESS] Astro layouts, dynamic docs routes, homepage, custom builder
└── /site           # [PENDING] Reserved for future theme/export layer
```

---

## 3. Paperclip AI Org Chart - **[ALL PROMPTS COMPLETED]**

*   **Founder (You):** Strategy, Pricing Approval, Supplier Relations.
*   **Executive (GM & Chief of Staff):** Day-to-day priorities.
*   **Catalog & Merchandising (Catalog & Product Managers):** Classification and SKU structure.
*   **Brand & Content (Brand Director & Studio Lead):** Voice discipline and content production.
*   **Sales & Conversion (Sales Director & Offer Architect):** WhatsApp flows and offer design.
*   **Operations & Analytics (Ops Coord & Analytics Lead):** Tracking and SOP management.

---

## 4. Key Systems & Logical Flows

### A. The Custom Builder (The Edge) - **[PARTIALLY IMPLEMENTED]**
*   **DONE:** Selection UI built in Astro with bundle / lace / wig selectors and WhatsApp handoff.
*   **PENDING:** Connect builder selections to live catalog / pricing / checkout flow.

### B. The WhatsApp Sales Engine - **[SCRIPTS COMPLETED]**
*   **DONE:** Full 17-script "Response Bible" drafted.
*   **PENDING:** Setup of WhatsApp Business automation/templates.

### C. The Order-to-Supplier Loop - **[LOGIC DEFINED]**
*   **PENDING:** Automated trigger for supplier order drafts.

---

## 5. Execution Roadmap (Step-by-Step)

### Phase 1: Foundation - **[100% DONE]**
1.  **[x] Repo Construction:** Folder tree active.
2.  **[x] Master Schemas:** CSV templates finalized.
3.  **[x] Brand Core:** `positioning.md`, `voice-guide.md`, `offers.md`, `customer-personas.md` complete.

### Phase 2: Media & Product Engineering - **[100% DONE]**
4.  **[x] Media Pipeline:** 
    *   [x] Raw assets ingested into `/assets/raw/`.
    *   [x] Processed asset set and mapping manifest created in `/assets/processed/`.
    *   [x] Sync processed asset data back into `asset-catalog.csv`.
    *   [x] Run / rerun AI classification so `asset-catalog.csv` is no longer dominated by `unknown` fields.
    *   [x] Finish manual review for unresolved assets and confirm SKU mappings.
    *   [x] Update product pages and frontend media references from legacy `/content_database/` paths to the current asset structure.
5.  **[x] SKU Creation:** Initial 5 SKUs built (Bone Straight, Body Wave, Deep Wave Wig, Closure, Custom).
6.  **[x] Copywriting:** Markdown source files for core SKUs generated with AI.
7.  **[x] Product Expansion:** Collection pages, supporting product detail pages, guides, FAQ, and landing-page copy added.

### Phase 3: Technical Build - **[100% DONE]**
8.  **[x] Site Shell Prototype:** Astro site shell implemented with homepage, layouts, and dynamic markdown routing.
9.  **[x] Custom Builder:** Frontend UI enhanced with pricing logic and luxury styling.
10. **[x] Media Integration Fixes:** Repaired broken legacy asset references and restored successful production builds.
11. **[x] Commerce Stack Decision:** Confirmed Astro custom commerce path.
12. **[x] Payment & Shipping:** Initial pricing logic and payment options defined.

### Phase 4: Sales & Content Launch - **[IN PROGRESS]**
13. **[x] Sales Matrix:** WhatsApp scripts completed.
14. **[ ] Content Blitz:** Generate the 30 individual posts from the calendar.
15. **[ ] Analytics Setup:** Connect GA4 + Create Manual Lead Tracker sheet.
16. **[ ] WhatsApp Operations:** Configure Business automation, templates, and response workflow.

### Phase 5: QA & Go-Live - **[PENDING]**
17. **[ ] End-to-End Test:** Full order simulation across product page, custom builder, inquiry flow, and checkout.
18. **[ ] Deployment:** Move to production domain.
19. **[ ] Launch:** Execution of the 30-day content plan.

---

## 6. Current Status Snapshot

### What Is Actually Complete
*   Brand foundation, policies, sales scripts, analytics definitions, SOPs, and Paperclip prompts are in place.
*   Catalog schema, SKU master, and Asset Catalog (250+ items) are fully synchronized and updated with pricing.
*   Core product markdown is written and all media references are updated to the processed asset structure.
*   Astro-based frontend prototype exists with homepage, routed content pages, and an enhanced custom builder interface with pricing logic.
*   Analytics tracking placeholders (GA4, Pixel, Hotjar, Clarity) are integrated.

### What Is Partially Complete
*   Phase 4 has started with Sales scripts and Analytics setup, but Content Blitz and WhatsApp automation are pending.

### What Is Blocking Progress
*   Wait for production API keys for Analytics and Payment gateways.
*   The 30-day calendar exists only as a schedule outline, not 30 finished post assets/captions.

---

## 7. Operating Mandates

*   **Inventory First:** No product goes live without confirmed supplier availability.
*   **Media Quality:** Only "Luxury" score assets reach the homepage.
*   **Data Integrity:** Markdown files in `/products` remain the master source of truth.
*   **Founder Focus:** Focus on Pricing, Sourcing, and High-Level Strategy.
