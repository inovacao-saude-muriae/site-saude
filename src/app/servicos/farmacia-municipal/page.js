"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import "../../../styles/farmacia.css";

export default function Page() {
  // 🔝 Sempre voltar ao topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="farmacia">
      {/* Banner - Proporção 1140x280 */}
      <div className="banner">
        <Image
          src="/img/banner-paginas/farmaciaMunicipal.jpg"
          alt="Assistência Farmacêutica do SUS em Muriaé"
          width={1140}
          height={280}
          layout="responsive"
          priority
          className="banner-img"
        />
      </div>

      {/* Conteúdo Centralizado */}
      <div className="conteudo">
        <h2>Assistência Farmacêutica do SUS em Muriaé</h2>
        <p>
          A Assistência Farmacêutica garante à população o acesso gratuito a
          medicamentos por meio do Sistema Único de Saúde (SUS). Esses
          medicamentos são organizados em diferentes componentes, de acordo com
          o tipo de tratamento, a complexidade das doenças e as diretrizes do
          Ministério da Saúde.
        </p>

        <h3>Medicamentos da Assistência Farmacêutica Básica</h3>
        <p>
          São medicamentos essenciais disponibilizados gratuitamente pelo SUS
          para o tratamento das doenças mais comuns. Eles fazem parte da Relação
          Municipal de Medicamentos Essenciais (REMUME).
        </p>
        
        <h4>Quem pode retirar</h4>
        <p>
          Pacientes com receita médica válida e que atendem aos critérios de uso
          de medicamentos disponíveis na rede pública.
        </p>

        <h4>Como funciona a retirada</h4>
        <ul className="lista-atribuicoes">
          <li>De segunda a sexta-feira, das 7h às 17h;</li>
          <li>Receita médica atualizada;</li>
          <li>Documento de identificação com foto;</li>
          <li>CPF e Cartão do SUS;</li>
          <li>Comprovante de residência atualizado.</li>
        </ul>

        <h3>Componente Especializado (CEAF)</h3>
        <p>
          Programa do SUS que garante acesso a medicamentos de alto custo usados
          em tratamentos ambulatoriais, seguindo critérios dos Protocolos
          Clínicos e Diretrizes Terapêuticas (PCDT).
        </p>

        <h4>Como funciona a retirada</h4>
        <ul className="lista-atribuicoes">
          <li>Dispensação mensal, a cada 30 dias;</li>
          <li>Horário: das 7h às 15h;</li>
          <li>Último dia de atendimento do mês: dia 23;</li>
          <li>Retirada apenas pelo paciente cadastrado ou representante legal.</li>
        </ul>

        <div className="nota-informativa">
          <p>
            <strong>Atenção:</strong> Para o Componente Especializado, é necessário que o paciente 
            esteja enquadrado nos critérios dos PCDTs, apresentando diagnóstico e documentação específica.
          </p>
        </div>

        <h3>Componente Estratégico (CESAF)</h3>
        <p>
          Reúne medicamentos para prevenção, controle e tratamento de doenças de
          impacto epidemiológico. A dispensação é realizada no setor de Epidemiologia, 
          mediante receita médica, formulários e exames exigidos.
        </p>
      </div>
    </section>
  );
}