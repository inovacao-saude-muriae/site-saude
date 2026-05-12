"use client";

import Image from "next/image";
import "../../../styles/ressonancia.css";

export default function RessonanciaPage() {
  return (
    <div className="ressonancia-container">
      {/* Título principal */}
      <h1 className="ressonancia-titulo">Ressonância</h1>

      {/* Texto explicativo */}
      <p className="ressonancia-texto">
        Cirurgias gerais pelo SUS em Muriaé: cuidado e compromisso com a saúde! 
        As cirurgias gerais mais comuns, como as de hérnia (umbilical, inguinal), vesícula biliar (colecistectomia), 
        retirada de cistos, entre outras, são frequentemente indicadas por médicos clínicos após avaliação detalhada. 
        Quando há indicação cirúrgica, é fundamental seguir os fluxos estabelecidos para garantir segurança, organização e efetividade no atendimento. 
        A Secretaria Municipal de Saúde de Muriaé, por meio do programa Opera Já Muriaé, assegura a realização de todo o pré-operatório necessário, 
        garantindo que nossos munícipes tenham acesso ao tratamento completo, com acolhimento, responsabilidade e sem custos, através do SUS.
      </p>

      {/* Bloco Fluxo */}
      <div className="ressonancia-bloco">
        <h3>Fluxo</h3>
        <Image
          src="/img/fluxos-assistenciais/ressonancia/fluxo.png"
          alt="Fluxo Assistencial Ressonância"
          width={800}
          height={600}
          className="ressonancia-fluxo-img"
        />
      </div>

      {/* Bloco Pactuação */}
      <div className="ressonancia-bloco">
        <h3>Pactuação</h3>
        <Image
          src="/img/fluxos-assistenciais/ressonancia/pactuacao.png"
          alt="Pactuação Ressonância"
          width={800}
          height={600}
          className="ressonancia-fluxo-img"
        />
      </div>
    </div>
  );
}
