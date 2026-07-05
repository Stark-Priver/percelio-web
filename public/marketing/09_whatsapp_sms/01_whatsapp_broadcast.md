# 💬 WhatsApp Broadcast Campaigns

**Strategy:** WhatsApp is the dominant messaging platform in Tanzania. Use it for customer support, order updates, promotions, and community building.

---

## Campaign 1: Welcome Message (New Users)

**Trigger:** User signs up on Pacelio  
**Channel:** Automated WhatsApp message

```
Hi {{name}}! 👋

Karibu Pacelio! You've joined East Africa's smartest delivery platform.

📦 Book deliveries in 30 seconds
🗺️ Track every parcel live
💰 Compare courier prices

👉 Start your first delivery: app.pacelio.incpritech.com

Got questions? Reply anytime. We're here to help.

— Pacelio Team
```

---

## Campaign 2: Delivery Confirmation (Sender)

**Trigger:** Delivery completed  
**Channel:** Automated WhatsApp message

```
✅ DELIVERY COMPLETE

Your parcel has been delivered successfully!

📍 {{delivery_address}}
📦 {{order_id}}
🕐 {{delivery_time}}
👤 Delivered by: {{courier_name}}

Rate your delivery: {{rating_link}}

Thank you for using Pacelio! 🚀
```

---

## Campaign 3: Delivery Update (Receiver)

**Trigger:** Courier picks up package  
**Channel:** Automated WhatsApp message

```
📦 YOUR PACELIO ORDER IS ON ITS WAY!

Hi {{receiver_name}},

{{sender_name}} has sent you a package via Pacelio.

🕐 Estimated arrival: {{eta}}
📍 Delivering to: {{delivery_address}}
👤 Courier: {{courier_name}} ({{courier_phone}})

Track live: {{tracking_link}}

Prepare your QR code for handoff! 🔐
```

---

## Campaign 4: Courier Job Alert

**Trigger:** New delivery available nearby  
**Channel:** WhatsApp (opt-in broadcast group)

```
🛵 NEW DELIVERY AVAILABLE

📍 Pickup: {{pickup_location}}
📍 Drop: {{drop_location}}
📏 Distance: {{distance}}
💰 Payout: {{payout}}

Tap to accept: {{accept_link}}

First come, first served! ⏱️
```

---

## Campaign 5: Promotional Broadcast

**Target:** All opted-in users  
**Frequency:** Bi-weekly  
**Channel:** WhatsApp broadcast list

```
🔥 PACELIO WEEKLY UPDATE

This week in numbers:
📦 {{deliveries_count}} deliveries completed
🛵 {{couriers_count}} active couriers
⭐ Avg rating: {{rating}}/5

🏪 New businesses joined: {{new_businesses}}

👉 Book your delivery: app.pacelio.incpritech.com

Reply STOP to unsubscribe from updates.
```

---

## Campaign 6: Seasonal Campaign

**Target:** All opted-in users  
**Timing:** Holidays, events, festivals

```
🎉 SPECIAL OFFER — {{holiday_name}}

Celebrate with Pacelio! Get {{discount}}% OFF on all deliveries this {{holiday_name}} weekend.

Use code: {{promo_code}}

Valid: {{start_date}} — {{end_date}}

👉 Book now: app.pacelio.incpritech.com

Happy {{holiday_name}} from the Pacelio Team! 🚀
```

---

## Campaign 7: Courier Performance Recap

**Target:** Active couriers  
**Frequency:** Weekly  
**Channel:** WhatsApp (individual)

```
📊 YOUR WEEKLY PERFORMANCE — {{week_dates}}

Juma, here's your Pacelio recap:

✅ Deliveries completed: {{count}}
⭐ Average rating: {{rating}}
💰 Total earnings: {{earnings}}
🏆 Bonus earned: {{bonus}}

Top tip: Work 7-9 AM for maximum breakfast delivery jobs!

Keep up the great work! 🛵💪
```
