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
            
            {/* --- Pequenas cirurgias, cirurgias de pele e subcutâneo --- */}
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

            {/* --- Glândulas endócrinas --- */}
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

            {/* --- Sistema nervoso central e periférico --- */}
            <details className="accordion-procedimentos">
                <summary className="accordion-header">Sistema nervoso central e periférico</summary>
                <div className="accordion-content">
                <ul className="lista-procedimentos-codigos">
                    <li><span className="procedimento-codigo">0403010020</span><span className="procedimento-nome">CRANIOTOMIA DESCOMPRESSIVA</span></li>
                    <li><span className="procedimento-codigo">0403020115</span><span className="procedimento-nome">TRATAMENTO CIRURGICO DE NEUROPATIA COMPRESSIVA COM OU SEM MICROCIRURGIA</span></li>
                    <li><span className="procedimento-codigo">0403020123</span><span className="procedimento-nome">TRATAMENTO CIRURGICO DE SINDROME COMPRESSIVA EM TUNEL OSTEO-FIBROSO AO NIVEL DO CARPO</span></li>
                    <li><span className="procedimento-codigo">0403050154</span><span className="procedimento-nome">TRATAMENTO DE LESAO DO SISTEMA NEUROVEGETATIVO POR AGENTES QUIMICOS</span></li>
                </ul>
                </div>
            </details>

            {/* --- Vias áereas e face --- */}
            <details className="accordion-procedimentos">
                <summary className="accordion-header">Vias áereas e face</summary>
                <div className="accordion-content">
                <ul className="lista-procedimentos-codigos">
                    <li><span className="procedimento-codigo">0404010121</span><span className="procedimento-nome">EXERESE DE TUMOR DE VIAS AEREAS SUPERIORES, FACE E PESCOCO</span></li>
                    <li><span className="procedimento-codigo">0404010466</span><span className="procedimento-nome">PAROTIDECTOMIA PARCIAL OU SUBTOTAL</span></li>
                    <li><span className="procedimento-codigo">0404020089</span><span className="procedimento-nome">EXCISAO DE RANULA OU FENOMENO DE RETENCAO SALIVAR</span></li>
                    <li><span className="procedimento-codigo">0404020240</span><span className="procedimento-nome">RECONSTRUCAO TOTAL OU PARCIAL DE NARIZ</span></li>
                    <li><span className="procedimento-codigo">0404020313</span><span className="procedimento-nome">RETIRADA DE CORPO ESTRANHO DOS OSSOS DA FACE	</span></li>
                    <li><span className="procedimento-codigo">0404020542</span><span className="procedimento-nome">REDUCAO CIRURGICA DE FRATURA DOS OSSOS PROPRIOS DO NARIZ</span></li>
                </ul>
                </div>
            </details>

            {/* --- Aparelho circulatório --- */}
            <details className="accordion-procedimentos">
                <summary className="accordion-header">Aparelho circulatório</summary>
                <div className="accordion-content">
                <ul className="lista-procedimentos-codigos">
                    <li><span className="procedimento-codigo">0406010536</span><span className="procedimento-nome">FECHAMENTO DE COMUNICACAO INTERATRIAL</span></li>
                    <li><span className="procedimento-codigo">0406010650</span><span className="procedimento-nome">IMPLANTE DE MARCAPASSO DE CAMARA DUPLA TRANSVENOSO</span></li>
                    <li><span className="procedimento-codigo">0406010676</span><span className="procedimento-nome">IMPLANTE DE MARCAPASSO DE CAMARA UNICA TRANSVENOSO</span></li>
                    <li><span className="procedimento-codigo">0406010692</span><span className="procedimento-nome">IMPLANTE DE PROTESE VALVAR</span></li>
                    <li><span className="procedimento-codigo">0406010927</span><span className="procedimento-nome">REVASCULARIZACAO MIOCARDICA COM USO DE EXTRACORPOREA</span></li>
                    <li><span className="procedimento-codigo">0406010935</span><span className="procedimento-nome">REVASCULARIZACAO MIOCARDICA C/ USO DE EXTRACORPOREA (C/ 2 OU MAIS ENXERTOS)</span></li>
                    <li><span className="procedimento-codigo">0406020221</span><span className="procedimento-nome">LINFADENECTOMIA RADICAL AXILAR UNILATERAL</span></li>
                    <li><span className="procedimento-codigo">0406020450</span><span className="procedimento-nome">REVASCULARIZACAO POR PONTE / TROMBOENDARTERECTOMIA FEMURO-POPLITEA PROXIMAL</span></li>
                    <li><span className="procedimento-codigo">0406020493</span><span className="procedimento-nome">TRATAMENTO CIRURGICO DE LESOES VASCULARES TRAUMATICAS DA REGIAO CERVICAL</span></li>
                    <li><span className="procedimento-codigo">0406020566</span><span className="procedimento-nome">TRATAMENTO CIRURGICO DE VARIZES (BILATERAL)</span></li>
                    <li><span className="procedimento-codigo">0406020574</span><span className="procedimento-nome">TRATAMENTO CIRURGICO DE VARIZES (UNILATERAL)</span></li>
                    <li><span className="procedimento-codigo">0406030014</span><span className="procedimento-nome">ANGIOPLASTIA CORONARIANA</span></li>
                    <li><span className="procedimento-codigo">0406030022</span><span className="procedimento-nome">ANGIOPLASTIA CORONARIANA C/ IMPLANTE DE DOIS STENTS</span></li>
                    <li><span className="procedimento-codigo">0406030030</span><span className="procedimento-nome">ANGIOPLASTIA CORONARIANA COM IMPLANTE DE STENT</span></li>
                    <li><span className="procedimento-codigo">0406040028</span><span className="procedimento-nome">ANGIOPLASTIA INTRALUMINAL DE AORTA, VEIA CAVA / VASOS ILIACOS (COM STENT)</span></li>
                    <li><span className="procedimento-codigo">0406040044</span><span className="procedimento-nome">ANGIOPLASTIA INTRALUMINAL DE AORTA, VEIA CAVA / VASOS ILIACOS (SEM STENT)</span></li>
                    <li><span className="procedimento-codigo">0406040052</span><span className="procedimento-nome">ANGIOPLASTIA INTRALUMINAL DE VASOS DAS EXTREMIDADES (SEM STENT)</span></li>
                    <li><span className="procedimento-codigo">0406040060</span><span className="procedimento-nome">ANGIOPLASTIA INTRALUMINAL DE VASOS DAS EXTREMIDADES (COM STENT NAO RECOBERTO)</span></li>
                    <li><span className="procedimento-codigo">0406040095</span><span className="procedimento-nome">ANGIOPLASTIA INTRALUMINAL DE VASOS DO PESCOCO OU TRONCOS SUPRA-AORTICOS (COM STENT NAO RECOBERTO)</span></li>
                    <li><span className="procedimento-codigo">0406040109</span><span className="procedimento-nome">ANGIOPLASTIA INTRALUMINAL DE VASOS VISCERAIS COM STENT NAO RECOBERTO</span></li>
                    <li><span className="procedimento-codigo">0406040168</span><span className="procedimento-nome">CORRECAO ENDOVASCULAR DE ANEURISMA / DISSECCAO DA AORTA ABDOMINAL E ILIACAS COM ENDOPROTESE BIF</span></li>
                    <li><span className="procedimento-codigo">0406040176</span><span className="procedimento-nome">CORRECAO ENDOVASCULAR DE ANEURISMA / DISSECCAO DA AORTA TORACICA COM ENDOPROTESE RETA OU CONIC</span></li>
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