"use client";

import { useState } from "react";
import Image from "next/image";
import "../../../styles/cirurgiaVascular.css";
import { label } from "framer-motion/client";

export default function CirurgiaVascularPage() {
  const [selected, setSelected] = useState("AparelhoCirculatorio");
  const [zoomImage, setZoomImage] = useState(null);

  const conteudos = {
    AparelhoCirculatorio: {
      label: "Aparelho Circulatório",
      texto: `Cirurgias vasculares: saúde circulatória em dia pelo SUS! As cirurgias vasculares, 
            principalmente para tratamento de varizes, são indicadas por médicos clínicos quando há comprometimento da circulação que causa dor, 
            inchaço, desconforto ou risco de complicações. O tratamento cirúrgico pode ser necessário para melhorar a qualidade de vida e prevenir agravamentos. 
            Para a realização desses procedimentos, é essencial seguir corretamente os fluxos estabelecidos pela rede de saúde, garantindo segurança e organização no atendimento. 
            A Secretaria Municipal de Saúde de Muriaé, por meio do programa Opera Já Muriaé, assegura a realização de todo o pré-operatório para os pacientes indicados, 
            oferecendo assistência completa e gratuita, com qualidade, responsabilidade e cuidado, através do SUS.`,
      fluxo: (
        <div className="cirurgia-vascular-fluxo">
          <div className="cirurgia-vascular-bloco">
            <h3>Fluxo</h3>
            <div className="cirurgia-vascular-fluxo-img-wrapper">
              <Image
                src="/img/fluxos-assistenciais/cirurgia-vascular/aparelhoCirculatorio/fluxo.png"
                alt="Fluxo Assistencial Angioplastia"
                width={800}
                height={600}
                className="cirurgia-vascular-fluxo-img"
                onClick={() =>
                  setZoomImage(
                    "/img/fluxos-assistenciais/cirurgia-vascular/aparelhoCirculatorio/fluxo.png",
                  )
                }
              />
            </div>
          </div>

          <div className="cirurgia-vascular-bloco">
            <h3>Pactuação</h3>
            <div className="cirurgia-vascular-fluxo-img-wrapper">
              <Image
                src="/img/fluxos-assistenciais/cirurgia-vascular/aparelhoCirculatorio/pactuacao.png"
                alt="Pactuação Endovascular"
                width={800}
                height={600}
                className="cirurgia-vascular-pactuacao-img"
                onClick={() =>
                  setZoomImage(
                    "/img/fluxos-assistenciais/cirurgia-vascular/aparelhoCirculatorio/pactuacao.png",
                  )
                }
              />
            </div>
          </div>
        </div>
      ),
    },

    Varizes: {
      label: "Varizes",
      texto: `Cirurgias vasculares: saúde circulatória em dia pelo SUS! As cirurgias vasculares, 
            principalmente para tratamento de varizes, são indicadas por médicos clínicos quando há comprometimento da circulação que causa dor, 
            inchaço, desconforto ou risco de complicações. O tratamento cirúrgico pode ser necessário para melhorar a qualidade de vida e prevenir agravamentos. 
            Para a realização desses procedimentos, é essencial seguir corretamente os fluxos estabelecidos pela rede de saúde, garantindo segurança e organização no atendimento. 
            A Secretaria Municipal de Saúde de Muriaé, por meio do programa Opera Já Muriaé, assegura a realização de todo o pré-operatório para os pacientes indicados, 
            oferecendo assistência completa e gratuita, com qualidade, responsabilidade e cuidado, através do SUS.`,
      fluxo: (
        <div className="cirurgia-vascular-fluxo">
          <div className="cirurgia-vascular-bloco">
            <h3>Fluxo</h3>
            <Image
              src="/img/fluxos-assistenciais/cirurgia-vascular/varizes/fluxo.png"
              alt="Fluxo Assistencial Varizes"
              width={800}
              height={600}
              className="cirurgia-vascular-fluxo-img"
              onClick={() =>
                setZoomImage(
                  "/img/fluxos-assistenciais/cirurgia-vascular/varizes/fluxo.png",
                )
              }
            />
          </div>
          <div className="cirurgia-vascular-bloco">
            <h3>Pactuação</h3>
            <Image
              src="/img/fluxos-assistenciais/cirurgia-vascular/varizes/pactuacao.png"
              alt="Fluxo Assistencial Varizes"
              width={800}
              height={600}
              className="cirurgia-vascular-pactuacao-img"
              onClick={() =>
                setZoomImage(
                  "/img/fluxos-assistenciais/cirurgia-vascular/varizes/pactuacao.png",
                )
              }
            />
          </div>
        </div>
      ),
    },
  };

  const botoes = Object.keys(conteudos);

  return (
    <div className="cirurgia-vascular-container">
      <h1 className="cirurgia-vascular-titulo">Cirurgia Vascular</h1>

      <div className="cirurgia-vascular-botoes">
        {botoes.map((btn) => (
          <button
            key={btn}
            className="cirurgia-vascular-botao"
            onClick={() => setSelected(btn)}
          >
            {conteudos[btn].label}
          </button>
        ))}
      </div>

      {selected && (
        <div className="cirurgia-vascular-conteudo">
          <h2 className="cirurgia-vascular-subtitulo">
            {conteudos[selected].label}
          </h2>
          <p className="cirurgia-vascular-texto">{conteudos[selected].texto}</p>
          {conteudos[selected].fluxo}
        </div>
      )}

      {zoomImage && (
        <div
          className="cirurgia-vascular-modal"
          onClick={() => setZoomImage(null)}
        >
          <div className="cirurgia-vascular-modal-img-wrapper">
            <Image
              src={zoomImage}
              alt="Zoom"
              fill
              className="cirurgia-vascular-modal-img"
            />
          </div>
        </div>
      )}
    </div>
  );
}
