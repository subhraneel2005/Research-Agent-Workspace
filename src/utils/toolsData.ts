const toolsData = [
  {
    name: "Web Search Agent",
    description: "Searches relevant research papers.",
    type: "webSearchNode",
    href: "/tools/webSearch",
    defaultData: {
      label: "Web Search Agent",
      description: "Searches the web for information",
      query: "",
      sources: [],
    },
  },
  {
    name: "Chat with PDF Agent",
    description: "Chat with your uploaded PDFs.",
    type: "pdfNode",
    href: "/tools/chatWithPDF",
    defaultData: {
      label: "Chat with PDF Agent",
      description: "Chat with your uploaded PDFs",
    },
  },
  {
    name: "Summarizer Agent",
    description: "Summarizes long text or documents.",
    type: "summaryNode",
    href: "/tools/summarizer",
    defaultData: {
      label: "Summarizer Agent",
      description: "Summarizes long text or documents",
    },
  },
  {
    name: "Flashcards Agent",
    description: "Generates study flashcards automatically.",
    type: "agentNode",
    href: "/tools/flashcards",
    defaultData: {
      label: "Flashcards Generator Agent",
      description: "Generates study flashcards automatically",
    },
  },
  {
    name: "Save Notes Agent",
    description: "Saves notes to Notion or exports as PDF.",
    type: "agentNode",
    href: "/tools/saveNotes",
    defaultData: {
      label: "Save Notes Agent",
      description: "Saves notes to Notion or exports as PDF",
    },
  },
];

export default toolsData;
