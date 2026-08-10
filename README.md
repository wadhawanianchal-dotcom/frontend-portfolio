# AI Portfolio Assistant

A production-ready frontend portfolio application built with Next.js. The application showcases my skills, projects, education, and provides an AI-powered portfolio assistant that answers questions based only on my portfolio information.

## Project Brief

Many recruiters and visitors have limited time to explore a portfolio manually. This project provides a personal portfolio with an AI assistant that helps visitors quickly learn about my skills, projects, education, and frontend development work. I chose this idea because it combines frontend development with a practical AI capability while solving the problem of making portfolio information easier to explore.

## Live Application

Live URL: LIVE_URL_HERE

## Repository

GitHub Repository:
https://github.com/wadhawanianchal-dotcom/frontend-portfolio

## Features

- Responsive personal portfolio website
- About, Skills, Projects, Education, and Contact sections
- Profile image and downloadable CV
- Email contact button
- AI-powered Portfolio Assistant
- Portfolio-specific AI responses
- Input validation
- Loading state while AI generates a response
- Error handling and fallback messages
- Responsive design for desktop and mobile devices

## Tech Stack

- Next.js
- React
- JavaScript
- CSS
- Vercel
- Google Generative AI
- Vercel AI SDK

## AI Integration

The AI Portfolio Assistant uses a Google Gemini model through the Vercel AI SDK.

When a visitor asks a question:

1. The user enters a question in the chat interface.
2. The frontend sends the question to `/api/chat`.
3. The server-side API route sends the question together with portfolio context to the Gemini model.
4. The AI generates a response based only on the portfolio information provided.
5. The response is returned and displayed in the chat interface.

The assistant is instructed not to invent information. If a visitor asks for information that is not available in the portfolio, it responds with:

> "I don't have that information in Anchal's portfolio yet."

This helps reduce hallucinated responses and keeps answers relevant to the portfolio.

## Project Structure

```text
src/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.js
│   ├── chat/
│   │   └── page.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
└── components/
    └── Chat.js

public/
├── profile.png
└── Anchal_Wadhwani_Resume.pdf