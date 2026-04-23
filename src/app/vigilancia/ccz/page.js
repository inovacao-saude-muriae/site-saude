"use client";

import React, { useEffect } from "react";
import Link from "next/link"; // se estiver usando Next.js
import "../../../styles/ccz.css";

export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="ccz">
      {/* Banner */}
      <div className="banner">
        <img
          src="/img/banner-paginas/ccz.jpg"
          alt="Centro de Controle de Zoonoses"
        />
      </div>

      {/* Conteúdo principal */}
      <div className="conteudo">
        <h2>Centro de Controle de Zoonoses (CCZ): qual a importância desse órgão?</h2>
        <p>
          O <strong>Centro de Controle de Zoonoses Manuela Pereira da Marta</strong>,
          vinculado à Secretaria Municipal de Saúde de Muriaé, é uma unidade fundamental
          para a promoção da saúde pública e para o controle de doenças que podem ser
          transmitidas entre animais e seres humanos.
        </p>
        <p>
          Localizado na BR-356, no sentido Muriaé–Ervália, o CCZ passou recentemente por
          uma ampla reforma e modernização. As melhorias ampliaram a capacidade de
          atendimento e garantiram melhores condições para o cuidado com os animais e
          para o desenvolvimento das ações de prevenção de zoonoses.
        </p>
        <p>
          O trabalho do CCZ está diretamente ligado à vigilância e à prevenção dessas
          doenças, por meio de ações estratégicas voltadas à proteção da população.
        </p>

        <h3>Principais atividades desenvolvidas</h3>
        <ul>
          <li>Monitoramento e controle de doenças zoonóticas, como raiva, leishmaniose, escabiose e esporotricose;</li>
          <li>Educação em saúde, com campanhas de conscientização sobre prevenção de zoonoses e posse responsável de animais;</li>
          <li>Campanhas de adoção responsável, incentivando o cuidado, o bem-estar animal e o vínculo com a comunidade;</li>
          <li>Vacinação antirrábica de cães e gatos durante os períodos de campanha nacional promovidos pelo Governo de Minas Gerais;</li>
          <li>Parcerias com o Instituto Mineiro de Agropecuária (IMA) para o controle da raiva, com atenção especial ao monitoramento de morcegos hematófagos;</li>
          <li>Resgate de animais com suspeita de zoonoses ou em estado precário de saúde, visando reduzir riscos à saúde pública.</li>
        </ul>

        <p>
          A atuação do CCZ é essencial para prevenir surtos e epidemias causados por
          doenças transmitidas por animais. Por meio de ações educativas, monitoramento
          constante e parcerias institucionais, o centro contribui para a redução de
          riscos à saúde humana, o fortalecimento da vigilância epidemiológica, a
          promoção do bem-estar animal dentro do conceito de Saúde Única e a melhoria da
          qualidade de vida da população.
        </p>
      </div>

      {/* Seção de adoção */}
      <div className="adocao">
        <h2>Adote um Amigo!</h2>
        <p>
          O CCZ disponibiliza cães e gatos para adoção responsável. Ao adotar, você
          oferece uma nova chance de vida para um animal e contribui para o bem-estar da
          comunidade. Venha conhecer nossos animais e encontre seu novo companheiro!
        </p>
       <Link href="/vigilancia/ccz/adocao" className="btn-adocao">
        Conheça
        </Link>



      </div>
    </section>
  );
}
