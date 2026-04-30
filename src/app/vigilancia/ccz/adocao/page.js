"use client";

import React, { useState } from "react";
import animais from "../../../../data/animais.json";
import "../../../../styles/adocao.css";

export default function Page() {
  const [selectedFilter, setSelectedFilter] = useState(null); // guarda o filtro escolhido
  const [filter, setFilter] = useState(null);                 // guarda o filtro aplicado
  const [selectedPet, setSelectedPet] = useState(null);
  const [step, setStep] = useState(1);
  const [aceitouTermo, setAceitouTermo] = useState(false);    // novo estado para o termo
  const [currentPage, setCurrentPage] = useState(1);

  const petsPerPage = 12;

  // Aplica o filtro só quando clicar em "Pesquisar"
  const filteredPets = filter
    ? animais.filter(p => {
        if (filter === "macho") return p.sexo === "macho";
        if (filter === "femea") return p.sexo === "femea";
        if (filter === "gato") return p.especie === "gato";
        if (filter === "cachorro") return p.especie === "cachorro";
        if (filter === "filhote") return p.filhote;
        return false;
      })
    : animais;

  // Paginação
  const totalPages = Math.ceil(filteredPets.length / petsPerPage);
  const startIndex = (currentPage - 1) * petsPerPage;
  const currentPets = filteredPets.slice(startIndex, startIndex + petsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedPet || isSending) return;

    setIsSending(true);
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.animal = selectedPet.nome;

    try {
      // Configuração para Google Apps Script (CORS Blindado)
      await fetch("https://script.google.com/macros/s/AKfycbxUUUek2JT-XM_zDaK44_4kYQq6gLNo4x8w4fe1kr46ubM4Kmn98suVymRL_XF14IYg/exec", {
        method: "POST",
        mode: "no-cors", // Crucial para não travar no navegador
        headers: {
          "Content-Type": "text/plain", // Engana o pre-flight do CORS
        },
        body: JSON.stringify(data),
      });
    // Se chegou aqui, mudamos para a tela de sucesso
          setStep(4);
        } catch (error) {
          console.error("Erro ao enviar:", error);
          alert("Houve um problema ao enviar o formulário. Tente novamente.");
        } finally {
          setIsSending(false);
        }
      };

  return (
    <section className="adocaoPage">
            {/* Banner */}
        <div className="banner">
        <img src="/img/banner-paginas/Adote.jpg" alt="Banner Adoção" />
        </div>


     {/* Filtros principais */}
            <div className="filtros">
            <button onClick={() => setSelectedFilter("cachorro")}>
                <img src="/img/icon/dog.png" alt="Cachorro" className="filtro-icon" />
                Cachorro
            </button>
            <button onClick={() => setSelectedFilter("gato")}>
                <img src="/img/icon/cat.png" alt="Gato" className="filtro-icon" />
                Gato
            </button>
            <button onClick={() => setSelectedFilter("filhote")}>
                <img src="/img/icon/baby.png" alt="Filhote" className="filtro-icon" />
                Filhote
            </button>
            <button onClick={() => setSelectedFilter("macho")}>
                <img src="/img/icon/male.png" alt="Macho" className="filtro-icon" />
                Macho
            </button>
            <button onClick={() => setSelectedFilter("femea")}>
                <img src="/img/icon/female.png" alt="Fêmea" className="filtro-icon" />
                Fêmea
            </button>
            </div>

            {/* Botões extras abaixo dos filtros */}
            <div className="filtros-extra">
            <button onClick={() => setFilter(selectedFilter)}>
                <img src="/img/icon/search.png" alt="Pesquisar" className="filtro-icon" />
                Pesquisar
            </button>
            <button onClick={() => setSelectedFilter(null)}>
                <img src="/img/icon/clear.png" alt="Limpar" className="filtro-icon" />
                Limpar
            </button>
            </div>

      {/* Cards */}
      <div className="CardsAnimais">
        {currentPets.map((pet, index) => (
          <div key={`${pet.id}-${index}`} className="cardAnimal">
            <img src={pet.foto} alt={pet.nome} />
            <h3>{pet.nome} {pet.sexo === "macho" ? "♂" : "♀"}</h3>
            <button onClick={() => { setSelectedPet(pet); setStep(1); }}>Conheça o Pet</button>
          </div>
        ))}
      </div>

      {/* Paginação */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ← Anterior
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Próxima →
        </button>
      </div>

      {/* Modal */}
      {selectedPet && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={() => setSelectedPet(null)}>×</button>

            {step === 1 && (
              <div className="modal-body">
                    <div className="modal-info">
                    <img src={selectedPet.foto} alt={selectedPet.nome} className="modal-img" />
                    <div className="modal-text">
                        <h2>
                        {selectedPet.nome}{" "}
                        {selectedPet.sexo === "macho" ? (
                            <img src="/img/icon/male.png" alt="Macho" className="sexo-icon" />
                        ) : (
                            <img src="/img/icon/female.png" alt="Fêmea" className="sexo-icon" />
                        )}
                        </h2>
                        <p>{selectedPet.descricao}</p>
                    </div>
                    </div>
                    <button className="adotar-btn" onClick={() => setStep(2)}>Adotar</button>
                </div>
            )}

           {step === 2 && (
              <div className="termo-adocao">
                <h3>Adoção CCZ – TERMO DE ADOÇÃO E GUARDA RESPONSÁVEL</h3>
                <p>
                  Ao adotar um animal, assumo a responsabilidade de garantir seu bem-estar físico e psicológico,
                  oferecendo alimentação adequada, higiene, vacinas, visitas regulares ao veterinário, atenção e carinho.
                  Manterei o animal em ambiente limpo e seguro, com identificação (placa ou microchip) e esterilização
                  quando indicado. Estou ciente da proibição de abandono e da necessidade de comunicar qualquer mudança
                  de destino do animal. Autorizo visitas do protetor responsável durante o período de adaptação de seis meses.
                </p>
                <p>
                  Reconheço que cães e gatos podem viver até 15 anos ou mais e que serei responsável pelo bem-estar
                  durante todo esse tempo, conforme a Lei Federal nº 9.605, art. 32 de 13/fevereiro/1998.
                </p>

                <label className="checkbox-termo">
                  <input
                    type="checkbox"
                    checked={aceitouTermo}
                    onChange={(e) => setAceitouTermo(e.target.checked)}
                  /> Li e aceito o termo de adoção
                </label>

                <button
                  className="continuar-btn"
                  disabled={!aceitouTermo}
                  onClick={() => setStep(3)}
                >
                  Continuar
                </button>
              </div>
            )}



            {step === 3 && (
                            <form onSubmit={(e) => {
                handleSubmit(e);
                setStep(4); // depois de enviar, vai para a tela de confirmação
            }} className="form-adocao">
                <h3>Dados do Adotante</h3>

                <label>Nome completo *<input name="nome" placeholder="Digite seu nome completo" required /></label>
                <label>CPF *<input name="cpf" placeholder="Digite seu CPF" required /></label>
                <label>Telefone (com DDD) *<input name="telefone" placeholder="Ex: (32) 99999-9999" required /></label>
                <label>Rua *<input name="rua" placeholder="Digite sua rua" required /></label>
                <label>Número *<input name="numero" placeholder="Número da residência" required /></label>
                <label>Bairro *<input name="bairro" placeholder="Digite seu bairro" required /></label>
                <label>Cidade *<input name="cidade" placeholder="Digite sua cidade" required /></label>

                <button type="submit" className="finalizar-btn">Finalizar Adoção</button>
            </form>
            )}

            {step === 4 && (
            <div className="confirmacao-adocao">
                <div className="check-icon">✔</div>
                <h2>Adoção concluída!</h2>
                <p>Seu formulário foi enviado com sucesso. Em breve entraremos em contato.</p>
                <button onClick={() => { setSelectedPet(null); setStep(1); }} className="ok-btn">
                OK
                </button>
            </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
