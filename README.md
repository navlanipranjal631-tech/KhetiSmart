# 🌾 KhetiSmart — Smart Farming Platform

> **"Smart farming decisions for every Indian farmer — from smartphones to ₹500 keypad phones"**

KhetiSmart is an AI-powered agricultural platform built for India's 140 million farming households. It delivers real-time crop advice, live mandi prices, soil health monitoring, and multilingual accessibility — even on 2G and USSD feature phones.

---

## 🚀 Quick Start (VS Code)

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env
# Edit .env and add your ThingSpeak + Agmarknet keys (optional — app runs without them)

# 3. Start development server
npm run dev
# Opens at http://localhost:5173
```

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  FARMER INPUT LAYER                                         │
│  Voice (9 languages) → Text → State + Crop Selection       │
└───────────────────────────┬─────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────┐
│  DATA LAYER (3 real APIs)                                   │
│  • IoT Sensors    → ThingSpeak (moisture, pH, NPK, temp)   │
│  • Weather        → Open-Meteo (free, 7-day forecast)      │
│  • Market Prices  → data.gov.in Agmarknet (mandi rates)    │
└───────────────────────────┬─────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────┐
│  INTELLIGENCE LAYER                                         │
│  Offline AI Advisory Engine (rule-based, 20+ query types)  │
│  Personalised: state + crop + soil data + live prices       │
└───────────────────────────┬─────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────┐
│  ACCESS LAYER — reaches 100% of farmers                     │
│  PWA (smartphone) → USSD *99# → SMS → IVR (voice call)     │
└─────────────────────────────────────────────────────────────┘
```

---

## ✨ Features

### Free Tier
| Feature | Description |
|---|---|
| 🌾 Crop Advisor | AI-recommended crops by state, soil type, season |
| 🔄 Crop Switch Advisor | When to pivot crops and what to grow next |
| 💰 Profit Estimator | Revenue, cost, ROI per crop per acre |
| 🤖 AI Assistant | Offline conversational advisor in 9 languages |
| 🏠 Dashboard | Real-time overview of all farm data |

### Insights (Free)
| Feature | Description |
|---|---|
| 🌤️ Weather | Live 7-day forecast via Open-Meteo API |
| 📊 Market Prices | Live mandi rates via Agmarknet / data.gov.in |
| 🌱 Soil Monitor | Real-time NPK, pH, moisture via ThingSpeak IoT |

### Premium (₹99/month)
| Feature | Description |
|---|---|
| 💎 High Value Crops | Premium crop intelligence |
| 🏪 Marketplace | Direct buyer / FPO connections |
| 🛡️ Crop Insurance | PMFBY calculator + claim guidance |
| 🗺️ Supply Map | National oversupply / opportunity intelligence |
| 📡 Offline Reach | USSD / IVR for feature-phone farmers |

---

## 🌐 Languages Supported

Hindi · Marathi · Punjabi · Tamil · Telugu · Kannada · Bengali · Gujarati · English

All features including voice input (TTS + STT) work in all 9 languages.

---

## 🔌 API Integrations

| API | Purpose | Key Required |
|---|---|---|
| [Open-Meteo](https://open-meteo.com) | 7-day weather forecast | ❌ Free, no key |
| [ThingSpeak](https://thingspeak.com) | IoT sensor data (soil) | ✅ Free account |
| [data.gov.in Agmarknet](https://data.gov.in) | Live mandi prices | ✅ Free registration |

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env` and fill in:

```env
VITE_THINGSPEAK_CHANNEL_ID=your_channel_id
VITE_THINGSPEAK_READ_KEY=your_read_api_key
VITE_AGMARKNET_KEY=your_agmarknet_key
```

**All variables are optional** — the app runs in simulation/demo mode without them.

---

## 🚀 Deployment (Vercel — recommended)

```bash
# 1. Push to GitHub
git init && git add . && git commit -m "KhetiSmart v1"
git remote add origin https://github.com/YOUR_USERNAME/khetismart.git
git push -u origin main

# 2. Import on Vercel
# Go to vercel.com → New Project → Import your repo
# Vercel auto-detects Vite — no configuration needed

# 3. Add environment variables
# Vercel Dashboard → Settings → Environment Variables
# Add the same variables from your .env file

# 4. Deploy → get your live URL in ~60 seconds
```

---

## 📁 Project Structure

```
khetismart/
├── src/
│   ├── App.jsx          ← Entire application (single-file architecture)
│   ├── main.jsx         ← React entry point
│   └── index.css        ← Global resets only
├── public/
│   ├── manifest.json    ← PWA manifest
│   └── icons/           ← App icons (add your own)
├── .env.example         ← Template for environment variables
├── .env                 ← Your secrets (NOT committed to Git)
├── .gitignore
├── index.html           ← Entry HTML with fonts + PWA meta
├── package.json
├── vite.config.js
└── README.md
```

---

## 🛡️ IoT Sensor Setup (ESP32/Arduino)

```cpp
// POST to ThingSpeak every 30+ seconds
String url = "https://api.thingspeak.com/update";
url += "?api_key=" + WRITE_KEY;
url += "&field1=" + String(moisture);    // % (0-100)
url += "&field2=" + String(ph);          // pH (4.5-8.5)
url += "&field3=" + String(temperature); // °C
url += "&field4=" + String(humidity);    // % relative humidity
url += "&field5=" + String(nitrogen);    // kg/ha
url += "&field6=" + String(phosphorus);  // kg/ha
url += "&field7=" + String(potassium);   // kg/ha

http.begin(url);
http.GET();
```

---

## 📊 Business Model

- **Free**: Core farming tools (crop advisor, weather, market prices)
- **Kisan Plus ₹99/month**: All features unlocked
- **FPO / Agri-Business ₹999/month**: API access + bulk farmer management

**Market**: 140M farming households in India · 600M rural population
**TAM**: ₹8,500 Cr agri-tech market (2025) · Growing at 25% CAGR

---

## 🏆 Built for

National-level hackathon · Agri-tech innovation track

---

*Made with ❤️ for Indian farmers*
