"use client";

import React, { useState } from "react";
import "../../../../styles/calendarioVacinal.css";
import calendario from "../../../../data/calendario.json"; // importa o JSON

export default function Page() {
  const [selecionado, setSelecionado] = useState("Gestante");
  const [expandido, setExpandido] = useState(null);

  // pega os dados do JSON
  const grupos = calendario.grupos;
  const cards = calendario.cards;

  return (
    <div className="CalendarioVacinal">
      <p>
        A vacinação é a melhor maneira de proteger contra doenças imunopreveníveis.
        O Calendário Nacional de Vacinação ajuda a descobrir quais vacinas cada pessoa precisa
        e quando aplicá-las.
      </p>

      <div className="linha-tempo">
        <div className="faixa"></div>
        {grupos.map((grupo) => (
          <div
            key={grupo.nome}
            className="grupo"
            onClick={() => { setSelecionado(grupo.nome); setExpandido(null); }}
          >
            <div className={`circulo ${selecionado === grupo.nome ? "ativo" : ""}`}>
              <img src={grupo.imagem} alt={grupo.nome} />
              <span className="titulo">{grupo.nome}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="cards">
        {cards[selecionado].map((card) => (
          <div key={card.id} className="CardCalendario">
            <div
              className="card-titulo"
              onClick={() => setExpandido(expandido === card.id ? null : card.id)}
            >
              <span>{card.idade}</span>
              <span className="seta">{expandido === card.id ? "▼" : "▶"}</span>
            </div>
            {expandido === card.id && (
              <div className="card-conteudo">{card.detalhes}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
