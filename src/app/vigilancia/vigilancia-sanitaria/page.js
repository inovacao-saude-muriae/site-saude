"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import "../../../styles/vigilancia.css";

export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="vigilancia-sanitaria">
      {/* Banner - Proporção 1140x280 */}
      <div className="banner">
        <Image
          src="/img/banner-paginas/vigilanciaSanitaria.jpg"
          alt="Vigilância Sanitária de Muriaé"
          width={1140}
          height={280}
          layout="responsive"
          priority
          className="banner-img"
        />
      </div>

      {/* Conteúdo Centralizado */}
      <div className="conteudo">
        <h2>Vigilância Sanitária</h2>
        <p>
          A Vigilância Sanitária é responsável por orientar e fiscalizar
          estabelecimentos e serviços de saúde, garantindo segurança e qualidade
          para a população. Aqui você encontra informações sobre licenciamento,
          renovação de alvará e outros serviços relacionados.
        </p>

        <h3>Informações de Atendimento</h3>
        <ul className="lista-atribuicoes">
          <li>
            <strong>Endereço:</strong> Rua Sinval Florêncio da Silva, nº 02, 2º andar – Centro (Prédio do SENAI, próximo ao Mercado Municipal);
          </li>
          <li><strong>Telefone:</strong> (32) 2020-8105;</li>
          <li>
            <strong>Horário:</strong> Segunda a sexta-feira, das 7h às 11h e das 13h às 16h.
          </li>
        </ul>

        <h3>Solicitar Mudança de Responsável Técnico</h3>
        <p>
          Estabelecimentos que necessitam alterar o profissional responsável
          devem solicitar a mudança presencialmente no setor. A equipe técnica irá orientar todo o procedimento no local.
        </p>

        <h3>Denúncias Sanitárias</h3>
        <div className="nota-informativa">
          <p>
            As denúncias sanitárias são recebidas exclusivamente pela Ouvidoria do
            SUS e pela Ouvidoria Municipal.
          </p>
        </div>

        <ul className="lista-atribuicoes">
          <li><strong>Ouvidoria do SUS:</strong> (32) 3696-3318;</li>
          <li><strong>Ouvidoria Municipal:</strong> 136, dígito 9;</li>
          <li>
            <strong>Atendimento presencial:</strong> Secretaria Municipal de Saúde. Avenida Maestro Sansão, 236 - Centro. Segunda a sexta-feira, das 7h30 às 11h e das 13h às 16h30;
          </li>
          <li>
            <strong>E-mail:</strong> ouvidoriasaudemuriae@hotmail.com
          </li>
        </ul>
      </div>
    </section>
  );
}