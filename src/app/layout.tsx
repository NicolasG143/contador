import type {Metadata} from "next";

import Link from "next/link";

import "./globals.css";

export const metadata: Metadata = {
  title: "contador",
  description: "Hola esto es un contador para jueguitos hola",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-background dark container m-auto grid min-h-screen max-w-[400px] grid-rows-[auto,1fr] overflow-y-scroll font-sans antialiased">
        <header className="px-4 text-xl font-bold leading-[4rem]">
          <Link href="/">contador</Link>
        </header>
        <main className="px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
