"use client";

import React, { useEffect } from "react";
import { FaLaptop, FaApple, FaGooglePlay } from "react-icons/fa";
import "../../../styles/susDigital.css"; // ajuste o caminho conforme sua estrutura

export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="meuSusDigital">
      {/* Banner */}
      <div className="banner">
        <img
          src="/img/banner-paginas/susdigital.jpg"
          alt="Meu SUS Digital"
        />
        <img
          src="/img/banner-paginas/meu-sus-digital.jpg"
          alt="Meu SUS Digital"
        />
      </div>

      {/* Conteúdo */}
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
          login via Gov.br para garantir segurança e integração com a Rede
          Nacional de Dados em Saúde (RNDS).
        </p>

        <h3>📲 Principais Funcionalidades</h3>
        <ul>
          <li>
            <strong>Histórico clínico completo:</strong> consultas, internações
            e procedimentos realizados no SUS.
          </li>
          <li>
            <strong>Carteira de Vacinação Digital:</strong> registro oficial de
            todas as vacinas aplicadas, com emissão de certificados em diferentes
            idiomas.
          </li>
          <li>
            <strong>Resultados de exames laboratoriais:</strong> integrados à
            RNDS, acessíveis em tempo real.
          </li>
          <li>
            <strong>Receitas médicas e medicamentos:</strong> acompanhamento de
            prescrições e dispensações, incluindo Farmácia Popular.
          </li>
          <li>
            <strong>Fila de transplantes:</strong> consulta à posição e
            estimativa de tempo de espera.
          </li>
          <li>
            <strong>Documentos e certificados digitais:</strong> como Certificado
            Internacional de Vacinação ou autorização de retirada de absorventes.
          </li>
        </ul>

        <h3>🔐 Segurança e Acesso</h3>
        <ul>
          <li>
            Login realizado via <strong>Gov.br</strong> (nível prata ou ouro),
            garantindo autenticação segura.
          </li>
          <li>
            Dados atualizados pela <strong>Rede Nacional de Dados em Saúde
            (RNDS)</strong>, com rastreabilidade e auditoria.
          </li>
          <li>
            Possibilidade de acesso a informações de familiares, promovendo
            cuidado compartilhado.
          </li>
        </ul>

        {/* Seção de Download */}
        <section className="susDownload">
          <h3>Baixe o Meu SUS Digital</h3>
          <div className="download-buttons">
            <a
              href="https://meususdigital.saude.gov.br/login"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn web"
            >
              <FaLaptop size={28} /> Versão Web
            </a>
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
