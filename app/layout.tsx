import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { NavBar } from "./components/navbar/NavBar";
import { RegisterModal } from "./components/modals/RegisterModal";
import { ToastProvider } from "./providers/ToastProvider";
import { LoginModal } from "./components/modals/LoginModal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "This is the main layout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <NavBar />
        <RegisterModal />
        <LoginModal />
        {children}
      </body>
    </html>
  );
}
