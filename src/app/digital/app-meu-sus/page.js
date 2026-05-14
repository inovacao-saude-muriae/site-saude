"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { FaLaptop, FaApple, FaGooglePlay } from "react-icons/fa";
import "../../../styles/susDigital.css";

export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="meu-sus-digital">
      {/* Banner - Proporção 1140x280 */}
      <div className="banner">
        <Image
          src="/img/banner-paginas/susdigital.jpg"
          alt="Meu SUS Digital"
          width={1140}
          height={280}
          layout="responsive"
          priority
          className="banner-img"
        />
      </div>

      {/* Conteúdo Centralizado */}
      <div className="conteudo">
        <h2>Meu SUS Digital</h2>
        <p>
          O <strong>Meu SUS Digital</strong> é a evolução do antigo Conecte SUS
          e hoje funciona como a principal porta de acesso digital ao Sistema
          Único de Saúde (SUS), permitindo que cidadãos acompanhem consultas,
          vacinas, exames e até certificados de saúde diretamente pelo celular
          ou computador.
        </p>
        <p>
          Ele está disponível gratuitamente em versão web, Android e iOS, com
          login via <strong>Gov.br</strong> para garantir segurança e integração com a Rede
          Nacional de Dados em Saúde (RNDS).
        </p>

        <h3>Principais Funcionalidades</h3>
        <ul className="lista-atribuicoes">
          <li>
            <strong>Histórico clínico completo:</strong> consultas, internações e procedimentos realizados no SUS.
          </li>
          <li>
            <strong>Carteira de Vacinação Digital:</strong> registro oficial de todas as vacinas aplicadas.
          </li>
          <li>
            <strong>Resultados de exames laboratoriais:</strong> integrados à RNDS, acessíveis em tempo real.
          </li>
          <li>
            <strong>Receitas médicas e medicamentos:</strong> acompanhamento de prescrições e dispensações.
          </li>
          <li>
            <strong>Fila de transplantes:</strong> consulta à posição e estimativa de tempo de espera.
          </li>
          <li>
            <strong>Documentos digitais:</strong> Certificado Internacional de Vacinação e outros.
          </li>
        </ul>

        <h3>Segurança e Acesso</h3>
        <div className="nota-informativa">
          <p>
            O login é realizado via <strong>Gov.br</strong> (nível prata ou ouro),
            garantindo autenticação segura e rastreabilidade dos seus dados de saúde.
          </p>
        </div>

        {/* Seção de Download Estilizada */}
        <section className="sus-download">
          <h3>Baixe ou Acesse o Meu SUS Digital</h3>
          <div className="download-buttons">
            <a
              href="https://meususdigital.saude.gov.br/login"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn web"
            >
              <FaLaptop size={22} /> Versão Web
            </a>
            <a
              href="https://apps.apple.com/br/app/meu-sus-digital/id1045754608"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn apple"
            >
              <FaApple size={24} /> App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=br.gov.datasus.cnsdigital"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn google"
            >
              <FaGooglePlay size={22} /> Google Play
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}