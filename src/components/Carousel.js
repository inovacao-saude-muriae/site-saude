"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./carousel.module.css";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = [
    {
      id: 1,
      content: "Julho Amarelo",
      desktopImg: "/img/banner-carousel/banner1-desktop.jpg",
      mobileImg: "/img/banner-carousel/banner1-mobile.jpg",
    },
    {
      id: 2,
      content: "Vacinação INFLUENZA",
      desktopImg: "/img/banner-carousel/banner2-desktop.jpg",
      mobileImg: "/img/banner-carousel/banner2-mobile.jpg",
    },
    {
      id: 3,
      content: "Saúde Digital",
      desktopImg: "/img/banner-carousel/banner3-desktop.jpg",
      mobileImg: "/img/banner-carousel/banner3-mobile.jpg",
      link: "/digital/app-saude-digital",
    },
    {
      id: 4,
      content: "Saúde do coração",
      desktopImg: "/img/banner-carousel/banner4-desktop.jpg",
      mobileImg: "/img/banner-carousel/banner4-mobile.jpg",
    },
  ];

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 5000);

    return () => clearInterval(autoSlide);
  }, [nextSlide]);

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      zIndex: 2,
    }),
    center: {
      x: 0,
      zIndex: 2,
    },
    exit: (dir) => ({
      x: dir > 0 ? "-100%" : "100%",
      zIndex: 1,
    }),
  };

  const activeSlide = slides[currentSlide];

  const banner = (
  <motion.div
    key={activeSlide.id}
    custom={direction}
    variants={variants}
    initial="enter"
    animate="center"
    exit="exit"
    transition={{
      x: {
        duration: 0.8,
        ease: "easeInOut",
      },
    }}
    className={styles.pictureWrapper}
  >
    <Image
      src={isMobile ? activeSlide.mobileImg : activeSlide.desktopImg}
      alt={activeSlide.content}
      fill
      priority={currentSlide === 0}
      sizes="100vw"
      className={styles.carouselImage}
    />
  </motion.div>
);

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselWrapper}>
        <AnimatePresence initial={false} custom={direction}>
          {activeSlide.link ? (
            <Link
              href={activeSlide.link}
              className={styles.bannerLink}
              key={activeSlide.id}
            >
              {banner}
            </Link>
          ) : (
            banner
          )}
        </AnimatePresence>
      </div>

      <div className={styles.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`${styles.dot} ${
              currentSlide === index ? styles.activeDot : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}