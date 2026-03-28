"use client"; // necessário se você usar hooks ou interatividade

import React from "react"; // importa React
import React, { useEffect } from "react";
import "../../../styles/atendimentoDomiciliar.css"; // importa o CSS (ajuste o caminho conforme sua estrutura)

export default function Page() {
    useEffect(() => { window.scrollTo(0, 0);}, []);
    return (
        <section className="atendimento">
        {/* Banner */}
        <div className="banner">
            <img
            src="/img/banner-paginas/atendimentoDomiciliar.jpg"
            alt="Serviço de Atendimento Domiciliar"
            />
        </div>

        {/* Conteúdo */}
        <div className="conteudo">
            <h2>Serviço de Atendimento Domiciliar (SAD): cuidado em casa para quem mais precisa</h2>
            <p>
                O Serviço de Atendimento Domiciliar (SAD) destina-se a pessoas acamadas
                ou com dificuldade de mobilidade, de forma temporária ou permanente.
                Nesse modelo de cuidado, a equipe de saúde realiza o atendimento na
                própria casa do paciente, garantindo acompanhamento contínuo e
                humanizado.
            </p>

            <h3>Passo a Passo para Inclusão no SAD</h3>
            <ol>
                <li>O familiar ou responsável deve procurar a UBS onde o paciente já é atendido;</li>
                <li>Um profissional da equipe preencherá uma ficha de pedido para inclusão;</li>
                <li>A ficha será encaminhada à equipe do SAD, que fará a avaliação.</li>
            </ol>

            <h3>Requisitos para acessar o serviço</h3>
            <ul>
                <li>Morar em Muriaé;</li>
                <li>Idade a partir de 01 mês de vida;</li>
                <li>Ser usuário do SUS;</li>
                <li>Apresentar quadro clínico que justifique atendimento domiciliar;</li>
                <li>Apresentar CPF, RG e Cartão do SUS;</li>
                <li>Comprovante de residência.</li>
            </ul>

            <h3>Comunicação com o Usuário</h3>
            <p>
                Após o encaminhamento, o ACS entrará em contato com a família para informar
                sobre a visita de avaliação. Caso seja admitido, será elaborado um plano
                de cuidados individualizado.
            </p>
        </div>
        </section>
    );
}
