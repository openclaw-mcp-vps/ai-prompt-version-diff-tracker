import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PromptDiff — Visual diffs for AI prompt iterations",
  description: "Track prompt versions, compare changes side-by-side, and measure performance impact. Built for AI product teams and prompt engineers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1a33d08e-b78a-4c36-a68e-a860ec992347"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
