---
title: "WhatsApp Business Automation & AI Integration"
---

# WhatsApp Business Automation & AI Integration

This document defines the technical and logical setup for the WhatsApp Business engine, mapping the 17 Sales Scripts to AI Agent logic.

---

## 📱 WhatsApp Automation Setup

### 1. Greeting & Qualification (The "Front Desk")
- **Trigger:** First-time message.
- **Automation:** "Greeting Message" (Standard WA Business feature).
- **Script:** Script 1 & 2.
- **AI Owner:** AI Sales Director.
- **Goal:** Identify if the user wants Bundles, Wigs, or a Custom Build.

### 2. Quick Replies (The "Response Bible")
Map these for 1-tap responses in the WhatsApp Business App:
- `/hello` -> Script 1: First Response
- `/qualify` -> Script 2: Qualification Questions
- `/bundles` -> Script 4: Bundle Guidance (3-bundle rule)
- `/lace` -> Script 5: Closure vs Frontal Advice
- `/quality` -> Script 6: Quality/Raw Hair Assurance
- `/price` -> Script 7: Value Proposition
- `/custom` -> Script 10: Custom Build Requirements
- `/confirm` -> Script 13: Order Confirmation Template

### 3. Message Templates (For Proactive Follow-up)
*Requires Meta Approval for Business API:*
- **Template: `follow_up_consult`** -> Script 11 (Checking back on help needed).
- **Template: `reorder_reminder`** -> Script 17 (Repeat purchase prompt).
- **Template: `order_status`** -> Script 14 (Status update).

---

## 🤖 AI Agent Integration Flow

### Flow A: The Consultation (Conversion)
1. **Input:** Customer requirements (Length, Texture, Occasion).
2. **Agent:** **AI Consultation Assistant**.
3. **Task:** Use `pricing.json` and `sku-master.csv` to recommend the exact set.
4. **Output:** Script 3: Recommendation Response.

### Flow B: Objection Handling (Trust)
1. **Input:** "Why is it expensive?" or "Is this real raw hair?".
2. **Agent:** **AI Sales Director**.
3. **Task:** Reiterate the "Factory-Direct" and "Raw Vietnamese" value props.
4. **Output:** Script 6 or 7.

### Flow C: Support & Aftercare (Retention)
1. **Input:** "How do I wash this?" or "Where is my order?".
2. **Agent:** **AI Customer Service Lead** + **AI Aftercare Writer**.
3. **Task:** Provide care steps or order status.
4. **Output:** Script 14, 15, or 16.

---

## 🛠️ Operational Commands for the Founder
Use these keywords when talking to your AI Agents in this repo:

- **"GM, give me the daily priorities."** -> Activates AI General Manager.
- **"Sales Director, draft a follow-up for a hesitant wig buyer."** -> Activates AI Sales Director.
- **"Consultant, build a 3-bundle set for a wedding (24 inch, body wave)."** -> Activates AI Consultation Assistant.
- **"Content Lead, write a caption for Asset AST-0053."** -> Activates AI Content Studio Lead.

---

## 📅 Execution Roadmap (WhatsApp)
1. **[ ] Step 1:** Input all 17 scripts into "Quick Replies" in the WhatsApp Business App.
2. **[ ] Step 2:** Record a "Welcome Greeting" that points users to the Custom Builder on the website.
3. **[ ] Step 3:** Set up "Labels" in WhatsApp: `Inquiry`, `Consulting`, `Payment Pending`, `Order Confirmed`, `Aftercare`.
