import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientLayout from "./ClientLayout"; // Importe o novo componente
import styles from './layout.module.css';
import "./globals.css";
import ScrollToTop from "./ScrollToTop";

// A metadata agora funciona porque este é um Server Component!
export const metadata = {
  title: "Secretaria Municipal de Saúde de Muriaé - MG",
  description: "Portal da Secretaria Municipal de Saúde de Muriaé - MG...",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico" },
    ],
    shortcut: "/favicon/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body>
        <ScrollToTop />
        <div className={styles.layout}>
          <Header />
          
          {/* O ClientLayout cuida da interatividade do menu */}
          <ClientLayout>
            {children}
          </ClientLayout>

          <Footer />
        </div>
      </body>
    </html>
  );
}