import Link from "next/link";
import eventosData from "../data/eventos.json";
import styles from "./eventosSection.module.css";
import { compareIsoDateDesc } from "../lib/date";
import EventosCard from "../components/EventosCard"; // importa o card

export default function EventosSection() {
  const eventosRecentes = [...eventosData]
    .sort((a, b) => compareIsoDateDesc(a.data, b.data))
    .slice(0, 3);

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Eventos</h3>
      <div className={styles.eventosGrid}>
        {eventosRecentes.map((evento) => (
          <EventosCard key={evento.id} evento={evento} />
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
