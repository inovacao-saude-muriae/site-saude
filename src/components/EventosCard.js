"use client";

import React from "react";
import Link from "next/link";
import "../styles/eventos.css";
import { formatIsoDateToPtBr } from "../lib/date";

export default function EventosCard({ evento }) {
  const hoje = new Date();
  const dataEvento = new Date(evento.data);

  // Normalizar para comparar só a data (sem hora)
  const hojeStr = hoje.toISOString().split("T")[0];
  const dataEventoStr = dataEvento.toISOString().split("T")[0];

  let status = null;
  if (dataEventoStr < hojeStr) {
    status = { texto: "Encerrado", classe: "evento-status encerrado" };
  } else if (dataEventoStr === hojeStr) {
    status = { texto: "Em andamento", classe: "evento-status andamento" };
  } else {
    status = { texto: "Próximo", classe: "evento-status proximo" };
  }

  return (
    <Link href={`/eventos/${evento.id}`} className="event-card">
      <img src={evento.imgSrc} alt={evento.titulo} className="evento-banner" />
      <div className="evento-info">
        <span className="evento-data">
          {formatIsoDateToPtBr(evento.data)}
        </span>
        <h3 className="evento-titulo">{evento.titulo}</h3>
        <p className="evento-desc">{evento.resumo}</p>

        {/* Botão de status colorido */}
        {status && <span className={status.classe}>{status.texto}</span>}
      </div>
    </Link>
  );
}
