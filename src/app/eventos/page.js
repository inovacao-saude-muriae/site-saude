"use client";

import React, { useState, useEffect } from "react";
import eventosData from "../../data/eventos.json";
import EventosCard from "../../components/EventosCard";
import "../../styles/eventos.css";
import { compareIsoDateDesc } from "../../lib/date";

export default function EventosListPage() {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const eventosPorPagina = 6;

  const eventosOrdenados = [...eventosData].sort(
    (a, b) => compareIsoDateDesc(a.data, b.data)
  );

  const indiceInicial = (paginaAtual - 1) * eventosPorPagina;
  const indiceFinal = indiceInicial + eventosPorPagina;
  const eventosPagina = eventosOrdenados.slice(indiceInicial, indiceFinal);
  const totalPaginas = Math.ceil(eventosOrdenados.length / eventosPorPagina);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [paginaAtual]);

  return (
    <main className="eventos-layout-container fade-in">
      <div className="secao-header" style={{ marginBottom: '40px' }}>
        <h2 className="titulo-sessao">Todos os Eventos</h2>
      </div>

      <div className="eventos-grid-global">
        {eventosPagina.map((evento) => (
          <EventosCard key={evento.id} evento={evento} />
        ))}
      </div>

      {totalPaginas > 1 && (
        <div className="paginacao">
          <button
            className="btn-institucional"
            style={{ padding: '8px 20px' }}
            onClick={() => setPaginaAtual((prev) => Math.max(prev - 1, 1))}
            disabled={paginaAtual === 1}
          >
            ← Anterior
          </button>
          <span className="pagina-info">Página <strong>{paginaAtual}</strong> de {totalPaginas}</span>
          <button
            className="btn-institucional"
            style={{ padding: '8px 20px' }}
            onClick={() => setPaginaAtual((prev) => Math.min(prev + 1, totalPaginas))}
            disabled={paginaAtual === totalPaginas}
          >
            Próxima →
          </button>
        </div>
      )}
    </main>
  );
}