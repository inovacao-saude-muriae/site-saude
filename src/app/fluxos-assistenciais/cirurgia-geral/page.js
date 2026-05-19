"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "../../../styles/cirgurgiaGeral.css";

export default function CirurgiaGeralPage() {
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
    <main className="cirurgia-geral-layout">
      <div className="page-wrapper">
        <section className="cirurgia-geral-page">
          <h2 className="titulo-sessao">Cirurgia Geral</h2>

          <div className="cirurgia-geral-display fade-in">
            <div className="card-explicativo">
              <h3>Cuidado e Compromisso com a Saúde</h3>
              <p>
                Cirurgias gerais pelo SUS em Muriaé: cuidado, segurança e compromisso com a sua saúde!
                As cirurgias gerais mais comuns, como hérnia (umbilical e inguinal), retirada da vesícula biliar e remoção de cistos, 
                normalmente são indicadas após avaliação médica detalhada. Quando existe a necessidade da cirurgia, é importante seguir todas as etapas do atendimento 
                para garantir mais segurança e qualidade no tratamento.

              </p>
              <p>
                A Secretaria Municipal de Saúde de Muriaé, por meio do programa Opera Já Muriaé, garante a realização de todos os exames e 
                consultas do pré-operatório pelo SUS, oferecendo atendimento completo, acolhedor e sem custos para a população.
              </p>
              <p>
                Antes da cirurgia, é obrigatório passar pela consulta de pré-operatório com o cirurgião responsável pelo procedimento. Essa etapa é essencial para avaliação, orientação e planejamento da cirurgia.
                Quem mora em Muriaé deve procurar a Secretaria Municipal de Saúde para receber as orientações e realizar o agendamento.
                Já os pacientes de outros municípios que possuem referência de atendimento em Muriaé devem procurar a Secretaria de Saúde da sua cidade. 
                O agendamento poderá ser realizado pelo CISLESTE, conforme o contrato de cada município com o consórcio.
                Os atendimentos e agendamentos são feitos com médicos do corpo clínico do hospital, seguindo as normas e contratos estabelecidos pelo SUS.
              </p>
              
            </div>

            <div className="grid-fluxos">
              {/* Bloco Fluxo */}
              <div className="bloco-fluxo" onClick={() => setZoomImage("/img/fluxos-assistenciais/cirurgia-geral/fluxo.png")}>
                <h4>Fluxo Assistencial</h4>
                <div className="img-wrapper">
                  <Image 
                    src="/img/fluxos-assistenciais/cirurgia-geral/fluxo.png" 
                    alt="Fluxo Cirurgia Geral" 
                    width={700} 
                    height={1000} 
                    className="img-fluxo" 
                  />
                  <div className="overlay-zoom">Clique para ampliar</div>
                </div>
              </div>

              {/* Bloco Pactuação */}
              <div className="bloco-fluxo" onClick={() => setZoomImage("/img/fluxos-assistenciais/cirurgia-geral/pactuacao.png")}>
                <h4>Pactuação</h4>
                <div className="img-wrapper">
                  <Image 
                    src="/img/fluxos-assistenciais/cirurgia-geral/pactuacao.png" 
                    alt="Pactuação Cirurgia Geral" 
                    width={800} 
                    height={600} 
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