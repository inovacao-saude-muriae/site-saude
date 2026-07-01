"use client";

import React, { useEffect } from "react";
import "../../styles/transparencia.css";

export default function TransparenciaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="transparencia-layout">
      <div className="page-wrapper">
        <section className="transparencia-page fade-in">
          <h2 className="titulo-sessao">Transparência na Saúde</h2>

          <div className="card-explicativo">
            <p>
              A transparência é a base de uma gestão pública responsável.
              Abaixo, você tem acesso direto ao painel interativo de regulação
              de Muriaé.
            </p>
          </div>

          {/* Dashboard único */}
          <div className="dashboard-container">
            <iframe
              title="Transparência Muriaé"
              src="https://app.powerbi.com/view?r=eyJrIjoiNGQwNjVlNGItZWZjYi00ZmI0LTliYjEtMzljMTkxMDIxOWNjIiwidCI6Ijg5N2M4NzA0LWRkMGMtNDczMy1hZjA1LWZmYmYyMTg1MzIxZSJ9&pageName=ce1a5222a98172a498ec"
              frameBorder="0"
              allowFullScreen={true}
            ></iframe>
          </div>
        </section>
      </div>
    </main>
  );
}
