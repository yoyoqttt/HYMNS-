# How to connect Firebase (free) and go live

You get **5 files**:
- `index.html` — landing page (QR code points here)
- `form.html` — registration + 5 questions
- `thankyou.html` — confirmation page
- `dashboard.html` — TV screen with live pie charts
- `styles.css`, `firebase-config.js`, `questions-config.js` — shared config

---

## Step 1 — Create a free Firebase project

1. Go to https://console.firebase.google.com
2. Click **Add project** → name it (e.g. "radiology-conclave-2026") → keep defaults → **Create project**
3. Once created, click the **web icon `</>`** on the project overview page to register a web app
4. Give it a nickname (e.g. "event-poll") → click **Register app**
5. Firebase will show you a code block that looks like this:

```js
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "radiology-conclave-2026.firebaseapp.com",
  projectId: "radiology-conclave-2026",
  storageBucket: "radiology-conclave-2026.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

6. Copy those values into **`firebase-config.js`**, replacing the placeholder text.

---

## Step 2 — Turn on Firestore (the free database)

1. In the left sidebar of Firebase Console, click **Build → Firestore Database**
2. Click **Create database**
3. Choose **Start in test mode** for now (lets your form write data without login setup) → pick a region close to India (e.g. `asia-south1`) → **Enable**

That's it — no manual tables needed. The first time someone submits the form, Firestore automatically creates a `responses` collection and fills it with their answers.

> ⚠️ **Important — before your event goes fully public:** "test mode" allows anyone to read/write your database with no restrictions, for 30 days. That's fine for an internal 3-day event, but if you want it locked down, go to **Firestore → Rules** and use this instead, which only allows creating new responses (not reading/editing/deleting them from outside your dashboard):
>
> ```
> rules_version = '2';
> service cloud.firestore {
>   match /databases/{database}/documents {
>     match /responses/{doc} {
>       allow create: if true;
>       allow read, update, delete: if false;
>     }
>   }
> }
> ```
> (Your `dashboard.html` reads live data using the same Firebase project, so if you fully lock down `read`, the dashboard also needs a signed-in account — let me know if you want that added.)

---

## Step 3 — Customize your event details and questions

Open **`questions-config.js`** — this is the only file you need to edit for content:
- `EVENT` — name, tagline, dates, venue
- `QUESTIONS` — your actual 5 questions and answer options

Everything else (form, dashboard, landing page) reads from this file automatically.

---

## Step 4 — Host it for free

Easiest option: **Firebase Hosting** (since you're already using Firebase)

1. Install Node.js if you don't have it, then in a terminal:
   ```
   npm install -g firebase-tools
   firebase login
   ```
2. In the folder containing these files:
   ```
   firebase init hosting
   ```
   - Select your project
   - Public directory: `.` (current folder)
   - Configure as single-page app: **No**
3. Deploy:
   ```
   firebase deploy
   ```
4. You'll get a free live URL like `https://radiology-conclave-2026.web.app`

Alternative free options: **Vercel** or **Netlify** — just drag-and-drop this folder in their dashboard.

---

## Step 5 — Generate your QR code

Once hosted, take your live URL (e.g. `https://radiology-conclave-2026.web.app/index.html`) and paste it into any free QR generator (e.g. https://www.qr-code-generator.com) → download the QR image → print it or show it on screens at the venue.

**Do not** put the `dashboard.html` link in the QR code — only share that URL privately with whoever is running the TV screen, so random attendees can't quietly load it on their own phones.

---

## Step 6 — On event day

1. Open `dashboard.html` in a browser on the laptop connected to the TV screen, and leave it open for the full 3 days
2. Attendees scan the QR code → land on `index.html` → fill the form → see the thank-you page
3. Pie charts on the TV update automatically within a second or two of each submission — no refresh needed
