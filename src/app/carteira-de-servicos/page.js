"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import "../../styles/carteira-servicos.css";

export default function Page() {
  // 🔝 Sempre voltar ao topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="ouvidoria-layout">
      <div className="page-wrapper">
        <section className="ouvidoria-page fade-in">   
          
            <div className="card-explicativo">
                <h3>Carteira de Serviços</h3>
                <p>
                Consulte abaixo a listagem completa de procedimentos realizados, organizados por Linhas de Cuidado e Especialidades Médicas do município. Utilize os painéis para expandir os códigos de faturamento (padrão SUS) e descrições oficiais.
                </p>
            </div>

            <h3>Linhas de Cuidado Disponíveis</h3>
            
            {/* --- APARELHO GENITURINÁRIO --- */}
            <details className="accordion-procedimentos">
                <summary className="accordion-header">Aparelho Geniturinário</summary>
                <div className="accordion-content">
                <ul className="lista-procedimentos-codigos">
                    <li><span className="procedimento-codigo">0409010170</span><span className="procedimento-nome">INSTALACAO ENDOSCOPICA DE CATETER DUPLO J</span></li>
                    <li><span className="procedimento-codigo">0409010308</span><span className="procedimento-nome">NEFROURETERECTOMIA TOTAL</span></li>
                    <li><span className="procedimento-codigo">0409010383</span><span className="procedimento-nome">RESSECCAO ENDOSCOPICA DE LESAO VESICAL</span></li>
                    <li><span className="procedimento-codigo">0409010561</span><span className="procedimento-nome">URETEROLITOTOMIA</span></li>
                    <li><span className="procedimento-codigo">0409010596</span><span className="procedimento-nome">URETEROLITOTRIPSIA TRANSURETEROSCOPICA</span></li>
                    <li><span className="procedimento-codigo">0409030023</span><span className="procedimento-nome">PROSTATECTOMIA SUPRAPUBICA</span></li>
                    <li><span className="procedimento-codigo">0409040134</span><span className="procedimento-nome">ORQUIDOPEXIA UNILATERAL</span></li>
                    <li><span className="procedimento-codigo">0409040177</span><span className="procedimento-nome">PLASTICA DA BOLSA ESCROTAL</span></li>
                    <li><span className="procedimento-codigo">0409040215</span><span className="procedimento-nome">TRATAMENTO CIRURGICO DE HIDROCELE</span></li>
                    <li><span className="procedimento-codigo">0409040240</span><span className="procedimento-nome">VASECTOMIA</span></li>
                    <li><span className="procedimento-codigo">0409060020</span><span className="procedimento-nome">COLPOPERINEOPLASTIA ANTERIOR E POSTERIOR C/ AMPUTACAO DE COLO</span></li>
                </ul>
                </div>
            </details>

            {/* --- APARELHO LOCOMOTOR --- */}
            <details className="accordion-procedimentos">
                <summary className="accordion-header">Aparelho locomotor e de partes moles</summary>
                <div className="accordion-content">
                <ul className="lista-procedimentos-codigos">
                    <li><span className="procedimento-codigo">0408060352</span><span className="procedimento-nome">RETIRADA DE FIO OU PINO INTRA-OSSEO</span></li>
                    <li><span className="procedimento-codigo">0408060360</span><span className="procedimento-nome">RETIRADA DE FIXADOR EXTERNO</span></li>
                    <li><span className="procedimento-codigo">0408060379</span><span className="procedimento-nome">RETIRADA DE PLACA E/OU PARAFUSOS</span></li>
                    <li><span className="procedimento-codigo">0408060476</span><span className="procedimento-nome">TENOPLASTIA OU ENXERTO DE TENDAO UNICO</span></li>
                </ul>
                </div>
            </details>

            {/* --- GLÂNDULAS ENDÓCRINAS --- */}
            <details className="accordion-procedimentos">
                <summary className="accordion-header">Glândulas endócrinas</summary>
                <div className="accordion-content">
                <ul className="lista-procedimentos-codigos">
                    <li><span className="procedimento-codigo">0402010019</span><span className="procedimento-nome">EXTIRPACAO DE BOCIO INTRATORACICO POR VIA TRANSESTERNAL</span></li>
                    <li><span className="procedimento-codigo">0402010035</span><span className="procedimento-nome">TIREOIDECTOMIA PARCIAL</span></li>
                    <li><span className="procedimento-codigo">0402010043</span><span className="procedimento-nome">TIREOIDECTOMIA TOTAL</span></li>
                </ul>
                </div>
            </details>

            {/* --- PEQUENAS CIRURGIAS --- */}
            <details className="accordion-procedimentos">
                <summary className="accordion-header">Pequenas cirurgias, cirurgias de pele e subcutâneo</summary>
                <div className="accordion-content">
                <ul className="lista-procedimentos-codigos">
                    <li><span className="procedimento-codigo">0401020088</span><span className="procedimento-nome">EXERESE DE CISTO SACRO-COCCIGEO</span></li>
                    <li><span className="procedimento-codigo">0401020096</span><span className="procedimento-nome">EXERESE DE CISTO TIREOGLOSSO</span></li>
                    <li><span className="procedimento-codigo">0401020100</span><span className="procedimento-nome">EXTIRPACAOE SUPRESSAO DE LESAO DE PELE E DE TECIDO CELULAR SUBCUTANEO</span></li>
                </ul>
                </div>
            </details>

            {/* --- SISTEMA DA VISÃO --- */}
            <details className="accordion-procedimentos">
                <summary className="accordion-header">Sistema da visão</summary>
                <div className="accordion-content">
                <ul className="lista-procedimentos-codigos">
                    <li><span className="procedimento-codigo">0404010121</span><span className="procedimento-nome">EXERESE DE TUMOR DE VIAS AÉREAS / ANEXOS OCULARES</span></li>
                </ul>
                </div>
            </details>

            {/* --- SISTEMA NERVOOSO CENTRAL --- */}
            <details className="accordion-procedimentos">
                <summary className="accordion-header">Sistema nervoso central e periférico</summary>
                <div className="accordion-content">
                <ul className="lista-procedimentos-codigos">
                    <li><span className="procedimento-codigo">0403010020</span><span className="procedimento-nome">CRANIOTOMIA DESCOMPRESSIVA</span></li>
                    <li><span className="procedimento-codigo">0403020115</span><span className="procedimento-nome">TRATAMENTO CIRURGICO DE NEUROPATIA COMPRESSIVA COM OU SEM MICROCIRURGIA</span></li>
                    <li><span className="procedimento-codigo">0403020123</span><span className="procedimento-nome">TRATAMENTO CIRURGICO DE SINDROME COMPRESSIVA EM TUNEL OSTEO-FIBROSO AO NIVEL DO CARPO</span></li>
                    <li><span className="procedimento-codigo">0403050103</span><span className="procedimento-nome">RIZOTOMIA / NEUROTOMIA PERCUTANEA POR RADIOFREQUENCIA</span></li>
                    <li><span className="procedimento-codigo">0403050154</span><span className="procedimento-nome">TRATAMENTO DE LESAO DO SISTEMA NEUROVEGETATIVO POR AGENTES QUIMICOS</span></li>
                </ul>
                </div>
            </details>     

        </section>
      </div>
    </main>
  );
}