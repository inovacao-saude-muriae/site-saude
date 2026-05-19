"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import "../../../styles/laboratorio.css";

export default function LaboratorioPage() {
  // 🔝 Sempre voltar ao topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="laboratorio-layout">
      <div className="page-wrapper">
        <section className="laboratorio-page fade-in">
          
          {/* Banner Otimizado Inteiro sem Cortes (Utilizando contain) */}
          <div className="laboratorio-banner-container">
            <Image
              src="/img/banner-paginas/laboratorioMunicipal.jpg"
              alt="Laboratório Municipal de Muriaé"
              fill
              priority
              style={{ objectFit: 'contain' }}
              className="laboratorio-banner-img"
            />
          </div>

          <div className="card-explicativo">
            <h3>Diagnóstico e Apoio à Saúde da População</h3>
            <p>
              O Laboratório Municipal é responsável pela realização de exames
              laboratoriais oferecidos pelo Sistema Único de Saúde (SUS),
              desempenhando um papel essencial no diagnóstico, prevenção e
              acompanhamento de doenças.
            </p>
            <p>
              Por meio desse serviço, a população tem acesso gratuito a exames que
              auxiliam os profissionais de saúde na identificação precoce de
              alterações e na condução adequada dos tratamentos.
            </p>
          </div>

          <h3>Agendamento de Exames</h3>
          <p>Para realizar o agendamento é necessário apresentar a seguinte documentação:</p>
          <ul className="laboratorio-lista-check">
            <li>Pedido médico oficial emitido pelo SUS;</li>
            <li>Documento de identidade oficial com foto e CPF;</li>
            <li>Comprovante de residência atualizado no município;</li>
            <li>Cartão Nacional de Saúde (Cartão SUS) atualizado;</li>
            <li>Número de telefone ativo para contato com o paciente;</li>
            <li>
              <strong>No caso de menores de idade:</strong> certidão de nascimento da criança acompanhada do documento de identidade do responsável legal.
            </li>
          </ul>

          {/* Nota informativa padronizada com a Identidade Ouro */}
          <div className="nota-informativa-destaque">
            <div className="nota-ícone">i</div>
            <p>
              <strong>Atenção Gestantes:</strong> Além dos documentos citados, as gestantes deverão apresentar a 
              Caderneta de Pré-Natal do SUS para garantir o atendimento prioritário e o encaminhamento para exames específicos do período gestacional.
            </p>
          </div>

          <h3>Como realizar o agendamento</h3>
          <p>
            O agendamento é realizado exclusivamente de forma presencial no balcão de atendimento do laboratório.
          </p>

          <h3>Informações de Atendimento</h3>
          <ul className="laboratorio-lista-check">
            <li><strong>Horário de funcionamento:</strong> Segunda a sexta-feira, das 12h às 17h;</li>
            <li><strong>Telefone de contato:</strong> (32) 2020-8074;</li>
            <li><strong>Endereço institucional:</strong> Rua Coronel Izalino, s/n - Muriaé/MG.</li>
          </ul>

        </section>
      </div>
    </main>
  );
}