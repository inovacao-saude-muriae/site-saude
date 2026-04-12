"use client";

import { useState } from "react";
import Image from "next/image";
import "../../../styles/cintilografia.css"; // podemos reaproveitar o mesmo CSS

export default function CintilografiaPage() {
  const [zoomImage, setZoomImage] = useState(null);

  return (
    <div className="cintilografia-container">
      {/* Título principal */}
      <h1 className="cintilografia-titulo">Cintilografia</h1>

      {/* Texto explicativo */}
      <p className="cintilografia-texto">
        Exames de imagem de alta complexidade: atenção ao formulário correto! 
        A Secretaria Municipal de Saúde de Muriaé disponibiliza exames de imagem avançados como tomografia computadorizada (TC), ressonância magnética nuclear (RNM) e cintilografia pelo SUS, conforme indicação médica. 
        Esses exames são fundamentais para diagnósticos mais precisos e detalhados, auxiliando no acompanhamento e tratamento de diversas condições de saúde. 
        Para que a solicitação seja autorizada, é imprescindível que o pedido esteja corretamente preenchido no formulário APAC (Autorização de Procedimentos de Alta Complexidade), conforme as normas do sistema público de saúde. 
        A falta de informações ou o uso de formulários incorretos pode atrasar a liberação do exame. 
        Fique atento às orientações e garanta o acesso ao exame de forma segura e organizada!
      </p>

      {/* Bloco Fluxo */}
      <div className="cintilografia-bloco">
        <h3>Fluxo</h3>
        <div className="cintilografia-fluxo-img-wrapper">
          <Image
            src="/img/fluxos-assistenciais/cintilografia/fluxo.png"
            alt="Fluxo Assistencial Cintilografia"
            width={800}
            height={600}
            className="cintilografia-fluxo-img"
            onClick={() =>
              setZoomImage(
                "/img/fluxos-assistenciais/cintilografia/fluxo.png"
              )
            }
          />
        </div>
      </div>

      {/* Bloco Pactuação */}
      <div className="cintilografia-bloco">
        <h3>Pactuação</h3>
        <div className="cintilografia-fluxo-img-wrapper">
          <Image
            src="/img/fluxos-assistenciais/cintilografia/pactuacao.png"
            alt="Pactuação Cintilografia"
            width={800}
            height={600}
            className="cintilografia-fluxo-img"
            onClick={() =>
              setZoomImage(
                "/img/fluxos-assistenciais/cintilografia/pactuacao.png"
              )
            }
          />
        </div>
      </div>

      {/* Modal de Zoom */}
      {zoomImage && (
        <div className="cintilografia-modal" onClick={() => setZoomImage(null)}>
          <div className="cintilografia-modal-img-wrapper">
            <Image
              src={zoomImage}
              alt="Zoom"
              fill
              className="cintilografia-modal-img"
            />
          </div>
        </div>
      )}
    </div>
  );
}
