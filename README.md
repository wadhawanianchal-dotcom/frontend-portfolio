# AI Portfolio Assistant

A production-ready frontend portfolio application built with **Next.js**. It showcases my skills, projects, education, achievements, and frontend development work, while providing an AI-powered portfolio assistant that helps visitors quickly find relevant information about my portfolio.

## Project Brief

Recruiters and visitors often have limited time to explore a portfolio manually. This project solves that problem by providing a responsive personal portfolio with an AI assistant that can answer questions using portfolio-specific information. I chose this idea because it combines frontend development with a practical AI capability and makes portfolio information easier to discover.

## Live Application

**Production URL:**
https://frontend-portfolio-two-rose.vercel.app/

## Repository

**GitHub:**
https://github.com/wadhawanianchal-dotcom/frontend-portfolio

## Features

* Responsive personal portfolio
* About section
* Skills section
* Projects section
* Education section
* Achievements section
* Contact section
* Email contact functionality
* Downloadable resume
* AI-powered Portfolio Assistant
* Portfolio-specific AI responses
* Input validation
* Loading state during AI responses
* Error handling and fallback messages
* Responsive desktop and mobile layout
* Accessible UI following WCAG principles

## Tech Stack

* Next.js
* React
* JavaScript
* CSS
* Google Generative AI / Gemini
* Vercel AI SDK
* Vitest
* React Testing Library
* Vercel

## AI Integration

The Portfolio Assistant uses a Google Gemini model through the AI integration in the application.

### How it works

1. A visitor enters a question in the AI Assistant.
2. The frontend sends the request to `/api/chat`.
3. The server-side API route provides the user's question together with relevant portfolio context.
4. The AI model generates a response based on the available portfolio information.
5. The response is returned to the frontend and displayed in the chat interface.

The assistant is instructed to avoid inventing portfolio information. When information is not available, it can respond with:

> "I don't have that information in Anchal's portfolio yet."

This keeps the assistant focused on the portfolio rather than generating unrelated or unsupported information.

## Resilience and Error Handling

The application includes several defensive behaviors:

* Empty-input validation
* Loading state while an AI response is being generated
* Error handling when the AI request fails
* Fallback messaging when a response cannot be generated
* Portfolio-context restrictions to reduce unsupported answers

These behaviors help the application fail gracefully instead of leaving the user with a broken or unexplained interface.

## Project Structure

```text
src/
├── app/
│   ├── about/
│   │   └── page.js
│   ├── api/
│   │   └── chat/
│   │       └── route.js
│   ├── chat/
│   │   └── page.jsx
│   ├── contact/
│   │   └── page.js
│   ├── health/
│   │   └── page.js
│   ├── playground/
│   │   └── page.js
│   ├── projects/
│   │   └── page.js
│   ├── globals.css
│   ├── layout.js
│   ├── page.jsx
│   ├── vitest.config.js
│   └── vitest.setup.js
│
├── components/
│   └── Chat.js
│
└── tests/
    └── Home.test.js

public/
├── profile-optimized.webp
└── other static assets
```

## Running Locally

### Prerequisites

* Node.js
* npm
* A Google Generative AI API key for the AI functionality

### Installation

Clone the repository:

```bash
git clone https://github.com/wadhawanianchal-dotcom/frontend-portfolio.git
cd frontend-portfolio
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file and add the required AI API environment variable used by the application.

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production Build

The production build was verified successfully.

```bash
npm run build
```

The application completed the production build successfully, including static page generation and route optimization.

To run the production build locally:

```bash
npm run start
```

## Testing

The project uses **Vitest** and **React Testing Library**.

Run the test suite:

```bash
npm test -- --run
```

### Test Results

The current test suite passes:

* **2 test files passed**
* **7 tests passed**
* **7/7 tests passing**

Coverage was also measured using Vitest's V8 coverage provider.

### Coverage Results

| Metric     | Result |
| ---------- | -----: |
| Statements |   100% |
| Branches   |   100% |
| Functions  |   100% |
| Lines      |   100% |

Run coverage with:

```bash
npm test -- --coverage
```

## Performance Audit

The application was tested using Chrome Lighthouse.

### Lighthouse Results

| Category       |   Score |
| -------------- | ------: |
| Performance    |  **92** |
| Accessibility  |  **98** |
| Best Practices | **100** |
| SEO            | **100** |

The Performance score is above the capstone target of 85, while accessibility, best practices, and SEO also achieved strong results.

## Accessibility Audit

The application was audited using **axe DevTools** with WCAG 2.1 AA selected.

### Audit Results

* Total issues: **0**
* Critical issues: **0**
* Serious issues: **0**
* Moderate issues: **0**
* Minor issues: **0**
* Automatic issues: **0**

The audit indicates no detected WCAG 2.1 AA accessibility violations in the tested page.

## Deployment

The application is deployed on **Vercel**.

Production deployment:

```text
https://frontend-portfolio-two-rose.vercel.app/
```

The production build was verified locally before deployment.

### Deployment Process

1. Changes are developed and tested locally.
2. Production build is verified using `npm run build`.
3. Tests are executed using Vitest.
4. Lighthouse and accessibility audits are performed.
5. Changes are committed to the `main` branch.
6. Changes are pushed to GitHub.
7. Vercel automatically deploys the updated `main` branch.

## Rollback Plan

The project is maintained through Git and deployed from the `main` branch.

If a production deployment introduces a serious problem, the previous stable Git commit can be restored and redeployed through Vercel.

The deployment history also provides previous production deployments that can be used to identify a stable version.

## Known Limitations

* AI responses depend on the availability and behavior of the configured AI service.
* Portfolio information is limited to the information provided to the AI context.
* The AI assistant does not provide general-purpose knowledge outside the portfolio context.
* Lighthouse scores can vary between runs depending on browser and system conditions.
* The current project is a personal portfolio rather than a large-scale multi-user application.

## Future Improvements

Potential future improvements include:

* Adding more automated tests for individual UI components
* Adding end-to-end testing for the complete AI Assistant flow
* Improving AI response streaming and interaction feedback
* Adding analytics and monitoring for production usage
* Expanding the portfolio content and project case studies
* Further optimizing mobile performance

## Production Checklist

Before release, the following areas were verified:

* [x] Application builds successfully
* [x] Production application is deployed
* [x] Portfolio pages are accessible
* [x] AI Assistant is functional
* [x] Error handling is implemented
* [x] Tests pass successfully
* [x] Test coverage is verified
* [x] Lighthouse audit completed
* [x] Accessibility audit completed
* [x] GitHub repository updated
* [x] Production URL verified

## Reflection

Building this project taught me that shipping a frontend application requires more than making the interface work. The most important part was bringing together the UI, AI integration, error handling, testing, accessibility, performance, and deployment into one working product.

One of the more challenging parts was making the AI Assistant useful without allowing it to invent portfolio information. Restricting the assistant to portfolio-specific context made the feature more reliable and appropriate for a personal portfolio.

Testing also changed how I approached the project. Instead of only checking the application manually, I added automated tests and verified the application with a coverage report. The final test run passed all seven tests with 100% statement, branch, function, and line coverage.

The accessibility audit was another useful part of the process. Running an automated WCAG 2.1 AA audit provided evidence that the tested interface had no detected accessibility issues.

If I built the project again, I would introduce automated component and end-to-end testing earlier rather than adding testing near the final production stage. I would also spend more time planning the AI architecture before implementing the interface.

The main lesson I learned is that a production-ready application is not simply a working application. It also needs evidence that it can be tested, accessed, deployed, monitored, and maintained reliably.
