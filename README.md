# 🌽 Bob's Corn Farm

A simple web application for purchasing corn directly from Bob's farm. Built with React frontend and Node.js backend.

## What is this?

Bob's Corn Farm is a web application where customers can:

- View information about the farm
- Purchase fresh corn with a simple click
- Track their corn purchases during the session
- Get real-time purchase confirmations

## Technologies

- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **Containerization**: Docker + Docker Compose

## 🚀 How to Run

Make sure you have Docker and Docker Compose installed, then run:

```bash
docker compose up
```

That's it! The application will be available at:

- **Website**: http://localhost
- **API**: http://localhost:3000

## 🔧 Running Projects Separately

If you prefer to run the frontend and backend separately:

### Backend (API)

```bash
cd backend
npm install
npm run dev
```

The API will be available at <http://localhost:3000>

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at <http://localhost:5173>

**Note**: Make sure to update the API URL in the frontend component if running on different ports.

## Features

- 🌽 Simple corn purchasing interface
- 📊 Session-based purchase counter
- 🎨 Responsive farm-themed design
- 🔄 Real-time API integration
- 🐳 Easy Docker deployment

---

*Fresh corn, delivered with technologycompose up 🚜
