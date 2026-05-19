"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import "../../../styles/atendimentoDomiciliar.css";

export default function AtendimentoDomiciliarPage() {
  // 🔝 Sempre voltar ao topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="sad-layout">
      <div className="page-wrapper">
        <section className="sad-page fade-in">
          {/* Banner Inteiro sem Cortes (Utilizando contain) */}
          <div className="sad-banner-container">
            <Image
              src="/img/banner-paginas/atendimentoDomiciliar.jpg"
              alt="Serviço de Atendimento Domiciliar (SAD)"
              fill
              priority
              className="sad-banner-img"
            />
          </div>

          <div className="card-explicativo">
            <h3>Cuidado em casa para quem mais precisa</h3>
            <p>
              O Serviço de Atendimento Domiciliar (SAD) destina-se a pessoas
              acamadas ou com dificuldade de mobilidade, de forma temporária ou
              permanente. Nesse modelo de cuidado, a equipe de saúde realiza o
              atendimento na própria casa do paciente, garantindo acompanhamento
              contínuo e humanizado.
            </p>
          </div>

          <h3>Passo a Passo para Inclusão no SAD</h3>
          <ul className="sad-lista-check">
            <li>
              O familiar ou responsável deve procurar a UBS onde o paciente já é
              atendido;
            </li>
            <li>
              Um profissional da equipe preencherá uma ficha de pedido para
              inclusão;
            </li>
            <li>
              A ficha será encaminhada à equipe do SAD, que fará a avaliação.
            </li>
          </ul>

          <h3>Requisitos para Acessar o Serviço</h3>
          <ul className="sad-lista-check">
            <li>Morar em Muriaé;</li>
            <li>Idade a partir de 01 mês de vida;</li>
            <li>Ser usuário do SUS;</li>
            <li>
              Apresentar quadro clínico que justifique atendimento domiciliar;
            </li>
            <li>Apresentar CPF, RG e Cartão do SUS atualizado;</li>
            <li>Comprovante de residência no município.</li>
          </ul>

          {/* Nota informativa padronizada com o ícone oficial */}
          <div className="nota-informativa-destaque">
            <div className="nota-ícone">i</div>
            <p>
              <strong>Comunicação com o Usuário:</strong> Após o encaminhamento,
              o Agente Comunitário de Saúde entrará em contato com a família
              para informar sobre a visita de avaliação. Caso o paciente seja
              admitido, a equipe elaborará um plano de cuidados individualizado.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
