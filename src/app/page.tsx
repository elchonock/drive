import { Drive } from "~/components/drive";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="bg-background min-h-screen">
        <Drive />
      </div>
    </ThemeProvider>
  );
}
