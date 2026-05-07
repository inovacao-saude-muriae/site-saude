"use client";

import React, { useState } from "react";
import animais from "../../../../data/animais.json";
import "../../../../styles/adocao.css";
import Image from "next/image";

export default function Page() {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [filter, setFilter] = useState(null);
  const [selectedPet, setSelectedPet] = useState(null);
  const [step, setStep] = useState(1);
  const [aceitouTermo, setAceitouTermo] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSending, setIsSending] = useState(false);

  const petsPerPage = 15;

  // Aplica o filtro
  const filteredPets = filter
    ? animais.filter((p) => {
        if (filter === "macho") return p.sexo === "macho";
        if (filter === "femea") return p.sexo === "femea";
        if (filter === "gato") return p.especie === "gato";
        if (filter === "cachorro") return p.especie === "cachorro";
        if (filter === "filhote") return p.filhote;
        return false;
      })
    : animais;

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

    // Criamos o payload explicitamente para garantir a ordem das colunas na planilha
    const data = {
      nome: formData.get("nome"),
      cpf: formData.get("cpf"),
      telefone: formData.get("telefone"),
      rua: formData.get("rua"),
      numero: formData.get("numero"),
      bairro: formData.get("bairro"),
      cidade: formData.get("cidade"),
      animal: selectedPet.nome, // O animal será a última coluna (após a data gerada pelo Script)
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxUUUek2JT-XM_zDaK44_4kYQq6gLNo4x8w4fe1kr46ubM4Kmn98suVymRL_XF14IYg/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify(data),
        }
      );

      // Avança para a tela de confirmação apenas após o sucesso
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
      <div className="banner" style={{ position: "relative", width: "100%", height: "250px" }}>
        <Image src="/img/banner-paginas/Adote.jpg" alt="Banner Adoção" width={1440} height={250} style={{ objectFit: "cover", borderRadius: "8px" }} priority />
      </div>

      {/* Filtros principais */}
      <div className="filtros">
        <button onClick={() => setSelectedFilter("cachorro")}>
          <Image src="/img/icon/dog.png" alt="Cachorro" className="filtro-icon" width={20} height={20} />
          Cachorro
        </button>
        <button onClick={() => setSelectedFilter("gato")}>
          <Image src="/img/icon/cat.png" alt="Gato" className="filtro-icon" width={20} height={20} />
          Gato
        </button>
        <button onClick={() => setSelectedFilter("filhote")}>
          <Image src="/img/icon/baby.png" alt="Filhote" className="filtro-icon" width={20} height={20} />
          Filhote
        </button>
        <button onClick={() => setSelectedFilter("macho")}>
          <Image src="/img/icon/male.png" alt="Macho" className="filtro-icon" width={20} height={20} />
          Macho
        </button>
        <button onClick={() => setSelectedFilter("femea")}>
          <Image src="/img/icon/female.png" alt="Fêmea" className="filtro-icon" width={20} height={20} />
          Fêmea
        </button>
      </div>

      {/* Botões extras */}
        <div className="filtros-extra">
          <button onClick={() => setFilter(selectedFilter)}>
            <Image src="/img/icon/search.png" alt="Pesquisar" className="filtro-icon" width={20} height={20} />
            Pesquisar
          </button>
          <button onClick={() => { setSelectedFilter(null); setFilter(null); }}>
            <Image src="/img/icon/clear.png" alt="Limpar" className="filtro-icon" width={20} height={20} />
            Limpar
          </button>
        </div>

      {/* Cards */}
      <div className="CardsAnimais">
        {currentPets.map((pet, index) => (
          <div key={`${pet.id}-${index}`} className="cardAnimal">
            <Image src={pet.foto} alt={pet.nome} width={300} height={180} />
            <h3>
              {pet.nome} 
              {pet.sexo === "macho" ? (
                <Image src="/img/icon/male.png" alt="Macho" className="sexo-icon" width={20} height={20} />
                  ) : (
                  <Image src="/img/icon/female.png" alt="Fêmea" className="sexo-icon" width={20} height={20} />
              )}
            </h3>
            <button onClick={() => { setSelectedPet(pet); setStep(1); }}>
              Conheça o Pet
            </button>
          </div>
        ))}
      </div>

      {/* Paginação */}
      <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          ← Anterior
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Próxima →
        </button>
      </div>

      {/* Modal */}
      {selectedPet && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={() => { setSelectedPet(null); setStep(1); setAceitouTermo(false); }}>
              ×
            </button>

            {/* Modal */}
              {step === 1 && (
                <div className="modal-body">
                  <div className="modal-info">
                    <Image src={selectedPet.foto} alt={selectedPet.nome} className="modal-img" width={200} height={300} />
                    <div className="modal-text">
                      <h2>
                        {selectedPet.nome}{" "}
                        {selectedPet.sexo === "macho" ? (
                          <Image src="/img/icon/male.png" alt="Macho" className="sexo-icon" width={20} height={20} />
                        ) : (
                          <Image src="/img/icon/female.png" alt="Fêmea" className="sexo-icon" width={20} height={20} />
                        )}
                      </h2>
                      <p>{selectedPet.descricao}</p>
                    </div>
                  </div>
                  <button className="adotar-btn" onClick={() => setStep(2)}>
                    Adotar
                  </button>
                </div>
              )}

            {step === 2 && (
              <div className="termo-adocao">
                <h3>Adoção CCZ – TERMO DE ADOÇÃO E GUARDA RESPONSÁVEL</h3>
                  <p>
                    Ao adotar um animal, assumo a responsabilidade de garantir seu bem-estar físico e psicológico...
                  </p>
                  <label className="checkbox-termo">
                    <input
                      type="checkbox"
                      checked={aceitouTermo}
                      onChange={(e) => setAceitouTermo(e.target.checked)}
                    />{" "}
                    Li e aceito o termo de adoção
                  </label>
                  <button className="continuar-btn" disabled={!aceitouTermo} onClick={() => setStep(3)}>Continuar</button>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit} className="form-adocao">
                <h3>Dados do Adotante</h3>
                  <label>Nome completo *<input name="nome" placeholder="Digite seu nome completo" required /></label>
                  <label>CPF *<input name="cpf" placeholder="Digite seu CPF" required /></label>
                  <label>Telefone (com DDD) *<input name="telefone" placeholder="Ex: (32) 99999-9999" required /></label>
                  <label>Rua *<input name="rua" placeholder="Digite sua rua" required /></label>
                  <label>Número *<input name="numero" placeholder="Número da residência" required /></label>
                  <label>Bairro *<input name="bairro" placeholder="Digite seu bairro" required /></label>
                  <label>Cidade *<input name="cidade" placeholder="Digite sua cidade" required /></label>
                
                  <button type="submit" className="finalizar-btn" disabled={isSending}> {isSending ? "Enviando..." : "Finalizar Adoção"}</button>
              </form>
            )}

            {step === 4 && (
              <div className="confirmacao-adocao">
                <div className="check-icon">✔</div>
                <h2>Adoção concluída!</h2>
                <p>Seu formulário foi enviado com sucesso. Em breve entraremos em contato.</p>
                <button onClick={() => { setSelectedPet(null); setStep(1); setAceitouTermo(false); }} className="ok-btn">
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