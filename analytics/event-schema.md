---
title: "Event Schema"
---

# Event Schema

## Purpose

This document defines the events we want to track across the website and customer journey.

The goal is to measure:
- traffic
- engagement
- product interest
- inquiry behavior
- conversion
- post-purchase behavior

This schema can later be implemented in analytics tools such as GA4 or other tracking systems.

---

## 1. Page-Level Events

### `page_view`
Triggered whenever a page is loaded.

Properties:
- page_type
- page_slug
- page_title
- traffic_source
- device_type

---

### `collection_view`
Triggered when a collection page is viewed.

Properties:
- collection_name
- collection_slug
- traffic_source

---

### `product_view`
Triggered when a product page is viewed.

Properties:
- sku_id
- product_title
- collection
- product_type
- tier
- traffic_source

---

## 2. Commerce Interest Events

### `add_to_cart`
Triggered when a customer adds an item to cart.

Properties:
- sku_id
- product_title
- quantity
- price
- collection
- product_type
- tier

---

### `begin_checkout`
Triggered when checkout starts.

Properties:
- cart_value
- item_count
- sku_ids
- collection_mix
- source_channel

---

### `purchase`
Triggered when a purchase is completed.

Properties:
- order_id
- revenue
- sku_ids
- item_count
- offer_tier_mix
- source_channel
- persona_estimate
- new_or_repeat_customer

---

## 3. Lead and Inquiry Events

### `whatsapp_click`
Triggered when a user clicks a WhatsApp CTA.

Properties:
- page_slug
- cta_location
- linked_sku
- linked_collection
- campaign_name

---

### `instagram_click`
Triggered when a user clicks through from Instagram to the website.

Properties:
- landing_page
- campaign_name
- content_type

---

### `dm_inquiry`
Tracked manually or through workflow logging when an Instagram DM shows purchase intent.

Properties:
- persona_estimate
- product_interest
- source_post
- inquiry_type
- timestamp

---

### `whatsapp_inquiry`
Tracked manually or through workflow logging when a WhatsApp conversation shows purchase intent.

Properties:
- persona_estimate
- product_interest
- inquiry_type
- timestamp

---

## 4. Product Interaction Events

### `custom_build_start`
Triggered when a user starts the custom build flow.

Properties:
- page_slug
- entry_point
- source_channel

---

### `custom_build_submit`
Triggered when a user submits a custom build request.

Properties:
- requested_categories
- requested_textures
- estimated_item_count
- source_channel

---

### `recommendation_request`
Triggered when a user asks for help choosing.

Properties:
- page_slug
- source_channel
- product_interest
- persona_estimate

---

## 5. Content Events

### `blog_view`
Triggered when a blog post is viewed.

Properties:
- post_slug
- post_title
- topic
- source_channel

---

### `guide_view`
Triggered when an educational guide is viewed.

Properties:
- guide_slug
- guide_title
- topic
- source_channel

---

### `cta_click`
Triggered when a page CTA is clicked.

Properties:
- cta_text
- page_slug
- cta_location
- linked_goal

---

## 6. Customer Lifecycle Events

### `repeat_purchase`
Triggered when a returning customer buys again.

Properties:
- customer_id
- order_id
- prior_order_count
- revenue
- time_since_last_purchase

---

### `aftercare_open`
Triggered when a customer opens aftercare content or a follow-up guide.

Properties:
- customer_id
- content_type
- order_id

---

### `review_submitted`
Triggered when a customer submits a review or testimonial.

Properties:
- customer_id
- sku_id
- rating
- review_type

---

## 7. Operational Events

### `catalog_asset_imported`
Triggered when a media asset is imported into the catalog.

Properties:
- asset_id
- source_folder
- import_date

---

### `catalog_asset_classified`
Triggered when a media asset receives structured metadata.

Properties:
- asset_id
- product_type
- texture
- candidate_sku
- needs_manual_review

---

### `product_published`
Triggered when a product page goes live.

Properties:
- sku_id
- product_title
- collection
- tier
- publish_date

---

## 8. Attribution Properties

These properties should be attached when possible:
- source_channel
- campaign_name
- content_bucket
- persona_estimate
- funnel_stage
- device_type
- new_or_repeat_customer

---

## 9. Minimum Launch Events

Track these first:
- page_view
- product_view
- cta_click
- whatsapp_click
- custom_build_start
- custom_build_submit
- add_to_cart
- begin_checkout
- purchase

---

## 10. Stage 2 Events

Add these later:
- dm_inquiry
- whatsapp_inquiry
- recommendation_request
- blog_view
- review_submitted
- repeat_purchase

---

## Final Rule

Only track events that can help improve:
- conversion
- average order value
- retention
- trust
- operational clarity
