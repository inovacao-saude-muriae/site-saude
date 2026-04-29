"use client";
import React, { useEffect, useState } from "react";
import styles from "./banner.module.css";
import Image from "next/image";

export default function Banner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className={styles.banner}>
      {isMobile ? (
        <Image
          src="/img/banner-mobile.png"
          alt="Banner Mobile"
          width={800}
          height={600}
          className={styles.bannerImg}
        />
      ) : (
        <Image
          src="/img/banner-desktop.png"
          alt="Banner Desktop"
          width={1920}
          height={1080}
          loading="eager"
          priority
          className={styles.bannerImg}
        />
      )}
    </section>
  );
}
