"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "../../../styles/oncologia.css";

export default function OncologiaPage() {
  const [zoomImage, setZoomImage] = useState(null);
  const [zoomScale, setZoomScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const viewportRef = useRef(null);

  // Trava o scroll do fundo quando o modal abre
  useEffect(() => {
    document.body.style.overflow = zoomImage ? "hidden" : "auto";
  }, [zoomImage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fecharModal = () => {
    setZoomImage(null);
    setZoomScale(1);
  };

  const aumentarZoom = () => setZoomScale((prev) => Math.min(prev + 0.1, 5));
  const diminuirZoom = () => setZoomScale((prev) => Math.max(prev - 0.1, 1));

  // Lógica de clicar e arrastar (Drag)
  const handleMouseDown = (e) => {
    if (zoomScale <= 1) return;
    setIsDragging(true);
    setStartX(e.pageX - viewportRef.current.offsetLeft);
    setStartY(e.pageY - viewportRef.current.offsetTop);
    setScrollLeft(viewportRef.current.scrollLeft);
    setScrollTop(viewportRef.current.scrollTop);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - viewportRef.current.offsetLeft;
    const y = e.pageY - viewportRef.current.offsetTop;
    const walkX = (x - startX) * 1.5;
    const walkY = (y - startY) * 1.5;
    viewportRef.current.scrollLeft = scrollLeft - walkX;
    viewportRef.current.scrollTop = scrollTop - walkY;
  };

  const stopDragging = () => setIsDragging(false);

  return (
    <main className="oncologia-layout">
      <div className="page-wrapper">
        <section className="oncologia-page">
          <h2 className="titulo-sessao">Oncologia</h2>

          <div className="oncologia-display fade-in">
            <div className="card-explicativo">
              <h3>Atendimento Oncológico com Responsabilidade</h3>
              <p>
                A linha de cuidados da oncologia foi criada para garantir que pessoas com suspeita 
                ou diagnóstico de câncer recebam atendimento rápido e de qualidade. A 
                <strong> Fundação Cristiano Varella</strong> é a nossa referência nesse cuidado, 
                atendendo pacientes de mais de 290 cidades pactuadas.
              </p>
              <p>
                Para os residentes em Muriaé, o primeiro passo é comparecer à <strong>UBS de referência</strong> de seu bairro. 
                Com o encaminhamento correto, a regulação garante o acolhimento necessário para o início do tratamento.
              </p>
            </div>

            {/* Grid adaptado para exibir apenas 1 imagem centralizada */}
            <div className="grid-fluxos" style={{ gridTemplateColumns: "1fr", maxWidth: "600px", margin: "0 auto" }}>
              {/* Bloco Único de Fluxo */}
              <div className="bloco-fluxo" onClick={() => setZoomImage("/img/fluxos-assistenciais/oncologia/fluxo1.png")}>
                <h4>Fluxo Assistencial</h4>
                <div className="img-wrapper">
                  <Image 
                    src="/img/fluxos-assistenciais/oncologia/fluxo1.png" 
                    alt="Fluxo Assistencial Oncologia" 
                    width={1200} 
                    height={1600} 
                    className="img-fluxo" 
                  />
                  <div className="overlay-zoom">Clique para ampliar</div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* Modal de Zoom Avançado */}
      {zoomImage && (
        <div className="modal-zoom" onClick={fecharModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="controles-zoom">
                <button onClick={diminuirZoom}>-</button>
                <span className="zoom-porcentagem">{Math.round(zoomScale * 100)}%</span>
                <button onClick={aumentarZoom}>+</button>
              </div>
              <button className="btn-fechar-topo" onClick={fecharModal}>Fechar Visualização</button>
            </div>

            <div 
              className={`img-zoom-viewport hide-scrollbar ${isDragging ? 'grabbing' : ''}`}
              ref={viewportRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={stopDragging}
              onMouseLeave={stopDragging}
            >
              <div className="img-container-scrollable" style={{ transform: `scale(${zoomScale})`, transformOrigin: "top center" }}>
                <Image src={zoomImage} alt="Zoom" width={2000} height={2000} unoptimized className="img-full-modal" />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}