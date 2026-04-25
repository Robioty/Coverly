# Coverly 🛡️

**Coverly** is a privacy-first, offline-capable insurance vault built as a PWA.

Store all your policy details locally on your device and access or share them instantly — even without internet. No accounts, no cloud, no third parties.

---

## 🗂️ File Structure

```
/
├── index.html                ← Entire app (single-file PWA)
├── manifest.json             ← PWA manifest
├── sw.js                     ← Service worker (v9)
├── icon-192-coverly.png      ← App icon 192×192
└── icon-512-coverly.png      ← App icon 512×512
```

---

## 🚀 Feature Overview

### 🏠 Vault
- Card-based policy list with live expiry status badges
- Per-policy quick actions: Call, SMS, WhatsApp directly from the card
- Copy policy details to clipboard / native share sheet
- Full edit and delete with confirmation

### 📋 Rich Policy Fields
- Type (Car, Health, Home, Life, Travel, Pet, Business, Other)
- Insurer name, Policy number, Claims phone, Expiry date
- Emergency contact per policy, Notes field

### 📊 Dashboard & Calendar
- Stats overview: total policies, expired count, renewing soon
- Donut chart showing policy health breakdown
- Mini monthly calendar with expiry dots and renewal reminder markers
- Chronological timeline of all expiry and renewal events
- Tappable — goes straight to the relevant policy

### 🚨 Emergency Mode
- One-tap call to insurer
- SMS and WhatsApp with policy number + live GPS location link
- Reverse-geocoded location name (OpenStreetMap, no API key)
- Per-policy emergency contact button
- Works fully offline

### ➕ Add Policy
Single **Add** nav button opens a sheet with four options:
1. **Upload PDF** — reads the text layer directly (no OCR needed for digital PDFs)
2. **Enter Manually** — standard form
3. **Scan Document** — photo or image file via Tesseract OCR
4. **Import via QR** — scan a Coverly QR from another device

### 📄 PDF & OCR Scanning
- **Digital PDFs**: text layer extracted directly via PDF.js — accurate, instant
- **Scanned PDFs**: falls back to Tesseract OCR on a rendered page image
- **Images**: canvas preprocessing (greyscale + contrast boost) before OCR
- **Extraction engine** (3-layer):
  - Layer 1: next-line label→value (handles `CERTIFICATE NUMBER\nCFYAM24-8368292`)
  - Layer 2: inline label patterns with date range support (`24/10/2024 to 28/10/2024`)
  - Layer 3: shape-based fallback (alphanumeric token matching, spaced hyphen normalisation)
- **Confidence scoring** (0–100%): weighted across 5 fields, shown as a colour-coded bar
- **Inline editable review screen**: all fields pre-filled, editable before saving — no extra step
- Fields not found labelled `NOT FOUND` in amber
- Raw extracted text collapsible for debugging

### 🔐 Security
- **PIN lock**: 4-digit keypad with set/confirm/change flow
- **AES-256-GCM encryption** for backup files (Web Crypto API, 250,000 PBKDF2 iterations)
- All crypto on-device — password never leaves the device

### ☁️ Backup & Restore
- Downloads a `.coverly` encrypted file to the user's device
- User saves it wherever they choose (Google Drive, iCloud, email, USB)
- Restore by opening Coverly → Settings → Restore → choose file → enter password
- Post-download instruction sheet explains not to tap the file directly
- File Handling API registered in manifest: on supported browsers/Android, tapping a `.coverly` file opens Coverly automatically
- Backup prompt appears on app open when online + 14+ days since last backup

### 📲 QR Transfer
- Export all policies as an encrypted QR code
- Import on another device by scanning — no internet needed
- Handles both legacy and v3 QR formats

### 🔍 Find Missing Policies
- **Email search helper** in Settings: copyable search terms for Gmail, Outlook, Apple Mail
- Terms: "policy number", "certificate of insurance", "your policy schedule" etc.
- Step-by-step guide for each email client
- Coverly never accesses email — user searches themselves, then uses Upload PDF to scan

### 🔔 Notifications (on-device, no server)
- **Annual policy check**: fires once per year as a nudge to review the vault
- **Expiry alerts**: notifications at 30, 14 and 7 days before each policy expires
- All scheduled locally — no push server, no third party
- Toggle independently in Settings

### 🎨 Onboarding
- 4-screen onboarding on first launch, stays until user taps Continue
- Highlights: data sovereignty, emergency mode, encrypted backup, offline QR transfer
- 5th screen: offer to load example policies (Yes / Skip)
- Never auto-advances

### 📱 PWA
- Installable on Android and iOS (Add to Home Screen)
- Service worker with network-first for `index.html`, cache-first for CDN assets
- Fully offline after first load
- Manifest shortcuts: Emergency, Add Policy
- File handler registered for `.coverly` extension

---

## 🗺️ Deployment

### GitHub Pages
1. Push all files to repo root
2. Settings → Pages → `main` branch → `/` (root)
3. Visit `https://yourusername.github.io/coverly`

### Play Store (TWA)
Use [PWABuilder](https://www.pwabuilder.com/) to wrap into an Android APK.

---

## 🧠 Tech Stack

| Feature | Technology |
|---|---|
| Data storage | IndexedDB |
| Offline | Service Worker + Cache API |
| QR codes | qrcode.js + jsQR |
| OCR | Tesseract.js v5 |
| PDF reading | PDF.js 3.11 |
| Encryption | Web Crypto API (AES-256-GCM + PBKDF2) |
| Location | Geolocation API + OpenStreetMap Nominatim |
| Notifications | Web Notifications API (on-device) |
| Share | Web Share API + SMS/WhatsApp URIs |

---

## ⚠️ Known Limitations

- Notifications require the app to be opened to fire (no background push without a server)
- `.coverly` file association requires PWA to be installed; browser-only users should restore from within the app
- OCR accuracy varies with image quality — digital PDFs are always more reliable
- QR export has a payload limit; very large vaults with long notes may need to reduce data

---

## 🔮 Roadmap

- 🔐 Biometric unlock (WebAuthn)
- 📎 Document photo attachment per policy
- 📅 Calendar export (.ics) for renewal dates
- 🌐 Multi-language support
- 🎨 Light mode
- 📲 Play Store / App Store (TWA / Capacitor)

---

## 💡 Philosophy

> Your most important financial information should be private, accessible, and reliable — even without the internet.

No accounts. No servers. No tracking. Ever.

---

## 📄 License

MIT
