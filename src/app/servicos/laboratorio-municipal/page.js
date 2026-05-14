"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import "../../../styles/laboratorio.css";

export default function Page() {
  // 🔝 Sempre voltar ao topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="laboratorio">
      {/* Banner - Proporção 1140x280 */}
      <div className="banner">
        <Image
          src="/img/banner-paginas/laboratorioMunicipal.jpg"
          alt="Laboratório Municipal de Muriaé"
          width={1140}
          height={280}
          layout="responsive"
          priority
          className="banner-img"
        />
      </div>

      {/* Conteúdo Centralizado */}
      <div className="conteudo">
        <h2>Laboratório Municipal</h2>
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

        <h3>Agendamento de Exames</h3>
        <p>Para realizar o agendamento é necessário apresentar:</p>
        <ul className="lista-atribuicoes">
          <li>Pedido médico do SUS;</li>
          <li>Documento de identidade com foto e CPF;</li>
          <li>Comprovante de residência atualizado;</li>
          <li>Cartão do SUS;</li>
          <li>Telefone de contato do paciente;</li>
          <li>
            No caso de menores de idade: certidão de nascimento da criança e
            documento de identidade do responsável.
          </li>
        </ul>

        <div className="nota-informativa">
          <p>
            <strong>Gestantes:</strong> Além dos documentos citados, as gestantes deverão apresentar a
            Caderneta de Pré-Natal do SUS para prioridade e exames específicos.
          </p>
        </div>

        <h3>Como realizar o agendamento</h3>
        <p>O agendamento é realizado presencialmente.</p>

        <h3>Informações de Atendimento</h3>
        <ul className="lista-atribuicoes">
            <li><strong>Horário de trabalho:</strong> Segunda a sexta-feira, das 12h às 17h;</li>
            <li><strong>Telefone:</strong> (32) 2020-8074;</li>
            <li><strong>Endereço:</strong> Rua Coronel Izalino, s/n.</li>
        </ul>
      </div>
    </section>
  );
}