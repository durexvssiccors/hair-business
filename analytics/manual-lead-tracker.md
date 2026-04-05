---
title: "Manual Lead Tracker"
---

# Manual Lead Tracker

Use `manual-lead-tracker.csv` as the lightweight operating sheet for inbound leads before a full CRM or automation stack exists.

---

## Purpose

Track:
- Instagram DMs
- WhatsApp inquiries
- recommendation requests
- quote requests
- custom build conversations

This file is the operational bridge between the sales scripts and the KPI definitions.

---

## File

`analytics/manual-lead-tracker.csv`

Suggested usage:
- one row per lead
- update the same row as the lead progresses
- do not create duplicate rows for the same conversation unless it is a new buying cycle

---

## Core Fields

### `lead_id`
Unique internal ID such as `LD-0001`.

### `created_at`
Date and time the lead first came in.

### `channel`
Examples:
- instagram_dm
- whatsapp
- referral
- website

### `persona_estimate`
Examples:
- soft_life_striver
- rich_polished_buyer
- occasion_buyer
- beauty_operator

### `product_interest`
Examples:
- bone_straight_bundles
- body_wave_bundle_set
- closure
- wig
- custom_build

### `inquiry_type`
Examples:
- pricing
- recommendation
- availability
- custom_order
- follow_up

### `stage`
Recommended stages:
- new
- qualified
- recommended
- waiting
- won
- lost

### `status`
Recommended statuses:
- open
- pending_customer
- pending_team
- closed_won
- closed_lost

### `outcome`
Examples:
- no_sale
- sold_bundle
- sold_wig
- sold_custom
- follow_up_needed

---

## Weekly Review

At the end of each week, summarize:
- total new leads
- leads by channel
- leads by product interest
- response-time issues
- won vs lost
- common objections

This gives you a manual input source for the KPIs in `analytics/kpi-definitions.md`.
