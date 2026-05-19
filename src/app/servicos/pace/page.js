"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import "../../../styles/doacao.css";

export default function DoacaoPage() {
  // 🔝 Sempre voltar ao topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="doacao-layout">
      <div className="page-wrapper">
        <section className="doacao-page fade-in">
          
          {/* Banner Otimizado Inteiro sem Cortes (Utilizando contain) */}
          <div className="doacao-banner-container">
            <Image
              src="/img/banner-paginas/pace.jpg"
              alt="Doação de Sangue e Medula Óssea"
              fill
              priority
              style={{ objectFit: 'contain' }}
              className="doacao-banner-img"
            />
          </div>

          <div className="card-explicativo">
            <h3>Um Gesto de Solidariedade que Salva Vidas</h3>
            <p>
              A doação de sangue e de medula óssea é um ato voluntário que
              pode transformar e salvar vidas. Muitas pessoas enfrentam doenças
              graves e dependem de transfusões ou de um transplante de medula para
              sobreviver. Um simples ato de generosidade pode fazer toda a diferença
              para quem está lutando por um futuro.
            </p>
            <p>
              O processo de doação é seguro, rápido e traz esperança para
              aqueles que dependem dessa ajuda. Se você está dentro dos critérios de saúde, 
              pode se tornar um doador e fazer parte dessa corrente de cuidado.
            </p>
          </div>

          <h3>Doação de Sangue</h3>
          <p>Para doar sangue, os voluntários devem cumprir os seguintes pré-requisitos:</p>
          <ul className="doacao-lista-check">
            <li>Apresentar documento de identidade oficial com foto e CPF;</li>
            <li>Estar em excelentes condições gerais de saúde;</li>
            <li>Ter entre 16 e 69 anos (menores de 18 anos necessitam de autorização formal dos responsáveis);</li>
            <li>Apresentar peso corporal acima de 50 kg;</li>
            <li>Não estar em jejum absoluto;</li>
            <li>Evitar a ingestão de alimentos gordurosos nas 3 horas que antecedem a doação.</li>
          </ul>

          <h3>Doação de Medula Óssea</h3>
          
          {/* Nota informativa padronizada com a Identidade Ouro para Localização e Horário */}
          <div className="nota-informativa-destaque">
            <div className="nota-ícone">i</div>
            <p>
              <strong>Onde doar em Muriaé:</strong> Toda quarta-feira, das 7h30 às 15h, no Posto Avançado de Coleta 
              Externa (PACE). <br />
              Endereço: Rua Dr. Ivan Américo / R. Menotti Porcaro, s/n – Centro, Muriaé (Prédio do antigo Viva a Vida).
            </p>
          </div>

          <p style={{ marginTop: '25px' }}>
            Pessoas saudáveis entre 18 e 35 anos podem se cadastrar como doadoras de medula
            óssea, desde que não apresentem histórico de doenças infecciosas transmissíveis ou patologias hematológicas.
          </p>

          <h4>Como funciona o cadastro</h4>
          <p>
            O cadastro para doação de medula óssea é simples, seguro e rápido. No local de
            coleta, uma equipe de enfermagem realiza a retirada de uma pequena amostra de sangue (cerca de 5 ml) para
            identificar as características genéticas de histocompatibilidade (teste de HLA) do doador. 
          </p>
          
          <p>
            Essas informações são inseridas com total segurança no Registro Nacional de Doadores de Medula 
            Óssea (REDOME) e cruzadas continuamente com os dados de pacientes que necessitam do transplante. 
            Havendo compatibilidade futura com algum paciente, o doador é imediatamente contatado para dar continuidade ao processo.
          </p>
        </section>
      </div>
    </main>
  );
}