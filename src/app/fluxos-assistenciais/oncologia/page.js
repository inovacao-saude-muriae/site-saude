"use client";

import { useEffect } from "react";
import "../../../styles/oncologia.css";

export default function OncologiaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="oncologia-layout">
      <div className="page-wrapper">
        <section className="oncologia-page">
          <h2 className="titulo-sessao">Oncologia</h2>

          <div className="oncologia-display fade-in">
            <div className="card-explicativo">
              <h3>Atendimento Oncológico com Responsabilidade</h3>
              <p>
                A linha de cuidados da oncologia foi criada para garantir que pessoas com suspeita 
                ou diagnóstico de câncer recebam atendimento rápido e de qualidade. A 
                <strong> Fundação Cristiano Varella</strong> é a nossa referência nesse cuidado, 
                atendendo pacientes de mais de 290 cidades pactuadas.
              </p>
              <p>
                Para os residentes em Muriaé, o primeiro passo é comparecer à <strong>UBS de referência</strong> de seu bairro. 
                Com o encaminhamento correto, a regulação garante o acolhimento necessário para o início do tratamento.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}