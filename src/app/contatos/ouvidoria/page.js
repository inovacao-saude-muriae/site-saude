"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import "../../../styles/ouvidoria.css";

export default function OuvidoriaPage() {
  // 🔝 Sempre voltar ao topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="ouvidoria-layout">
      <div className="page-wrapper">
        <section className="ouvidoria-page fade-in">
          
          {/* Banner Otimizado Inteiro sem Cortes (Utilizando contain) */}
          <div className="ouvidoria-banner-container">
            <Image
              src="/img/banner-paginas/ouvidoria.jpg"
              alt="Ouvidoria da Saúde de Muriaé"
              fill
              priority
              style={{ objectFit: 'contain' }}
              className="ouvidoria-banner-img"
            />
          </div>

          <div className="card-explicativo">
            <h3>Canal Direto de Diálogo com o Cidadão</h3>
            <p>
              A Ouvidoria da Saúde de Muriaé é o espaço institucional destinado a ouvir, registrar
              e encaminhar as manifestações da população sobre os serviços de saúde oferecidos pelo município. 
              Trata-se de uma ferramenta essencial de gestão que fortalece o controle social, a transparência pública 
              e a participação ativa do cidadão na melhoria do SUS.
            </p>
          </div>

          <h3>O que você pode registrar na Ouvidoria?</h3>
          <ul className="ouvidoria-lista-check">
            <li><strong>Sugestões:</strong> Ideias e propostas para a melhoria dos serviços de saúde;</li>
            <li><strong>Reclamações:</strong> Relatos de insatisfação sobre atendimentos, fluxos ou estruturas físicas;</li>
            <li><strong>Elogios:</strong> Demonstrações de satisfação e reconhecimento a profissionais ou unidades;</li>
            <li><strong>Solicitações:</strong> Pedidos de esclarecimentos ou acesso a informações institucionais;</li>
            <li><strong>Denúncias:</strong> Comunicação de irregularidades ou atos ilícitos na saúde pública.</li>
          </ul>

          <h3>Como entrar em contato</h3>
          <p>
            Você pode procurar o serviço presencialmente na sede da Secretaria Municipal de Saúde 
            ou utilizar os canais remotos listados abaixo para formalizar a sua manifestação:
          </p>
          
          <ul className="ouvidoria-lista-check">
            <li><strong>Contato Telefônico:</strong> (32) 3696-3318;</li>
            <li><strong>Correio Eletrônico:</strong> ouvidoriasaudemuriae@hotmail.com;</li>
            <li><strong>Atendimento Presencial:</strong> Avenida Maestro Sansão, 236 - Centro, Muriaé/MG.</li>
          </ul>

          {/* Nota informativa padronizada com a Identidade Ouro */}
          <div className="nota-informativa-destaque">
            <div className="nota-ícone">i</div>
            <p>
              Todas as manifestações acolhidas são registradas nos sistemas oficiais, auditadas e analisadas, 
              garantindo um posicionamento resolutivo ao cidadão e o encaminhamento técnico interno para o aperfeiçoamento contínuo da rede assistencial.
            </p>
          </div>

        </section>
      </div>
    </main>
  );
}