"use client";

import { useState } from "react";
import Image from "next/image";
import "../../../styles/ortopedia.css";
import { label } from "framer-motion/client";

export default function OrtopediaPage() {
    const [selected, setSelected] = useState("OrtopediaMedia");
    const [zoomImage, setZoomImage] = useState(null);

    const conteudos = {
        OrtopediaMedia: {
            label:"Média Complexidade",
            texto: `Segurança no dia a dia e cuidado com a saúde: um compromisso de todos. 
            Condução defensiva no trânsito, uso correto dos Equipamentos de Proteção Individual 
            (EPIs) no ambiente de trabalho e atenção constante nas atividades diárias são medidas simples, 
            mas extremamente importantes para evitar acidentes. Muitos traumas e lesões graves, que resultam 
            em cirurgias ortopédicas de urgência, podem ser prevenidos com responsabilidade e cuidado. 
            Quando a cirurgia é necessária, é fundamental seguir todos os fluxos e orientações médicas para garantir a segurança e o sucesso do tratamento. 
            A Prefeitura de Muriaé, por meio da Secretaria Municipal de Saúde, assegura aos seus cidadãos todo o suporte necessário no 
            pré-operatório através do Programa Opera Já Muriaé, reafirmando o compromisso com a saúde e o bem-estar da população.`,
    fluxo: (
        <div className="ortopedia-fluxo">
            <div className="ortopedia-bloco">
                <h3>Fluxo</h3>
                <div className="ortopedia-fluxo-img-wrapper">
                    <Image
                    src="/img/fluxos-assistenciais/ortopedia-traumatologia/media/fluxo.png"
                    alt="Fluxo Assistencial Angioplastia"
                    width={800}
                    height={600}
                    className="ortopedia-fluxo-img"
                    onClick={() =>
                        setZoomImage(
                        "/img/fluxos-assistenciais/ortopedia-traumatologia/media/fluxo.png"
                        )
                    }
                    />
                </div>
            </div>

            <div className="ortopedia-bloco">
                <h3>Pactuação</h3>
                <div className="ortopedia-fluxo-img-wrapper">
                    <Image
                    src="/img/fluxos-assistenciais/ortopedia-traumatologia/media/pactuacao.png"
                    alt="Pactuação Endovascular"
                    width={800}
                    height={600}
                    className="ortopedia-pactuacao-img"
                    onClick={() =>
                        setZoomImage(
                            "/img/fluxos-assistenciais/ortopedia-traumatologia/media/pactuacao.png"
                            )
                    }
                        />
                </div>
            </div>
        </div>
    ),
    },

    OrtopediaAlta: { 
        label:"Alta Complexidade",
        texto: `Ortopedia de Alta Complexidade: entenda como funciona.
                Alguns problemas mais graves nos ossos, articulações ou na coluna, como fraturas complexas ou lesões sérias, 
                são considerados de alta complexidade e, na maioria das vezes, são resolvidos diretamente nos atendimentos de urgência e emergência, 
                quando o paciente precisa de cuidado imediato. Já nos casos que não são urgentes, a pessoa deve procurar a Secretaria Municipal de Saúde 
                para receber as orientações corretas sobre o encaminhamento e tratamento necessário.`, 
        fluxo: (
            <div className="ortopedia-fluxo">
                <div className="ortopedia-bloco">
                    <h3>Fluxo</h3>
                    <Image
                        src="/img/fluxos-assistenciais/ortopedia-traumatologia/alta/fluxo.png"
                        alt="Fluxo Assistencial Varizes"
                        width={800}
                        height={600}
                        className="ortopedia-fluxo-img"
                        onClick={() => setZoomImage("/img/fluxos-assistenciais/ortopedia-traumatologia/alta/fluxo.png")}
                    />
                </div>
                <div className="ortopedia-bloco">
                    <h3>Pactuação</h3>
                    <Image
                        src="/img/fluxos-assistenciais/ortopedia-traumatologia/alta/pactuacao.png"
                        alt="Fluxo Assistencial Varizes"
                        width={800}
                        height={600}
                        className="ortopedia-pactuacao-img"
                        onClick={() => setZoomImage("/img/fluxos-assistenciais/ortopedia-traumatologia/alta/pactuacao.png")}
                    />
                </div>
            </div>           
        ),
    }
  };

  const botoes = Object.keys(conteudos);

  return (
    <div className="ortopedia-container">
      <h1 className="ortopedia-titulo">Ortopedia e Traumatologia</h1>

      <div className="ortopedia-botoes">
            {botoes.map((btn) => (
            <button key={btn} className="ortopedia-botao" onClick={() => setSelected(btn)}>
                {conteudos[btn].label}
            </button>
            ))}
      </div>

      {selected && (
        <div className="ortopedia-conteudo">
          <h2 className="ortopedia-subtitulo">{conteudos[selected].label}</h2>
          <p className="ortopedia-texto">{conteudos[selected].texto}</p>
          {conteudos[selected].fluxo}
        </div>
      )}

      {zoomImage && (
        <div className="ortopedia-modal" onClick={() => setZoomImage(null)}>
          <div className="ortopedia-modal-img-wrapper">
            <Image src={zoomImage} alt="Zoom" fill className="ortopedia-modal-img" />
          </div>
        </div>
      )}
    </div>
  );
}
