# CodeGuardian

An AI-powered code reviewer that provides concise automated feedback using a generative AI backend and a Vite + React frontend.

## Features

* AI-based code review via a single API endpoint
* Accepts source code and returns short, actionable suggestions
* Protected API with Clerk auth support (dev fallback enabled)
* Clean React UI built with Vite

## Tech Stack

* Frontend: React, Vite
* Backend: Node.js, Express
* AI: Google Generative AI (Gemini)
* Auth: Clerk

## Project Structure

```
backend/    # Express API and AI integration
frontend/   # Vite + React client
```

## Getting Started

**Requirements:** Node.js 18+, Google Generative AI API key

```bash
# Backend
cd backend
npm install
node server.js

# Frontend
cd frontend
npm install
npm run dev
```

Backend runs on `http://localhost:3000`, frontend on Vite’s dev URL.

## API

* `POST /review-code`

  * Body: `{ "code": "<source code>" }`
  * Response: `{ success: true, data: "<review text>" }`

## Environment Variables

```
PORT=3000
GOOGLE_API_KEY=your_google_api_key
CLERK_API_KEY=your_clerk_key
```

