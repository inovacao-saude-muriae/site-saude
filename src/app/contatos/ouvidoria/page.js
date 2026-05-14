"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import "../../../styles/ouvidoria.css";

export default function Ouvidoria() {
  // 🔝 Sempre voltar ao topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="ouvidoria">
      {/* Banner - Proporção 1140x280 */}
      <div className="banner">
        <Image
          src="/img/banner-paginas/ouvidoria.jpg"
          alt="Ouvidoria da Saúde de Muriaé"
          width={1140}
          height={280}
          layout="responsive"
          priority
          className="banner-img"
        />
      </div>

      {/* Conteúdo Centralizado */}
      <div className="conteudo">
        <h2>Ouvidoria da Saúde: canal direto com o cidadão</h2>
        <p>
          A Ouvidoria da Saúde de Muriaé é o espaço destinado a ouvir, registrar
          e encaminhar manifestações da população sobre os serviços de saúde
          oferecidos pelo município. É um canal de diálogo que fortalece a
          transparência e a participação social.
        </p>

        <h3>O que você pode registrar na Ouvidoria?</h3>
        <ul className="lista-atribuicoes">
          <li>Sugestões para melhoria dos serviços;</li>
          <li>Reclamações sobre atendimentos ou estruturas;</li>
          <li>Elogios a profissionais ou unidades;</li>
          <li>Solicitações de informações;</li>
          <li>Denúncias relacionadas à saúde pública.</li>
        </ul>

        <h3>Como entrar em contato</h3>
        <p>
          Você pode procurar a Ouvidoria presencialmente na Secretaria Municipal
          de Saúde ou utilizar os canais digitais para registrar sua manifestação:
        </p>
        
        <ul className="lista-atribuicoes">
          <li><strong>Telefone:</strong> (32) 3696-3318;</li>
          <li><strong>Email:</strong> ouvidoriasaudemuriae@hotmail.com;</li>
          <li><strong>Atendimento presencial:</strong> Avenida Maestro Sansão, 236 - Centro, Muriaé/MG.</li>
        </ul>

        <div className="nota-informativa">
          <p>
            Todas as manifestações são registradas e analisadas, garantindo
            resposta ao cidadão e encaminhamento às áreas responsáveis para melhoria contínua do SUS.
          </p>
        </div>
      </div>
    </section>
  );
}