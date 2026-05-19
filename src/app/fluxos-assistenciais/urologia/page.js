"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "../../../styles/urologia.css";

export default function UrologiaPage() {
  const [zoomImage, setZoomImage] = useState(null);
  const [zoomScale, setZoomScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const viewportRef = useRef(null);

  // Impede o scroll do fundo ao abrir o modal
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

  // Lógica de Draggable para Desktop
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
    <main className="urologia-layout">
      <div className="page-wrapper">
        <section className="urologia-page">
          <h2 className="titulo-sessao">Urologia</h2>

          <div className="urologia-display fade-in">
            <div className="card-explicativo">
              <h3>Cálculo Renal: Prevenir é o melhor remédio</h3>
              <p>
                O cálculo renal, conhecido como pedra nos rins, é uma das doenças urológicas mais comuns. 
                Ele pode causar dores fortes, infecções e, em alguns casos, até necessidade de internação.
                A melhor forma de prevenir o problema é manter uma boa hidratação, bebendo água ao longo do dia, além de ter uma alimentação equilibrada, 
                com menos sal, gordura e alimentos industrializados.

              </p>
              <p>
                Quando o tratamento com medicamentos e acompanhamento médico não é suficiente, pode ser necessário realizar cirurgia.
                A Secretaria Municipal de Saúde de Muriaé oferece, pelo SUS e de forma eletiva (fora de situações de urgência), 
                a cirurgia a laser para tratamento de cálculos renais, realizada no Prontocor. O objetivo é garantir atendimento de qualidade, 
                segurança e acesso à tecnologia adequada para os pacientes.
              </p>
              <p>
                Para realizar o procedimento, é importante seguir corretamente os fluxos de atendimento e todas as orientações médicas.
                Nos casos de urgência urológica, o hospital de referência da nossa região é o Hospital São Paulo, que possui equipe especializada e 
                equipamentos modernos para atendimento rápido e seguro.
              </p>
              <p>
                Cuide da sua saúde urinária: prevenção e acompanhamento médico fazem toda a diferença!
              </p>
            </div>

            <div className="grid-fluxos">
              {/* Bloco Fluxo */}
              <div className="bloco-fluxo" onClick={() => setZoomImage("/img/fluxos-assistenciais/urologia/fluxo.png")}>
                <h4>Fluxo Assistencial</h4>
                <div className="img-wrapper">
                  <Image 
                    src="/img/fluxos-assistenciais/urologia/fluxo.png" 
                    alt="Fluxo Urologia" 
                    width={1200} 
                    height={1600} 
                    className="img-fluxo" 
                  />
                  <div className="overlay-zoom">Clique para ampliar</div>
                </div>
              </div>

              {/* Bloco Pactuação */}
              <div className="bloco-fluxo" onClick={() => setZoomImage("/img/fluxos-assistenciais/urologia/pactuacao.png")}>
                <h4>Pactuação</h4>
                <div className="img-wrapper">
                  <Image 
                    src="/img/fluxos-assistenciais/urologia/pactuacao.png" 
                    alt="Pactuação Urologia" 
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

      {/* Modal de Zoom */}
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