import Link from "next/link";
import eventosData from "../data/eventos.json";
import { compareIsoDateDesc } from "../lib/date";
import EventosCard from "./EventosCard";
import "../styles/eventos.css";

export default function EventosHomeSection() {
  const eventosRecentes = [...eventosData]
    .sort((a, b) => compareIsoDateDesc(a.data, b.data))
    .slice(0, 3);

  return (
    <section className="eventos-home-section">
      <div className="secao-header" style={{ marginBottom: '30px' }}>
        <h2 className="titulo-sessao">Próximos Eventos</h2>
      </div>
      
      <div className="eventos-grid-global">
        {eventosRecentes.map((evento) => (
          <EventosCard key={evento.id} evento={evento} />
        ))}
      </div>
      
      <div className="eventos-home-footer">
        <Link href="/eventos" className="btn-institucional">
          Ver todos eventos
        </Link>
      </div>
    </section>
  );
}