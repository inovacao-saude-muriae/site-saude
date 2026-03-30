"use client";

import React, { useEffect } from "react";
import { FaLaptop, FaApple, FaGooglePlay } from "react-icons/fa";
import "../../../styles/saudeDigital.css"; // ajuste o caminho conforme sua estrutura

export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="saudeDigital">
      {/* Banner */}
      <div className="banner">
        <img
          src="/img/banner-paginas/saudedigital.jpg"
        />
      </div>

      {/* Conteúdo */}
      <div className="conteudo">
        <h2>Saúde Digital Muriaé</h2>
        <p>
          A Prefeitura Municipal de Muriaé, por meio da Secretaria Municipal de
          Saúde, lança oficialmente o <strong>Saúde Digital Muriaé</strong>, uma
          nova plataforma que amplia o acesso da população às informações e aos
          serviços da rede pública de saúde do município.
        </p>
        <p>
          A iniciativa representa mais um avanço no processo de modernização da
          gestão, fortalecendo a transparência, a organização dos atendimentos e
          a aproximação entre o cidadão e o Sistema Único de Saúde.
        </p>

        <h3>Funcionalidades</h3>
        <ul>
          <li>Acompanhamento de consultas agendadas (data, horário, local e profissional)</li>
          <li>Ferramenta de confirmação de consultas</li>
          <li>Consulta à posição na fila de espera para procedimentos</li>
          <li>Lista atualizada de médicos, hospitais e unidades de saúde</li>
          <li>Acesso seguro a dados pessoais e familiares cadastrados</li>
          <li>Divulgação de notícias, campanhas e comunicados oficiais</li>
        </ul>

        <h3>Acesso</h3>
        <p>
          O acesso à plataforma será realizado mediante CPF e senha disponibilizada
          pela Unidade Básica de Saúde (UBS), garantindo a proteção das informações
          e o uso responsável dos dados.
        </p>

        {/* Seção de Download */}
        <section className="susDownload">
          <h2>Baixe o Meu SUS Digital</h2>
          <div className="download-buttons">
            <a
              href="https://apps.apple.com/br/app/meu-sus-digital/id1045754608"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn apple"
            >
              <FaApple size={28} /> App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=br.gov.datasus.cnsdigital"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn google"
            >
              <FaGooglePlay size={28} /> Google Play
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
