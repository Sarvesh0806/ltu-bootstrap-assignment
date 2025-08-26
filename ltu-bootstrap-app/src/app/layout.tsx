import "bootstrap/dist/css/bootstrap.min.css";
import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./globals.css";

export const metadata = {
  title: "LTU Assignment Web App",
  description: "Next.js Bootstrap Web App for LTU Assignment",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <main className="container my-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
