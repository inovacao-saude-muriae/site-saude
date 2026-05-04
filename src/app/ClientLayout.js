"use client";

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Banner from "../components/Banner";
import styles from './layout.module.css';

export default function ClientLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button 
        className="hamburger-mobile-bar" 
        onClick={() => setIsMenuOpen(true)}
      >
        ☰
      </button>

      <Banner />

      <div className={styles.layoutBody}>
        <Sidebar open={isMenuOpen} setOpen={setIsMenuOpen} />
        <main className={styles.layoutContent}>
          {children}
        </main>
      </div>
    </>
  );
}