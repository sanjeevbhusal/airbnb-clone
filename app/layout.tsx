import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { NavBar } from "./components/navbar/NavBar";
import { RegisterModal } from "./components/modals/RegisterModal";
import { ToastProvider } from "./providers/ToastProvider";
import { LoginModal } from "./components/modals/LoginModal";
import { getCurrentUser } from "./actions/getCurrentUser";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "This is the main layout",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <NavBar user={user} />
        <RegisterModal />
        <LoginModal />
        {children}
      </body>
    </html>
  );
}
