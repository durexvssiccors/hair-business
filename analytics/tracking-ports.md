# Analytics Infrastructure ("Analytics Up The Ass!!")

This document tracks the integration points (ports) for all tracking services.

## Tracking Ports (Implemented)

| Service | Port Type | ID | Status | Implementation File |
|---------|-----------|----|--------|---------------------|
| Google Analytics 4 | GTag JS | `G-XXXXXXXXXX` | [READY] | `src/components/Analytics.astro` |
| Meta Pixel (FB/IG) | Pixel JS | `XXXXXXXXXXXXXXX` | [READY] | `src/components/Analytics.astro` |
| TikTok Pixel | Pixel JS | `XXXXXXXXXXXXXXX` | [READY] | `src/components/Analytics.astro` |
| Hotjar | Recording JS | `XXXXXXX` | [READY] | `src/components/Analytics.astro` |
| Microsoft Clarity | Recording JS | `XXXXXXXXXX` | [READY] | `src/components/Analytics.astro` |
| Manual Lead Tracker | CSV/MD | N/A | [READY] | `analytics/manual-lead-tracker.csv` |

## Event Schema Mapping

All ports are configured to track:
- `PageView`: Every route.
- `AddToCart`: (Pending checkout connection).
- `InitiateCheckout`: (Pending checkout connection).
- `WhatsAppInquiry`: Triggered when clicking WhatsApp buttons.

## Next Steps
1. Replace `XXXXX` placeholders with actual production IDs from the founder.
2. Enable "Enhanced Measurement" in GA4.
3. Verify event firing in Pixel Helper and GTM Debug mode.
