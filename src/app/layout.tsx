import type { Metadata } from "next";
import "./globals.css";
import {ToastContainer} from "react-toastify";

export const metadata: Metadata = {
  title: "GymBCS",
  description: "Interview app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {children}
        <ToastContainer/>
      </body>
    </html>
  );
}
