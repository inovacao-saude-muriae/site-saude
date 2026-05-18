"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import "../../styles/assistencia.css";

export default function FluxosAssistenciaisPage() {
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
    <main className="assistencia-layout">
      <div className="page-wrapper">
        <section className="assistencia-page fade-in">
          <h2 className="titulo-sessao">Fluxos Assistenciais</h2>

          <div className="card-explicativo">
            <p>
              Reunimos informações detalhadas sobre os procedimentos de saúde, os
              fluxos assistenciais e a PPI (Programação Pactuada e Integrada). Nosso
              objetivo é fornecer clareza e acessibilidade, facilitando o percurso
              que cada paciente deve seguir dentro do sistema de saúde de Muriaé,
              desde a triagem inicial até o acompanhamento especializado.
            </p>
          </div>

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

          {/* Nota informativa padronizada idêntica à de Cintilografia */}
          <div className="nota-informativa-destaque">
            <div className="nota-ícone">i</div>
            <p>
              <strong>O que é a PPI?</strong> A Programação Pactuada e Integrada
              define como os recursos e atendimentos são distribuídos entre
              municípios e estados, garantindo que os serviços sejam
              disponibilizados de maneira equitativa e eficaz.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}