"use client";

import { useSearchParams } from "next/navigation";

export default function ResultPage() {
  const searchParams = useSearchParams();
  const output = searchParams.get("output");

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <div className="max-w-xl w-full space-y-6 text-center">
        <h1 className="text-3xl font-bold text-primary">AI Enriched Aircraft Design</h1>

        {output ? (
          <div className="p-4 border rounded-lg bg-background text-primary text-left space-y-2">
            <h3 className="font-semibold">Model Output:</h3>
            <p className="text-sm">{output}</p>
          </div>
        ) : (
          <p className="text-muted-foreground">No output provided. Please upload a design file first.</p>
        )}

        <a href="/" className="text-primary underline text-sm hover:text-primary/80">
          Go Back to Home
        </a>
      </div>
    </div>
  );
}
