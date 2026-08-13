import "./globals.css";

export const metadata = {
  title: "Anchal Wadhwani | Portfolio",
  description: "Anchal Wadhwani's Computer Science portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
