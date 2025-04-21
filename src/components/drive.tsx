"use client"

import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { Grid3X3Icon, ListIcon, SearchIcon, UploadCloudIcon } from "lucide-react"
import { DriveHeader } from "~/components/drive-header"
import { DriveSidebar } from "~/components/drive-sidebar"
import { FileGrid } from "~/components/file-grid"
import { FileList } from "~/components/file-list"
import { UploadDialog } from "~/components/upload-dialog"
import { mockData, type FileItem } from "~/lib/mock-data"

export function Drive() {
  const [currentPath, setCurrentPath] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [isUploadOpen, setIsUploadOpen] = useState(false)

  // Get current folder data based on path
  const getCurrentFolderData = (): FileItem[] => {
    let current = mockData

    for (const folder of currentPath) {
      const foundFolder = current.find((item) => item.type === "folder" && item.name === folder)
      if (foundFolder && foundFolder.type === "folder" && foundFolder.children) {
        current = foundFolder.children
      } else {
        return []
      }
    }

    return current
  }

  const currentData = getCurrentFolderData()

  // Filter data based on search query
  const filteredData = searchQuery
    ? currentData.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : currentData

  // Navigate to a folder
  const navigateToFolder = (folderName: string) => {
    setCurrentPath([...currentPath, folderName])
  }

  // Navigate up one level
  const navigateUp = () => {
    if (currentPath.length > 0) {
      setCurrentPath(currentPath.slice(0, -1))
    }
  }

  // Navigate to specific path index
  const navigateToPathIndex = (index: number) => {
    setCurrentPath(currentPath.slice(0, index + 1))
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <DriveSidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <DriveHeader currentPath={currentPath} navigateUp={navigateUp} navigateToPathIndex={navigateToPathIndex} />

        <div className="flex items-center justify-between p-4 border-b">
          <div className="relative w-full max-w-sm">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search in Drive"
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <Tabs defaultValue={viewMode} onValueChange={(value) => setViewMode(value as "grid" | "list")}>
              <TabsList className="grid w-16 grid-cols-2">
                <TabsTrigger value="grid" className="p-2">
                  <Grid3X3Icon className="h-4 w-4" />
                </TabsTrigger>
                <TabsTrigger value="list" className="p-2">
                  <ListIcon className="h-4 w-4" />
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <Button onClick={() => setIsUploadOpen(true)}>
              <UploadCloudIcon className="mr-2 h-4 w-4" />
              Upload
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-4">
          {viewMode === "grid" ? (
            <FileGrid files={filteredData} navigateToFolder={navigateToFolder} />
          ) : (
            <FileList files={filteredData} navigateToFolder={navigateToFolder} />
          )}
        </div>
      </div>

      <UploadDialog open={isUploadOpen} onOpenChange={setIsUploadOpen} />
    </div>
  )
}
