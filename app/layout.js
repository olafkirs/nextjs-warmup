import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Next.js Warm-up",
  description: "Kodutöö",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}