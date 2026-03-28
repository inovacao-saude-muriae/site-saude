"use client";

import React, { useState, useEffect } from "react"; // importa useEffect junto
import { useParams } from "next/navigation";
import Link from "next/link";
import eventosData from "../../../data/eventos.json";
import "../../../styles/eventosDetalhes.css";

// Import Swiper + módulos
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function EventosDetalhes() {
    const params = useParams();
    const evento = eventosData.find((e) => e.id.toString() === params.id);

    const [fotoSelecionadaIndex, setFotoSelecionadaIndex] = useState(null);

    // 🔝 Sempre voltar ao topo ao carregar a página
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!evento) return <p>Evento não encontrado</p>;

    const fecharModal = () => setFotoSelecionadaIndex(null);
    const fotoSelecionada =
        fotoSelecionadaIndex !== null ? evento.galeria[fotoSelecionadaIndex] : null;

    const fotoAnterior = () => {
        setFotoSelecionadaIndex((prev) =>
        prev > 0 ? prev - 1 : evento.galeria.length - 1
        );
    };

    const proximaFoto = () => {
        setFotoSelecionadaIndex((prev) =>
        prev < evento.galeria.length - 1 ? prev + 1 : 0
        );
    };

    return (
        <article className="evento-detalhe">
            <img src={evento.imgSrc} alt={evento.titulo} className="evento-banner" />
            <h2>{evento.titulo}</h2>
            <span className="evento-data">
                {new Date(evento.data).toLocaleDateString("pt-BR")}
            </span>
            <p>{evento.descricao}</p>

            {/* Carousel de fotos */}
            {evento.galeria && evento.galeria.length > 0 && (
                <div className="evento-galeria">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                >
                    {evento.galeria.map((foto, index) => (
                    <SwiperSlide key={index}>
                        <img
                        src={foto}
                        alt={`${evento.titulo} foto ${index + 1}`}
                        className="evento-galeria-foto"
                        onClick={() => setFotoSelecionadaIndex(index)}
                        />
                    </SwiperSlide>
                    ))}
                </Swiper>
                </div>
            )}

            {/* Modal para ampliar foto */}
            {fotoSelecionada && (
                <div className="modal">
                    <button className="modal-close" onClick={fecharModal}>
                        ✕
                    </button>
                    <button className="modal-prev" onClick={fotoAnterior}>
                        ❮
                    </button>
                    <div className="modal-content">
                        <img src={fotoSelecionada} alt="Foto ampliada" />
                    </div>
                    <button className="modal-next" onClick={proximaFoto}>
                        ❯
                    </button>
                </div>
            )}

            <Link href="/eventos" className="voltar">
                ← Voltar para Eventos
            </Link>
        </article>
    );
}
