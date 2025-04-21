"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";

interface UploadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function UploadDialog({ open, onOpenChange }: UploadDialogProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files) {
      setFiles(Array.from(e.dataTransfer.files));
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleUpload = () => {
    // Mock upload functionality
    console.log("Uploading files:", files);

    // Close dialog and reset state
    setTimeout(() => {
      onOpenChange(false);
      setFiles([]);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload files</DialogTitle>
          <DialogDescription>
            Upload files to your Drive. Files will be added to your current
            folder.
          </DialogDescription>
        </DialogHeader>

        <div
          className={`mt-4 rounded-lg border-2 border-dashed p-6 text-center ${
            isDragging
              ? "border-primary bg-primary/10"
              : "border-muted-foreground/25"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <UploadCloudIcon className="text-muted-foreground mx-auto mb-4 h-10 w-10" />
          <h3 className="mb-1 text-lg font-medium">Drag files here</h3>
          <p className="text-muted-foreground mb-4 text-sm">
            or click to browse
          </p>

          <input
            type="file"
            id="file-upload"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
          <label htmlFor="file-upload">
            <Button variant="outline" className="cursor-pointer" type="button">
              Select files
            </Button>
          </label>
        </div>

        {files.length > 0 && (
          <div className="mt-4">
            <h4 className="mb-2 text-sm font-medium">
              Selected files ({files.length})
            </h4>
            <div className="max-h-40 space-y-2 overflow-y-auto">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="bg-muted flex items-center justify-between rounded-md p-2"
                >
                  <div className="flex items-center gap-2 overflow-hidden">
                    <FileIcon className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate text-sm">{file.name}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={() => removeFile(index)}
                  >
                    <XIcon className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleUpload} disabled={files.length === 0}>
            Upload
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
