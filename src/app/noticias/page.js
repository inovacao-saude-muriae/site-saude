"use client";

import React, { useState, useEffect } from "react";
import noticiasData from "../../data/noticias.json";
import NoticiasCard from "../../components/NoticiasCard";
import "../../styles/noticias.css";

export default function Noticias() {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const noticiasPorPagina = 6;

  // calcular índice inicial e final
  const indiceInicial = (paginaAtual - 1) * noticiasPorPagina;
  const indiceFinal = indiceInicial + noticiasPorPagina;

  // pegar apenas as notícias da página atual
  const noticiasPagina = noticiasData.slice(indiceInicial, indiceFinal);

  // calcular total de páginas
  const totalPaginas = Math.ceil(noticiasData.length / noticiasPorPagina);

  // 🔝 sempre voltar ao topo quando muda de página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [paginaAtual]);

  return (
    <section className="noticias">
        <h2>Notícias</h2>
        <div className="noticiasGrid">
            {noticiasPagina.map((noticia) => (
            <NoticiasCard key={noticia.id} noticia={noticia} />
            ))}
        </div>

        {/* Navegação de páginas */}
        <div className="paginacao">
            <button onClick={() => setPaginaAtual((prev) => Math.max(prev - 1, 1))} disabled={paginaAtual === 1} > ← Anterior </button>

            <span> Página {paginaAtual} de {totalPaginas}</span>

            <button onClick={() => setPaginaAtual((prev) => Math.min(prev + 1, totalPaginas))}disabled={paginaAtual === totalPaginas}>Próxima →</button>
        </div>
    </section>
  );
}
