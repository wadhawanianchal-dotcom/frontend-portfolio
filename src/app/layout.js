import "./globals.css";

export const metadata = {
  title: "Anchal Wadhwani | Portfolio",
  description: "Frontend AI Engineering Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}