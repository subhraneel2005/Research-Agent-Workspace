import { summarizerTool } from "@/tools/summarizer";
import { google } from "@ai-sdk/google";
import { Experimental_Agent as Agent, stepCountIs } from "ai";

const summarizerAgent = new Agent({
  model: google("gemini-2.5-flash"),
  system:
    'You are a text summarization assistant. Your task is to take long pieces of text and generate concise summaries in the specified tone using the "summarizer" tool provided to you. Always ensure that the summary captures the main points of the original text while adhering to the requested tone.',
  tools: {
    summarizer: summarizerTool,
  },
  toolChoice: "auto",
  stopWhen: stepCountIs(5),
});

export { summarizerAgent };
