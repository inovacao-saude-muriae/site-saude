"use client";

import React, { useState, useEffect } from "react";
import eventosData from "../../data/eventos.json";
import EventosCard from "../../components/EventosCard";
import "../../styles/eventos.css";

export default function Page() {
    const [paginaAtual, setPaginaAtual] = useState(1);
    const eventosPorPagina = 6;

    // ordenar por data (mais recentes primeiro)
    const eventosOrdenados = [...eventosData].sort(
        (a, b) => new Date(b.data) - new Date(a.data)
    );

    // calcular índice inicial e final
    const indiceInicial = (paginaAtual - 1) * eventosPorPagina;
    const indiceFinal = indiceInicial + eventosPorPagina;

    // pegar apenas os eventos da página atual
    const eventosPagina = eventosOrdenados.slice(indiceInicial, indiceFinal);

    // calcular total de páginas
    const totalPaginas = Math.ceil(eventosOrdenados.length / eventosPorPagina);

    // 🔝 sempre voltar ao topo quando muda de página
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [paginaAtual]);

    return (
        <section className="eventos">
            <h2>Eventos</h2>
            <div className="eventosGrid">
                {eventosPagina.map((evento) => (
                <EventosCard key={evento.id} evento={evento} />
                ))}
            </div>

            {/* Navegação de páginas */}
            <div className="paginacao">
                <button onClick={() => setPaginaAtual((prev) => Math.max(prev - 1, 1))} disabled={paginaAtual === 1}> ← Anterior</button>
                <span>Página {paginaAtual} de {totalPaginas}</span>
                <button onClick={() => setPaginaAtual((prev) => Math.min(prev + 1, totalPaginas))} disabled={paginaAtual === totalPaginas} >Próxima →</button>
            </div>
        </section>
    );
}
