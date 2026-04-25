# Power Predictor (EnergyAI)

A MERN (MongoDB + Express + React + Node) web app that tackles a common electricity-billing gap: most households only understand their electricity usage **after** the postpaid bill arrives (often monthly/bi-monthly/quarterly). This project reframes electricity usage like a **subscription / recharge-style experience** by helping users _estimate, track, and anticipate_ consumption and cost — and by highlighting how poorly maintained appliances can silently increase power draw.

## Problem statement

### 1) Post-usage billing hides real consumption

In many regions, electricity billing is **postpaid** and arrives after a long window of usage (e.g., users “pay after 3 months”). This creates two problems:

- Users don’t know their _actual_ consumption day-to-day.
- By the time the bill arrives, it’s too late to change behavior for that period.

### 2) Appliance health is invisible (and affects the bill)

Home equipment like **fans, TVs, refrigerators, bulbs, ACs, heaters** can consume more electricity when:

- they are old or not maintained (dust buildup, worn components, poor efficiency)
- usage patterns change with seasons/weather

Users usually don’t get actionable insight into _which_ appliance is likely causing higher usage.

## What this project does

### Current features (implemented)

- **Authentication + user profile (OTP-based)**
  - Sends OTP to email, verifies OTP, creates account
  - Login/logout, fetch current user via cookie-based JWT
  - Optional avatar upload stored in Cloudinary
- **Dashboard UI**
  - Quick actions to jump into predictions, analytics, tips, and profile settings
- **Energy usage prediction (UI demo model)**
  - A prediction page that estimates **monthly kWh** based on user-entered appliance counts (lights/TV/AC/water heater)
- **Analytics with weather overlay**
  - Shows charts for:
    - estimated monthly usage (demo dataset)
    - 7-day usage + **temperature** pulled from WeatherAPI
    - other weather factors (demo dataset)
- **Energy saving tips**
  - Randomized energy-saving tips to guide users toward lower usage

### Planned features (not implemented yet)

- **Sensor-backed appliance input/output metering**
  - Ingest real readings per appliance via IoT sensors
- **External ML model integration (separate server)**
  - Send equipment electricity/time-series data to an ML service via API
  - Receive insights like:
    - which equipment is likely under-maintained / inefficient
    - predicted impact on bill / kWh
  - Display these insights in the UI (maintenance alerts and recommendations)
- **Subscription/recharge-based electricity guidance**
  - Predict remaining “balance”/expected bill and warn early (before the billing cycle ends)

## Tech stack

- **Frontend:** React (Vite), React Router, Tailwind CSS, Chart.js, Axios
- **Backend:** Node.js, Express, MongoDB (Mongoose), JWT auth, Nodemailer (OTP), Multer + Cloudinary (avatar)
- **External services:**
  - Weather forecast: WeatherAPI
  - Email OTP: Gmail SMTP (via Nodemailer)
  - Media: Cloudinary
  - (Planned) ML service: separate model server accessed via HTTP API

## Project structure

- `backend/` – Express API + MongoDB
- `frontend/` – React app (Vite)
- `package.json` – root runner using `concurrently` to start backend + frontend together

## API (backend)

Base path: `http://localhost:<PORT>/v1/api/user`

Implemented routes:

- `POST /send-otp` – send OTP to email for registration
- `POST /createUser` – create user (supports `multipart/form-data` for avatar)
- `POST /loginUser` – login
- `GET /getUser` – get current user (requires auth)
- `POST /logoutUser` – logout (requires auth)
- `PUT /changePassword` – change password (requires auth)
- `PUT /updateUser` – update profile (requires auth)
- `PUT /updateAvatar` – update avatar (requires auth + multipart)
- `DELETE /deleteUser` – delete user (requires auth)

## Local setup

### Prerequisites

- Node.js (recommended: 18+)
- MongoDB connection string (local or Atlas)
- Cloudinary account (for avatar uploads)
- Gmail account with an **App Password** (for OTP email)
- WeatherAPI key (for forecast)

### 1) Install dependencies

From the repo root:

```bash
npm install
cd backend && npm install
cd ../frontend && npm install
```

### 2) Configure environment variables

#### Backend env (`backend/.env`)

Create `backend/.env`:

```env
# Server
PORT=3000

# Database
MONGO_URI=mongodb://127.0.0.1:27017
DBNAME=energyai

# Auth
JWT_SECRET_KEY=replace_me
JWT_EXPIRES=7d
COOKIE_EXPIRE=7

# Cloudinary (avatar uploads)
CLOUDINARY_CLOUD_NAME=replace_me
CLOUDINARY_API_KEY=replace_me
CLOUDINARY_API_SECRET=replace_me

# OTP email
GMAIL=your_email@gmail.com
GMAIL_PASSWORD=your_gmail_app_password
```

#### Frontend env (`frontend/.env`)

Update/create `frontend/.env`:

```env
VITE_BACKEND_USER_URI=http://localhost:3000/v1/api/user
VITE_API_KEY=your_weatherapi_key
```

### 3) Run the app

From the repo root:

```bash
npm run dev
```

- Frontend: Vite dev server (typically `http://localhost:5173`)
- Backend: `PORT` you set in `backend/.env` (commonly `http://localhost:3000`)

## Notes / known dev caveats

- The backend sets auth cookies with `secure: true` and `sameSite: "none"`. On plain `http://localhost`, some browsers will block setting these cookies.
  - If login appears successful but the session doesn’t persist, run behind HTTPS for dev _or_ temporarily change cookie settings in the backend for local development.
- Weather analytics currently fetches forecast for a hardcoded city ("asansol") in the UI.

## Roadmap (suggested next steps)

- Add real appliance data ingestion (IoT sensor payloads + storage)
- Add ML service endpoint configuration (e.g., `VITE_ML_API_URL`) and a backend proxy route
- Add equipment “health score” + maintenance recommendation panel in dashboard
- Expand prediction horizons (7 days / 1 month / 3 months) from real usage + weather
- Link prediction to estimated billing and show “recharge/subscription” style budget warnings

## Contributing

PRs and suggestions are welcome. If you plan to add the ML service integration, consider documenting the expected request/response schema in the README first so the frontend + backend can stay aligned.
