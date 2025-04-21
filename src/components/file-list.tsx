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

interface FileListProps {
  files: FileItem[];
  navigateToFolder: (folderName: string) => void;
}

export function FileList({ files, navigateToFolder }: FileListProps) {
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
    <div className="w-full overflow-hidden rounded-lg border">
      <div className="bg-muted/50 grid grid-cols-12 gap-4 p-3 text-sm font-medium">
        <div className="col-span-6">Name</div>
        <div className="col-span-3">Modified</div>
        <div className="col-span-2">Size</div>
        <div className="col-span-1"></div>
      </div>

      {files.map((file, index) => (
        <div
          key={index}
          className="group hover:bg-accent/50 grid grid-cols-12 items-center gap-4 border-t p-3 transition-colors"
        >
          <div className="col-span-6 flex items-center gap-3">
            {file.type === "folder" ? (
              <>
                <FolderIcon className="h-5 w-5 flex-shrink-0 text-amber-500" />
                <button
                  onClick={() => navigateToFolder(file.name)}
                  className="text-left font-medium hover:underline"
                >
                  {file.name}
                </button>
              </>
            ) : (
              <>
                <FileIcon className="h-5 w-5 flex-shrink-0 text-blue-500" />
                <Link
                  href={file.url ?? "#"}
                  target="_blank"
                  className="text-left font-medium hover:underline"
                >
                  {file.name}
                </Link>
              </>
            )}
          </div>

          <div className="text-muted-foreground col-span-3 text-sm">
            {file.modified}
          </div>

          <div className="text-muted-foreground col-span-2 text-sm">
            {file.size ?? "--"}
          </div>

          <div className="col-span-1 text-right">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 opacity-0 group-hover:opacity-100"
                >
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
        </div>
      ))}
    </div>
  );
}
