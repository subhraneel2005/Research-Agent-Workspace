import React from "react";
import WebSearchNode from "../WebSearchNode";
import toolsData from "@/utils/toolsData";

export default function WebSearchScreen() {
  return (
    <div className="min-h-screen w-full justify-center items-center flex">
      <WebSearchNode data={toolsData[0]} />
    </div>
  );
}
