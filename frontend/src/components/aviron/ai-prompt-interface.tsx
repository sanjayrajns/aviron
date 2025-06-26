"use client";

import React, { useState } from "react";
import { Mic, Search, Settings, Sparkles, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { FileUpload } from "./file-upload";
import { sendFileToML } from "@/ai/flows/mlApi";
import { useRouter } from "next/navigation";

export const AIPromptInterface = () => {
  const [prompt, setPrompt] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [deepResearch, setDeepResearch] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGenerate = () => {
    if (!selectedFile) {
      alert("Please upload a design file first.");
      return;
    }

    setLoading(true);

    sendFileToML(selectedFile)
      .then((res) => {
        router.push(`/result?output=${encodeURIComponent(res.prediction)}`);
      })
      .catch(() => {
        alert("Error connecting to AI model.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-6">
      <Card className="bg-card border-primary/20 backdrop-blur-lg">
        <div className="p-6">
          <h3 className="text-xl font-semibold font-headline text-foreground mb-4">
            Design Your Aircraft
          </h3>

          <div className="relative mb-4">
            <Input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your aircraft design requirements..."
              className="bg-background/50 border-primary/30 text-foreground placeholder:text-muted-foreground pr-12 h-12"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setIsRecording(!isRecording)}
                className={cn(
                  "h-9 w-9",
                  isRecording
                    ? "text-red-500 hover:bg-red-500/10 hover:text-red-500"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Mic className="w-4 h-4" />
                <span className="sr-only">Record prompt</span>
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-4">
            <Button
              size="sm"
              variant={deepResearch ? "default" : "outline"}
              onClick={() => setDeepResearch(!deepResearch)}
              className="text-xs border-primary/30"
            >
              <Search className="w-3 h-3 mr-1" />
              Deep Research
            </Button>
            <Button size="sm" variant="outline" className="text-xs border-primary/30">
              <Settings className="w-3 h-3 mr-1" />
              Parameters
            </Button>
            <Button size="sm" variant="outline" className="text-xs border-primary/30">
              <Globe className="w-3 h-3 mr-1" />
              Set Sources
            </Button>
          </div>

          <FileUpload
            onChange={(files) => {
              if (files.length > 0) {
                setSelectedFile(files[0]);
              }
            }}
          />

          <Button
            size="lg"
            className="w-full mt-4"
            onClick={handleGenerate}
            disabled={loading}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            {loading ? "Generating..." : "Generate Aircraft Design"}
          </Button>
        </div>
      </Card>
    </div>
  );
};
