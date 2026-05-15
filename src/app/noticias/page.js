"use client";

import React, { useState, useEffect } from "react";
import noticiasData from "../../data/noticias.json";
import NoticiasCard from "../../components/NoticiasCard";
import "../../styles/noticias.css";

export default function NoticiasListPage() {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const noticiasPorPagina = 6;

  // Cálculo da paginação
  const indiceInicial = (paginaAtual - 1) * noticiasPorPagina;
  const indiceFinal = indiceInicial + noticiasPorPagina;
  
  // Ordenar as notícias por data (mais recente primeiro) antes de paginar
  const noticiasOrdenadas = [...noticiasData].sort((a, b) => {
    return new Date(b.data_publicacao) - new Date(a.data_publicacao);
  });

  const noticiasPagina = noticiasOrdenadas.slice(indiceInicial, indiceFinal);
  const totalPaginas = Math.ceil(noticiasData.length / noticiasPorPagina);

  // Voltar ao topo quando trocar de página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [paginaAtual]);

  return (
    <main className="noticias-layout-container fade-in">
      <div className="secao-header" style={{ marginBottom: '40px' }}>
        <h2 className="titulo-sessao">Notícias</h2>
      </div>

      {/* Aqui está o segredo: usamos a classe "noticias-grid-global" 
          que é a mesma usada na Home para garantir o visual idêntico.
      */}
      <div className="noticias-grid-global">
        {noticiasPagina.map((noticia) => (
          <NoticiasCard key={noticia.id} noticia={noticia} />
        ))}
      </div>

      {/* Navegação de páginas */}
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

          <span className="pagina-info">
            Página <strong>{paginaAtual}</strong> de {totalPaginas}
          </span>

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