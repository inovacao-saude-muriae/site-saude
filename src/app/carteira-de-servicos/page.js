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

            {/* --- Aparelho digestivo e parede abdominal --- */}
            <details className="accordion-procedimentos">
                <summary className="accordion-header">Aparelho digestivo e parede abdominal</summary>
                <div className="accordion-content">
                    <ul className="lista-procedimentos-codigos">
                        <li><span className="procedimento-codigo">0407010211</span><span className="procedimento-nome">GASTROSTOMIA</span></li>
                        <li><span className="procedimento-codigo">0407020179</span><span className="procedimento-nome">ENTERECTOMIA</span></li>
                        <li><span className="procedimento-codigo">0407020225</span><span className="procedimento-nome">EXCISAO DE LESAO / TUMOR ANU-RETAL</span></li>
                        <li><span className="procedimento-codigo">0407020276</span><span className="procedimento-nome">FISTULECTOMIA / FISTULOTOMIA ANAL</span></li>
                        <li><span className="procedimento-codigo">0407020284</span><span className="procedimento-nome">HEMORROIDECTOMIA</span></li>
                        <li><span className="procedimento-codigo">0407020470</span><span className="procedimento-nome">TRATAMENTO CIRURGICO DE PROLAPSO ANAL</span></li>
                        <li><span className="procedimento-codigo">0407030026</span><span className="procedimento-nome">COLECISTECTOMIA</span></li>
                        <li><span className="procedimento-codigo">0407030034</span><span className="procedimento-nome">COLECISTECTOMIA VIDEOLAPAROSCOPICA</span></li>
                        <li><span className="procedimento-codigo">0407030166</span><span className="procedimento-nome">HEPATOTOMIA E DRENAGEM DE ABSCESSO / CISTO</span></li>
                        <li><span className="procedimento-codigo">0407040064</span><span className="procedimento-nome">HERNIOPLASTIA EPIGASTRICA</span></li>
                        <li><span className="procedimento-codigo">0407040080</span><span className="procedimento-nome">HERNIOPLASTIA INCISIONAL</span></li>
                        <li><span className="procedimento-codigo">0407040099</span><span className="procedimento-nome">HERNIOPLASTIA INGUINAL (BILATERAL)</span></li>
                        <li><span className="procedimento-codigo">0407040102</span><span className="procedimento-nome">HERNIOPLASTIA INGUINAL / CRURAL (UNILATERAL)</span></li>
                        <li><span className="procedimento-codigo">0407040110</span><span className="procedimento-nome">HERNIOPLASTIA RECIDIVANTE</span></li>
                        <li><span className="procedimento-codigo">0407040129</span><span className="procedimento-nome">HERNIOPLASTIA UMBILICAL</span></li>
                        <li><span className="procedimento-codigo">0407040137</span><span className="procedimento-nome">HERNIORRAFIA INGUINAL VIDEOLAPAROSCOPICA</span></li>
                        <li><span className="procedimento-codigo">0407040153</span><span className="procedimento-nome">HERNIORRAFIA UMBILICAL VIDEOLAPAROSCOPICA</span></li>
                        <li><span className="procedimento-codigo">0407040161</span><span className="procedimento-nome">LAPAROTOMIA EXPLORADORA</span></li>
                    </ul>
                </div>
            </details> 

            {/* --- Sistema osteomuscular --- */}
            <details className="accordion-procedimentos">
                <summary className="accordion-header">Sistema osteomuscular</summary>
                <div className="accordion-content">    
                    <ul className="lista-procedimentos-codigos">
                        <li><span className="procedimento-codigo">0408010150</span><span className="procedimento-nome">TRATAMENTO CIRURGICO DE FRATURA DA CLAVICULA</span></li>
                        <li><span className="procedimento-codigo">0408010185</span><span className="procedimento-nome">TRATAMENTO CIRURGICO DE LUXACAO / FRATURA-LUXACAO ACROMIO-CLAVICULAR</span></li>
                        <li><span className="procedimento-codigo">0408020369</span><span className="procedimento-nome">TRATAMENTO CIRURGICO DE FRATURA / LESAO FISARIA DO CONDILO / TROCLEA/APOFISE CORONOIDE DO ULNA /</span></li>
                        <li><span className="procedimento-codigo">0408020385</span><span className="procedimento-nome">TRATAMENTO CIRURGICO DE FRATURA / LESAO FISARIA SUPRACONDILIANA DO UMERO</span></li>
                        <li><span className="procedimento-codigo">0408020393</span><span className="procedimento-nome">TRATAMENTO CIRUGICO DE FRATURA DA DIAFISE DO UMERO</span></li>
                        <li><span className="procedimento-codigo">0408020423</span><span className="procedimento-nome">TRATAMENTO CIRURGICO DE FRATURA DIAFISARIA DE AMBOS OS OSSOS DO ANTEBRACO (C/ SINTESE)</span></li>
                        <li><span className="procedimento-codigo">0408020440</span><span className="procedimento-nome">TRATAMENTO CIRURGICO DE FRATURA LESAO FISARIA DOS OSSOS DO ANTEBRACO</span></li>
                        <li><span className="procedimento-codigo">0408030267</span><span className="procedimento-nome">ARTRODESE TORACO-LOMBO-SACRA POSTERIOR UM NIVEL</span></li>
                        <li><span className="procedimento-codigo">0408030380</span><span className="procedimento-nome">DISCECTOMIA CERVICAL / LOMBAR / LOMBO-SACRA POR VIA POSTERIOR (1 NIVEL C/ MICROSCOPIO)</span></li>
                        <li><span className="procedimento-codigo">0408040190</span><span className="procedimento-nome">REDUCAO INCRUENTA DE LUXACAO COXOFEMORAL TRAUMATICA / POS-ARTROPLASTIA</span></li>
                        <li><span className="procedimento-codigo">0408050012</span><span className="procedimento-nome">AMPUTACAO / DESARTICULACAO DE MEMBROS INFERIORES</span></li>
                        <li><span className="procedimento-codigo">0408050063</span><span className="procedimento-nome">ARTROPLASTIA TOTAL PRIMARIA DO JOELHO</span></li>
                        <li><span className="procedimento-codigo">0408050489</span><span className="procedimento-nome">TRATAMENTO CIRURGICO DE FRATURA / LESAO FISARIA PROXIMAL (COLO) DO FEMUR (SINTESE)</span></li>
                        <li><span className="procedimento-codigo">0408050500</span><span className="procedimento-nome">TRATAMENTO CIRURGICO DE FRATURA DA DIAFISE DA TIBIA</span></li>
                        <li><span className="procedimento-codigo">0408050519</span><span className="procedimento-nome">TRATAMENTO CIRURGICO DE FRATURA DA DIAFISE DO FEMUR</span></li>
                        <li><span className="procedimento-codigo">0408050632</span><span className="procedimento-nome">TRATAMENTO CIRURGICO DE FRATURA TRANSTROCANTERIANA</span></li>
                        <li><span className="procedimento-codigo">0408050799</span><span className="procedimento-nome">TRATAMENTO CIRURGICO DE PSEUDARTROSE / RETARDO DE CONSOLIDACAO / PERDA OSSEA DA DIAFISE DO FEMU</span></li>
                        <li><span className="procedimento-codigo">0408050861</span><span className="procedimento-nome">TRATAMENTO CIRURGICO DE PSEUDARTROSE / RETARDO DE CONSOLIDACAO / PERDA OSSEA DA DIAFISE TIBIAL</span></li>
                        <li><span className="procedimento-codigo">0408060115</span><span className="procedimento-nome">ENCURTAMENTO DE OSSOS LONGOS EXCETO DA MAO E DO PE</span></li>
                        <li><span className="procedimento-codigo">0408060158</span><span className="procedimento-nome">MANIPULACAO ARTICULAR</span></li>
                        <li><span className="procedimento-codigo">0408060212</span><span className="procedimento-nome">RESSECCAO DE CISTO SINOVIAL</span></li>
                        <li><span className="procedimento-codigo">0408060310</span><span className="procedimento-nome">RESSECCAO SIMPLES DE TUMOR OSSEO / DE PARTES MOLES</span></li>
                        <li><span className="procedimento-codigo">0408060352</span><span className="procedimento-nome">RETIRADA DE FIO OU PINO INTRA-OSSEO</span></li>
                        <li><span className="procedimento-codigo">0408060360</span><span className="procedimento-nome">RETIRADA DE FIXADOR EXTERNO</span></li>
                        <li><span className="procedimento-codigo">0408060379</span><span className="procedimento-nome">RETIRADA DE PLACA E/OU PARAFUSOS</span></li>
                        <li><span className="procedimento-codigo">0408060476</span><span className="procedimento-nome">TENOPLASTIA OU ENXERTO DE TENDAO UNICO</span></li>
                    </ul>
                </div>
            </details>
            
            {/* --- Aparelho Geniturinário --- */}
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
                        <li><span className="procedimento-codigo">0409040177</span><span className="procedimento-nome">PLASTICA DA BOLSAESCROTAL</span></li>
                        <li><span className="procedimento-codigo">0409040215</span><span className="procedimento-nome">TRATAMENTO CIRURGICO DE HIDROCELE</span></li>
                        <li><span className="procedimento-codigo">0409040240</span><span className="procedimento-nome">VASECTOMIA</span></li>
                        <li><span className="procedimento-codigo">0409060020</span><span className="procedimento-nome">COLPOPERINEOPLASTIA ANTERIOR E POSTERIOR C/ AMPUTACAO DE COLO</span></li>
                        <li><span className="procedimento-codigo">0409060046</span><span className="procedimento-nome">CURETAGEM SEMIOTICA C/ OU S/ DILATACAO DO COLO DO UTERO</span></li>
                        <li><span className="procedimento-codigo">0409060100</span><span className="procedimento-nome">HISTERECTOMIA (POR VIA VAGINAL)</span></li>
                        <li><span className="procedimento-codigo">0409060119</span><span className="procedimento-nome">HISTERECTOMIA C/ ANEXECTOMIA (UNI / BILATERAL)</span></li>
                        <li><span className="procedimento-codigo">0409060127</span><span className="procedimento-nome">HISTERECTOMIA SUBTOTAL</span></li>
                        <li><span className="procedimento-codigo">0409060135</span><span className="procedimento-nome">HISTERECTOMIA TOTAL</span></li>
                        <li><span className="procedimento-codigo">0409060143</span><span className="procedimento-nome">HISTERECTOMIA TOTAL AMPLIADA (WERTHEIN-MEIGS)</span></li>
                        <li><span className="procedimento-codigo">0409060186</span><span className="procedimento-nome">LAQUEADURA TUBARIA</span></li>
                        <li><span className="procedimento-codigo">0409060194</span><span className="procedimento-nome">MIOMECTOMIA</span></li>
                        <li><span className="procedimento-codigo">0409060216</span><span className="procedimento-nome">OOFORECTOMIA / OOFOROPLASTIA</span></li>
                        <li><span className="procedimento-codigo">0409060232</span><span className="procedimento-nome">SALPINGECTOMIA UNI / BILATERAL</span></li>
                        <li><span className="procedimento-codigo">0409070050</span><span className="procedimento-nome">COLPOPERINEOPLASTIA ANTERIOR E POSTERIOR</span></li>
                        <li><span className="procedimento-codigo">0409070084</span><span className="procedimento-nome">COLPOPLASTIA ANTERIOR</span></li>
                        <li><span className="procedimento-codigo">0409070149</span><span className="procedimento-nome">EXERESE DE CISTO VAGINAL</span></li>
                        <li><span className="procedimento-codigo">0409070157</span><span className="procedimento-nome">EXERESE DE GLANDULA DE BARTHOLIN / SKENE</span></li>
                    </ul>
                </div>
            </details>

            {/* --- Obstetrícia --- */}
            <details className="accordion-procedimentos">
                <summary className="accordion-header">Obstetrícia</summary>
                <div className="accordion-content">
                    <ul className="lista-procedimentos-codigos">
                        <li><span className="procedimento-codigo">0411010034</span><span className="procedimento-nome">PARTO CESARIANO</span></li>
                        <li><span className="procedimento-codigo">0411020013</span><span className="procedimento-nome">CURETAGEM POS-ABORTAMENTO / PUERPERAL</span></li>
                    </ul>
                </div>
            </details>

            {/* --- Bucomaxilofacial --- */}
            <details className="accordion-procedimentos">
                <summary className="accordion-header">Bucomaxilofacial</summary>
                <div className="accordion-content">
                    <ul className="lista-procedimentos-codigos">
                        <li><span className="procedimento-codigo">0414020413</span><span className="procedimento-nome">TRATAMENTO ODONTOLOGICO PARA PACIENTES COM NECESSIDADES ESPECIAIS</span></li>
                    </ul>
                </div>
            </details>
        </section>
      </div>
    </main>
  );
}