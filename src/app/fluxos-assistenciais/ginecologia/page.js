"use client";

import { useState } from "react";
import Image from "next/image";
import "../../../styles/ginecologia.css"; 

export default function GinecologiaPage() {
  const [zoomImage, setZoomImage] = useState(null);

  return (
    <div className="ginecologia-container">
      {/* Título principal */}
      <h1 className="ginecologia-titulo">Ginecologia</h1>

      {/* Texto explicativo */}
      <p className="ginecologia-texto">
        Cálculo renal: prevenir é o melhor remédio! O cálculo renal, conhecido como pedra nos rins, 
        é uma das doenças urológicas mais comuns e pode causar dores intensas, infecções e até necessidade de internação. 
        A principal forma de prevenção é manter-se bem hidratado, consumindo água ao longo do dia, além de manter uma alimentação equilibrada, com pouco sal, 
        gordura e alimentos industrializados. Em casos em que o tratamento clínico não é suficiente, a intervenção cirúrgica pode ser necessária. 
        A Secretaria Municipal de Saúde de Muriaé oferece, no âmbito do SUS, a cirurgia a laser para tratamento de cálculos renais, garantindo tecnologia e qualidade no atendimento aos pacientes. 
        Para ter acesso ao procedimento, é fundamental seguir os fluxos estabelecidos e todas as orientações médicas. Cuide da sua saúde urinária com prevenção e acompanhamento profissional!
      </p>
      </div>

  );
}
