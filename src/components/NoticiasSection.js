import Link from "next/link";
import CardNoticia from "./NoticiasCard";
import noticiasData from "../data/noticias.json";
import styles from "./noticiasSection.module.css"; // CSS só da seção
import { compareIsoDateDesc } from "../lib/date";

export default function NoticiasSection() {
  const noticiasOrdenadas = [...noticiasData].sort(
    (a, b) => compareIsoDateDesc(a.data_publicacao, b.data_publicacao)
  );

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Notícias</h3>
      <div className={styles.noticiasGrid}>
        {noticiasOrdenadas.slice(0, 6).map((noticia) => (
          <CardNoticia key={noticia.id} noticia={noticia} size="small" />
        ))}
      </div>
      <div className={styles.center}>
        <Link href="/noticias" className={styles.buttonBlue}>
          Ver mais notícias
        </Link>
      </div>
    </div>
  );
}
