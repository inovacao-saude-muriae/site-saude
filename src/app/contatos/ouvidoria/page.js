"use client";

import React, { useEffect } from "react";
import "../../../styles/ouvidoria.css";

export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="ouvidoria">
      {/* Banner */}
      <div className="banner">
        <img
          src="/img/banner-paginas/ouvidoria.jpg"
          alt="Ouvidoria da Saúde"
        />
      </div>

      {/* Conteúdo */}
      <div className="conteudo">
        <h2>Ouvidoria da Saúde em Muriaé</h2>
        <p>
          A <strong>Ouvidoria</strong> é um canal direto entre o cidadão e a
          gestão da saúde. É por meio dela que a população participa ativamente
          da construção de um SUS mais eficiente, registrando sugestões, elogios,
          solicitações, reclamações ou denúncias sobre os serviços oferecidos.
        </p>
        <p>
          Em Muriaé, contamos com duas ouvidorias:
          <br />• <strong>Ouvidoria Municipal de Saúde</strong>, voltada para as
          demandas locais;
          <br />• <strong>Ouvidoria do SUS (Disque 136)</strong>, que integra a
          Rede Nacional de Ouvidorias.
        </p>
        <p>
          Ambas garantem sigilo e anonimato, preservando a identidade de quem se
          manifesta. Todas as informações recebidas são tratadas com
          responsabilidade, analisadas e transformadas em dados estratégicos,
          que apoiam os gestores na melhoria dos serviços e no fortalecimento do
          controle social.
        </p>
        <p>
          A Ouvidoria é mais do que um canal de reclamações — é um instrumento de
          participação cidadã, escuta qualificada e transparência pública.
        </p>

        <h3>Nossos canais de comunicação</h3>
        <div className="cards">
          <div className="card">
            <h4>📞 Disque Ouvidoria SUS</h4>
            <p>136, opção 9</p>
          </div>
          <div className="card">
            <h4>📞 Ouvidoria Municipal</h4>
            <p>(32) 3693-3318</p>
          </div>
          <div className="card">
            <h4>📧 E-mail</h4>
            <p>ouvidoriasaudemuriae@hotmail.com</p>
          </div>
          <div className="card">
            <h4>📮 Caixas de Sugestões</h4>
            <p>Disponíveis nas Unidades Básicas de Saúde</p>
          </div>
        </div>

        <h3>Atendimento Presencial</h3>
        <p>
          <strong>Local:</strong> Centro Administrativo Municipal Presidente
          Tancredo Neves, na Secretaria Municipal de Saúde.
          <br />
          <strong>Endereço:</strong> Avenida Maestro Sansão, 236 - Centro,
          Muriaé/MG.
          <br />
          <strong>Horário:</strong> Segunda a sexta-feira, das 7h30 às 11h e das
          13h às 16h30.
        </p>
      </div>
    </section>
  );
}
