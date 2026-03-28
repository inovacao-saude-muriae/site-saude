"use client";

import React from "react";
import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <img src="/descubra.png" alt="Logo Descubra Muriaé" className={styles.logoHeader} />
        </header>
    );
}
