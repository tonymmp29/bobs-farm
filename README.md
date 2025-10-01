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

## 🌐 Live Demo

The frontend application is automatically deployed to GitHub Pages through CI/CD:

- **Live Site**: `https://tonymmp29.github.io/bobs-farm/`
- **Note**: GitHub Pages only hosts static files, so the purchase button will not work
- **Full Experience**: Use `docker compose up` locally to run both frontend and backend


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
- 🚀 Automated CI/CD with GitHub Actions
- 📄 GitHub Pages deployment

## 🚀 CI/CD Pipeline

This project includes automated CI/CD with GitHub Actions that:

### On Every Push & Pull Request

- Installs dependencies for both frontend and backend
- Runs backend tests with Mocha
- Performs frontend linting with ESLint
- Runs frontend tests

### On Main Branch Push

- Builds the React frontend for production
- Deploys automatically to GitHub Pages

### Setting Up GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "GitHub Actions"
4. Push to main branch to trigger the first deployment

The workflow file is located at `.github/workflows/deploy.yml`

## 🧪 Running Tests

### Backend Tests

```bash
cd backend
npm test
```

### Frontend Linting

```bash
cd frontend
npm run lint
```

---

*Fresh corn, delivered with technologycompose up 🚜
