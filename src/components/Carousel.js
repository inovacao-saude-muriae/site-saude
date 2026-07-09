"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./carousel.module.css";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  // Configure aqui as rotas internas das suas páginas (ex: "/editais", "/atendimento", "/saude-digital")
  const slides = [
    { 
      id: 1, 
      content: "Editais", 
      desktopImg: "/img/banner-carousel/banner1.jpg",
      mobileImg: "/img/banner-carousel/banner1.1.jpg",
    },
    { 
      id: 2, 
      content: "Atendimento médico", 
      desktopImg: "/img/banner-carousel/banner2.jpg",
      mobileImg: "/img/banner-carousel/banner2.1.jpg",
    },
    { 
      id: 3, 
      content: "Saúde Digital", 
      desktopImg: "/img/banner-carousel/banner3.jpg",
      mobileImg: "/img/banner-carousel/banner3.1.jpg",
      link: "/digital/app-saude-digital" // Rota interna ajustada
    },
    { 
      id: 4, 
      content: "Saúde Digital", 
      desktopImg: "/img/banner-carousel/banner4.jpg",
      mobileImg: "/img/banner-carousel/banner4.1.jpg",
    },
  ];

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(autoSlide);
  }, [nextSlide]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", position: "absolute" }),
    center: { x: 0, position: "absolute" },
    exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", position: "absolute" }),
  };

  const activeSlide = slides[currentSlide];

  // Elemento de imagem limpo e otimizado
  const imageElement = (
    <>
      <source media="(max-width: 768px)" srcSet={activeSlide.mobileImg} />
      <Image
        src={activeSlide.desktopImg}
        alt={activeSlide.content}
        fill
        priority={currentSlide === 0}
        sizes="(max-width: 768px) 466px, 1920px"
        className={styles.carouselImage}
      />
    </>
  );

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselWrapper}>
        <AnimatePresence custom={direction}>
          <motion.picture
            key={activeSlide.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={styles.pictureWrapper}
          >
            {activeSlide.link ? (
              <Link href={activeSlide.link} className={styles.bannerLink}>
                {imageElement}
              </Link>
            ) : (
              imageElement
            )}
          </motion.picture>
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