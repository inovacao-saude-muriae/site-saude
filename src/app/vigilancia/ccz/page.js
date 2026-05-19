"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "../../../styles/ccz.css";

export default function CczPage() {
  // 🔝 Sempre voltar ao topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="ccz-layout">
      <div className="page-wrapper">
        <section className="ccz-page fade-in">
          
          {/* Banner Otimizado Inteiro sem Cortes */}
          <div className="ccz-banner-container">
            <Image
              src="/img/banner-paginas/ccz.jpg"
              alt="Centro de Controle de Zoonoses"
              fill
              priority
              style={{ objectFit: 'contain' }}
              className="ccz-banner-img"
            />
          </div>

          <div className="card-explicativo">
            <p>
              O <strong>Centro de Controle de Zoonoses Manuela Pereira da Marta</strong>,
              vinculado à Secretaria Municipal de Saúde de Muriaé, é uma unidade fundamental
              para a promoção da saúde pública e para o controle de doenças que podem ser
              transmitidas entre animais e seres humanos.
            </p>
            <p>
              Localizado na BR-356, no sentido Muriaé–Ervália, o CCZ atua diretamente ligado 
              à vigilância e à prevenção dessas patologias, por meio de ações estratégicas 
              voltadas à proteção e melhoria da qualidade de vida da população.
            </p>
          </div>

          <h3>Principais atividades desenvolvidas</h3>
          <ul className="ccz-lista-check">
            <li>Monitoramento e controle ativo de doenças zoonóticas, como raiva, leishmaniose, escabiose e esporotricose;</li>
            <li>Educação em saúde, com campanhas contínuas sobre prevenção de zoonoses e posse responsável de animais de estimação;</li>
            <li>Campanhas estratégicas de adoção responsável, incentivando o bem-estar animal e o estreitamento de vínculos com a comunidade;</li>
            <li>Vacinação antirrábica de cães e gatos durante os períodos de mobilização nacional promovidos pelo Governo de Minas Gerais;</li>
            <li>Parcerias técnicas com o Instituto Mineiro de Agropecuária (IMA) para o controle da raiva, com foco no monitoramento de morcegos hematófagos;</li>
            <li>Acolhimento e resgate direcionado de animais com suspeita clínica de zoonoses ou em estrito risco à saúde pública.</li>
          </ul>

          {/* Seção de adoção integrada e com o contêiner de botão estruturado */}
          <div className="ccz-secao-adocao">
            <h3>Adote um Amigo!</h3>
            <p>
              O CCZ disponibiliza cães e gatos para adoção de forma totalmente responsável. Ao adotar, você 
              oferece uma nova chance de vida digna para um animal e contribui diretamente para o controle populacional e bem-estar da 
              nossa comunidade. Venha conhecer nossos animais protegidos e encontre seu novo companheiro de vida!
            </p>
            <div className="ccz-wrapper-botao">
              <Link href="/vigilancia/ccz/adocao" className="ccz-btn-adocao">
                Conhecer Animais para Adoção
              </Link>
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}