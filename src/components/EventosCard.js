"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { formatIsoDateToPtBr } from "../lib/date";

export default function EventosCard({ evento }) {
  const hoje = new Date();
  const dataEvento = new Date(evento.data);

  const hojeStr = hoje.toISOString().split("T")[0];
  const dataEventoStr = dataEvento.toISOString().split("T")[0];

  let status = null;
  if (dataEventoStr < hojeStr) {
    status = { texto: "Encerrado", classe: "evento-badge-status encerrado" };
  } else if (dataEventoStr === hojeStr) {
    status = { texto: "Em andamento", classe: "evento-badge-status andamento" };
  } else {
    status = { texto: "Próximo", classe: "evento-badge-status proximo" };
  }

  return (
    <Link href={`/eventos/${evento.id}`} className="evento-card-link">
      <article className="evento-card-body">
        <div className="evento-card-banner-wrapper">
          <Image 
            src={evento.imgSrc} 
            alt={evento.titulo} 
            fill 
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: 'cover' }} 
          />
        </div>
        <div className="evento-card-info">
          <span className="evento-card-date">{formatIsoDateToPtBr(evento.data)}</span>
          <h3 className="evento-card-title">{evento.titulo}</h3>
          <p className="evento-card-excerpt">{evento.resumo}</p>
          {status && <span className={status.classe}>{status.texto}</span>}
        </div>
      </article>
    </Link>
  );
}