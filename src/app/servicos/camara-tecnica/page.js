"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import "../../../styles/camaraTecnica.css";

export default function CamaraTecnicaPage() {
  // Sempre voltar ao topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="camara-layout">
      <div className="page-wrapper">
        <section className="camara-page fade-in">
          {/* Banner Otimizado Inteiro sem Cortes (Utilizando contain) */}
          <div className="camara-banner-container">
            <Image
              src="/img/banner-paginas/camara_tecnica1.jpg" // Altere se tiver um arquivo de imagem específico
              alt="Câmara Técnica de Saúde"
              fill
              priority
              style={{ objectFit: "contain" }}
              className="camara-banner-img"
            />
          </div>

          <div className="card-explicativo">
            <h3>Gestão e Assessoria Especializada</h3>
            <p>
              A Câmara Técnica é um grupo de especialistas que trabalha para
              garantir que o cidadão receba o tratamento correto, unindo as
              necessidades dos pacientes às regras e recursos do SUS.
            </p>
          </div>

          <h3>Atribuições da Câmara Técnica de Saúde</h3>
          <ul className="camara-lista-check">
            <li>
              Prestar assessoria à Gestão Municipal de Saúde no processo de
              oferta de medicamentos, exames, tratamentos e materiais médicos
              que estejam fora das listas padrão e das diretrizes do SUS (PCDT),
              sempre que houver prescrição feita por profissionais habilitados.
            </li>
            <li>
              Estabelecer roteiros padronizados de atendimento para organizar as
              rotinas e os cuidados prestados na assistência à saúde.
            </li>
            <li>
              Analisar as justificativas dos profissionais para o uso de itens
              fora da rede, emitindo um parecer que recomende a continuidade do
              tratamento, a sua substituição por alternativas previstas no SUS
              ou, se necessário, o indeferimento por falta de eficácia.
            </li>
            <li>
              Promover encontros de trabalho entre os especialistas das áreas
              assistenciais para discutir e integrar as ações de saúde.
            </li>
            <li>
              Submeter anualmente à revisão pericial os pacientes com sentenças
              judiciais definitivas. A perícia deve atestar se a manutenção do
              tratamento ainda se justifica ou se houve mudança na situação real
              do paciente que permita a troca por outras terapias ou até a
              suspensão do fornecimento.
            </li>
          </ul>

          <h3>Apoio Institucional</h3>
          <p>
            Prestar auxílio técnico ao Poder Judiciário, Ministério Público,
            Defensoria Pública, OAB e à Procuradoria Geral do Município por meio
            de Acordos de Cooperação. O objetivo é fornecer laudos e perícias
            que garantam o cumprimento dos protocolos do SUS e a adoção de
            terapias alternativas, evitando gastos desnecessários para o
            município.
          </p>

          {/* Nota informativa padronizada com a Identidade Ouro */}
          <div className="nota-informativa-destaque">
            <div className="nota-ícone">i</div>
            <p>
              Todas as pessoas que recebem remédios, materiais ou tratamentos
              pelo SUS poderão passar por perícias periódicas, seguindo as
              regras e critérios definidos pela Câmara Técnica de Saúde.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
