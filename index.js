import { config } from "dotenv";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

import { PromptTemplate } from "@langchain/core/prompts";

config();

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",
  apiKey: process.env.GEMINI_API_KEY,
});

const promptTemplate = PromptTemplate.fromTemplate(`

 explain {topic} in very simple way like ELI5
  make sure to include all relevant details and avoid jargon
  make sure to explain things step by step
  `);

promptTemplate
  .pipe(model)
  .invoke({ topic: "express" })
  .then((response) => {
    console.log(response.content);
  });
