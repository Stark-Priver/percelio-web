# 💬 SMS Marketing Campaigns

**Strategy:** SMS is essential for reaching users without smartphones or data. Keep messages short (160 char limit), actionable, and time-sensitive.

---

## Campaign 1: Delivery Tracking SMS

**Trigger:** Courier is en route  
**Audience:** Delivery receiver

```
Pacelio: Your package from {{sender}} is on its way! 
Est arrival: {{time}}. 
Track: {{tracking_link}}
QR code for handoff: {{qr_code}}
```

---

## Campaign 2: Delivery Confirmation SMS

**Trigger:** Delivery completed  
**Audience:** Sender

```
Pacelio: Delivery complete! 
{{parcel}} delivered to {{recipient}} at {{time}}.
QR verified. 
Rate: {{rating_link}}
```

---

## Campaign 3: Business Promotion SMS

**Target:** Businesses in coverage area  
**Frequency:** Monthly

```
Pacelio: Offer delivery to your customers without the headache. 
Free business account. Real-time tracking. Auto COD. 
Sign up: app.pacelio.incpritech.com
Questions? +255 792 017 591
```

---

## Campaign 4: Courier Recruitment SMS

**Target:** Motorcycle owners in coverage area  
**Frequency:** Bi-weekly

```
Pacelio: Earn TZS 30K+/day delivering with your bike. 
Instant jobs. Daily payouts. Free to join. 
Sign up: app.pacelio.incpritech.com
Or call +255 792 017 591
```

---

## Campaign 5: Re-engagement SMS

**Target:** Registered users who haven't booked in 14+ days

```
Pacelio: Missed you! Book a delivery today and get {{discount}}% off your next 3 deliveries. 
Use code {{code}}. 
app.pacelio.incpritech.com
```

---

## Campaign 6: Delivery Reminder SMS

**Trigger:** 1 hour before scheduled pickup  
**Audience:** Sender

```
Pacelio Reminder: Your courier arrives in 1 hour for pickup at {{address}}. 
Please have your package ready. 
Track: {{tracking_link}}
```

---

## Campaign 7: COD Collection Reminder

**Trigger:** COD payment due  
**Audience:** Business owner

```
Pacelio: COD collections of TZS {{amount}} are ready for review. 
{{count}} deliveries pending reconciliation. 
Dashboard: app.pacelio.incpritech.com
```

---

## Campaign 8: Feedback Request SMS

**Trigger:** 1 hour after delivery completed  
**Audience:** Sender + Receiver

```
Pacelio: How was your delivery? 
Rate {{courier_name}}: {{rating_link}}
Your feedback helps us improve!
```

---

## SMS Best Practices

| Rule | Reason |
|---|---|
| Keep under 160 characters | Avoids splitting and extra costs |
| Include Pacelio brand name | Recognition and trust |
| Every SMS has a clear action | Drive conversions |
| Respect time zones | Send 8 AM – 6 PM EAT |
| Include opt-out | "Reply STOP to unsubscribe" |
| Track link shorteners | Measure engagement |
| A/B test CTAs | Optimize conversion rates |
