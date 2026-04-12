"use client";

import { useState } from "react";
import Image from "next/image";
import "../../../styles/cardiologia.css";

export default function CardiologiaPage() {
    const [selected, setSelected] = useState("Angioplastia");
    const [zoomImage, setZoomImage] = useState(null);

    const conteudos = {
        Angioplastia: {
    texto: `A angioplastia é um procedimento que os médicos fazem para “desentupir” as artérias, que são os “caminhos” por onde o sangue passa no nosso corpo. 
    Quando essas artérias ficam estreitas ou entupidas, o sangue não consegue passar direito, o que pode causar dor no peito, falta de ar ou até infarto, se for no coração. 
    Durante a angioplastia, o médico coloca um cateter com um balão na ponta dentro da artéria entupida. 
    Esse balão é inflado para abrir a passagem e deixar o sangue circular melhor. 
    Muitas vezes, também é colocado uma pequena “molinha” de metal, chamado Stent, que ajuda a manter a artéria aberta. 
    Esse procedimento pode ser feito nas artérias do coração ou de outras partes do corpo e ajuda a melhorar os sintomas e evitar problemas mais graves. 
    É um procedimento muito importante e seguro, feito em hospital, que ajuda a cuidar bem do coração, mas é muito importante seguir todas as orientações antes do procedimento. 
    Em caso de dúvida procure a Secretaria Municipal de Saúde!`,
    fluxo: (
        <div className="cardiologia-fluxo">
            <div className="cardiologia-bloco">
                <h3>Fluxo</h3>
                <div className="cardiologia-fluxo-img-wrapper">
                    <Image
                    src="/img/fluxos-assistenciais/cardiologia/angioplastia/fluxo.png"
                    alt="Fluxo Assistencial Angioplastia"
                    width={800}
                    height={600}
                    className="cardiologia-fluxo-img"
                    onClick={() =>
                        setZoomImage(
                        "/img/fluxos-assistenciais/cardiologia/angioplastia/fluxo.png"
                        )
                    }
                    />
                </div>
            </div>

            <div className="cardiologia-bloco">
                <h3>Pactuação Endovascular</h3>
                <div className="cardiologia-fluxo-img-wrapper">
                    <Image
                    src="/img/fluxos-assistenciais/cardiologia/angioplastia/pactuacao-endovascular.png"
                    alt="Pactuação Endovascular"
                    width={800}
                    height={600}
                    className="cardiologia-fluxo-img"
                    onClick={() =>
                        setZoomImage(
                            "/img/fluxos-assistenciais/cardiologia/angioplastia/pactuacao-endovascular.png"
                            )
                    }
                        />
                </div>
            </div>

            <div className="cardiologia-bloco">
                <h3>Pactuação Intervencionista</h3>
                <div className="cardiologia-fluxo-img-wrapper">
                    <Image
                    src="/img/fluxos-assistenciais/cardiologia/angioplastia/pactuacao-intervencionista.png"
                    alt="Pactuação Endovascular"
                    width={800}
                    height={600}
                    className="cardiologia-fluxo-img"
                    onClick={() =>
                        setZoomImage(
                            "/img/fluxos-assistenciais/cardiologia/angioplastia/pactuacao-intervencionista.png"
                            )
                    }
                        />
                </div>
            </div>
        </div>
    ),
    },

    Cateterismo: { 
        texto: `O cateterismo cardíaco é um exame que os médicos usam para ver se as veias do coração (chamadas artérias coronárias) 
        estão entupidas ou com algum outro tipo de problema. Ele ajuda a descobrir se o sangue está passando direitinho pelo coração 
        ou se tem algum bloqueio que pode causar dor no peito ou até um infarto. No exame, o médico coloca um tubo bem fininho (chamado cateter) 
        dentro da artéria, geralmente na perna ou no braço, e leva até o coração. 
        Depois, ele injeta um líquido de contraste que aparece nas imagens do raio-X, mostrando se há alteração. 
        É um exame muito importante e seguro, feito em hospital, que ajuda a cuidar bem do coração e decidir o melhor tratamento, 
        mas é muito importante seguir todas as orientações antes do procedimento. Em caso de dúvida procure a Secretaria Municipal de Saúde!`, 
        fluxo: (
            <div className="cardiologia-fluxo">
                <div className="cardiologia-bloco">
                    <h3>Fluxo</h3>
                    <Image
                        src="/img/fluxos-assistenciais/cardiologia/cateterismo/fluxo.png"
                        alt="Fluxo Assistencial Angioplastia"
                        width={800}
                        height={600}
                        className="cardiologia-fluxo-img"
                        onClick={() => setZoomImage("/img/fluxos-assistenciais/cardiologia/cateterismo/fluxo.png")}
                    />
                </div>
                <div className="cardiologia-bloco">
                    <h3>Pactuação</h3>
                    <Image
                        src="/img/fluxos-assistenciais/cardiologia/cateterismo/pactuacao.png"
                        alt="Fluxo Assistencial Angioplastia"
                        width={800}
                        height={600}
                        className="cardiologia-fluxo-img"
                        onClick={() => setZoomImage("/img/fluxos-assistenciais/cardiologia/cateterismo/pactuacao.png")}
                    />
                </div>
            </div>           
        ),
    },
    Cirurgia: { 
        texto: `A cirurgia cardíaca é um tipo de operação feita para tratar problemas no coração, principalmente quando as artérias (os “caminhos” por onde o sangue passa) 
        estão entupidas ou muito estreitas. Quando isso acontece, o sangue não consegue chegar bem ao coração, o que pode causar dores no peito, falta de ar ou até infarto. 
        Nessa cirurgia, os médicos fazem um "desvio" no local entupido usando um pedaço de veia ou artéria de outra parte do corpo. 
        É como se fizessem uma nova estrada para o sangue passar sem dificuldade. Esse procedimento é conhecido como "ponte de safena" 
        quando usam uma veia da perna. Outra cirurgia cardíaca é para a troca de válvula, que é feita quando uma das válvulas do coração não 
        está funcionando direito. As válvulas são como “portinhas” dentro do coração que controlam a passagem do sangue. 
        Quando elas estão endurecidas, com vazamentos ou muito apertadas, o sangue não circula como deveria. 
        Nesse tipo de cirurgia, os médicos retiram a válvula que está com problema e colocam uma nova no lugar. 
        Essa nova válvula pode ser feita de metal ou de tecido (geralmente de porco ou boi). 
        É uma cirurgia mais complexa, feita no hospital, com equipe especializada, e serve para melhorar a circulação do sangue e proteger o coração de problemas mais graves`, 
        fluxo: (
            <div className="cardiologia-fluxo">
                <div className="cardiologia-bloco">
                    <h3>Fluxo</h3>
                    <Image
                        src="/img/fluxos-assistenciais/cardiologia/cirurgia/fluxo.png"
                        alt="Fluxo Assistencial Angioplastia"
                        width={800}
                        height={600}
                        className="cardiologia-fluxo-img"
                        onClick={() => setZoomImage("img/fluxos-assistenciais/cardiologia/cirurgia/fluxo.png")}
                    />
                </div>
                <div className="cardiologia-bloco">
                    <h3>Pactuação</h3>
                    <Image
                        src="/img/fluxos-assistenciais/cardiologia/cirurgia/pactuacao.png"
                        alt="Fluxo Assistencial Angioplastia"
                        width={800}
                        height={600}
                        className="cardiologia-fluxo-img"
                        onClick={() => setZoomImage("img/fluxos-assistenciais/cardiologia/cirurgia/pactuacao.png")}
                    />
                </div>
            </div>
        ),
    },
    Eletrofisiologia: { 
        texto: `Os procedimentos de eletrofisiologia são exames e tratamentos que os médicos fazem para investigar e cuidar dos batimentos do coração, 
        especialmente quando ele bate muito rápido, muito devagar ou de forma descompassada (as famosas arritmias). Nesse tipo de procedimento, 
        os médicos colocam fios fininhos (chamados cateteres) dentro do coração, através de uma veia, para estudar como está passando a eletricidade 
        que comanda os batimentos. Se for preciso, eles podem fazer um tratamento chamado ablação, que “queima” ou “desativa” o ponto do coração que 
        está causando a arritmia. Em alguns casos, há necessidade de colocar o marcapasso. O marca-passo é um aparelhinho que ajuda o coração a bater no ritmo certo. 
        Ele pode ser indicado quando o coração está batendo muito devagar ou de forma irregular, o que pode causar cansaço, tontura, desmaios e até risco maior para a saúde. 
        Com o implante do marca-passo, o coração volta a funcionar melhor, ajudando a pessoa a ter mais qualidade de vida e segurança no dia a dia. 
        Se o médico recomendou o uso do marca-passo, é porque ele avaliou que essa é a melhor forma de cuidar do seu coração. 
        São procedimentos seguros, feitos no hospital, e que ajudam a controlar os batimentos e melhorar a qualidade de vida da pessoa.`, 
        fluxo: (
            <div className="cardiologia-fluxo">
                <div className="cardiologia-bloco">
                    <h3>Fluxo</h3>
                    <Image
                        src="/img/fluxos-assistenciais/cardiologia/eletrofisiologia/fluxo.png"
                        alt="Fluxo Assistencial Angioplastia"
                        width={800}
                        height={600}
                        className="cardiologia-fluxo-img"
                        onClick={() => setZoomImage("img/fluxos-assistenciais/cardiologia/eletrofisiologia/fluxo.png")}
                    />
                </div>
                <div className="cardiologia-bloco">
                    <h3>Pactuação</h3>
                    <Image
                        src="/img/fluxos-assistenciais/cardiologia/eletrofisiologia/pactuacao.png"
                        alt="Fluxo Assistencial Angioplastia"
                        width={800}
                        height={600}
                        className="cardiologia-fluxo-img"
                        onClick={() => setZoomImage("img/fluxos-assistenciais/cardiologia/eletrofisiologia/pactuacao.png")}
                    />
                </div>
            </div>
        ),
    },
  };

  const botoes = Object.keys(conteudos);

  return (
    <div className="cardiologia-container">
      <h1 className="cardiologia-titulo">Cardiologia</h1>

      <div className="cardiologia-botoes">
            {botoes.map((btn) => (
            <button
                key={btn}
                className="cardiologia-botao"
                onClick={() => setSelected(btn)}
            >
                {btn}
            </button>
            ))}
      </div>

      {selected && (
        <div className="cardiologia-conteudo">
          <h2 className="cardiologia-subtitulo">{selected}</h2>
          <p className="cardiologia-texto">{conteudos[selected].texto}</p>
          {conteudos[selected].fluxo}
        </div>
      )}

      {zoomImage && (
        <div className="cardiologia-modal" onClick={() => setZoomImage(null)}>
          <div className="cardiologia-modal-img-wrapper">
            <Image
              src={zoomImage}
              alt="Zoom"
              fill
              className="cardiologia-modal-img"
            />
          </div>
        </div>
      )}
    </div>
  );
}
