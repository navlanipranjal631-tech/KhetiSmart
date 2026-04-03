# KhetiSmart — Local Setup Guide

## What you need
- Node.js (download from https://nodejs.org — choose LTS version)
- Your App_v15.jsx file

---

## Step-by-step setup

### 1. Create the project folder
Make a new folder called `khetismart` anywhere on your computer (Desktop is fine).

### 2. Copy these files into that folder:
```
khetismart/
├── package.json          ← copy this file
├── vite.config.js        ← copy this file
├── index.html            ← copy this file
└── src/
    ├── main.jsx          ← copy this file
    └── App.jsx           ← rename App_v15.jsx to App.jsx and put here
```

### 3. Open terminal / command prompt
- **Windows**: Press `Win + R`, type `cmd`, press Enter
- **Mac**: Press `Cmd + Space`, type `terminal`, press Enter

### 4. Navigate to your folder
```bash
cd Desktop/khetismart
```

### 5. Install dependencies (only needed once)
```bash
npm install
```
This downloads React and Vite. Takes 1-2 minutes.

### 6. Start the app
```bash
npm run dev
```

### 7. Open in browser
The browser opens automatically at:
**http://localhost:5173**

---

## What will work locally (not in Claude.ai):
- ✅ ThingSpeak IoT sensors → real live data
- ✅ Open-Meteo weather → real weather for your state
- ✅ Agmarknet mandi prices → real government prices
- ✅ AI chatbot → full Claude AI responses

---

## ThingSpeak sensor readings (test without hardware)
Open this URL in your browser to push test data:
```
https://api.thingspeak.com/update?api_key=I08JQ41Y99L6K8M8&field1=55&field2=6.8&field3=29&field4=65&field5=120&field6=45&field7=210
```
The app will show **🛰️ ThingSpeak Live** within 5 seconds.

---

## Stop the app
Press `Ctrl + C` in the terminal.

## Start again next time
Just run `npm run dev` from the khetismart folder.
