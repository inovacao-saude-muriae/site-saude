"use client";

import { useState } from "react";
import Image from "next/image";
import "../../../styles/oftalmologia.css"; // podemos reaproveitar o mesmo CSS

export default function CirurgiaGeralPage() {
  const [zoomImage, setZoomImage] = useState(null);

  return (
    <div className="oftalmologia-container">
      {/* Título principal */}
      <h1 className="oftalmologia-titulo">Oftalmologia</h1>

      {/* Texto explicativo */}
      <p className="oftalmologia-texto">
        Tratamento de Catarata e Pterígio pelo SUS em Muriaé A Secretaria Municipal de Saúde de Muriaé disponibiliza, 
        por meio do Sistema Único de Saúde (SUS), tratamento completo e gratuito para catarata e pterígio. 
        Os pacientes contam com atendimento pré-operatório realizado por médicos oftalmologistas especializados, 
        cirurgia sem qualquer custo e acompanhamento pós-operatório com todo o cuidado necessário. 
        É mais saúde visual e qualidade de vida para a população muriaeense, com compromisso e responsabilidade.
        Para ter acesso à cirurgia de catarata ou pterígio, é necessário que o morador de Muriaé possua uma solicitação médica emitida por oftalmologista. 
        A requisição, acompanhada de cópias dos documentos pessoais, deve ser entregue diretamente na Secretaria Municipal de Saúde, 
        para que o pedido seja inserido no sistema de regulação. Já os demais procedimentos oftalmológicos são realizados por meio de pactuação com municípios vizinhos. 
        Nesses casos, o cidadão deve procurar o setor de Tratamento Fora do Domicílio (TFD) para encaminhamento e orientações sobre o processo.
      </p>

        {/* Bloco Pactuação */}
        <div className="oftalmologia-bloco">
        <h3>Pactuação</h3>
        <div className="oftalmologia-fluxo-img-wrapper">
            <Image
            src="/img/fluxos-assistenciais/oftalmologia/pactuacao.png"
            alt="Pactuação Cirurgia Geral"
            width={800}
            height={600}
            className="oftalmologia-pactuacao-img"
            onClick={() =>
                setZoomImage("/img/fluxos-assistenciais/oftalmologia/pactuacao.png")
            }
            />
        </div>
        </div>


      {/* Modal de Zoom */}
      {zoomImage && (
        <div className="oftalmologia-modal" onClick={() => setZoomImage(null)}>
          <div className="oftalmologia-modal-img-wrapper">
            <Image
              src={zoomImage}
              alt="Zoom"
              fill
              className="oftalmologia-modal-img"
            />
          </div>
        </div>
      )}
    </div>
  );
}
