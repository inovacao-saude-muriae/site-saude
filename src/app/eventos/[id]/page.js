"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import eventosData from "../../../data/eventos.json";
import { formatIsoDateToPtBr } from "../../../lib/date";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import jsPDF from "jspdf";

import "swiper/css";
import "swiper/css/pagination";
import "../../../styles/eventos.css";

export default function EventosDetalhesPage() {
  const params = useParams();
  const evento = eventosData.find((e) => e.id.toString() === params.id);

  const [fotoSelecionadaIndex, setFotoSelecionadaIndex] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [step, setStep] = useState(0);
  const [comprovante, setComprovante] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!evento) return <div className="noticia-error">Evento não encontrado</div>;

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

  const fecharModal = () => {
    setStep(0);
    setFotoSelecionadaIndex(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData(e.target);
    const data = {};
    evento.formulario.forEach((campo) => {
      data[campo.name] = formData.get(campo.name);
    });
    data.evento = evento.titulo;
    data.data = evento.data;

    try {
      await fetch(evento.scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(data),
      });
      setComprovante(data);
      setStep(2);
    } finally {
      setIsSending(false);
    }
  };

  const baixarComprovante = async () => {
    const doc = new jsPDF("p", "mm", "a4");
    const response = await fetch(evento.imgSrc);
    const blob = await response.blob();
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64data = reader.result;
      doc.addImage(base64data, "PNG", 0, 0, 210, 60);
      doc.setFontSize(16);
      doc.text("Comprovante de Inscrição", 20, 80);
      doc.setFontSize(12);
      doc.text(`Local: ${evento.local || "—"}`, 20, 95);
      doc.text(`Nome: ${comprovante.nome}`, 20, 110);
      doc.text(`Evento: ${comprovante.evento}`, 20, 125);
      doc.text(`Data do Evento: ${formatIsoDateToPtBr(evento.data)}`, 20, 140);
      doc.text(`Data da Inscrição: ${new Date().toLocaleDateString("pt-BR")}`, 20, 155);
      doc.save("comprovante-inscricao.pdf");
    };
    reader.readAsDataURL(blob);
  };

  return (
    <main className="eventos-layout-container">
      <article className="evento-detail-article fade-in">
        <div className="evento-detail-banner-container">
          <Image src={evento.imgSrc} alt={evento.titulo} fill priority style={{ objectFit: 'cover' }} />
        </div>

        <span className="evento-card-date">{formatIsoDateToPtBr(evento.data)}</span>
        {status && <span className={`${status.classe}`} style={{marginBottom: '15px'}}>{status.texto}</span>}
        <h1 className="evento-detail-title">{evento.titulo}</h1>
        
        <p className="evento-detail-description">{evento.descricao}</p>

        {evento.cronograma && evento.cronograma.length > 0 && (
          <>
            <h3>Cronograma</h3>
            <table className="cronograma-table">
              <thead>
                <tr>
                  <th>Horário</th>
                  <th>Tema</th>
                  <th>Palestrante</th>
                </tr>
              </thead>
              <tbody>
                {evento.cronograma.map((item, index) => (
                  <tr key={index}>
                    <td>{item.hora}</td>
                    <td>{item.tema}</td>
                    <td>{item.palestrante}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {evento.galeria && evento.galeria.length > 0 && (
          <div className="evento-galeria-wrapper">
            <h3>Galeria de Fotos</h3>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={15}
              slidesPerView={3}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 1 },
                500: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
            >
              {evento.galeria.map((foto, index) => (
                <SwiperSlide key={index}>
                  <div style={{ position: 'relative', width: '100%', height: '160px' }}>
                    <Image
                      src={foto}
                      alt={`${evento.titulo} - ${index + 1}`}
                      fill
                      className="evento-galeria-img"
                      onClick={() => setFotoSelecionadaIndex(index)}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {fotoSelecionadaIndex !== null && (
              <div className="modal-overlay" onClick={fecharModal}>
                <div className="modal-body-content modal-img-expand" onClick={(e) => e.stopPropagation()}>
                  <button className="modal-close-btn" onClick={fecharModal}>✕</button>
                  <Image src={evento.galeria[fotoSelecionadaIndex]} alt="Expandido" width={1000} height={600} style={{ objectFit: 'contain', borderRadius: '8px', maxWidth: '100%' }} />
                </div>
              </div>
            )}
          </div>
        )}

        {evento.formulario && status?.texto === "Próximo" && step === 0 && (
          <div style={{ margin: '30px 0' }}>
            <button onClick={() => setStep(1)} className="btn-institucional" style={{ backgroundColor: '#fdcc02', color: '#000' }}>
              Inscreva-se no evento
            </button>
          </div>
        )}

        {step === 1 && evento.formulario && (
          <div className="modal-overlay" onClick={fecharModal}>
            <div className="modal-body-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={fecharModal}>✕</button>
              <h3 style={{ marginTop: 0 }}>Inscrição: {evento.titulo}</h3>
              <form onSubmit={handleSubmit} className="form-inscricao-container">
                {evento.formulario.map((campo, index) => (
                  <label key={index}>
                    {campo.label} *
                    <input
                      name={campo.name}
                      type={campo.name === "email" ? "email" : "text"}
                      required
                    />
                  </label>
                ))}
                <button type="submit" className="btn-institucional" style={{ backgroundColor: '#16a34a', marginTop: '15px' }} disabled={isSending}>
                  {isSending ? "Enviando..." : "Finalizar Inscrição"}
                </button>
              </form>
            </div>
          </div>
        )}

        {step === 2 && comprovante && (
          <div className="modal-overlay" onClick={fecharModal}>
            <div className="modal-body-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={fecharModal}>✕</button>
              <div className="check-icon-success">✔</div>
              <h2>Inscrição Concluída!</h2>
              <div style={{ textAlign: 'left', margin: '20px 0', padding: '15px', background: '#f8fafc', borderRadius: '6px' }}>
                <p><strong>Nome:</strong> {comprovante.nome}</p>
                <p><strong>Evento:</strong> {comprovante.evento}</p>
                <p><strong>Data:</strong> {formatIsoDateToPtBr(comprovante.data)}</p>
                <p><strong>Local:</strong> {evento.local}</p>
              </div>
              <button onClick={baixarComprovante} className="btn-institucional" style={{ backgroundColor: '#16a34a', width: '100%' }}>
                Baixar Comprovante (PDF)
              </button>
            </div>
          </div>
        )}

        <div style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
          <Link href="/eventos" className="btn-institucional">
            ← Voltar para Eventos
          </Link>
        </div>
      </article>
    </main>
  );
}