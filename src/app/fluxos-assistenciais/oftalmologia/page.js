"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "../../../styles/oftalmologia.css";

export default function OftalmologiaPage() {
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
    <main className="oftalmologia-layout">
      <div className="page-wrapper">
        <section className="oftalmologia-page">
          <h2 className="titulo-sessao">Oftalmologia</h2>

          <div className="oftalmologia-display fade-in">
            <div className="card-explicativo">
              <h3>Tratamento de Catarata e Pterígio</h3>
              <p>
                Tratamento de Catarata e Pterígio pelo SUS em Muriaé A
                Secretaria Municipal de Saúde de Muriaé disponibiliza, por meio
                do Sistema Único de Saúde (SUS), tratamento completo e gratuito
                para catarata e pterígio. Os pacientes contam com atendimento
                pré-operatório realizado por médicos oftalmologistas
                especializados, cirurgia sem qualquer custo e acompanhamento
                pós-operatório com todo o cuidado necessário.
              </p>
              <p>
                É mais saúde visual e qualidade de vida para a população
                muriaeense, com compromisso e responsabilidade. Para ter acesso
                à cirurgia de catarata ou pterígio, é necessário que o morador
                de Muriaé possua uma solicitação médica emitida por
                oftalmologista. A requisição, acompanhada de cópias dos
                documentos pessoais, deve ser entregue diretamente na Secretaria
                Municipal de Saúde, para que o pedido seja inserido no sistema
                de regulação.
              </p>
              <p>
                á os demais procedimentos oftalmológicos são realizados por meio
                de pactuação com municípios vizinhos. Nesses casos, o cidadão
                deve procurar o setor de Tratamento Fora do Domicílio (TFD) para
                encaminhamento e orientações sobre o processo.
              </p>
            </div>

            <div className="grid-fluxos-single">
              {/* Bloco Único: Pactuação */}
              <div
                className="bloco-fluxo"
                onClick={() =>
                  setZoomImage(
                    "/img/fluxos-assistenciais/oftalmologia/pactuacao.png",
                  )
                }
              >
                <h4>Pactuação Assistencial</h4>
                <div className="img-wrapper">
                  <Image
                    src="/img/fluxos-assistenciais/oftalmologia/pactuacao.png"
                    alt="Pactuação Oftalmologia"
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
                <span className="zoom-porcentagem">
                  {Math.round(zoomScale * 100)}%
                </span>
                <button onClick={diminuirZoom}>-</button>
              </div>
              <button className="btn-fechar-topo" onClick={fecharModal}>
                Fechar Visualização
              </button>
            </div>

            <div
              className={`img-zoom-viewport hide-scrollbar ${isDragging ? "grabbing" : ""}`}
              ref={viewportRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={stopDragging}
              onMouseLeave={stopDragging}
            >
              <div
                className="img-container-scrollable"
                style={{
                  transform: `scale(${zoomScale})`,
                  transformOrigin: "top center",
                }}
              >
                <Image
                  src={zoomImage}
                  alt="Zoom"
                  width={2000}
                  height={2000}
                  unoptimized
                  className="img-full-modal"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
