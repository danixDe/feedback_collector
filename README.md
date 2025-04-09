# Feedback Collector

A single-page feedback collection microapplication built using React, Tailwind CSS, and Supabase, deployed on Netlify. This app allows users to submit feedback and provides an admin view to see all submissions.
## Links
  Github_repo: https://github.com/danixDe/Feedback_collector
  Netlify_live: https://feedback-coll.netlify.app/
## Features

- React frontend with Vite
- Tailwind CSS for styling
- Feedback form with:
  - Full Name input
  - Email input (with basic validation)
  - Feedback message textarea
  - Submit button with loading state
- Admin View toggle:
  - Displays feedback submissions in a styled list
- Responsive UI
- Timestamp for each feedback
- Watermark in footer with developer name
- Supabase as backend for feedback storage
- Deployed on Netlify

## Tech Stack

- React + Vite
- Tailwind CSS
- Supabase (Backend as a service)
- Netlify (Frontend deployment)

## Folder Structure

feedback_collector/
├── public/
├── src/
│   ├── App.jsx
│   ├── Feedform.jsx
│   ├── list.jsx
│   ├── getFeedback.js
│   ├── postFeedback.js
│   └── supabaseClient.js
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js

## API Endpoints

- POST /submit-feedback  
  Inserts a new feedback entry into the Supabase `feedbacks` table.

- GET /feedbacks  
  Retrieves all feedback entries in descending order of creation time.

## Setup Instructions

1. Clone the repository:
   git clone https://github.com/danixDe/feedback_collector.git
   cd feedback_collector

2. Install dependencies:
   npm install

3. Create a `.env` file and add your Supabase credentials:
VITE_SUPABASE_URL=https://ejfyubtusklgwojluvrp.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqZnl1YnR1c2tsZ3dvamx1dnJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMjA5NzEsImV4cCI6MjA1OTY5Njk3MX0.LF4-q3xm40Ib9XMSHxdsady8R6bBlYmKii_Hgd3DCfM
   
4. To Install the node dependenciesF:
    npm i

5. Run the development server:
   npm run dev

6. To build for production:
   npm run build

## Deployment Instructions (Netlify)

- Build Command: npm run build
- Publish Directory: dist
- Environment Variables: Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY

## Developer

Aravind Bollapragada  
© 2025
