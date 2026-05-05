"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import eventosData from "../../../data/eventos.json";
import "../../../styles/eventosDetalhes.css";
import { formatIsoDateToPtBr } from "../../../lib/date";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import jsPDF from "jspdf";

export default function EventosDetalhes() {
  const params = useParams();
  const evento = eventosData.find((e) => e.id.toString() === params.id);

  const [fotoSelecionadaIndex, setFotoSelecionadaIndex] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [step, setStep] = useState(0);
  const [comprovante, setComprovante] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!evento) return <p>Evento não encontrado</p>;

  // Status
  const hoje = new Date();
  const dataEvento = new Date(evento.data);
  const hojeStr = hoje.toISOString().split("T")[0];
  const dataEventoStr = dataEvento.toISOString().split("T")[0];

  let status = null;
  if (dataEventoStr < hojeStr) {
    status = { texto: "Encerrado", classe: "evento-status encerrado" };
  } else if (dataEventoStr === hojeStr) {
    status = { texto: "Em andamento", classe: "evento-status andamento" };
  } else {
    status = { texto: "Próximo", classe: "evento-status proximo" };
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

      const dataInscricao = new Date().toLocaleDateString("pt-BR");
      doc.text(`Data da Inscrição: ${dataInscricao}`, 20, 155);

      doc.save("comprovante-inscricao.pdf");
    };

    reader.readAsDataURL(blob);
  };

  return (
    <article className="evento-detalhe">
      <Image
        src={evento.imgSrc}
        alt={evento.titulo}
        width={1000}
        height={200}
        className="evento-banner"
      />

      <h2>{evento.titulo}</h2>
      <span className="evento-data">{formatIsoDateToPtBr(evento.data)}</span>
      {status && <span className={status.classe}>{status.texto}</span>}

      <p>{evento.descricao}</p>

      {/* Cronograma só aparece se existir */}
      {evento.cronograma && evento.cronograma.length > 0 && (
        <>
          <h3>Cronograma</h3>
          <table className="cronograma">
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

      {/* Galeria só aparece se existir */}
      {evento.galeria && evento.galeria.length > 0 && (
        <div className="evento-galeria">
          <h3>Galeria</h3>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={3}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {evento.galeria.map((foto, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={foto}
                  alt={`${evento.titulo} foto ${index + 1}`}
                  width={250}   // largura da miniatura
                  height={150}  // altura da miniatura
                  className="evento-galeria-foto"
                  onClick={() => setFotoSelecionadaIndex(index)}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Modal para ampliar foto */}
          {fotoSelecionadaIndex !== null && (
            <div className="modal">
              <button className="modal-close" onClick={fecharModal}>✕</button>
              <div className="modal-content">
                <Image
                  src={evento.galeria[fotoSelecionadaIndex]}
                  alt="Foto ampliada"
                  width={800}
                  height={500}
                  className="foto-ampliada"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Botão inscrição só aparece em simpósio */}
      {evento.formulario && status?.texto === "Próximo" && step === 0 && (
        <div className="formulario-inscricao">
          <button onClick={() => setStep(1)} className="buttonYellow">
            Inscreva-se no simpósio
          </button>
        </div>
      )}

      {/* Modal formulário */}
      {step === 1 && evento.formulario && (
        <div className="modal">
          <div className="modal-content">
            <button className="modal-close" onClick={fecharModal}>✕</button>
            <h3>Inscrição no {evento.titulo}</h3>
            <form onSubmit={handleSubmit} className="form-simposio">
              {evento.formulario.map((campo, index) => (
                <label key={index}>
                  {campo.label} *
                  <input
                    name={campo.name}
                    type={campo.name === "email" ? "email" : "text"} 
                    required
                    pattern={campo.name === "email" ? ".*@.*" : undefined}
                    onInvalid={(e) => {
                      if (campo.name === "email") {
                        e.target.setCustomValidity("Este não é um email válido");
                      }
                    }}
                    onInput={(e) => e.target.setCustomValidity("")} // limpa mensagem ao digitar
                  />
                </label>
              ))}
              <button type="submit" className="finalizar-btn" disabled={isSending}>
                {isSending ? "Enviando..." : "Enviar inscrição"}
              </button>
            </form>
          </div>
        </div>
      )}


      {/* Modal comprovante */}
      {step === 2 && comprovante && (
        <div className="modal">
          <div className="modal-content">
            <button className="modal-close" onClick={fecharModal}>✕</button>
            <div className="check-icon">✔</div>
            <h2>Inscrição concluída!</h2>
            <p>Nome: {comprovante.nome}</p>
            <p>Evento: {comprovante.evento}</p>
            <p>Data: {formatIsoDateToPtBr(comprovante.data)}</p>
            <p>Local: {evento.local}</p>

            <button onClick={baixarComprovante} className="buttonGreen">
              Baixar Comprovante (PDF)
            </button>
          </div>
        </div>
      )}

      <Link href="/eventos" className="voltar">
        ← Voltar para Eventos
      </Link>
    </article>
  );
}
