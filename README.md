# Coverly 🛡️

**Coverly** is a privacy-first, offline-capable insurance vault designed for emergency situations.

Store key policy details locally on your device and access or share them instantly — even without internet.

---

## 🚀 v2.0 Features

### 🔐 Privacy & Security
- No accounts, no cloud, no tracking
- All data stored locally using IndexedDB
- **NEW: 4-digit PIN lock** with secure local storage
- PIN setup wizard with confirmation step
- Forgot PIN → clears all data (by design)

### 🏠 Vault
- Clean card-based policy list
- Per-policy expiry status badges (Active / Expires soon / Expired)
- Quick-action buttons (Call, SMS, WhatsApp) directly on cards
- Empty state with onboarding prompt
- Time-of-day greeting + live policy count
- Location bar with reverse geocoded city name

### 📋 Rich Policy Fields
- Policy type (Car, Health, Home, Life, Travel, Pet, Business, Other)
- Insurer name
- Policy number
- Claims phone number
- Expiry date with status badge
- **NEW: Per-policy emergency contact**
- **NEW: Notes field** (excess, coverage details etc.)

### ✏️ Full Policy Management
- **NEW: Edit existing policies**
- **NEW: Delete individual policies** with confirmation
- Copy policy details to clipboard
- Native share sheet (Web Share API)

### 🚨 Emergency Mode
- One-tap call to insurer
- SMS with location link (Google Maps)
- WhatsApp with location link
- **NEW: Per-policy emergency contact button**
- **NEW: "Get Location" button** if permission not yet granted
- **NEW: Reverse geocoded location name** in display

### 📸 Improved OCR Document Scanning
- Upload photo of insurance document
- **NEW: Smarter regex extraction** for:
  - Policy number patterns (POL-XXXXXX, AA-123456 etc.)
  - UK phone numbers (+44, 0800, etc.)
  - Insurer name
  - Expiry date (auto-converted to date field)
- Pre-fills Add Policy form for review

### 📤 QR Backup & Transfer
- Export all policies as QR code (versioned v2 format)
- Import on another device via camera
- **NEW: Camera scan fully contained** in Scan tab
- Handles both legacy and v2 QR formats
- No internet required

### 📍 Location Awareness
- GPS location in emergency messages as Google Maps link
- **NEW: Reverse geocode** (OpenStreetMap Nominatim) for human-readable location name

### 🎨 UI / UX
- **NEW: Full onboarding flow** (4 screens, skippable after first run)
- **NEW: Bottom sheet modals** for confirmations and loading states
- **NEW: DM Sans + DM Mono** typography
- **NEW: Sticky headers** with blur/glass effect
- **NEW: Safe area insets** for iPhone notch/Dynamic Island
- **NEW: Page entrance animations**
- **NEW: Expiry date badges** (Active / Expires soon / Expired)
- Responsive max-width layout (good on tablet too)
- Dark theme throughout

### 📦 Offline / PWA
- Service Worker with cache-first strategy
- **NEW: SPA fallback** for navigation requests
- **NEW: manifest.json shortcuts** (Emergency, Add Policy)
- **NEW: PWA install prompt** from Settings
- Installable on Android (Play Store via TWA) and iOS

---

## 🗂️ File Structure

```
/
├── index.html        ← Main app (single file PWA)
├── manifest.json     ← PWA manifest
├── sw.js             ← Service worker
├── icons/
│   ├── icon-192.png  ← App icon (you need to add these)
│   └── icon-512.png
└── screenshots/
    └── home.png      ← Play Store screenshot (optional)
```

---

## 🚀 Deployment

### GitHub Pages
1. Push files to a GitHub repo
2. Enable Pages → `main` branch → `/` (root)
3. Visit `https://yourusername.github.io/coverly`

### Play Store (TWA)
Use [Bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap) or [PWABuilder](https://www.pwabuilder.com/) to wrap the PWA into an Android APK.

---

## 🧠 How It Works

| Feature | Technology |
|---|---|
| Data storage | IndexedDB (browser-native) |
| Offline | Service Worker + Cache API |
| QR codes | qrcode.js + jsQR |
| OCR | Tesseract.js v5 |
| Location | Geolocation API + OSM Nominatim |
| Security | PIN stored in localStorage |
| Share | Web Share API + SMS/WhatsApp URIs |

---

## ⚠️ Limitations

- OCR accuracy varies with image quality
- No cloud backup (by design — privacy first)
- Data lost if browser storage is cleared (use QR export regularly)
- PIN stored in localStorage — not hardware-encrypted
- QR codes have size limits (~2KB); very large datasets may fail

---

## 🔮 Future Roadmap

### High Impact
- 🔐 Biometric unlock (WebAuthn / FaceID)
- 📅 Renewal reminders (local push notifications)
- 📂 Document photo storage (attach image to policy)
- ☁️ Optional encrypted backup (iCloud/Google Drive)
- 🧠 AI-powered OCR (Claude API integration)

### UX
- 🌍 what3words integration for precise location
- 📲 AirDrop / Nearby Share support
- 🌐 Multi-language support
- 🎨 Light mode

### Advanced
- 🔑 Full AES-256 encryption of IndexedDB
- 📊 Policy dashboard (total coverage overview)
- 🔔 Expiry notifications

---

## 💡 Philosophy

> Your most important financial information should be **private, accessible, and reliable — even without the internet.**

---

## 📄 License

MIT
