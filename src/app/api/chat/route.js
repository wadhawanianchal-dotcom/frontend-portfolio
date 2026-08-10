import { generateText } from "ai";
import { google } from "@ai-sdk/google";

const portfolioContext = `
You are an AI portfolio assistant for Anchal Wadhwani.

Only answer questions using the portfolio information below.
If the user asks for information not available here, honestly say:
"I don't have that information in Anchal's portfolio yet."

About Anchal:

- BS Computer Science student
- Frontend AI Engineering Intern at FlyRank
- Skills include C, Java, SQL, JavaScript, HTML, CSS, and MySQL
- Interested in frontend development and AI-assisted development

Projects:

- Airline Resource Allocation System
- Salon Management System
- Hospital Management System
- Transport System in C
- Ultimate Fashion project

Answer clearly, professionally, and briefly.
Do not invent experience, skills, projects, experience, or personal information.
`;

export async function POST(request) {
  try {
    const body = await request.json();
    const message = body.message?.trim();

    if (!message) {
      return Response.json(
        { error: "Please enter a question." },
        { status: 400 }
      );
    }
const { text } = await generateText({
  model: google("gemini-flash-latest"),
  prompt: `${portfolioContext}


Visitor question: ${message}`,
    });

    return Response.json({ answer: text });
  } catch (error) {
    console.error("AI error:", error);

    return Response.json(
      {
        error:
          "The AI assistant is temporarily unavailable. Please try again.",
      },
      { status: 500 }
    );
  }
}