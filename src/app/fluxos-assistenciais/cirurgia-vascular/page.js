"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "../../../styles/cirurgiaVascular.css";

const CONTEUDOS = {
  AparelhoCirculatorio: {
    label: "Aparelho Circulatório",
    texto: `Assim como a angioplastia pode ser feita no coração, ela também pode ser realizada nas pernas e nas artérias do pescoço (carótidas). Esses procedimentos são chamados de angioplastias periféricas ou procedimentos endovasculares.
    O objetivo do tratamento é desobstruir as artérias que estão com dificuldade na passagem do sangue, melhorando o funcionamento do organismo e diminuindo o risco de complicações.
    Quando o médico angiologista, cardiologista ou clínico indica a angioplastia, é necessário que a Secretaria de Saúde de Muriaé faça o agendamento da consulta com o médico especialista em hemodinâmica do Hospital São Paulo, unidade habilitada pelo SUS para realizar esses procedimentos.
    Quem mora em Muriaé deve levar toda a documentação até a Secretaria de Saúde para realizar o cadastro e o agendamento. 
    Já quem mora em outra cidade deve procurar a Secretaria de Saúde do próprio município para cadastrar o pedido no sistema. 
    Depois disso, a Regulação de Muriaé irá analisar a documentação e realizar o agendamento.
    Antes do procedimento, é muito importante seguir todas as orientações médicas para que tudo aconteça da melhor forma possível.
    `,
    imagens: [
      { titulo: "Fluxo Assistencial", src: "/img/fluxos-assistenciais/cirurgia-vascular/aparelhoCirculatorio/fluxo.png" },
      { titulo: "Pactuação", src: "/img/fluxos-assistenciais/cirurgia-vascular/aparelhoCirculatorio/Pactuacao1.png" }
    ]
  },
  Varizes: {
    label: "Varizes",
    texto: `Cirurgias vasculares pelo SUS: mais saúde e qualidade de vida!
    As cirurgias vasculares, principalmente para tratamento de varizes, são indicadas quando problemas na circulação causam dor, inchaço, desconforto ou risco de complicações. 
    Nesses casos, o tratamento cirúrgico pode ajudar a melhorar a qualidade de vida e evitar o agravamento do problema.
    Para realizar esses procedimentos pelo SUS, é importante seguir corretamente todas as etapas do atendimento, garantindo mais segurança e organização no cuidado com o paciente.
    A Secretaria Municipal de Saúde de Muriaé, por meio do programa Opera Já Muriaé, garante a realização de todo o pré-operatório necessário, oferecendo atendimento gratuito, completo 
    e de qualidade para a população.
    Antes da cirurgia, é obrigatório passar pela consulta de pré-operatório com o cirurgião que irá realizar o procedimento. Essa etapa é fundamental para avaliação, 
    orientações e planejamento da cirurgia.
    Pelo SUS, as cirurgias para tratamento de varizes são realizadas no Hospital São Paulo. Por isso, a consulta de pré-operatório deve ser feita com um médico do corpo 
    clínico do hospital, com agendamento pela Secretaria de Saúde.
    Pacientes de outros municípios que possuem referência de atendimento em Muriaé devem procurar a Secretaria de Saúde da sua cidade. O agendamento poderá ser realizado pelo CISLESTE, 
    conforme o contrato de cada município com o consórcio.
    `,
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