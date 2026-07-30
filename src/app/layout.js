import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Frontend Portfolio",
  description: "Frontend AI Engineering Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-blue-600 text-white p-4">
          <div className="max-w-6xl mx-auto flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/health">Health</Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}