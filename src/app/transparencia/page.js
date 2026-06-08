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
      "https://app.powerbi.com/view?r=eyJrIjoiMjkwY2U1MTEtNjEzNC00ZWViLWE0MmYtZjRiY2U2ODE2Njg4IiwidCI6Ijg5N2M4NzA0LWRkMGMtNDczMy1hZjA1LWZmYmYyMTg1MzIxZSJ9",
    fisioterapia:
      "https://app.powerbi.com/view?r=eyJrIjoiNTQwNDM0NWMtMDQ3MC00MjVkLTliOWEtOTg3Y2Y4OTkzYWIzIiwidCI6Ijg5N2M4NzA0LWRkMGMtNDczMy1hZjA1LWZmYmYyMTg1MzIxZSJ9",
    cirurgia:
      "https://app.powerbi.com/view?r=eyJrIjoiM2MzMWRhNDQtYzAyMC00YmU4LTkyMmMtMjc0Y2QzNTg0YjAwIiwidCI6Ijg5N2M4NzA0LWRkMGMtNDczMy1hZjA1LWZmYmYyMTg1MzIxZSJ9",
    consultas:
      "https://app.powerbi.com/view?r=eyJrIjoiZDVjMzcyOGQtY2I4YS00MzNiLTg5ZTUtZTg3Y2U0Mjg0M2RmIiwidCI6Ijg5N2M4NzA0LWRkMGMtNDczMy1hZjA1LWZmYmYyMTg1MzIxZSJ9",
    tomografia:
      "https://app.powerbi.com/view?r=eyJrIjoiOGY4ZWUyOTctNTU3NS00OWNjLTllMzgtOGQ5YzY3MjIyYzgzIiwidCI6Ijg5N2M4NzA0LWRkMGMtNDczMy1hZjA1LWZmYmYyMTg1MzIxZSJ9",
    ressonancia:
      "https://app.powerbi.com/view?r=eyJrIjoiZjEzZDc0YjEtMjg4NS00NzVlLTg1NjgtMDZlN2YwZWQxZmVlIiwidCI6Ijg5N2M4NzA0LWRkMGMtNDczMy1hZjA1LWZmYmYyMTg1MzIxZSJ9",
  };

  return (
    <main className="transparencia-layout">
      <div className="page-wrapper">
        <section className="transparencia-page fade-in">
          <h2 className="titulo-sessao">Transparência na Saúde</h2>

          <div className="card-explicativo">
            <p>
              A transparência é a base de uma gestão pública responsável. Abaixo, você tem acesso 
              direto aos painéis interativos de regulação de Muriaé, permitindo o acompanhamento 
              em tempo real dos dados de exames, consultas, cirurgias eletivas e procedimentos especializados.
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