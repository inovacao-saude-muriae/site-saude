"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "../../../styles/cardiologia.css";

const CONTEUDOS = {
  Angioplastia: {
    texto: `A angioplastia é um procedimento que os médicos fazem para “desentupir” as artérias, que são os “caminhos” por onde o sangue passa no nosso corpo. 
    Quando essas artérias ficam estreitas ou entupidas, o sangue não consegue passar direito, o que pode causar dor no peito, falta de ar ou até infarto, se for no coração. 
    Durante a angioplastia, o médico coloca um cateter com um balão na ponta dentro da artéria entupida. Esse balão é inflado para abrir a passagem e deixar o sangue circular melhor. 
    Muitas vezes, também é colocado uma pequena “molinha” de metal, chamado Stent, que ajuda a manter a artéria aberta. 
    Esse procedimento pode ser feito nas artérias do coração ou de outras partes do corpo e ajuda a melhorar os sintomas e evitar problemas mais graves. 
    É um procedimento muito importante e seguro, feito em hospital, que ajuda a cuidar bem do coração, mas é muito importante seguir todas as orientações antes do procedimento. 
    Abaixo apresentamos os fluxos de atendimentos para quem mora em Muriaé e para quem mora em outros municípios, que tem referência de atendimento aqui. 
    Lembrando que a Angioplastia pode ser realizada tanto no Hospital São Paulo quanto no Prontocor, que são os hospitais habilitados pelo Ministério da Saúde para realização do tratamento pelo SUS.
    Antes de realizar o procedimento, é muito importante seguir TODAS as orientações para que tudo dê certinho!!
    `,
    imagens: [
      { titulo: "Fluxo Assistencial", src: "/img/fluxos-assistenciais/cardiologia/angioplastia/fluxo.png" },
      { titulo: "Pactuação Endovascular", src: "/img/fluxos-assistenciais/cardiologia/angioplastia/pactuacao-endovascular.png" },
      { titulo: "Pactuação Intervencionista", src: "/img/fluxos-assistenciais/cardiologia/angioplastia/pactuacao-intervencionista.png" }
    ]
  },
  Cateterismo: {
    texto: `O cateterismo cardíaco é um exame que os médicos usam para ver se as veias do coração (chamadas artérias coronárias) estão entupidas ou com algum outro tipo de problema. 
    Ele ajuda a descobrir se o sangue está passando direitinho pelo coração ou se tem algum bloqueio que pode causar dor no peito ou até um infarto. 
    No exame, o médico coloca um tubo bem fininho (chamado cateter) dentro da artéria, geralmente na perna ou no braço, e leva até o coração. 
    Depois, ele injeta um líquido de contraste que aparece nas imagens do raio-X, mostrando se há alteração. 
    É um exame muito importante e seguro, feito em hospital, que ajuda a cuidar bem do coração e decidir o melhor tratamento, mas é muito importante seguir todas as orientações antes do procedimento.
    Abaixo apresentamos os fluxos de atendimentos para quem mora em Muriaé e para quem mora em outros municípios, que tem referência de atendimento aqui. 
    Lembrando que o Cateterismo pode ser realizado pelo SUS tanto no Hospital São Paulo quanto no Prontocor, que são os hospitais habilitados pelo Ministério da Saúde para realização deste exame.
    `,
    imagens: [
      { titulo: "Fluxo Assistencial", src: "/img/fluxos-assistenciais/cardiologia/cateterismo/fluxo.png" },
      { titulo: "Pactuação", src: "/img/fluxos-assistenciais/cardiologia/cateterismo/pactuacao.png" }
    ]
  },
  Cirurgia: {
    texto: `A cirurgia cardíaca é um tipo de operação feita para tratar problemas no coração, principalmente quando as artérias (os “caminhos” por onde o sangue passa) estão entupidas ou muito estreitas. 
    Quando isso acontece, o sangue não consegue chegar bem ao coração, o que pode causar dores no peito, falta de ar ou até infarto. Nessa cirurgia, os médicos fazem um "desvio" no local entupido usando um pedaço de 
    veia ou artéria de outra parte do corpo. É como se fizessem uma nova estrada para o sangue passar sem dificuldade. Esse procedimento é conhecido como "ponte de safena" quando usam uma veia da perna. 
    Outra cirurgia cardíaca é para a troca de válvula, que é feita quando uma das válvulas do coração não está funcionando direito. As válvulas são como “portinhas” dentro do coração que controlam a passagem do sangue. 
    Quando elas estão endurecidas, com vazamentos ou muito apertadas, o sangue não circula como deveria. Nesse tipo de cirurgia, os médicos retiram a válvula que está com problema e colocam uma nova no lugar. 
    Essa nova válvula pode ser feita de metal ou de tecido (geralmente de porco ou boi). 
    É uma cirurgia mais complexa, feita no hospital, com equipe especializada, e serve para melhorar a circulação do sangue e proteger o coração de problemas mais graves.
    Para confirmar a indicação da cirurgia, primeiro agendamos - pelo SUS -  a consulta com o cirurgião. 
    Assim que for confirmado que o tratamento precisa de cirurgia, procure a Secretaria de Saúde de seu município para cadastrar a solicitação de cirurgia e a SMS de Muriaé irá autorizar.
    Seguindo todo o fluxo, que está logo abaixo, o tratamento é TODO feito pelo SUS, em um dos prestadores habilitados para a Cirurgia Cardíaca em Muriaé - Hospital São Paulo ou Prontocor.
    `,
    imagens: [
      { titulo: "Fluxo Assistencial", src: "/img/fluxos-assistenciais/cardiologia/cirurgia/fluxo1.png" },
      { titulo: "Pactuação", src: "/img/fluxos-assistenciais/cardiologia/cirurgia/pactuacao.png" }
    ]
  },
  Eletrofisiologia: {
    texto: `Os procedimentos de eletrofisiologia são exames e tratamentos que os médicos fazem para investigar e cuidar dos batimentos do coração, especialmente quando ele bate muito rápido, 
    muito devagar ou de forma descompassada (as famosas arritmias). Nesse tipo de procedimento, os médicos colocam fios fininhos (chamados cateteres) dentro do coração, 
    através de uma veia, para estudar como está passando a eletricidade que comanda os batimentos. Se for preciso, eles podem fazer um tratamento chamado ablação, que “queima” ou “desativa” o 
    ponto do coração que está causando a arritmia. Em alguns casos, há necessidade de colocar o marcapasso. O marca-passo é um aparelhinho que ajuda o coração a bater no ritmo certo. 
    Ele pode ser indicado quando o coração está batendo muito devagar ou de forma irregular, o que pode causar cansaço, tontura, desmaios e até risco maior para a saúde. Com o implante do marca-passo, 
    o coração volta a funcionar melhor, ajudando a pessoa a ter mais qualidade de vida e segurança no dia a dia. Se o médico recomendou o uso do marca-passo, 
    é porque ele avaliou que essa é a melhor forma de cuidar do seu coração. São procedimentos seguros, feitos no hospital, e que ajudam a controlar os batimentos e melhorar a qualidade de vida da pessoa.
    Em Muriaé os atendimentos são realizados no Prontocor!
    `,
    imagens: [
      { titulo: "Fluxo Assistencial", src: "/img/fluxos-assistenciais/cardiologia/eletrofisiologia/fluxo.png" },
      { titulo: "Pactuação", src: "/img/fluxos-assistenciais/cardiologia/eletrofisiologia/pactuacao.png" }
    ]
  }
};

export default function CardiologiaPage() {
  const [selected, setSelected] = useState("Angioplastia");
  const [zoomImage, setZoomImage] = useState(null);
  const [zoomScale, setZoomScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const viewportRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = zoomImage ? "hidden" : "auto";
  }, [zoomImage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selected]);

  const fecharModal = () => {
    setZoomImage(null);
    setZoomScale(1);
  };

  const aumentarZoom = () => setZoomScale((prev) => Math.min(prev + 0.1, 5)); 
  const diminuirZoom = () => setZoomScale((prev) => Math.max(prev - 0.1, 1));

  const handleMouseDown = (e) => {
    if (zoomScale <= 1) return;
    setIsDragging(true);
    setStartX(e.pageX - viewportRef.current.offsetLeft);
    setStartY(e.pageY - viewportRef.current.offsetTop);
    setScrollLeft(viewportRef.current.scrollLeft);
    setScrollTop(viewportRef.current.scrollTop);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - viewportRef.current.offsetLeft;
    const y = e.pageY - viewportRef.current.offsetTop;
    const walkX = (x - startX) * 1.5;
    const walkY = (y - startY) * 1.5;
    viewportRef.current.scrollLeft = scrollLeft - walkX;
    viewportRef.current.scrollTop = scrollTop - walkY;
  };

  const stopDragging = () => setIsDragging(false);

  return (
    <main className="cardiologia-layout">
      <div className="page-wrapper">
        <section className="cardiologia-page">
          <h2 className="titulo-sessao">Cardiologia</h2>

          <nav className="cardiologia-botoes">
            {Object.keys(CONTEUDOS).map((item) => (
              <button 
                key={item} 
                className={`cardiologia-botao ${selected === item ? "ativo" : ""}`} 
                onClick={() => setSelected(item)}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="cardiologia-display fade-in">
            <div className="card-explicativo">
              <h3>{selected}</h3>
              <p>{CONTEUDOS[selected].texto}</p>
              
              {/* BLOCO DE DESTAQUE REINSERIDO */}
              <div className="nota-informativa-destaque">
                <div className="nota-ícone">i</div>
                <p>
                  <strong>Atenção:</strong>  Em caso de dúvida procure a Secretaria Municipal de Saúde!
                </p>
              </div>
            </div>

            <div className="grid-fluxos">
              {CONTEUDOS[selected].imagens.map((img, idx) => (
                <div key={idx} className="bloco-fluxo" onClick={() => setZoomImage(img.src)}>
                  <h4>{img.titulo}</h4>
                  <div className="img-wrapper">
                    <Image src={img.src} alt={img.titulo} width={1200} height={1600} className="img-fluxo" />
                    <div className="overlay-zoom">Clique para ampliar</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {zoomImage && (
        <div className="modal-zoom" onClick={fecharModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="controles-zoom">
                <button onClick={aumentarZoom}>+</button>
                <span className="zoom-porcentagem">{Math.round(zoomScale * 100)}%</span>
                <button onClick={diminuirZoom}>-</button>
              </div>
              <button className="btn-fechar-topo" onClick={fecharModal}>
                Fechar Visualização
              </button>
            </div>

            <div 
              className={`img-zoom-viewport hide-scrollbar ${isDragging ? 'grabbing' : ''}`}
              ref={viewportRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={stopDragging}
              onMouseLeave={stopDragging}
            >
              <div className="img-container-scrollable" style={{ transform: `scale(${zoomScale})`, transformOrigin: "top center" }}>
                <Image src={zoomImage} alt="Zoom" width={2000} height={2000} unoptimized className="img-full-modal" />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}