# KhetiSmart 🌾

A farming companion app built for rural India — works in 9 languages, gives real mandi prices, and actually talks back to you if you can't read.

---

## Why I built this

Most AgriTech apps assume the farmer has decent English, a stable internet connection, and time to figure out a complicated UI. That's not the reality for the 100+ million smallholder farmers in India.

KhetiSmart started as a side project trying to answer one question: *what if a farmer in rural UP could just ask "should I sell my wheat today?" and get a real answer in Hindi?*

It's grown from there.

---

## What it does

**Dashboard** — Weather + soil health + market trend at a glance. The "what to do today" strip (irrigate / spray / harvest / sell) is the most-used feature in user testing.

**Live Mandi Prices** — Three-tier fallback so prices are always available:
1. `data.gov.in` Agmarknet API (official Govt. of India mandi data, state-filtered)
2. Claude AI with web search if Agmarknet is down
3. MSP-based simulation — clearly labelled, used only as last resort

**Weather** — 7-day forecast + rainfall probability via Open-Meteo (free, no API key needed). Covers all 28 states + 8 union territories.

**Crop Recommendations** — Enter your soil type, land size, and water availability. Get ranked crop suggestions with profit estimates, break-even prices, and minimum sell quantities.

**Crop Switch Advisor** — If your current crop isn't working out, this runs a three-source analysis (weather fit + supply levels + profit margins) and recommends what to switch to.

**Supply Intelligence Map** — Shows which crops are oversupplied vs. opportunity crops in your state right now. Helps avoid the classic "everyone planted onions, price crashed" problem.

**Profit Estimator** — Input your acreage, get a full P&L: total cost, expected revenue, net profit, ROI, and break-even price with a visual progress bar.

**Marketplace** — List produce directly. Buyers can browse by crop and state. No middleman.

**AI Assistant** — Claude-powered chatbot with full farm context (your state, soil, current crop). Answers in your language. Knows your situation before you even type.

**Crop Insurance (PMFBY)** — Explains the Pradhan Mantri Fasal Bima Yojana in plain language. Shows exactly what you pay (50%), what the government covers (50%), max claim amount, and ROI on the premium. Walks you through enrollment with the KCC bank document checklist.

**Soil Monitor** — IoT sensor readings for pH, moisture, nitrogen, phosphorus, potassium, and temperature. Each reading has a direct action recommendation (e.g. "Add Lime — Soil Too Acidic").

**Offline Reach** — Kisan Helpline integration + quick-question cards for farmers with no smartphone.

---

## Accessibility — the feature I'm most proud of

Only about 30% of rural farmers can comfortably read text on a screen. Everything else is secondary if farmers can't actually use the app.

**Global Text-to-Speech** — floating 🔊 button on every single page. Tap it, the app reads the whole screen aloud in your language.

A few things that make this actually work (not just a demo):
- Picks the best available system voice for the language, falls back gracefully
- Chrome has a bug where long speech cuts off — fixed by splitting text into sentence chunks
- Cleans up markdown symbols and ₹ signs before speaking so it sounds natural
- Speaking rate is tuned per language (Tamil and Telugu run slightly slower than Hindi)
- Animated waveform while speaking + a stop button

**Voice Input** — mic button in the AI Assistant. Works on Chrome, Edge, and Android WebView.

---

## Languages

| Code | Language   |
|------|-----------|
| `en` | English   |
| `hi` | हिन्दी    |
| `mr` | मराठी     |
| `pa` | ਪੰਜਾਬੀ    |
| `ta` | தமிழ்     |
| `te` | తెలుగు    |
| `kn` | ಕನ್ನಡ     |
| `bn` | বাংলা     |
| `gu` | ગુજરાતી   |

Every string in the UI is translated. The AI assistant responds in whichever language you're using.

---

## Tech stack

- **React** (hooks only, no class components)
- **Tailwind CSS** utility classes for styling
- **Open-Meteo API** — weather and forecast (free, no key)
- **data.gov.in Agmarknet API** — official mandi prices
- **Anthropic Claude API** — AI assistant + price fallback with web search
- **Web Speech API** — text-to-speech and voice input
- Single `.jsx` file, no build step required for dev

---

## APIs used

| API | Purpose | Key required |
|-----|---------|-------------|
| Open-Meteo | Live weather + 7-day forecast | No |
| Agmarknet (data.gov.in) | Mandi prices | Yes (free) |
| Anthropic Claude | AI assistant + price fallback | Yes |

---

## Running locally

```bash
# Clone the repo
git clone https://github.com/yourusername/khetismart.git
cd khetismart

# Install dependencies
npm install

# Add your API keys
cp .env.example .env
# Edit .env with your Agmarknet and Anthropic keys

# Start dev server
npm start
```

The app will run at `localhost:3000`. Weather works immediately. For mandi prices, you'll need a free `data.gov.in` API key.

---

## Environment variables

```
REACT_APP_ANTHROPIC_KEY=your_claude_api_key
REACT_APP_AGMARKNET_KEY=your_data_gov_in_key
```

---

## State coverage

All 28 states and 8 union territories are supported. State determines:
- Which mandi prices are fetched
- Which crops are recommended
- Which weather coordinates are used
- Which supply/demand data is shown

---

## Known limitations

- Marketplace listings are session-only (no backend yet) — persistence coming in v2
- IoT sensor readings are simulated; real hardware integration is on the roadmap
- Voice input requires Chrome or a Chromium-based browser
- Some regional language TTS voices depend on what's installed on the user's device

---

## Roadmap

- [ ] Backend for persistent marketplace listings
- [ ] Real IoT sensor integration (Raspberry Pi + soil sensors)
- [ ] SMS fallback for 2G feature phones via Twilio
- [ ] WhatsApp bot interface
- [ ] Historical price charts (6-month mandi trends)
- [ ] Image-based pest/disease detection

---

## Contributions

Issues and PRs are welcome. If you're adding a language translation, please check the `T` object structure in the source — every key needs a translation for all 9 languages before it can merge.

---

## License

MIT

---

*Built with the conviction that farmers deserve the same quality of financial and agronomic information that commodity traders have had for decades.*
