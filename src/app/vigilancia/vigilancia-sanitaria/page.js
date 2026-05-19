"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import "../../../styles/vigilancia.css";

export default function VigilanciaSanitariaPage() {
  // 🔝 Sempre voltar ao topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="vigilancia-layout">
      <div className="page-wrapper">
        <section className="vigilancia-page fade-in">
          
          {/* Banner Otimizado Inteiro sem Cortes (Utilizando contain) */}
          <div className="vigilancia-banner-container">
            <Image
              src="/img/banner-paginas/vigilanciaSanitaria.jpg"
              alt="Vigilância Sanitária de Muriaé"
              fill
              priority
              style={{ objectFit: 'contain' }}
              className="vigilancia-banner-img"
            />
          </div>

          <div className="card-explicativo">
            <p>
              A Vigilância Sanitária é responsável por orientar e fiscalizar
              estabelecimentos e serviços de saúde ou de interesse à saúde, garantindo segurança, 
              conformidade com as normas vigentes e qualidade para toda a população de Muriaé. 
              Aqui você encontra informações institucionais sobre licenciamento, renovação de alvará e outros serviços regulados.
            </p>
          </div>

          <h3>Informações de Atendimento</h3>
          <ul className="vigilancia-lista-check">
            <li>
              <strong>Endereço físico:</strong> Rua Sinval Florêncio da Silva, nº 02, 2º andar – Centro (Prédio do SENAI, próximo ao Mercado Municipal);
            </li>
            <li><strong>Telefone de contato:</strong> (32) 2020-8105;</li>
            <li>
              <strong>Horário de expediente:</strong> Segunda a sexta-feira, das 7h às 11h e das 13h às 16h.
            </li>
          </ul>

          <h3>Solicitar Mudança de Responsável Técnico</h3>
          <p>
            Os estabelecimentos regulados que necessitam alterar o profissional responsável técnico (RT) 
            devem formalizar a solicitação presencialmente no setor da Vigilância. A equipe técnica do município 
            irá fornecer o checklist de documentos e orientar todo o procedimento cabível no próprio local.
          </p>

          <h3>Denúncias Sanitárias</h3>
          
          {/* Nota informativa padronizada com a Identidade Ouro */}
          <div className="nota-informativa-destaque">
            <div className="nota-ícone">i</div>
            <p>
              <strong>Canais Oficiais:</strong> As denúncias sanitárias não são processadas diretamente no balcão técnico. 
              Elas devem ser protocoladas e recebidas exclusivamente pela Ouvidoria do SUS e pela Ouvidoria Municipal para triagem legal.
            </p>
          </div>

          <p style={{ marginTop: '25px' }}>
            Caso presencie irregularidades em estabelecimentos comerciais ou de saúde, utilize os contatos oficiais de ouvidoria listados abaixo:
          </p>

          <ul className="vigilancia-lista-check">
            <li><strong>Ouvidoria do SUS Regional:</strong> (32) 3696-3318;</li>
            <li><strong>Ouvidoria Municipal Geral:</strong> Telefone 136, dígito 9;</li>
            <li>
              <strong>Atendimento presencial da Ouvidoria:</strong> Secretaria Municipal de Saúde. Avenida Maestro Sansão, 236 - Centro. Segunda a sexta-feira, das 7h30 às 11h e das 13h às 16h30;
            </li>
            <li>
              <strong>Canal digital via E-mail:</strong> ouvidoriasaudemuriae@hotmail.com
            </li>
          </ul>

        </section>
      </div>
    </main>
  );
}