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
    requisitos: ["Pedido médico", "CPF", "Cartão SUS", "Cartão de Vacina"]
  },
  caderneta: {
    titulo: "Vacinação de Rotina (Caderneta)",
    descricao: "Vacinas conforme o Calendário Nacional de Vacinação para todas as faixas etárias.",
    passos: ["Comparecer à Unidade Básica de Saúde (UBS) mais próxima de sua residência."],
    requisitos: ["CPF", "Cartão SUS", "Caderneta de Vacinação"]
  },
  covid: {
    titulo: "Vacinação contra Covid-19",
    descricao: "Vacinação disponível para grupos prioritários e doses de reforço conforme orientações vigentes.",
    passos: ["Comparecer à Central de Vacinação (Av. Maestro Sansão, 236): Segunda a sexta, 08h às 16h30."],
    requisitos: ["Documento com foto", "CPF ou Cartão SUS", "Cartão de Vacina", "Comprovante de grupo prioritário (se aplicável)"]
  },
  dengue: {
    titulo: "Vacina contra Dengue",
    descricao: "Imunização focada na redução de hospitalizações e óbitos pela doença.",
    passos: ["Disponível para crianças e adolescentes de 10 a 14 anos nas UBS de referência: 08h às 16h30."],
    requisitos: ["Idade entre 10 e 14 anos", "Caderneta de Vacinação", "CPF", "Cartão SUS"],
    alerta: "Não indicada para menores de 4 anos, maiores de 60, gestantes ou imunocomprometidos."
  }
};

export default function VacinaPage() {
  const [ativo, setAtivo] = useState("antirrabica");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const info = DADOS_VACINA[ativo];

  return (
    <section className="vacina-page">
      {/* Banner Padronizado */}
        <div className="banner">
          <Image
            src="/img/banner-paginas/Vacina.png"
            alt="Vacinação em Muriaé"
            width={1140}
            height={280}
            priority
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            className="banner-img"
          />
        </div>

      <div className="conteudo-introducao">
        <h2>Imunização: Proteção para todos</h2>
        <p>
          A vacinação é uma das estratégias mais eficazes para proteger a saúde da população e promover uma sociedade mais segura e saudável. 
          Além de prevenir doenças graves, contribui para a redução da circulação de vírus e bactérias, protegendo especialmente as pessoas mais vulneráveis ​
          ​e aquelas que não podem se vacinar por questões de saúde. No Brasil, uma política de vacinação é coordenada pelo Programa Nacional de Imunizações 
          (PNI), que, por meio do Sistema Único de Saúde (SUS), garante acesso gratuito a uma ampla oferta de imunobiológicos. 
          Atualmente, são disponibilizados 47 itens, incluindo vacinas, soros e imunoglobulinas A
          s vacinas contemplam tanto o Calendário Nacional de Vacinação que prevê a aplicação de doses ao longo 
          de todas as fases da vida quanto às imunizações específicas destinadas a pessoas com condições clínicas especiais, 
          como pacientes com doenças crônicas ou imunossuprimidos, oferecidas nos Centros de Referência para Imunobiológicos Especiais 
          (CRIE). Também integramos o programa de vacinas contra a COVID-19 e outras indicadas em situações específicas. 
          Além da vacinação de rotina, o PNI é responsável pela realização de campanhas anuais, fundamentais para ampliar a 
          cobertura vacinal e garantir a proteção coletiva. Esse trabalho é desenvolvido de forma integrada entre União, estados, 
          municípios e o Distrito Federal, fortalecendo as ações de prevenção em todo o país..
        </p>
      </div>

      {/* Menu de Navegação Interna */}
      <nav className="container-botoes">
        <div className="grade-botoes">
          {Object.keys(DADOS_VACINA).map((key) => (
            <button
              key={key}
              onClick={() => setAtivo(key)}
              className={ativo === key ? "botao-item ativo" : "botao-item"}
            >
              {DADOS_VACINA[key].titulo.replace("Vacina ", "")}
            </button>
          ))}
          <Link href="/servicos/vacina/calendario-vacinal" className="botao-link">
            Calendário Oficial
          </Link>
        </div>
      </nav>

      {/* Área de Conteúdo Dinâmico */}
      <article className="cartao-informativo">
        <div className="info-header">
          <h3>{info.titulo}</h3>
          <p>{info.descricao}</p>
        </div>

        <div className="info-detalhes">
          <h4>Como proceder:</h4>
          <ul className="lista-atribuicoes">
            {info.passos.map((passo, i) => <li key={i}>{passo}</li>)}
          </ul>

          <h4>Documentação necessária:</h4>
          <ul className="lista-atribuicoes">
            {info.requisitos.map((req, i) => <li key={i}>{req}</li>)}
          </ul>
        </div>

        {info.alerta && (
          <div className="nota-informativa">
            <p><strong>Atenção:</strong> {info.alerta}</p>
          </div>
        )}
      </article>
    </section>
  );
}