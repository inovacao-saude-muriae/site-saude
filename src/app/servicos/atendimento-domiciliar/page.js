"use client";

import React, { useEffect } from "react";
import Image from "next/image"; // Importação do componente Image
import "../../../styles/atendimentoDomiciliar.css";

export default function Page() {
    // 🔝 Sempre voltar ao topo ao carregar a página
    useEffect(() => { 
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="atendimento">
            {/* Banner com Next Image - Proporção 1140x280 */}
            <div className="banner">
                <Image
                    src="/img/banner-paginas/atendimentoDomiciliar.jpg"
                    alt="Serviço de Atendimento Domiciliar"
                    width={1140}
                    height={280}
                    layout="responsive"
                    priority
                    className="banner-img"
                />
            </div>

            {/* Conteúdo Centralizado e Alinhado */}
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
                {/* Note que o CSS modelo usa listas com checkmark, 
                    mantive a estrutura de lista para o visual ficar padronizado */}
                <ul className="lista-atribuicoes">
                    <li>O familiar ou responsável deve procurar a UBS onde o paciente já é atendido;</li>
                    <li>Um profissional da equipe preencherá uma ficha de pedido para inclusão;</li>
                    <li>A ficha será encaminhada à equipe do SAD, que fará a avaliação.</li>
                </ul>

                <h3>Requisitos para acessar o serviço</h3>
                <ul className="lista-atribuicoes">
                    <li>Morar em Muriaé;</li>
                    <li>Idade a partir de 01 mês de vida;</li>
                    <li>Ser usuário do SUS;</li>
                    <li>Apresentar quadro clínico que justifique atendimento domiciliar;</li>
                    <li>Apresentar CPF, RG e Cartão do SUS;</li>
                    <li>Comprovante de residência.</li>
                </ul>

                <h3>Comunicação com o Usuário</h3>
                {/* Usei a classe de nota para dar o mesmo destaque visual do modelo anterior */}
                <div className="nota-informativa">
                    <p>
                        Após o encaminhamento, o Agente Comunitário de Saúde entrará em contato com a família para informar
                        sobre a visita de avaliação. Caso seja admitido, será elaborado um plano
                        de cuidados individualizado.
                    </p>
                </div>
            </div>
        </section>
    );
}