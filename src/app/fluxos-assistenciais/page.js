"use client";

import Link from "next/link";
import "../../styles/assistencia.css";

export default function Page() {
  const especialidades = [
    "Cardiologia",
    "Cintilografia",
    "Cirurgia Geral",
    "Cirurgia Vascular",
    "Ginecologia",
    "Oncologia",
    "Oftalmologia",
    "Ortopedia e Traumatologia",
    "Ressonancia",
    "Tomografia",
    "Urologia",
  ];
  

  return (
    <div className="container">
      <h1>Fluxos Assistênciais</h1>
      <p className="texto">
        Reunimos informações detalhadas sobre os procedimentos de saúde, os fluxos assistenciais e a PPI (Programação Pactuada e Integrada) de cada um, garantindo que pacientes e profissionais tenham acesso a um sistema organizado e transparente. Os procedimentos abrangem desde atendimentos básicos até tratamentos especializados, seguindo protocolos estabelecidos para assegurar qualidade e eficiência. Os fluxos assistenciais indicam o percurso que cada paciente deve seguir dentro do sistema de saúde, desde a triagem inicial até o acompanhamento adequado, permitindo um atendimento ágil e direcionado conforme a necessidade de cada caso. Já a PPI, que envolve pactuações entre municípios e estados, define como os recursos e atendimentos são distribuídos, garantindo que os serviços sejam disponibilizados de maneira equitativa e eficaz. Nosso objetivo é fornecer clareza e acessibilidade a essas informações, facilitando a compreensão e o acesso aos serviços de saúde para todos.
      </p>

      <div className="botoes">
        {especialidades.map((esp) => (
          <Link
            key={esp}
            href={`/fluxos-assistenciais/${esp.toLowerCase().replace(/\s+/g, "-")}`}
            className="botao"
          >
            {esp}
          </Link>
        ))}
      </div>
    </div>
  );
}
