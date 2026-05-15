import Link from "next/link";
import NoticiasCard from "./NoticiasCard";
import noticiasData from "../data/noticias.json";
import "../styles/noticias.css";

export default function NoticiasHomeSection() {
  // Ordena por data (mais recente primeiro) e pega as 6 primeiras
  const noticiasExibidas = [...noticiasData]
    .sort((a, b) => new Date(b.data_publicacao) - new Date(a.data_publicacao))
    .slice(0, 6);

  return (
    <section className="noticias-home-section">
      <div className="secao-header">
        <h2 className="titulo-sessao">Últimas Notícias</h2>
      </div>
      
      <div className="noticias-grid-global">
        {noticiasExibidas.map((noticia) => (
          <NoticiasCard key={noticia.id} noticia={noticia} />
        ))}
      </div>

      <div className="noticias-home-footer">
        <Link href="/noticias" className="btn-institucional">
          Ver todas as notícias
        </Link>
      </div>
    </section>
  );
}