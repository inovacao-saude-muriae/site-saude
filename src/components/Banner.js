import React from "react";
import styles from './banner.module.css';

export default function Banner() {
    return (
        <section className={styles.Banner}>
            <img src="/banner.jpeg" alt="Banner" className="banner-img" />
        </section>
  );
}