"use client"; // <-- adiciona isso na primeira linha
import React, { useState } from "react";
import styles from "./sidebar.module.css"

export default function Sidebar() {
    const [activeMenu, setActiveMenu] = useState(null);
    const [open, setOpen] = useState(false);
    const toggleMenu = (menuName) => {setActiveMenu(activeMenu === menuName ? null : menuName);
};
  
    return (
        <>
            <button className={styles.hamburguer} onClick={() => setOpen(!open)}>
                 ☰
            </button>

            {open && <div className={styles.overlay} onClick={() => setOpen(false)}></div>}

            <aside className={`${styles.sidebar} ${open ? styles.open : ""}`}>
                <button className={styles.closeBtn} onClick={() => setOpen(false)}>×</button>
                <nav>
                    <ul>
                        <li>
                            <a href="/" className={styles.menuLink}>Página Inicial</a>
                        </li>

                        <li>
                            <button 
                                onClick={() => toggleMenu("servicos")} className={`${styles.menuBtn} ${activeMenu === "servicos" ? styles.active : ""}`}>
                                Serviços de Saúde
                            </button>
                            {activeMenu === "servicos" && (
                                <ul className={styles.submenu}>
                                    <li><a href="/servicos/atendimento-domiciliar">Atendimento Domiciliar</a></li>
                                    <li><a href="/servicos/farmacia-municipal">Farmácia Municipal</a></li>
                                    <li><a href="/servicos/laboratorio-municipal">Laboratório Municipal</a></li>
                                    <li><a href="/servicos/pace">PACE</a></li>
                                    <li><a href="/servicos/vacina">Vacina</a></li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <button 
                                onClick={() => toggleMenu("vigilancia")} className={`${styles.menuBtn} ${activeMenu === "vigilancia" ? styles.active : ""}`}>
                                Vigilância em Saúde
                            </button>
                            {activeMenu === "vigilancia" && (
                                <ul className={styles.submenu}>
                                    <li><a href="/vigilancia/ccz">CCZ</a></li>
                                    <li><a href="/vigilancia/vigilancia-sanitaria">Vigilância Sanitária</a></li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <button 
                                onClick={() => toggleMenu("digital")} className={`${styles.menuBtn} ${activeMenu === "digital" ? styles.active : ""}`}>
                                Saúde Digital
                            </button>
                            {activeMenu === "digital" && (
                                <ul className={styles.submenu}>
                                    <li><a href="/digital/app-saude-digital">App Saúde Digital</a></li>
                                    <li><a href="/digital/app-meu-sus">App Meu SUS Digital</a></li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <button 
                                onClick={() => toggleMenu("contatos")} className={`${styles.menuBtn} ${activeMenu === "contatos" ? styles.active : ""}`}>
                                Contatos
                            </button>
                            {activeMenu === "contatos" && (
                                <ul className={styles.submenu}>
                                    <li><a href="/contatos/contatos">Contatos</a></li>
                                    <li><a href="/contatos/ouvidoria">Ouvidoria</a></li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <a href="/transparencia" className={styles.menuLink}>Transparência</a>
                        </li>

                        <li>
                            <a href="/fluxos-assistenciais" className={styles.menuLink}>Fluxos Assistenciais</a>
                        </li>
                    </ul>
                </nav>
             </aside>
        </>
    );
}
