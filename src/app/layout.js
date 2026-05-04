import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import clientLayout from "./clienteLayout"; // Use o arquivo que você já tem
import styles from './layout.module.css';
import "./globals.css";
import ScrollToTop from "./ScrollToTop";

export const metadata = {
  title: "Secretaria Municipal de Saúde de Muriaé - MG",
  description: `
    Portal da Secretaria Municipal de Saúde de Muriaé - MG.
    Informações sobre serviços, campanhas, notícias e 
      eventos relacionados à saúde pública na cidade e região.
    Acesse para ficar atualizado sobre as ações e iniciativas da 
    Secretaria Municipal de Saúde.
  `,
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
          
          {/* O seu ClienteLayout entra aqui abraçando o conteúdo dinâmico */}
          <clientLayout>
            {children}
          </clientLayout>

          <Footer />
        </div>
      </body>
    </html>
  );
}