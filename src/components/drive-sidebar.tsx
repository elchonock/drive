import { Button } from "~/components/ui/button"
import { HardDriveIcon, ImageIcon, PlusIcon, ShareIcon, StarIcon, TrashIcon } from "lucide-react"

export function DriveSidebar() {
  return (
    <div className="hidden md:flex h-full w-60 flex-col border-r bg-background p-4">
      <div className="flex items-center gap-2 px-2 mb-6">
        <HardDriveIcon className="h-6 w-6 text-blue-500" />
        <span className="text-xl font-semibold">Drive</span>
      </div>

      <Button className="justify-start mb-6" size="sm">
        <PlusIcon className="mr-2 h-4 w-4" />
        New
      </Button>

      <div className="space-y-1">
        <Button variant="ghost" className="w-full justify-start" size="sm">
          <HardDriveIcon className="mr-2 h-4 w-4" />
          My Drive
        </Button>
        <Button variant="ghost" className="w-full justify-start" size="sm">
          <ShareIcon className="mr-2 h-4 w-4" />
          Shared with me
        </Button>
        <Button variant="ghost" className="w-full justify-start" size="sm">
          <StarIcon className="mr-2 h-4 w-4" />
          Starred
        </Button>
        <Button variant="ghost" className="w-full justify-start" size="sm">
          <ImageIcon className="mr-2 h-4 w-4" />
          Images
        </Button>
        <Button variant="ghost" className="w-full justify-start" size="sm">
          <TrashIcon className="mr-2 h-4 w-4" />
          Trash
        </Button>
      </div>

      <div className="mt-auto text-xs text-muted-foreground">
        <div className="mb-2">Storage: 5.4 GB of 15 GB used</div>
        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
          <div className="h-full w-[36%] rounded-full bg-blue-500"></div>
        </div>
      </div>
    </div>
  )
}
