"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "../../../styles/cardiologia.css";

const CONTEUDOS = {
  Angioplastia: {
    texto: `A angioplastia é um procedimento para "desentupir" as artérias, que são os caminhos por onde o sangue passa no nosso corpo. Quando essas artérias ficam estreitas ou entupidas, o sangue não consegue passar direito, o que pode causar dor no peito, falta de ar ou até infarto. Durante o procedimento, o médico utiliza um cateter com um balão para abrir a passagem e, muitas vezes, coloca uma pequena "molinha" de metal chamada Stent para manter a artéria aberta.`,
    imagens: [
      { titulo: "Fluxo Assistencial", src: "/img/fluxos-assistenciais/cardiologia/angioplastia/fluxo.png" },
      { titulo: "Pactuação Endovascular", src: "/img/fluxos-assistenciais/cardiologia/angioplastia/pactuacao-endovascular.png" },
      { titulo: "Pactuação Intervencionista", src: "/img/fluxos-assistenciais/cardiologia/angioplastia/pactuacao-intervencionista.png" }
    ]
  },
  Cateterismo: {
    texto: `O cateterismo cardíaco é um exame para verificar se as artérias coronárias estão entupidas ou com problemas. Ele ajuda a descobrir se o sangue está passando direitinho pelo coração. No exame, um tubo fino (cateter) é levado até o coração para injetar um líquido de contraste que aparece no raio-X, mostrando qualquer obstrução. É um exame fundamental para decidir o melhor tratamento.`,
    imagens: [
      { titulo: "Fluxo Assistencial", src: "/img/fluxos-assistenciais/cardiologia/cateterismo/fluxo.png" },
      { titulo: "Pactuação", src: "/img/fluxos-assistenciais/cardiologia/cateterismo/pactuacao.png" }
    ]
  },
  Cirurgia: {
    texto: `A cirurgia cardíaca trata problemas graves, como obstruções que exigem "pontes de safena" (desvios para o sangue) ou trocas de válvulas cardíacas que não funcionam corretamente. As válvulas funcionam como portas que controlam o fluxo sanguíneo; quando estão endurecidas ou com vazamentos, precisam ser substituídas por próteses metálicas ou biológicas.`,
    imagens: [
      { titulo: "Fluxo Assistencial", src: "/img/fluxos-assistenciais/cardiologia/cirurgia/fluxo.png" },
      { titulo: "Pactuação", src: "/img/fluxos-assistenciais/cardiologia/cirurgia/pactuacao.png" }
    ]
  },
  Eletrofisiologia: {
    texto: `Procedimentos que investigam batimentos irregulares (arritmias). Pode envolver a ablação (correção dos pontos elétricos) ou o implante de marca-passo. O marca-passo é um aparelho que ajuda o coração a bater no ritmo certo, sendo indicado quando os batimentos estão muito lentos, devolvendo qualidade de vida e segurança ao paciente.`,
    imagens: [
      { titulo: "Fluxo Assistencial", src: "/img/fluxos-assistenciais/cardiologia/eletrofisiologia/fluxo.png" },
      { titulo: "Pactuação", src: "/img/fluxos-assistenciais/cardiologia/eletrofisiologia/pactuacao.png" }
    ]
  }
};

export default function CardiologiaPage() {
  const [selected, setSelected] = useState("Angioplastia");
  const [zoomImage, setZoomImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(100); // Zoom em porcentagem (100 = 100%)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selected]);

  const fecharModal = () => {
    setZoomImage(null);
    setZoomLevel(100);
  };

  const aumentarZoom = () => setZoomLevel((prev) => Math.min(prev + 20, 500)); 
  const diminuirZoom = () => setZoomLevel((prev) => Math.max(prev - 20, 100));

  return (
    <main className="cardiologia-layout">
      <div className="page-wrapper">
        <section className="cardiologia-page">
          <h2 className="titulo-sessao">Cardiologia</h2>

          <nav className="cardiologia-botoes">
            {Object.keys(CONTEUDOS).map((item) => (
              <button
                key={item}
                className={`cardiologia-botao ${selected === item ? "ativo" : ""}`}
                onClick={() => setSelected(item)}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="cardiologia-display fade-in">
            <div className="card-explicativo">
              <h3>{selected}</h3>
              <p>{CONTEUDOS[selected].texto}</p>
              <div className="nota-informativa-interna">
                <p><strong>Atenção:</strong> Em caso de dúvida, procure a Secretaria Municipal de Saúde!</p>
              </div>
            </div>

            <div className="grid-fluxos">
              {CONTEUDOS[selected].imagens.map((img, index) => (
                <div key={index} className="bloco-fluxo">
                  <h4>{img.titulo}</h4>
                  <div className="img-wrapper" onClick={() => setZoomImage(img.src)}>
                    <Image
                      src={img.src}
                      alt={img.titulo}
                      width={1200} 
                      height={1600}
                      className="img-fluxo"
                    />
                    <div className="overlay-zoom">Clique para abrir</div>
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
            
            <div className="controles-zoom">
              <button onClick={aumentarZoom}>+</button>
              <span className="zoom-porcentagem">{zoomLevel}%</span>
              <button onClick={diminuirZoom}>-</button>
            </div>

            <div className="img-zoom-viewport">
              {/* O segredo: a imagem cresce e o viewport faz o scroll */}
              <img 
                src={zoomImage} 
                alt="Fluxo ampliado" 
                className="img-full-modal"
                style={{ 
                  width: zoomLevel === 100 ? "auto" : `${zoomLevel}%`,
                  maxWidth: zoomLevel === 100 ? "100%" : "none",
                  maxHeight: zoomLevel === 100 ? "100%" : "none"
                }}
              />
            </div>

            <button className="btn-fechar-modal" onClick={fecharModal}>Fechar</button>
          </div>
        </div>
      )}
    </main>
  );
}