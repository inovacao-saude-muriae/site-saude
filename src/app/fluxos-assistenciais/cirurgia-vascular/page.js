"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "../../../styles/cirurgiaVascular.css";

const CONTEUDOS = {
  AparelhoCirculatorio: {
    label: "Aparelho Circulatório",
    texto: `Cirurgias vasculares: saúde circulatória em dia pelo SUS! 
    As cirurgias vasculares, principalmente para tratamento de varizes, são indicadas por médicos clínicos quando há comprometimento da circulação que causa dor, 
    inchaço, desconforto ou risco de complicações. 
    O tratamento cirúrgico pode ser necessário para melhorar a qualidade de vida e prevenir agravamentos. 
    Para a realização desses procedimentos, é essencial seguir corretamente os fluxos estabelecidos pela rede de saúde, 
    garantindo segurança e organização no atendimento. A Secretaria Municipal de Saúde de Muriaé, por meio do programa Opera Já Muriaé, 
    assegura a realização de todo o pré-operatório para os pacientes indicados, oferecendo assistência completa e gratuita, com qualidade, 
    responsabilidade e cuidado, através do SUS.`,
    imagens: [
      { titulo: "Fluxo Assistencial", src: "/img/fluxos-assistenciais/cirurgia-vascular/aparelhoCirculatorio/fluxo.png" },
      { titulo: "Pactuação", src: "/img/fluxos-assistenciais/cirurgia-vascular/aparelhoCirculatorio/pactuacao.png" }
    ]
  },
  Varizes: {
    label: "Varizes",
    texto: `Cirurgias vasculares: saúde circulatória em dia pelo SUS! 
    As cirurgias vasculares, principalmente para tratamento de varizes, são indicadas por médicos clínicos quando há comprometimento da circulação que causa dor, 
    inchaço, desconforto ou risco de complicações. 
    O tratamento cirúrgico pode ser necessário para melhorar a qualidade de vida e prevenir agravamentos. 
    Para a realização desses procedimentos, é essencial seguir corretamente os fluxos estabelecidos pela rede de saúde, 
    garantindo segurança e organização no atendimento. A Secretaria Municipal de Saúde de Muriaé, por meio do programa Opera Já Muriaé, 
    assegura a realização de todo o pré-operatório para os pacientes indicados, oferecendo assistência completa e gratuita, com qualidade, 
    responsabilidade e cuidado, através do SUS.`,
    imagens: [
      { titulo: "Fluxo Assistencial", src: "/img/fluxos-assistenciais/cirurgia-vascular/varizes/fluxo.png" },
      { titulo: "Pactuação", src: "/img/fluxos-assistenciais/cirurgia-vascular/varizes/pactuacao.png" }
    ]
  }
};

export default function CirurgiaVascularPage() {
  const [selected, setSelected] = useState("AparelhoCirculatorio");
  const [zoomImage, setZoomImage] = useState(null);
  const [zoomScale, setZoomScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const viewportRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = zoomImage ? "hidden" : "auto";
  }, [zoomImage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selected]);

  const fecharModal = () => {
    setZoomImage(null);
    setZoomScale(1);
  };

  const aumentarZoom = () => setZoomScale((prev) => Math.min(prev + 0.1, 5)); 
  const diminuirZoom = () => setZoomScale((prev) => Math.max(prev - 0.1, 1));

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
    <main className="cirurgia-vascular-layout">
      <div className="page-wrapper">
        <section className="cirurgia-vascular-page">
          <h2 className="titulo-sessao">Cirurgia Vascular</h2>

          <nav className="cirurgia-vascular-botoes">
            {Object.keys(CONTEUDOS).map((key) => (
              <button
                key={key}
                className={`cirurgia-vascular-botao ${selected === key ? "ativo" : ""}`}
                onClick={() => setSelected(key)}
              >
                {CONTEUDOS[key].label}
              </button>
            ))}
          </nav>

          <div className="cirurgia-vascular-display fade-in">
            <div className="card-explicativo">
              <h3>{CONTEUDOS[selected].label}</h3>
              <p>{CONTEUDOS[selected].texto}</p>
            </div>

            <div className="grid-fluxos">
              {CONTEUDOS[selected].imagens.map((img, idx) => (
                <div key={idx} className="bloco-fluxo" onClick={() => setZoomImage(img.src)}>
                  <h4>{img.titulo}</h4>
                  <div className="img-wrapper">
                    <Image src={img.src} alt={img.titulo} width={1200} height={1600} className="img-fluxo" />
                    <div className="overlay-zoom">Clique para ampliar</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

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