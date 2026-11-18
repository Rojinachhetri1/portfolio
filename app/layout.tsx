import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rojina Chhetri | BCA Student & Aspiring Developer",
  description:
    "The portfolio of Rojina Chhetri, a BCA student and aspiring software developer from Nepal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
