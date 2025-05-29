import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Area | Discover, Book, and Travel Smart",
  description:
    "Plan trips, book stays, and get inspired by real travel stories on Area. The ultimate platform for travelers and explorers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased text-white`}>
        {children}
      </body>
    </html>
  );
}
