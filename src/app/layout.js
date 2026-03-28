"use client";

import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner"
import Sidebar from "../components/Sidebar";

import styles from './layout.module.css';
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
          <div className={styles.layout}>
              <Header />
              <Banner />

              <div className={styles.layoutBody}>
                  <Sidebar />   
                  <main className={styles.layoutContent}>
                    {children}
                  </main>
            </div>
          </div>
      </body>
    </html>
  );
}
