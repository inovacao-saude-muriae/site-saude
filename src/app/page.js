"use client";

import React, { useState, useEffect, useCallback } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import noticiasData from "../data/noticias.json";
import CardNoticia from "../components/NoticiasCard";

import styles from "./page.module.css";

    export default function Home() {
        const noticiasOrdenadas = [...noticiasData].sort( (a, b) => new Date(b.data_publicacao) - new Date(a.data_publicacao)
    );

    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(1);

    const slides = [
        { id: 1, content: "Editais", imgSrc: "/img/banner-carousel/banner1.jpg" },
        { id: 2, content: "Atendimento médico", imgSrc: "/img/banner-carousel/banner2.jpg" },
        { id: 3, content: "Equipe de saúde", imgSrc: "/img/banner-carousel/banner3.jpg" },
    ];

    const nextSlide = useCallback(() => {setDirection(1); setCurrentSlide((prev) => (prev + 1) % slides.length);}, [slides.length]);

    const prevSlide = useCallback(() => {setDirection(-1); setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);}, [slides.length]);

    useEffect(() => {
        const autoSlide = setInterval(() => { nextSlide();}, 5000);
            return () => clearInterval(autoSlide);}, [nextSlide]);

    const variants = { enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", position: "absolute",}),center: { x: 0, position: "absolute" },
        exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%",position: "absolute",
    }),
};

    return (
        <section className={styles.container}>
            {/* Carrossel */}
            <div className={styles.carousel}>
                <div className={styles.carouselWrapper}>
                    <AnimatePresence custom={direction}>
                        <motion.img 
                        key={slides[currentSlide].id}
                        src={slides[currentSlide].imgSrc}
                        alt={slides[currentSlide].content}
                        className={styles.carouselImage}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                    </AnimatePresence>
                </div>

                <FiChevronLeft className={styles.arrowLeft} onClick={prevSlide} />
                <FiChevronRight className={styles.arrowRight} onClick={nextSlide} />

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

            {/* Notícias */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Notícias</h3>
                <div className={styles.noticiasGrid}>
                    {noticiasOrdenadas.slice(0, 6).map((noticia) => (
                        <CardNoticia key={noticia.id} noticia={noticia} size="small" />
                    ))}
                </div>
                <div className={styles.center}>
                    <Link href="/noticias" className={styles.buttonBlue}>
                        Ver mais notícias
                    </Link>
                </div>
            </div>
        </section>
    );
}
