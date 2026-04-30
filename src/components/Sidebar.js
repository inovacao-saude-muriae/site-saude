"use client";
import React, { useState } from "react";
import Link from "next/link"; 
import styles from "./sidebar.module.css";

// Agora recebemos 'open' e 'setOpen' como props do Layout
export default function Sidebar({ open, setOpen }) {
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMenu = (menuName) => {
        setActiveMenu(activeMenu === menuName ? null : menuName);
    };

    // Função auxiliar para fechar o menu ao clicar em um link (opcional, melhora UX)
    const closeMenu = () => {
        if (setOpen) setOpen(false);
    };

    return (
        <>
            {/* Overlay: Só aparece se o menu estiver aberto */}
            {open && <div className={styles.overlay} onClick={closeMenu}></div>}

            {/* Sidebar: A classe 'open' é controlada pela prop externa */}
            <aside className={`${styles.sidebar} ${open ? styles.open : ""}`}>
                
                {/* Botão de Fechar interno da Sidebar */}
                <button className={styles.closeBtn} onClick={() => setOpen(false)}> &times; </button>
                
                <nav>
                    <ul>
                        {/* Página Inicial */}
                        <li>
                            <Link href="/" className={styles.menuLink} onClick={closeMenu}>
                                <span className={styles.left}>
                                    <span className={styles.iconWrapper}>
                                        <img src="/img/icon/home.png" alt="Home" className={`${styles.icon} ${styles.iconDefault}`} />
                                        <img src="/img/icon/home-hover.png" alt="Home Hover" className={`${styles.icon} ${styles.iconHover}`} />
                                    </span>
                                    Página Inicial
                                </span>
                            </Link>
                        </li>

                        {/* Serviços de Saúde */}
                        <li>
                            <button 
                                onClick={() => toggleMenu("servicos")} 
                                className={`${styles.menuBtn} ${activeMenu === "servicos" ? styles.active : ""}`}>
                                <span className={styles.left}>
                                    <span className={styles.iconWrapper}>
                                        <img src="/img/icon/servico-saude.png" alt="Serviços" className={`${styles.icon} ${styles.iconDefault}`} />
                                        <img src="/img/icon/servico-saude-hover.png" alt="Serviços" className={`${styles.icon} ${styles.iconHover}`} />                                        
                                    </span>
                                    Serviços de Saúde
                                </span>
                                <span className={styles.right}>
                                    <span className={styles.arrow}></span>
                                </span>
                            </button>
                            {activeMenu === "servicos" && (
                                <ul className={styles.submenu}>
                                    <li><Link href="/servicos/atendimento-domiciliar" onClick={closeMenu}>Atendimento Domiciliar</Link></li>
                                    <li><Link href="/servicos/farmacia-municipal" onClick={closeMenu}>Farmácia Municipal</Link></li>
                                    <li><Link href="/servicos/laboratorio-municipal" onClick={closeMenu}>Laboratório Municipal</Link></li>
                                    <li><Link href="/servicos/pace" onClick={closeMenu}>Doação de sangue</Link></li>
                                    <li><Link href="/servicos/vacina" onClick={closeMenu}>Vacina</Link></li>
                                </ul>
                            )}
                        </li>

                        {/* Vigilância em Saúde */}
                        <li>
                            <button 
                                onClick={() => toggleMenu("vigilancia")} 
                                className={`${styles.menuBtn} ${activeMenu === "vigilancia" ? styles.active : ""}`}>
                                <span className={styles.left}>
                                    <span className={styles.iconWrapper}>
                                        <img src="/img/icon/vigilancia-saude.png" alt="Vigilância" className={`${styles.icon} ${styles.iconDefault}`} />
                                        <img src="/img/icon/vigilancia-saude-hover.png" alt="Vigilância" className={`${styles.icon} ${styles.iconHover}`} />                                        
                                    </span>
                                    Vigilância em Saúde
                                </span>
                                <span className={styles.right}>
                                    <span className={styles.arrow}></span>
                                </span>
                            </button>
                            {activeMenu === "vigilancia" && (
                                <ul className={styles.submenu}>
                                    <li><Link href="/vigilancia/ccz" onClick={closeMenu}>CCZ</Link></li>
                                    <li><Link href="/vigilancia/vigilancia-sanitaria" onClick={closeMenu}>Vigilância Sanitária</Link></li>
                                </ul>
                            )}
                        </li>

                        {/* Saúde Digital */}
                        <li>
                            <button 
                                onClick={() => toggleMenu("digital")} 
                                className={`${styles.menuBtn} ${activeMenu === "digital" ? styles.active : ""}`}>
                                <span className={styles.left}>
                                    <span className={styles.iconWrapper}>
                                        <img src="/img/icon/digital.png" alt="Saúde Digital" className={`${styles.icon} ${styles.iconDefault}`} />
                                        <img src="/img/icon/digital-hover.png" alt="Saúde Digital" className={`${styles.icon} ${styles.iconHover}`} />                                        
                                    </span>
                                    Saúde Digital
                                </span>
                                <span className={styles.right}>
                                    <span className={styles.arrow}></span>
                                </span>
                            </button>
                            {activeMenu === "digital" && (
                                <ul className={styles.submenu}>
                                    <li><Link href="/digital/app-saude-digital" onClick={closeMenu}>App Saúde Digital</Link></li>
                                    <li><Link href="/digital/app-meu-sus" onClick={closeMenu}>App Meu SUS Digital</Link></li>
                                </ul>
                            )}
                        </li>

                        {/* Contatos */}
                        <li>
                            <button 
                                onClick={() => toggleMenu("contatos")} 
                                className={`${styles.menuBtn} ${activeMenu === "contatos" ? styles.active : ""}`}>
                                <span className={styles.left}>
                                    <span className={styles.iconWrapper}>
                                        <img src="/img/icon/contato.png" alt="Contatos" className={`${styles.icon} ${styles.iconDefault}`} />
                                        <img src="/img/icon/contato-hover.png" alt="Contatos" className={`${styles.icon} ${styles.iconHover}`} />                                        
                                    </span>
                                    Contatos
                                </span>
                                <span className={styles.right}>
                                    <span className={styles.arrow}></span>
                                </span>
                            </button>
                            {activeMenu === "contatos" && (
                                <ul className={styles.submenu}>
                                    <li><Link href="/contatos/contatos" onClick={closeMenu}>Contatos</Link></li>
                                    <li><Link href="/contatos/ouvidoria" onClick={closeMenu}>Ouvidoria</Link></li>
                                </ul>
                            )}
                        </li>

                        {/* Transparência */}
                        <li>
                            <Link href="/transparencia" className={styles.menuLink} onClick={closeMenu}>
                                <span className={styles.left}>
                                    <span className={styles.iconWrapper}>
                                        <img src="/img/icon/transparencia.png" alt="Transparência" className={`${styles.icon} ${styles.iconDefault}`} />
                                        <img src="/img/icon/transparencia-hover.png" alt="Transparência" className={`${styles.icon} ${styles.iconHover}`}/>                                        
                                    </span>
                                    Transparência
                                </span>
                            </Link>
                        </li>

                        {/* Fluxos Assistenciais */}
                        <li>
                            <Link href="/fluxos-assistenciais" className={styles.menuLink} onClick={closeMenu}>
                                <span className={styles.left}>
                                    <span className={styles.iconWrapper}>
                                        <img src="/img/icon/servico-saude.png" alt="Fluxos Assistenciais" className={`${styles.icon} ${styles.iconDefault}`} />
                                        <img src="/img/icon/servico-saude-hover.png" alt="Fluxos Assistenciais" className={`${styles.icon} ${styles.iconHover}`} />                                        
                                    </span>
                                    Fluxos Assistenciais
                                </span>
                            </Link>
                        </li>                        
                    </ul>
                </nav>
            </aside>
        </>
    );
}