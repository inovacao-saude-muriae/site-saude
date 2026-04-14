"use client";

import { useState } from "react";
import Image from "next/image";
import "../../../styles/oncologia.css"; // podemos reaproveitar o mesmo CSS

export default function OncologiaPage() {
  const [zoomImage, setZoomImage] = useState(null);

  return (
    <div className="oncologia-container">
      {/* Título principal */}
      <h1 className="oncologia-titulo">Oncologia</h1>

      {/* Texto explicativo */}
      <p className="oncologia-texto">
            Cuidando de quem precisa: atendimento oncológico com carinho e responsabilidade.
            A linha de cuidados da oncologia foi criada para garantir que pessoas com suspeita ou diagnóstico de câncer recebam atendimento rápido e de qualidade. 
            A Fundação Cristiano Varella é uma referência nesse cuidado e realiza atendimentos para pacientes de mais de 290 cidades com pactuação, 
            tanto nos casos de alta suspeita de câncer quanto quando o diagnóstico já está confirmado. Se você ou alguém da sua família estiver nessa situação, 
            procure a unidade de saúde do seu município. Com o encaminhamento certo, a Fundação está pronta para acolher e cuidar com toda dedicação. 
            Para os residentes em Muriaé, é necessário primeiro comparecer à UBS de referência de seu bairro para receber todas as orientações completas e corretas.
      </p>
      </div>
  );
}
