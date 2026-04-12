"use client";
import React, { useState } from "react";
import Link from "next/link"; 
import styles from "./sidebar.module.css";

export default function Sidebar() {
    const [activeMenu, setActiveMenu] = useState(null);
    const [open, setOpen] = useState(false);

    const toggleMenu = (menuName) => {
        setActiveMenu(activeMenu === menuName ? null : menuName);
    };

    return (
        <>
            {/* Botão hamburguer */}
            <button className={styles.hamburger} onClick={() => setOpen(!open)}>
                ☰
            </button>

            {/* Overlay */}
            {open && <div className={styles.overlay} onClick={() => setOpen(false)}></div>}

            {/* Sidebar */}
            <aside className={`${styles.sidebar} ${open ? styles.open : ""}`}>
                <button className={styles.closeBtn} onClick={() => setOpen(false)}>×</button>
                <nav>
                    <ul>
                        {/* Página Inicial */}
                        <li>
                            <Link href="/" className={styles.menuLink}>
                                <span className={styles.left}>
                                    <span className={styles.iconWrapper}>
                                        {/* Ícone padrão */}
                                        <img src="/img/icon/home.png" alt="Home" className={`${styles.icon} ${styles.iconDefault}`} />
                                        {/* Ícone hover */}
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
                                    <li><Link href="/servicos/atendimento-domiciliar">Atendimento Domiciliar</Link></li>
                                    <li><Link href="/servicos/farmacia-municipal">Farmácia Municipal</Link></li>
                                    <li><Link href="/servicos/laboratorio-municipal">Laboratório Municipal</Link></li>
                                    <li><Link href="/servicos/pace">Doação de sangue</Link></li>
                                    <li><Link href="/servicos/vacina">Vacina</Link></li>
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
                                    <li><Link href="/vigilancia/ccz">CCZ</Link></li>
                                    <li><Link href="/vigilancia/vigilancia-sanitaria">Vigilância Sanitária</Link></li>
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
                                    <li><Link href="/digital/app-saude-digital">App Saúde Digital</Link></li>
                                    <li><Link href="/digital/app-meu-sus">App Meu SUS Digital</Link></li>
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
                                    <li><Link href="/contatos/contatos">Contatos</Link></li>
                                    <li><Link href="/contatos/ouvidoria">Ouvidoria</Link></li>
                                </ul>
                            )}
                        </li>

                        {/* Transparência */}
                        <li>
                            <Link href="/transparencia" className={styles.menuLink}>
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
                            <Link href="/fluxos-assistenciais" className={styles.menuLink}>
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
