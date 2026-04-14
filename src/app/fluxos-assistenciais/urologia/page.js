"use client";

import { useState } from "react";
import Image from "next/image";
import "../../../styles/urologia.css"; 

export default function UrologiaPage() {
  const [zoomImage, setZoomImage] = useState(null);

  return (
    <div className="urologia-container">
      {/* Título principal */}
      <h1 className="urologia-titulo">Ressonância</h1>

      {/* Texto explicativo */}
      <p className="urologia-texto">
        Cálculo renal: prevenir é o melhor remédio! O cálculo renal, conhecido como pedra nos rins, 
        é uma das doenças urológicas mais comuns e pode causar dores intensas, infecções e até necessidade de internação. 
        A principal forma de prevenção é manter-se bem hidratado, consumindo água ao longo do dia, além de manter uma alimentação equilibrada, com pouco sal, 
        gordura e alimentos industrializados. Em casos em que o tratamento clínico não é suficiente, a intervenção cirúrgica pode ser necessária. 
        A Secretaria Municipal de Saúde de Muriaé oferece, no âmbito do SUS, a cirurgia a laser para tratamento de cálculos renais, garantindo tecnologia e qualidade no atendimento aos pacientes. 
        Para ter acesso ao procedimento, é fundamental seguir os fluxos estabelecidos e todas as orientações médicas. Cuide da sua saúde urinária com prevenção e acompanhamento profissional!
      </p>

      {/* Bloco Fluxo */}
      <div className="urologia-bloco">
        <h3>Fluxo</h3>
        <div className="urologia-fluxo-img-wrapper">
          <Image
            src="/img/fluxos-assistenciais/urologia/fluxo.png"
            alt="Fluxo Assistencial urologia"
            width={800}
            height={600}
            className="urologia-fluxo-img"
            onClick={() =>
              setZoomImage(
                "/img/fluxos-assistenciais/urologia/fluxo.png"
              )
            }
          />
        </div>
      </div>

      {/* Bloco Pactuação */}
      <div className="urologia-bloco">
        <h3>Pactuação</h3>
        <div className="urologia-fluxo-img-wrapper">
          <Image
            src="/img/fluxos-assistenciais/urologia/pactuacao.png"
            alt="Pactuação urologia"
            width={800}
            height={600}
            className="urologia-fluxo-img"
            onClick={() =>
              setZoomImage(
                "/img/fluxos-assistenciais/urologia/pactuacao.png"
              )
            }
          />
        </div>
      </div>

      {/* Modal de Zoom */}
      {zoomImage && (
        <div className="urologia-modal" onClick={() => setZoomImage(null)}>
          <div className="urologia-modal-img-wrapper">
            <Image
              src={zoomImage}
              alt="Zoom"
              fill
              className="urologia-modal-img"
            />
          </div>
        </div>
      )}
    </div>
  );
}
