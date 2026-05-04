"use client"; 

import React, { useState } from "react";
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar";
import styles from './layout.module.css';

export default function ClienteLayout({ children }) {
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