"use client";

import { useEffect } from "react";
import "../../../styles/ginecologia.css";

export default function GinecologiaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="ginecologia-layout">
      <div className="page-wrapper">
        <section className="ginecologia-page">
          <h2 className="titulo-sessao">Ginecologia</h2>

          <div className="ginecologia-display fade-in">
            <div className="card-explicativo">
              <h3>Saúde da Mulher: Cuidado integral e humanizado</h3>
              <p>
                Cirurgias ginecológicas: cuidado integral pela saúde da mulher! As cirurgias ginecológicas mais comuns, como a histerectomia (retirada do útero), 
                miomectomia (remoção de miomas uterinos), laqueadura tubária, entre outras, são frequentemente indicadas por médicos clínicos para tratar condições 
                que afetam a saúde reprodutiva e ginecológica das mulheres. Para que esses procedimentos sejam realizados de forma segura e organizada, é essencial 
                seguir os fluxos estabelecidos pela rede pública de saúde.
              </p>
              <p>
                A Secretaria Municipal de Saúde de Muriaé, por meio do programa Opera Já Muriaé, garante a realização de todo o pré-operatório, 
                oferecendo atendimento completo e gratuito aos nossos munícipes, sempre com cuidado e responsabilidade, dentro do SUS.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}