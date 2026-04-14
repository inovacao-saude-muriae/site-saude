"use client";

import { useState } from "react";
import Image from "next/image";
import "../../../styles/tomografia.css"; // podemos reaproveitar o mesmo CSS

export default function TomografiafiaPage() {
  const [zoomImage, setZoomImage] = useState(null);

  return (
    <div className="tomografia-container">
      {/* Título principal */}
      <h1 className="tomografia-titulo">Ressonância</h1>

      {/* Texto explicativo */}
      <p className="tomografia-texto">
        Exames de imagem de alta complexidade: atenção ao formulário correto! 
        A Secretaria Municipal de Saúde de Muriaé disponibiliza exames de imagem avançados como tomografia computadorizada (TC), 
        ressonância magnética nuclear (RNM) e cintilografia pelo SUS, conforme indicação médica. 
        Esses exames são fundamentais para diagnósticos mais precisos e detalhados, auxiliando no acompanhamento e tratamento de diversas condições de saúde. 
        Para que a solicitação seja autorizada, é imprescindível que o pedido esteja corretamente preenchido no formulário APAC (Autorização de Procedimentos de Alta Complexidade), 
        conforme as normas do sistema público de saúde. A falta de informações ou o uso de formulários incorretos pode atrasar a liberação do exame. 
        Fique atento às orientações e garanta o acesso ao exame de forma segura e organizada!
      </p>

      {/* Bloco Fluxo */}
      <div className="tomografia-bloco">
        <h3>Fluxo</h3>
        <div className="tomografia-fluxo-img-wrapper">
          <Image
            src="/img/fluxos-assistenciais/tomografia/fluxo.png"
            alt="Fluxo Assistencial tomografia"
            width={800}
            height={600}
            className="tomografia-fluxo-img"
            onClick={() =>
              setZoomImage(
                "/img/fluxos-assistenciais/tomografia/fluxo.png"
              )
            }
          />
        </div>
      </div>

      {/* Bloco Pactuação */}
      <div className="tomografia-bloco">
        <h3>Pactuação</h3>
        <div className="tomografia-fluxo-img-wrapper">
          <Image
            src="/img/fluxos-assistenciais/tomografia/pactuacao.png"
            alt="Pactuação tomografia"
            width={800}
            height={600}
            className="tomografia-fluxo-img"
            onClick={() =>
              setZoomImage(
                "/img/fluxos-assistenciais/tomografia/pactuacao.png"
              )
            }
          />
        </div>
      </div>

      {/* Modal de Zoom */}
      {zoomImage && (
        <div className="tomografia-modal" onClick={() => setZoomImage(null)}>
          <div className="tomografia-modal-img-wrapper">
            <Image
              src={zoomImage}
              alt="Zoom"
              fill
              className="tomografia-modal-img"
            />
          </div>
        </div>
      )}
    </div>
  );
}
