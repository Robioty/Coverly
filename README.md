# Coverly 🛡️

Coverly is a **privacy-first, offline-capable insurance vault** designed for emergency situations.

It allows users to store key policy details locally on their device and quickly access or share them when needed.

---

## 🚀 Features

### 🔐 Privacy First
- No accounts
- No cloud storage
- No tracking
- All data stored locally using IndexedDB

---

### 📱 Emergency Mode
- One-tap access to policies
- Call insurer directly
- Send SMS with policy + location
- Share via WhatsApp

---

### 📤 QR Backup & Transfer
- Export policies as QR code
- Import on another device via camera
- No internet required

---

### 📸 OCR Document Scanning (NEW)
- Upload photo of insurance document
- Automatically extracts:
  - Policy number
  - Phone number
- Pre-fills form for faster entry

---

### 📍 Location Awareness
- Automatically includes GPS location in emergency messages

---

### 📦 Offline Ready
- Works as a PWA
- Installable on mobile
- Fully functional without internet

---

## 🧠 How It Works

- Data stored in browser (IndexedDB)
- Service Worker caches app for offline use
- QR codes used for data transfer
- OCR powered by Tesseract.js

---

## ⚠️ Limitations

- OCR accuracy varies depending on image quality
- No cloud backup (by design)
- Data lost if browser storage is cleared
- Emergency contact not yet tied per policy
- No encryption (yet)

---

## 🔮 Future Improvements

### High Impact
- 🔐 Local encryption (PIN / biometric)
- 👤 Per-policy emergency contacts
- 📂 Document storage (images, PDFs)
- 🧠 Smarter OCR (AI parsing)

### UX Improvements
- Edit / delete policies
- Onboarding flow
- Confirmation screens
- Better empty states

### Advanced Features
- 🌍 what3words integration
- 📅 Renewal reminders (local notifications)
- ☁️ Optional encrypted backup
- 📲 Share via AirDrop / Nearby Share

---

## 🧪 Testing Checklist

- Add multiple policies
- Export + import via QR
- Test offline mode
- Test SMS / WhatsApp sharing
- Test OCR with real documents

---

## 💡 Philosophy

Coverly is built on a simple idea:

> Your most important financial information should be **private, accessible, and reliable — even without the internet.**

---

## 📄 License

MIT (or your choice)
