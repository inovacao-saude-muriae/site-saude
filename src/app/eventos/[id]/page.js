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

      // Carregar imagem como base64
      const response = await fetch(evento.imgSrc);
      const blob = await response.blob();
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64data = reader.result;

        doc.addImage(base64data, "PNG", 0, 0, 210, 60);

        doc.setFontSize(16);
        doc.text("Comprovante de Inscrição", 20, 80);

        doc.setFontSize(12);
        doc.text(`Local: ${evento.local}`, 20, 95);
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
      <Image src={evento.imgSrc} alt={evento.titulo} width={1000} height={200} className="evento-banner"/>

      <h2>{evento.titulo}</h2>
      <span className="evento-data">{formatIsoDateToPtBr(evento.data)}</span>
      {status && <span className={status.classe}>{status.texto}</span>}

      <p>{evento.descricao}</p>

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
            {evento.cronograma?.map((item, index) => (
              <tr key={index}>
                <td>{item.hora}</td>
                <td>{item.tema}</td>
                <td>{item.palestrante}</td>
              </tr>
            ))}
          </tbody>
        </table>


      {/* Botão amarelo abaixo do cronograma */}
      {status?.texto === "Próximo" && step === 0 && (
        <div className="formulario-inscricao">
          <button onClick={() => setStep(1)} className="buttonYellow">
            Inscreva-se no simpósio
          </button>
        </div>
      )}

      {/* Modal formulário */}
      {step === 1 && (
        <div className="modal">
          <div className="modal-content">
            <button className="modal-close" onClick={fecharModal}>✕</button>
            <h3>Inscrição no {evento.titulo}</h3>
            <form onSubmit={handleSubmit} className="form-simposio">
              {evento.formulario.map((campo, index) => (
                <label key={index}>
                  {campo.label} {campo.required && "*"}
                  <input
                    name={campo.name}
                    type={campo.type}
                    required={campo.required}
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
