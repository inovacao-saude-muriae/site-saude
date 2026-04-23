"use client";
import ReactMarkdown from "react-markdown";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import noticiasData from "../../../data/noticias.json";
import "../../../styles/noticiasDetalhes.css";
import { formatIsoDateToPtBr } from "../../../lib/date";

export default function NoticiasDetalhes() {
  const params = useParams();
  const noticia = noticiasData.find((n) => n.id.toString() === params.id);

  const [conteudo, setConteudo] = useState("");

  // 🔝 Sempre voltar ao topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🔎 Buscar o arquivo .md indicado no JSON
  useEffect(() => {
    if (noticia?.descricao_file) {
      fetch(noticia.descricao_file)
        .then((res) => res.text())
        .then((text) => setConteudo(text));
    }
  }, [noticia]);

  if (!noticia) return <p>Notícia não encontrada</p>;

  return (
    <article className="noticia-detalhe">
      <img
        src={noticia.imagem}
        alt={noticia.titulo}
        className="noticia-banner"
      />
      <h2>{noticia.titulo}</h2>
      <span className="noticia-data">
        {formatIsoDateToPtBr(noticia.data_publicacao)}
      </span>

      {/* Renderiza o conteúdo do arquivo Markdown */}
      {conteudo ? (
        <ReactMarkdown>{conteudo}</ReactMarkdown>
      ) : (
        <p>{noticia.conteudo}</p>
      )}

      <Link href="/noticias" className="voltar">
        ← Voltar para Notícias
      </Link>
    </article>
  );
}
