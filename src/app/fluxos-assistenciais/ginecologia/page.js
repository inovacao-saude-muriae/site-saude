"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "../../../styles/ginecologia.css";

const CONTEUDOS = {
  SaudeMulher: {
    label: "Saúde da Mulher",
    texto: `Cirurgias ginecológicas: cuidado integral pela saúde da mulher! As cirurgias ginecológicas mais comuns, como a histerectomia (retirada do útero), miomectomia (remoção de miomas uterinos), laqueadura tubária, entre outras, são frequentemente indicadas por médicos clínicos para tratar condições que afetam a saúde reprodutiva e ginecológica das mulheres. Para que esses procedimentos sejam realizados de forma segura e organizada, é essencial seguir os fluxos estabelecidos pela rede pública de saúde.
    A Secretaria Municipal de Saúde de Muriaé, por meio do programa Opera Já Muriaé, garante a realização de todo o pré-operatório, oferecendo atendimento completo e gratuito aos nossos munícipes, sempre com cuidado e responsabilidade, dentro do SUS.
    Pelo SUS, as cirurgias para tratamento em ginecologia são realizadas no Hospital São Paulo. Por isso, a consulta de pré-operatório deve ser feita com um médico do corpo clínico do hospital, com agendamento pela Secretaria de Saúde.
    Pacientes de outros municípios que possuem referência de atendimento em Muriaé devem procurar a Secretaria de Saúde da sua cidade. O agendamento poderá ser realizado pelo CISLESTE, conforme o contrato de cada município com o consórcio.
    `,
    imagens: [
      { titulo: "Fluxo Assistencial", src: "/img/fluxos-assistenciais/ginecologia/fluxo1.png" }
    ]
  },
  ExamesAcompanhamentos: {
    label: "Exames e Acompanhamentos",
    texto: `Quando falamos sobre a saúde da mulher, é importante cuidar de várias áreas da saúde e da prevenção. Entre os principais cuidados estão a prevenção do câncer de colo do útero, realizada por meio do exame Papanicolau, indicado para mulheres de 25 a 64 anos, a identificação precoce de alterações nas mamas, o acompanhamento da gestação — tanto de risco habitual quanto de alto risco — e o acesso aos métodos contraceptivos.
    O cuidado com a saúde da mulher é fundamental para promover mais qualidade de vida, prevenção de doenças e atendimento adequado em todas as fases da vida.
    A seguir, apresentamos alguns fluxos de atendimento disponíveis dentro da linha de cuidados da saúde da mulher.
    `,
    imagens: [
      { titulo: "Fluxo Assistencial", src: "/img/fluxos-assistenciais/ginecologia/fluxo2.png" }
    ]
  }
};

export default function GinecologiaPage() {
  const [selected, setSelected] = useState("SaudeMulher");
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
    <main className="ginecologia-layout">
      <div className="page-wrapper">
        <section className="ginecologia-page">
          <h2 className="titulo-sessao">Ginecologia</h2>

          <nav className="ginecologia-botoes">
            {Object.keys(CONTEUDOS).map((key) => (
              <button
                key={key}
                className={`ginecologia-botao ${selected === key ? "ativo" : ""}`}
                onClick={() => setSelected(key)}
              >
                {CONTEUDOS[key].label}
              </button>
            ))}
          </nav>

          <div className="ginecologia-display fade-in">
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