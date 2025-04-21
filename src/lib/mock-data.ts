export interface FileItem {
  name: string;
  type: "file" | "folder";
  modified: string;
  size?: string;
  url?: string;
  children?: FileItem[];
}

export const mockData: FileItem[] = [
  {
    name: "Documents",
    type: "folder",
    modified: "Apr 15, 2023",
    children: [
      {
        name: "Project Proposal.docx",
        type: "file",
        modified: "Apr 14, 2023",
        size: "2.3 MB",
        url: "#",
      },
      {
        name: "Budget 2023.xlsx",
        type: "file",
        modified: "Apr 12, 2023",
        size: "1.7 MB",
        url: "#",
      },
      {
        name: "Meeting Notes",
        type: "folder",
        modified: "Apr 10, 2023",
        children: [
          {
            name: "Q1 Review.docx",
            type: "file",
            modified: "Apr 9, 2023",
            size: "1.2 MB",
            url: "#",
          },
          {
            name: "Team Sync.docx",
            type: "file",
            modified: "Apr 8, 2023",
            size: "0.9 MB",
            url: "#",
          },
        ],
      },
    ],
  },
  {
    name: "Images",
    type: "folder",
    modified: "Apr 13, 2023",
    children: [
      {
        name: "profile.jpg",
        type: "file",
        modified: "Apr 12, 2023",
        size: "3.2 MB",
        url: "#",
      },
      {
        name: "banner.png",
        type: "file",
        modified: "Apr 11, 2023",
        size: "2.1 MB",
        url: "#",
      },
      {
        name: "screenshot.png",
        type: "file",
        modified: "Apr 10, 2023",
        size: "1.5 MB",
        url: "#",
      },
    ],
  },
  {
    name: "Project Plan.pdf",
    type: "file",
    modified: "Apr 12, 2023",
    size: "4.2 MB",
    url: "#",
  },
  {
    name: "Presentation.pptx",
    type: "file",
    modified: "Apr 11, 2023",
    size: "6.7 MB",
    url: "#",
  },
  {
    name: "Budget.xlsx",
    type: "file",
    modified: "Apr 10, 2023",
    size: "1.2 MB",
    url: "#",
  },
  {
    name: "Report.docx",
    type: "file",
    modified: "Apr 9, 2023",
    size: "2.5 MB",
    url: "#",
  },
  {
    name: "Videos",
    type: "folder",
    modified: "Apr 8, 2023",
    children: [
      {
        name: "demo.mp4",
        type: "file",
        modified: "Apr 7, 2023",
        size: "24.5 MB",
        url: "#",
      },
      {
        name: "tutorial.mp4",
        type: "file",
        modified: "Apr 6, 2023",
        size: "18.3 MB",
        url: "#",
      },
    ],
  },
];
