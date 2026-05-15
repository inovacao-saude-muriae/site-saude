"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "../../../styles/cintilografia.css";

export default function CintilografiaPage() {
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

  const fecharModal = () => {
    setZoomImage(null);
    setZoomScale(1);
  };

  const aumentarZoom = () => setZoomScale((prev) => Math.min(prev + 0.1, 5));
  const diminuirZoom = () => setZoomScale((prev) => Math.max(prev - 0.1, 1));

  // Lógica de clicar e arrastar
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
    <main className="cintilografia-layout">
      <div className="page-wrapper">
        <section className="cintilografia-page">
          <h2 className="titulo-sessao">Cintilografia</h2>

          <div className="cintilografia-display fade-in">
            <div className="card-explicativo">
              <h3>Exames de imagem de Alta Complexidade</h3>
              <p>
                A Secretaria Municipal de Saúde de Muriaé disponibiliza exames de imagem avançados como tomografia computadorizada (TC), 
                ressonância magnética nuclear (RNM) e cintilografia pelo SUS, conforme indicação médica. 
                Esses exames são fundamentais para diagnósticos mais precisos e detalhados, auxiliando no acompanhamento e tratamento de diversas condições de saúde.
              </p>
              <p>
                Para que a solicitação seja autorizada, é imprescindível que o pedido esteja corretamente preenchido no formulário <strong>APAC (Autorização de Procedimentos de Alta Complexidade)</strong>. A falta de informações pode atrasar a liberação do exame.
              </p>
              
              <div className="nota-informativa-destaque">
                <div className="nota-ícone">i</div>
                <p>
                  Atenção ao formulário correto e fique atento às orientações e garanta o acesso ao examde de forma segura e organizada!
                </p>
              </div>
              <div className="nota-informativa-destaque">
                <div className="nota-ícone">i</div>
                <p>
                  <strong>Atenção:</strong> Em caso de dúvida sobre o fluxo ou agendamento, entre em contato com a <strong>Secretaria Municipal de Saúde</strong>.
                </p>
              </div>
            </div>

            <div className="grid-fluxos">
              {/* Bloco Fluxo */}
              <div className="bloco-fluxo" onClick={() => setZoomImage("/img/fluxos-assistenciais/cintilografia/fluxo.png")}>
                <h4>Fluxo Assistencial</h4>
                <div className="img-wrapper">
                  <Image 
                    src="/img/fluxos-assistenciais/cintilografia/fluxo.png" 
                    alt="Fluxo Cintilografia" 
                    width={1200} 
                    height={1600} 
                    className="img-fluxo" 
                  />
                  <div className="overlay-zoom">Clique para ampliar</div>
                </div>
              </div>

              {/* Bloco Pactuação */}
              <div className="bloco-fluxo" onClick={() => setZoomImage("/img/fluxos-assistenciais/cintilografia/pactuacao.png")}>
                <h4>Pactuação</h4>
                <div className="img-wrapper">
                  <Image 
                    src="/img/fluxos-assistenciais/cintilografia/pactuacao.png" 
                    alt="Pactuação Cintilografia" 
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
                <button onClick={aumentarZoom}>+</button>
                <span className="zoom-porcentagem">{Math.round(zoomScale * 100)}%</span>
                <button onClick={diminuirZoom}>-</button>
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