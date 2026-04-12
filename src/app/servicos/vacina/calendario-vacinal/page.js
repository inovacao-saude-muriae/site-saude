"use client";

import React, { useState } from "react";
import { Collapse } from "antd";
import "../../../../styles/calendarioVacinal.css";
import calendario from "../../../../data/calendario.json";

export default function CalendarioVacinal() {
  const [selecionado, setSelecionado] = useState("Gestante");

  const textosIntro = {
    Gestante: "Tomar as vacinas recomendadas durante a gravidez ajuda a proteger você e seu bebê de doenças potencialmente graves.",
    Criança: "A vacinação é a melhor maneira de proteger a criança contra doenças imunopreveníveis. O Calendário Nacional de Vacinação pode ajudar a descobrir quais vacinas seu filho precisa e quando. As vacinas disponibilizadas no Sistema Único de Saúde – SUS são seguras e de vital importância para proteção contra algumas doenças graves e muitas vezes fatais.",
    Adolescente: "A vacinação é a melhor maneira de proteger o adolescente contra doenças imunopreveniveis. O Calendário Nacional de Vacinação pode ajudar a descobrir quais vacinas esse público precisa e quando. As vacinas disponibilizadas no Sistema Único de Saúde - SUS são seguras e de vital importância para proteção contra algumas doenças graves e muitas vezes fatais.",
    Adulto: "Adultos e idosos também necessitam da proteção conferida pelas vacinas. Por isso, é importante que você procure o posto de vacinação mais próximo e verifique se a sua caderneta de vacinação está atualizada, conforme as indicações do Calendário Nacional de Vacinação do Adulto e Idoso."
  };

  return (
    <div className="CalendarioVacinal">
      <header className="calendario-header">
        <h1>Calendário Vacinal</h1>
        <p>
          Consulte abaixo o calendário vacinal conforme o grupo etário ou condição específica. 
          Selecione uma das opções para visualizar as vacinas recomendadas.
        </p>
      </header>

      {/* Linha do tempo */}
      <div className="linha-tempo">
        <div className="faixa"></div>
        {calendario.grupos.map((grupo) => (
          <div
            key={grupo.nome}
            className="grupo"
            onClick={() => setSelecionado(grupo.nome)}
          >
            <div
              className={`circulo ${
                selecionado === grupo.nome ? "ativo" : ""
              }`}
            >
              <img src={grupo.imagem} alt={grupo.nome} />
              <span className="titulo">{grupo.nome}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Texto introdutório do grupo selecionado */}
      {selecionado && (
        <div className="texto-intro">
          <p>{textosIntro[selecionado]}</p>
        </div>
      )}

      {/* Collapse vinculado ao círculo selecionado */}
      {selecionado && (
        <Collapse
          accordion
          defaultActiveKey={[calendario.cards[selecionado]?.[0]?.id]} 
          style={{ marginTop: "30px", background: "#f9f9f9" }}
          items={calendario.cards[selecionado]?.map((card) => ({
            key: card.id,
            label: card.idade,
            children: (
              <div>
                {card.vacinas.map((vacina, idx) => (
                  <div key={idx} className="vacina-card">
                    <h4 className="vacina-nome">{vacina.nome}</h4>
                    <p>{vacina.descricao}</p>
                    {vacina.doencas && (
                      <p>
                        <strong>Doenças evitadas:</strong>{" "}
                        {Array.isArray(vacina.doencas)
                          ? vacina.doencas.join(", ")
                          : vacina.doencas}
                      </p>
                    )}
                    {idx < card.vacinas.length - 1 && (
                      <hr className="vacina-separador" />
                    )}
                  </div>
                ))}
                <div className="info-extra">
                  {card.local && <p><strong>Onde tomar?</strong> {card.local}</p>}
                  {card.horario && <p><strong>Dia e horário?</strong> {card.horario}</p>}
                  {card.documentos && (
                    <p><strong>Documentos necessários:</strong> {card.documentos.join(", ")}</p>
                  )}
                </div>
              </div>
            )
          }))}
        />
      )}
    </div>
  );
}
