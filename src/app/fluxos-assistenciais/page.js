"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import "../../styles/assistencia.css";

export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const especialidades = [
    "Cardiologia",
    "Cintilografia",
    "Cirurgia Geral",
    "Cirurgia Vascular",
    "Ginecologia",
    "Oncologia",
    "Oftalmologia",
    "Ortopedia e Traumatologia",
    "Ressonância",
    "Tomografia",
    "Urologia",
  ];

  return (
    <section className="assistencia-page">
      <div className="conteudo-principal">
        <h2>Fluxos Assistenciais</h2>
        <p className="texto-informativo">
          Reunimos informações detalhadas sobre os procedimentos de saúde, os
          fluxos assistenciais e a PPI (Programação Pactuada e Integrada). Nosso
          objetivo é fornecer clareza e acessibilidade, facilitando o percurso
          que cada paciente deve seguir dentro do sistema de saúde de Muriaé,
          desde a triagem inicial até o acompanhamento especializado.
        </p>

        <div className="secao-especialidades">
          <h3>Selecione uma Especialidade</h3>
          <div className="grid-especialidades">
            {especialidades.map((esp) => (
              <Link
                key={esp}
                href={`/fluxos-assistenciais/${esp
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .replace(/\s+/g, "-")}`}
                className="card-especialidade"
              >
                <span className="dot"></span>
                {esp}
              </Link>
            ))}
          </div>
        </div>

        {/* Nota informativa padronizada */}
        <div className="nota-informativa">
          <p>
            <strong>O que é a PPI?</strong> A Programação Pactuada e Integrada
            define como os recursos e atendimentos são distribuídos entre
            municípios e estados, garantindo que os serviços sejam
            disponibilizados de maneira equitativa e eficaz.
          </p>
        </div>
      </div>
    </section>
  );
}
