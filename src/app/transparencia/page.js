"use client";

import React, { useState } from "react";
import "../../styles/transparencia.css";

export default function Page() {
  const [selected, setSelected] = useState("ressonancia");

  const dashboards = {
    ressonancia:
      "https://app.powerbi.com/view?r=eyJrIjoiMjkwY2U1MTEtNjEzNC00ZWViLWE0MmYtZjRiY2U2ODE2Njg4IiwidCI6Ijg5N2M4NzA0LWRkMGMtNDczMy1hZjA1LWZmYmYyMTg1MzIxZSJ9",
    catarata:
      "https://app.powerbi.com/view?r=eyJrIjoiMjkwY2U1MTEtNjEzNC00ZWViLWE0MmYtZjRiY2U2ODE2Njg4IiwidCI6Ijg5N2M4NzA0LWRkMGMtNDczMy1hZjA1LWZmYmYyMTg1MzIxZSJ9",
    consultas:
      "https://app.powerbi.com/view?r=eyJrIjoiMjkwY2U1MTEtNjEzNC00ZWViLWE0MmYtZjRiY2U2ODE2Njg4IiwidCI6Ijg5N2M4NzA0LWRkMGMtNDczMy1hZjA1LWZmYmYyMTg1MzIxZSJ9",
    tomografia:
      "https://app.powerbi.com/view?r=eyJrIjoiMjkwY2U1MTEtNjEzNC00ZWViLWE0MmYtZjRiY2U2ODE2Njg4IiwidCI6Ijg5N2M4NzA0LWRkMGMtNDczMy1hZjA1LWZmYmYyMTg1MzIxZSJ9",
  };

  return (
    <div className="transparencia">
      <h2>Transparência na Saúde</h2>

      {/* Botões modernos */}
      <div className="buttons">
        <button
          className={selected === "ressonancia" ? "active" : ""}
          onClick={() => setSelected("ressonancia")}
        >
          Ressonância
        </button>
        <button
          className={selected === "catarata" ? "active" : ""}
          onClick={() => setSelected("catarata")}
        >
          Catarata e Pterígio
        </button>
        <button
          className={selected === "consultas" ? "active" : ""}
          onClick={() => setSelected("consultas")}
        >
          Consultas e Exames
        </button>
        <button
          className={selected === "tomografia" ? "active" : ""}
          onClick={() => setSelected("tomografia")}
        >
          Tomografia
        </button>
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
    </div>
  );
}
