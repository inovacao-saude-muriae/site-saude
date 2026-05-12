"use client";

import Image from "next/image";
import "../../../styles/cirgurgiaGeral.css";

export default function CirurgiaGeralPage() {
  return (
    <div className="cirurgia-geral-container">
      <h1 className="cirurgia-geral-titulo">Cirurgia Geral</h1>

      <p className="cirurgia-geral-texto">
        Cirurgias gerais pelo SUS em Muriaé: cuidado e compromisso com a saúde!
        As cirurgias gerais mais comuns, como as de hérnia (umbilical, inguinal),
        vesícula biliar (colecistectomia), retirada de cistos, entre outras, são
        frequentemente indicadas por médicos clínicos após avaliação detalhada.
        Quando há indicação cirúrgica, é fundamental seguir os fluxos estabelecidos
        para garantir segurança, organização e efetividade no atendimento.
        A Secretaria Municipal de Saúde de Muriaé, por meio do programa Opera Já Muriaé,
        assegura a realização de todo o pré-operatório necessário, garantindo que nossos
        munícipes tenham acesso ao tratamento completo, com acolhimento, responsabilidade
        e sem custos, através do SUS.
      </p>

      {/* Bloco Fluxo */}
      <div className="cirurgia-geral-bloco">
        <h3>Fluxo</h3>
        <Image
          src="/img/fluxos-assistenciais/cirurgia-geral/fluxo.png"
          alt="Fluxo Assistencial Cirurgia Geral"
          width={700}
          height={1000}
          className="cirurgia-geral-fluxo-img"
        />
      </div>

      {/* Bloco Pactuação */}
      <div className="cirurgia-geral-bloco">
        <h3>Pactuação</h3>
        <Image
          src="/img/fluxos-assistenciais/cirurgia-geral/pactuacao.png"
          alt="Pactuação Cirurgia Geral"
          width={800}
          height={600}
          className="cirurgia-geral-pactuacao-img"
        />
      </div>
    </div>
  );
}
