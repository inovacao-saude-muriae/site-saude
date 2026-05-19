"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import "../../../styles/farmacia.css";

export default function FarmaciaPage() {
  // 🔝 Sempre voltar ao topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="farmacia-layout">
      <div className="page-wrapper">
        <section className="farmacia-page fade-in">
          
          {/* Banner Otimizado Inteiro sem Cortes (Utilizando contain) */}
          <div className="farmacia-banner-container">
            <Image
              src="/img/banner-paginas/farmaciaMunicipal.jpg"
              alt="Assistência Farmacêutica do SUS em Muriaé"
              fill
              priority
              style={{ objectFit: 'contain' }}
              className="farmacia-banner-img"
            />
          </div>

          <div className="card-explicativo">
            <h3>Acesso Gratuito a Medicamentos</h3>
            <p>
              A Assistência Farmacêutica garante à população o acesso gratuito a
              medicamentos por meio do Sistema Único de Saúde (SUS). Esses
              medicamentos são organizados em diferentes componentes, de acordo com
              o tipo de tratamento, a complexidade das doenças e as diretrizes do
              Ministério da Saúde.
            </p>
          </div>

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
          <ul className="farmacia-lista-check">
            <li>Atendimento de segunda a sexta-feira, das 7h às 17h;</li>
            <li>Apresentar receita médica atualizada;</li>
            <li>Apresentar documento de identificação oficial com foto;</li>
            <li>Apresentar CPF e Cartão do SUS atualizado;</li>
            <li>Apresentar comprovante de residência recente no município.</li>
          </ul>

          <h3>Componente Especializado (CEAF)</h3>
          <p>
            Programa do SUS que garante acesso a medicamentos de alto custo usados
            em tratamentos ambulatoriais, seguindo critérios dos Protocolos
            Clínicos e Diretrizes Terapêuticas (PCDT).
          </p>

          <h4>Regras de Funcionamento</h4>
          <ul className="farmacia-lista-check">
            <li>Dispensação programada mensal, realizada a cada 30 dias;</li>
            <li>Horário de atendimento exclusivo: das 7h às 15h;</li>
            <li>Atenção: o último dia de atendimento operacional do mês é o dia 23;</li>
            <li>Retirada permitida apenas pelo paciente cadastrado ou representante legal documentado.</li>
          </ul>

          {/* Nota informativa padronizada com a Identidade Ouro */}
          <div className="nota-informativa-destaque">
            <div className="nota-ícone">i</div>
            <p>
              <strong>Atenção ao Cadastro:</strong> Para o Componente Especializado, é necessário que o paciente 
              esteja rigorosamente enquadrado nos critérios dos PCDTs, apresentando diagnóstico laudado e documentação específica exigida pelo Estado.
            </p>
          </div>

          <h3>Componente Estratégico (CESAF)</h3>
          <p>
            Reúne medicamentos para prevenção, controle e tratamento de doenças de
            impacto epidemiológico. A dispensação é realizada diretamente no setor de Epidemiologia, 
            mediante receita médica, preenchimento de formulários e exames de monitoramento exigidos.
          </p>

        </section>
      </div>
    </main>
  );
}