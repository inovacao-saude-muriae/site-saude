"use client";

import React from "react";
import Link from "next/link";
import "../styles/eventos.css";
import { formatIsoDateToPtBr } from "../lib/date";

export default function EventosCard({ evento }) {
  return (
    <Link href={`/eventos/${evento.id}`} className="event-card">
      <img src={evento.imgSrc} alt={evento.titulo} className="evento-banner" />
      <div className="evento-info">
        {/* Data primeiro */}
        <span className="evento-data">
          {formatIsoDateToPtBr(evento.data)}
        </span>
        {/* Título azul */}
        <h3 className="evento-titulo">{evento.titulo}</h3>
        {/* Descrição */}
        <p className="evento-desc">{evento.resumo}</p>
      </div>
    </Link>
  );
}
