"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "../../../styles/vacina.css";

const DADOS_VACINA = {
  antirrabica: {
    titulo: "Vacina Antirrábica",
    descricao: "A vacina antirrábica é usada para prevenir a raiva, uma doença fatal transmitida por mordidas ou arranhões de animais infectados.",
    passos: [
      "UBS Safira e UBS São Francisco: Segunda a sexta, 08h às 16h30.",
      "Hospital São Paulo e UPA: Fins de semana e feriados (casos de urgência)."
    ],
    requisitos: ["Pedido médico regulado", "Documento oficial (CPF)", "Cartão Nacional de Saúde (SUS)", "Cartão de Vacina físico"]
  },
  caderneta: {
    titulo: "Vacinação de Rotina (Caderneta)",
    descricao: "Vacinas de rotina aplicadas conforme as diretrizes do Calendário Nacional de Vacinação do Ministério da Saúde para todas as faixas etárias.",
    passos: ["Comparecer à Unidade Básica de Saúde (UBS) mais próxima de sua residência portando os documentos."],
    requisitos: ["Documento oficial (CPF)", "Cartão Nacional de Saúde (SUS)", "Caderneta de Vacinação original"]
  },
  covid: {
    titulo: "Vacinação contra Covid-19",
    descricao: "Vacinação e esquemas vacinais disponíveis para grupos prioritários e doses de reforço conforme notas técnicas vigentes.",
    passos: ["Comparecer à Central de Vacinação (Av. Maestro Sansão, 236): Segunda a sexta-feira, das 08h às 16h30."],
    requisitos: ["Documento de identidade oficial com foto", "CPF ou Cartão SUS", "Cartão de Vacina anterior", "Comprovante de grupo prioritário laudado (se aplicável)"]
  },
  dengue: {
    titulo: "Vacina contra Dengue",
    descricao: "Imunização focada na proteção coletiva e na redução de hospitalizações severas e óbitos decorrentes da doença.",
    passos: ["Disponível para crianças e adolescentes de 10 a 14 anos nas UBS de referência: Segunda a sexta-feira, das 08h às 16h30."],
    requisitos: ["Idade comprovada entre 10 e 14 anos", "Caderneta de Vacinação", "CPF", "Cartão SUS"],
    alerta: "Imunizante não indicado para menores de 4 anos, idosos acima de 60 anos, gestantes, lactantes ou indivíduos imunocomprometidos."
  }
};

export default function VacinaPage() {
  const [ativo, setAtivo] = useState("antirrabica");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const info = DADOS_VACINA[ativo];

  return (
    <main className="vacina-layout">
      <div className="page-wrapper">
        <section className="vacina-page fade-in">
          
          {/* Banner Otimizado Inteiro sem Cortes (Utilizando contain) */}
          <div className="vacina-banner-container">
            <Image
              src="/img/banner-paginas/Vacina.png"
              alt="Vacinação em Muriaé"
              fill
              priority
              style={{ objectFit: 'contain' }}
              className="vacina-banner-img"
            />
          </div>

          <div className="card-explicativo">
            <h3>Proteção e Imunização para toda a População</h3>
            <p>
              A vacinação é uma das estratégias mais eficazes para proteger a saúde da população e promover uma sociedade mais segura e saudável. 
              Além de prevenir doenças graves, contribui para a redução da circulação de vírus e bactérias, protegendo especialmente as pessoas mais vulneráveis 
              e aquelas que não podem se vacinar por restrições médicas. No Brasil, a política de vacinação é coordenada pelo Programa Nacional de Imunizações 
              (PNI) do SUS, garantindo acesso integral e gratuito a uma ampla oferta de imunobiológicos.
            </p>
            <p>
              Atualmente, são disponibilizados 47 itens, incluindo vacinas, soros e imunoglobulinas. As vacinas contemplam tanto o Calendário Nacional 
              de Vacinação quanto às imunizações especiais destinadas a pessoas com condições clínicas crônicas ou imunossuprimidas, oferecidas nos 
              Centros de Referência para Imunobiológicos Especiais (CRIE).
            </p>
          </div>

          {/* Menu de Navegação Interna Customizado */}
          <nav className="container-botoes-vacina">
            <div className="grade-botoes-vacina">
              {Object.keys(DADOS_VACINA).map((key) => (
                <button
                  key={key}
                  onClick={() => setAtivo(key)}
                  className={ativo === key ? "botao-vacina active" : "botao-vacina"}
                >
                  {DADOS_VACINA[key].titulo.replace("Vacina ", "")}
                </button>
              ))}
              <Link href="/servicos/vacina/calendario-vacinal" className="botao-vacina-link">
                Calendário Oficial
              </Link>
            </div>
          </nav>

          {/* Área de Conteúdo Dinâmico */}
          <article className="cartao-informativo-dinamico">
            <div className="info-header-vacina">
              <h3>{info.titulo}</h3>
              <p>{info.descricao}</p>
            </div>

            <div className="info-detalhes-vacina">
              <h4>Como Proceder e Locais de Atendimento:</h4>
              <ul className="vacina-lista-check">
                {info.passos.map((passo, i) => <li key={i}>{passo}</li>)}
              </ul>

              <h4>Documentação e Requisitos Exigidos:</h4>
              <ul className="vacina-lista-check">
                {info.requisitos.map((req, i) => <li key={i}>{req}</li>)}
              </ul>
            </div>

            {info.alerta && (
              <div className="nota-informativa-destaque" style={{ marginTop: '30px' }}>
                <div className="nota-ícone">i</div>
                <p><strong>Atenção às Contraindicações:</strong> {info.alerta}</p>
              </div>
            )}
          </article>

        </section>
      </div>
    </main>
  );
}