"use client";

import Link from "next/link";
import { FileIcon, FolderIcon, MoreVerticalIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import type { FileItem } from "~/lib/mock-data";

interface FileGridProps {
  files: FileItem[];
  navigateToFolder: (folderName: string) => void;
}

export function FileGrid({ files, navigateToFolder }: FileGridProps) {
  if (files.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center py-12">
        <FolderIcon className="text-muted-foreground mb-4 h-12 w-12" />
        <h3 className="text-lg font-medium">This folder is empty</h3>
        <p className="text-muted-foreground text-sm">
          Upload files or create folders to get started
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {files.map((file, index) => (
        <div
          key={index}
          className="group bg-card hover:bg-accent/50 relative flex flex-col items-center rounded-lg border p-4 transition-colors"
        >
          {file.type === "folder" ? (
            <button
              onClick={() => navigateToFolder(file.name)}
              className="flex w-full flex-col items-center text-center"
            >
              <FolderIcon className="mb-2 h-12 w-12 text-amber-500" />
              <span className="line-clamp-2 text-sm font-medium">
                {file.name}
              </span>
            </button>
          ) : (
            <Link
              href={file.url ?? "#"}
              target="_blank"
              className="flex w-full flex-col items-center text-center"
            >
              <FileIcon className="mb-2 h-12 w-12 text-blue-500" />
              <span className="line-clamp-2 text-sm font-medium">
                {file.name}
              </span>
            </Link>
          )}

          <div className="absolute top-2 right-2 opacity-0 transition-opacity group-hover:opacity-100">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVerticalIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Download</DropdownMenuItem>
                <DropdownMenuItem>Share</DropdownMenuItem>
                <DropdownMenuItem>Rename</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="text-muted-foreground mt-2 w-full text-xs">
            {file.modified}
          </div>
        </div>
      ))}
    </div>
  );
}
