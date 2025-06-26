"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";

export const FileUpload = ({
  onChange,
}: {
  onChange?: (files: File[]) => void;
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (newFiles: FileList) => {
    const fileArray = Array.from(newFiles);
    setFiles(fileArray);

    if (onChange) {
      onChange(fileArray);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full space-y-4">
      <motion.div
        onClick={handleClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="p-6 group block rounded-lg cursor-pointer w-full relative overflow-hidden border-2 border-dashed border-primary/30 bg-background/50 hover:border-primary/50 transition-colors"
      >
        <input
          ref={fileInputRef}
          type="file"
          onChange={(e) => handleFileChange(e.target.files!)}
          className="hidden"
          multiple={false}
        />
        <div className="flex flex-col items-center justify-center">
          <Upload className="w-8 h-8 text-primary mb-2" />
          <p className="text-sm font-medium text-primary">
            Upload Aircraft Design Files
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            CAD, blueprints, or reference images
          </p>
        </div>
      </motion.div>

      {files.length > 0 && (
        <div className="p-3 border rounded-lg bg-background text-primary">
          <p className="text-sm font-medium">Selected File:</p>
          <p className="text-xs text-muted-foreground">{files[0].name}</p>
        </div>
      )}
    </div>
  );
};
