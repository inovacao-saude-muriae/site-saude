"use client";

import React, { useState } from "react";
import "../../styles/transparencia.css";

export default function Page() {
  const [selected, setSelected] = useState("catarata");

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
      "https://app.powerbi.com/view?r=eyJrIjoiMzJjMjk4OWUtZjZiYS00NTMxLWExODUtNTU2OWY4NjFiNDlhIiwidCI6Ijg5N2M4NzA0LWRkMGMtNDczMy1hZjA1LWZmYmYyMTg1MzIxZSJ9",
    ressonancia:
      "https://app.powerbi.com/view?r=eyJrIjoiNmNlYWZjMzQtZTJmOC00NmIyLWFkZTctMTRhNGM3ZTgzZWIxIiwidCI6Ijg5N2M4NzA0LWRkMGMtNDczMy1hZjA1LWZmYmYyMTg1MzIxZSJ9",
    
  };

  return (
    <div className="transparencia">
      <h2>Transparência na Saúde</h2>

      <div className="buttons">
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
