import Link from "next/link";
import eventosData from "../data/eventos.json";
import styles from "./eventosSection.module.css";
import { compareIsoDateDesc, formatIsoDateToPtBr } from "../lib/date";

export default function EventosSection() {
  const eventosRecentes = [...eventosData]
    .sort((a, b) => compareIsoDateDesc(a.data, b.data))
    .slice(0, 3);

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Eventos</h3>
      <div className={styles.eventosGrid}>
        {eventosRecentes.map((evento) => (
          <Link key={evento.id} href={`/eventos/${evento.id}`} className={styles.eventCard}>
            <img src={evento.imgSrc} alt={evento.titulo} className={styles.eventoBanner} />
            <span className={styles.eventoData}>
              {formatIsoDateToPtBr(evento.data)}
            </span>
            <h4 className={styles.eventoTitulo}>{evento.titulo}</h4>
            <p className={styles.eventoDesc}>{evento.resumo}</p>
          </Link>
        ))}
      </div>
      <div className={styles.center}>
        <Link href="/eventos" className={styles.buttonBlue}>
          Ver todos eventos
        </Link>
      </div>
    </div>
  );
}
