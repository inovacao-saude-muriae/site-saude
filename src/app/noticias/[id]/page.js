"use client";
import ReactMarkdown from "react-markdown";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import noticiasData from "../../../data/noticias.json";
import { formatIsoDateToPtBr } from "../../../lib/date";
import "../../../styles/noticias.css";

export default function NoticiasDetailPage() {
  const params = useParams();
  const noticia = noticiasData.find((n) => n.id.toString() === params.id);
  const [conteudoMarkdown, setConteudoMarkdown] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (noticia?.descricao_file) {
      fetch(noticia.descricao_file)
        .then((res) => res.text())
        .then((text) => setConteudoMarkdown(text))
        .catch(() => setConteudoMarkdown("Conteúdo em breve..."));
    }
  }, [noticia]);

  if (!noticia) return <div className="noticia-error">Notícia não encontrada</div>;

  return (
    <main className="noticias-layout-container">
      <article className="noticia-detail-article fade-in">
        
        {/* Banner da Notícia */}
        <div className="noticia-detail-banner-container">
          <Image 
            src={noticia.imagem} 
            alt={noticia.titulo} 
            fill 
            priority 
            style={{ objectFit: 'cover' }} 
          />
        </div>
        
        {/* Data e Título */}
        <span className="noticia-card-date">
          {formatIsoDateToPtBr(noticia.data_publicacao)}
        </span>
        <h1 className="noticia-detail-title">{noticia.titulo}</h1>
        
        {/* --- AQUI É ONDE VOCÊ COLOCA O CÓDIGO --- */}
        <div className="noticia-detail-content">
          {conteudoMarkdown ? (
            <ReactMarkdown>{conteudoMarkdown}</ReactMarkdown>
          ) : (
            <p>{noticia.descricao}</p>
          )}
        </div>
        {/* --------------------------------------- */}

        <div style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
          <Link href="/noticias" className="btn-institucional">
            ← Voltar para Notícias
          </Link>
        </div>
      </article>
    </main>
  );
}