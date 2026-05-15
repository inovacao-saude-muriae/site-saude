"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { formatIsoDateToPtBr } from "../lib/date";

export default function NoticiasCard({ noticia }) {
  return (
    <Link href={`/noticias/${noticia.id}`} className="noticia-card-link">
      <article className="noticia-card-body">
        <div className="noticia-card-banner-wrapper">
          <Image 
            src={noticia.imagem} 
            alt={noticia.titulo} 
            fill 
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: 'cover' }} 
          />
        </div>
        <div className="noticia-card-info">
          <span className="noticia-card-date">
            {formatIsoDateToPtBr(noticia.data_publicacao)}
          </span>
          <h3 className="noticia-card-title">{noticia.titulo}</h3>
          <p className="noticia-card-excerpt">
            {noticia.descricao || "Clique para ler a notícia completa..."}
          </p>
        </div>
      </article>
    </Link>
  );
}