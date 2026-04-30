"use client"; // Necessário para gerenciar o estado do menu

import React, { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import styles from './layout.module.css';
import "./globals.css";
import ScrollToTop from "./ScrollToTop";

// Nota: Em Next.js App Router, se usar "use client", 
// a metadata deve ser exportada de um arquivo separado ou layout de servidor.
// Mas para fins de funcionalidade, manteremos a lógica aqui:

export default function RootLayout({ children }) {
  // Estado que controla se a Sidebar está aberta ou fechada
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body>
        <ScrollToTop />
        <div className={styles.layout}>
          <Header />

          {/* ESTE É O BOTÃO MOBILE:
            Ele fica fisicamente entre o Header e o Banner. 
            No CSS, garantimos que ele ocupe 100% da largura.
          */}
          <button 
            className="hamburger-mobile-bar" 
            onClick={() => setIsMenuOpen(true)}
          >
            ☰
          </button>

          <Banner />

          <div className={styles.layoutBody}>
            {/* Passamos o estado 'isMenuOpen' e a função para fechar 'setIsMenuOpen' 
               via props para dentro da Sidebar 
            */}
            <Sidebar open={isMenuOpen} setOpen={setIsMenuOpen} />
            
            <main className={styles.layoutContent}>
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}