import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar/Sidebar";
import GolbalStylesProvider from "./providers/GolbalStylesProvider";
import ContextProvider from "./providers/ContextProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <GolbalStylesProvider>
            <Sidebar />
            {children}
          </GolbalStylesProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
