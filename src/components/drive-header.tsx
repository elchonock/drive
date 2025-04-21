"use client"

import { ChevronRightIcon, HomeIcon } from "lucide-react"
import { Button } from "~/components/ui/button"
import { ThemeToggle } from "~/components/theme-toggle"

interface DriveHeaderProps {
  currentPath: string[]
  navigateUp: () => void
  navigateToPathIndex: (index: number) => void
}

export function DriveHeader({ currentPath, navigateUp, navigateToPathIndex }: DriveHeaderProps) {
  return (
    <div className="flex items-center justify-between h-14 px-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" onClick={() => navigateToPathIndex(-1)} disabled={currentPath.length === 0}>
          <HomeIcon className="h-4 w-4" />
        </Button>

        <nav className="flex items-center ml-2">
          <ol className="flex items-center">
            <li>
              <Button variant="ghost" className="font-medium h-8 px-2" onClick={() => navigateToPathIndex(-1)}>
                My Drive
              </Button>
            </li>

            {currentPath.map((folder, index) => (
              <li key={index} className="flex items-center">
                <ChevronRightIcon className="h-4 w-4 mx-1 text-muted-foreground" />
                <Button variant="ghost" className="font-medium h-8 px-2" onClick={() => navigateToPathIndex(index)}>
                  {folder}
                </Button>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <ThemeToggle />
    </div>
  )
}
