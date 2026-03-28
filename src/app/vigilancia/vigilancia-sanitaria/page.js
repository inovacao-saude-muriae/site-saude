"use client";

import React, { useEffect } from "react";
import "../../../styles/vigilancia.css"; // ajuste o caminho conforme sua estrutura

export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="vigilanciaSanitaria">
      {/* Banner */}
      <div className="banner">
        <img
          src="/img/banner-paginas/vigilanciaSanitaria.jpg"
          alt="Vigilância Sanitária"
        />
      </div>

      {/* Conteúdo */}
      <div className="conteudo">
        <h2>Vigilância Sanitária</h2>
        <p>
          A Vigilância Sanitária é responsável por orientar e fiscalizar
          estabelecimentos e serviços de saúde, garantindo segurança e qualidade
          para a população. Aqui você encontra informações sobre licenciamento,
          renovação de alvará e outros serviços relacionados.
        </p>

        <h3>Passo a Passo</h3>
        <ul>
          <li>
            Comparecer à Vigilância Sanitária, localizada na Rua Sinval Florêncio
            da Silva, nº 02, 2º andar – Centro (Prédio do SENAI, próximo ao
            Mercado Municipal);
          </li>
          <li>Atendimento também pelo telefone: (32) 2020-8105;</li>
          <li>
            Horário de atendimento: segunda a sexta-feira, das 7h às 11h e das
            13h às 16h.
          </li>
        </ul>

        <h3>Solicitar Mudança de Responsável Técnico</h3>
        <p>
          Estabelecimentos que necessitam alterar o profissional responsável
          devem solicitar a mudança presencialmente no setor de Vigilância
          Sanitária.
        </p>
        <ul>
          <li>
            Endereço: Rua Sinval Florêncio da Silva, nº 02, 2º andar – Centro
            (Prédio do SENAI, próximo ao Mercado Municipal);
          </li>
          <li>
            Horário de atendimento: segunda a sexta-feira, das 7h às 11h e das
            13h às 16h;
          </li>
          <li>No local, a equipe irá orientar todo o procedimento.</li>
        </ul>

        <h3>Denúncias Sanitárias</h3>
        <p>
          As denúncias sanitárias são recebidas exclusivamente pela Ouvidoria do
          SUS e pela Ouvidoria Municipal.
        </p>
        <ul>
          <li>Ouvidoria do SUS: (32) 3696-3318</li>
          <li>Ouvidoria Municipal: 136, dígito 9</li>
          <li>
            Atendimento presencial: Centro Administrativo Municipal Presidente
            Tancredo Neves, na Secretaria Municipal de Saúde. Avenida Maestro
            Sansão, 236 - Centro, Muriaé/MG. Segunda a sexta-feira, das 7h30 às
            11h e das 13h às 16h30;
          </li>
          <li>
            E-mail da Ouvidoria:{" "}
            <a href="mailto:ouvidoriasaudemuriae@hotmail.com">
              ouvidoriasaudemuriae@hotmail.com
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
