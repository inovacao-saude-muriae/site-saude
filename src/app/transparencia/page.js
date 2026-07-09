"use client";

import React, { useState, useEffect } from "react";
import "../../styles/transparencia.css";

export default function TransparenciaPage() {
  const [selected, setSelected] = useState("catarata");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dashboards = {
    catarata:
      "https://app.powerbi.com/view?r=eyJrIjoiYmZiMmQwYWQtMTdmNi00MDk3LTljMDEtNzkyMmJlNGFhM2U5IiwidCI6Ijg5N2M4NzA0LWRkMGMtNDczMy1hZjA1LWZmYmYyMTg1MzIxZSJ9&pageName=a760f4c1a75a198ae63c",
    fisioterapia:
      "https://app.powerbi.com/view?r=eyJrIjoiNzM5OWYyZTEtY2JhYS00YzAzLWE0MjQtZjZjZmJiNzkxNzYxIiwidCI6Ijg5N2M4NzA0LWRkMGMtNDczMy1hZjA1LWZmYmYyMTg1MzIxZSJ9",
    cirurgia:
      "https://app.powerbi.com/view?r=eyJrIjoiYzA2MWRlMDMtZGRjYS00ZDIyLWJiNGMtOGM3YzcwOGI4NmI0IiwidCI6Ijg5N2M4NzA0LWRkMGMtNDczMy1hZjA1LWZmYmYyMTg1MzIxZSJ9&pageName=ebf699cda68ae23e4207",
    consultas:
      "https://app.powerbi.com/view?r=eyJrIjoiMWMxMDY5NDMtNjA0Ny00YWE5LTk3NDMtNGE2NDVhY2RiNWNhIiwidCI6Ijg5N2M4NzA0LWRkMGMtNDczMy1hZjA1LWZmYmYyMTg1MzIxZSJ9&pageName=c0119bb5fc71da6189a4",
    tomografia:
      "https://app.powerbi.com/view?r=eyJrIjoiZTg0NzQwMmYtY2UxNC00M2I5LTg3OTQtY2EyNWIyMjUxOWE5IiwidCI6Ijg5N2M4NzA0LWRkMGMtNDczMy1hZjA1LWZmYmYyMTg1MzIxZSJ9&pageName=7d9f7d0ddc0d93c214e5",
    ressonancia:
      "https://app.powerbi.com/view?r=eyJrIjoiZjA4MmE1YzMtMmE0Ny00NTk2LTliOGMtYmU5MTYyODVkYmFhIiwidCI6Ijg5N2M4NzA0LWRkMGMtNDczMy1hZjA1LWZmYmYyMTg1MzIxZSJ9&pageName=7d9f7d0ddc0d93c214e5",
  };

  return (
    <main className="transparencia-layout">
      <div className="page-wrapper">
        <section className="transparencia-page fade-in">
          <h2 className="titulo-sessao">Transparência na Saúde</h2>

          <div className="card-explicativo">
            <p>
              A transparência é a base de uma gestão pública responsável.
              Abaixo, você tem acesso direto aos painéis interativos de
              regulação de Muriaé, permitindo o acompanhamento em tempo real dos
              dados de exames, consultas, cirurgias eletivas e procedimentos
              especializados.
            </p>
          </div>

          <div className="secao-controles-dash">
            <div className="transparencia-buttons">
              <button
                className={selected === "catarata" ? "active" : ""}
                onClick={() => setSelected("catarata")}
              >
                Catarata e Pterígio
              </button>

              <button
                className={selected === "cirurgia" ? "active" : ""}
                onClick={() => setSelected("cirurgia")}
              >
                Cirurgias Eletivas
              </button>

              <button
                className={selected === "consultas" ? "active" : ""}
                onClick={() => setSelected("consultas")}
              >
                Consultas e Exames
              </button>

              <button
                className={selected === "fisioterapia" ? "active" : ""}
                onClick={() => setSelected("fisioterapia")}
              >
                Fisioterapia
              </button>

              <button
                className={selected === "ressonancia" ? "active" : ""}
                onClick={() => setSelected("ressonancia")}
              >
                Ressonância
              </button>

              <button
                className={selected === "tomografia" ? "active" : ""}
                onClick={() => setSelected("tomografia")}
              >
                Tomografia
              </button>
            </div>
          </div>

          {/* Dashboard responsivo */}
          <div className="dashboard-container">
            <iframe
              key={selected}
              title={selected}
              src={dashboards[selected]}
              frameBorder="0"
              allowFullScreen={true}
            ></iframe>
          </div>
        </section>
      </div>
    </main>
  );
}
