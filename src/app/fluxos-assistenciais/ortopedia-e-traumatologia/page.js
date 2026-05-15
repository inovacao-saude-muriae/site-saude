"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "../../../styles/ortopedia.css";

const CONTEUDOS = {
  OrtopediaMedia: {
    label: "Média Complexidade",
    texto: `Segurança no dia a dia e cuidado com a saúde: um compromisso de todos. Condução defensiva no trânsito, uso correto dos Equipamentos de Proteção Individual (EPIs) 
    no ambiente de trabalho e atenção constante nas atividades diárias são medidas simples, mas extremamente importantes para evitar acidentes. 
    Muitos traumas e lesões graves, que resultam em cirurgias ortopédicas de urgência, podem ser prevenidos com responsabilidade e cuidado. 
    Quando a cirurgia é necessária, é fundamental seguir todos os fluxos e orientações médicas para garantir a segurança e o sucesso do tratamento. 
    A Prefeitura de Muriaé, por meio da Secretaria Municipal de Saúde, assegura aos seus cidadãos todo o suporte necessário no pré-operatório através do Programa Opera Já Muriaé, 
    reafirmando o compromisso com a saúde e o bem-estar da população.`,
    imagens: [
      { titulo: "Fluxo Assistencial", src: "/img/fluxos-assistenciais/ortopedia-traumatologia/media/fluxo.png" },
      { titulo: "Pactuação", src: "/img/fluxos-assistenciais/ortopedia-traumatologia/media/pactuacao.png" }
    ]
  },
  OrtopediaAlta: {
    label: "Alta Complexidade",
    texto: `Ortopedia de Alta Complexidade: entenda como funciona.
    Alguns problemas mais graves nos ossos, articulações ou na coluna, como fraturas complexas ou lesões sérias, são considerados de alta complexidade e, 
    na maioria das vezes, são resolvidos diretamente nos atendimentos de urgência e emergência, quando o paciente precisa de cuidado imediato. 
    Já nos casos que não são urgentes, a pessoa deve procurar a Secretaria Municipal de Saúde para receber as orientações corretas sobre o encaminhamento e tratamento necessário.`,
    imagens: [
      { titulo: "Fluxo Assistencial", src: "/img/fluxos-assistenciais/ortopedia-traumatologia/alta/ortopedia-fluxo.png" },
      { titulo: "Pactuação", src: "/img/fluxos-assistenciais/ortopedia-traumatologia/alta/pactuacao.png" }
    ]
  }
};

export default function OrtopediaPage() {
  const [selected, setSelected] = useState("OrtopediaMedia");
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
    <main className="ortopedia-layout">
      <div className="page-wrapper">
        <section className="ortopedia-page">
          <h2 className="titulo-sessao">Ortopedia e Traumatologia</h2>

          <nav className="ortopedia-botoes">
            {Object.keys(CONTEUDOS).map((key) => (
              <button
                key={key}
                className={`ortopedia-botao ${selected === key ? "ativo" : ""}`}
                onClick={() => setSelected(key)}
              >
                {CONTEUDOS[key].label}
              </button>
            ))}
          </nav>

          <div className="ortopedia-display fade-in">
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