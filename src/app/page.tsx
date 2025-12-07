import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Security } from "@/components/Security";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-bold tracking-[-2.5px]">
        Learn faster with AI
      </h1>
      <p className="mt-4 text-md max-w-2xl text-center text-muted-foreground">
        This is an AI powered learning platform with built in tools like Chat
        with pdf, web search, flashcards, summarizer and more to help you learn
        faster and retain more information.
      </p>

      <div className="flex gap-4 justify-center items-center mt-6">
        <Button>Get Started</Button>
        <Button variant="outline">Signup</Button>
      </div>
    </main>
  );
}
