import { summarizerAgent } from "@/agents/summarizerAgent";
import { UIMessage } from "@ai-sdk/react";

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    // 🧠 Get last user message
    const lastMessage = messages?.at(-1);
    if (!lastMessage) {
      return new Response("No message found", { status: 400 });
    }

    // 🧩 Extract text and tone (we sent JSON.stringified)
    let parsed;
    try {
      parsed = JSON.parse(
        lastMessage.parts[0].type === "text" ? lastMessage.parts[0].text : ""
      );
    } catch {
      return new Response("Invalid message format", { status: 400 });
    }

    const { text, tone } = parsed;

    const summary = summarizerAgent.stream({
      prompt: `Please summarize the following text in a ${tone} tone: ${text}`,
    });

    return summary.toUIMessageStreamResponse();
  } catch (error) {
    return new Response("Error generating summary", { status: 500 });
  }
}
