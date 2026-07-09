"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./sidebar.module.css";

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [open, setOpen] = useState(false);

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  // Dimensão fixa conforme seu .iconWrapper (24px)
  const iconSize = 24;

  return (
    <>
      {/* Botão hamburguer */}
      <div className={styles.topBar}>
        <button className={styles.hamburger} onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}></div>
      )}

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${open ? styles.open : ""}`}>
        <button className={styles.closeBtn} onClick={() => setOpen(false)}>
          ×
        </button>
        <nav>
          <ul>
            {/* Página Inicial */}
            <li>
              <Link href="/" className={styles.menuLink}>
                <span className={styles.left}>
                  <span className={styles.iconWrapper}>
                    <Image
                      src="/img/icon/home.png"
                      alt="Home"
                      width={iconSize}
                      height={iconSize}
                      priority // Carrega mais rápido por ser o primeiro item
                      className={`${styles.icon} ${styles.iconDefault}`}
                    />
                    <Image
                      src="/img/icon/home-hover.png"
                      alt="Home Hover"
                      width={iconSize}
                      height={iconSize}
                      className={`${styles.icon} ${styles.iconHover}`}
                    />
                  </span>
                  Página Inicial
                </span>
              </Link>
            </li>

            {/* Serviços de Saúde */}
            <li>
              <button
                onClick={() => toggleMenu("servicos")}
                className={`${styles.menuBtn} ${activeMenu === "servicos" ? styles.active : ""}`}
              >
                <span className={styles.left}>
                  <span className={styles.iconWrapper}>
                    <Image
                      src="/img/icon/servico-saude.png"
                      alt="Serviços"
                      width={iconSize}
                      height={iconSize}
                      className={`${styles.icon} ${styles.iconDefault}`}
                    />
                    <Image
                      src="/img/icon/servico-saude-hover.png"
                      alt="Serviços Hover"
                      width={iconSize}
                      height={iconSize}
                      className={`${styles.icon} ${styles.iconHover}`}
                    />
                  </span>
                  Serviços de Saúde
                </span>
                <span className={styles.right}>
                  <span className={styles.arrow}></span>
                </span>
              </button>
              {activeMenu === "servicos" && (
                <ul className={styles.submenu}>
                  <li>
                    <Link href="/servicos/atendimento-domiciliar">
                      Atendimento Domiciliar
                    </Link>
                  </li>
                  <li>
                    <Link href="/servicos/camara-tecnica">Câmara Técnica</Link>
                  </li>
                  <li>
                    <Link href="/servicos/farmacia-municipal">
                      Farmácia Municipal
                    </Link>
                  </li>
                  <li>
                    <Link href="/servicos/laboratorio-municipal">
                      Laboratório Municipal
                    </Link>
                  </li>
                  <li>
                    <Link href="/servicos/pace">Doação de sangue</Link>
                  </li>
                  <li>
                    <Link href="/servicos/vacina">Vacina</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Vigilância em Saúde */}
            <li>
              <button
                onClick={() => toggleMenu("vigilancia")}
                className={`${styles.menuBtn} ${activeMenu === "vigilancia" ? styles.active : ""}`}
              >
                <span className={styles.left}>
                  <span className={styles.iconWrapper}>
                    <Image
                      src="/img/icon/vigilancia-saude.png"
                      alt="Vigilância"
                      width={iconSize}
                      height={iconSize}
                      className={`${styles.icon} ${styles.iconDefault}`}
                    />
                    <Image
                      src="/img/icon/vigilancia-saude-hover.png"
                      alt="Vigilância Hover"
                      width={iconSize}
                      height={iconSize}
                      className={`${styles.icon} ${styles.iconHover}`}
                    />
                  </span>
                  Vigilância em Saúde
                </span>
                <span className={styles.right}>
                  <span className={styles.arrow}></span>
                </span>
              </button>
              {activeMenu === "vigilancia" && (
                <ul className={styles.submenu}>
                  <li>
                    <Link href="/vigilancia/ccz">
                      Centro de Controle de Zoonoses
                    </Link>
                  </li>
                  <li>
                    <Link href="/vigilancia/vigilancia-sanitaria">
                      Vigilância Sanitária
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Saúde Digital */}
            <li>
              <button
                onClick={() => toggleMenu("digital")}
                className={`${styles.menuBtn} ${activeMenu === "digital" ? styles.active : ""}`}
              >
                <span className={styles.left}>
                  <span className={styles.iconWrapper}>
                    <Image
                      src="/img/icon/digital.png"
                      alt="Saúde Digital"
                      width={iconSize}
                      height={iconSize}
                      className={`${styles.icon} ${styles.iconDefault}`}
                    />
                    <Image
                      src="/img/icon/digital-hover.png"
                      alt="Saúde Digital Hover"
                      width={iconSize}
                      height={iconSize}
                      className={`${styles.icon} ${styles.iconHover}`}
                    />
                  </span>
                  App Saúde Digital
                </span>
                <span className={styles.right}>
                  <span className={styles.arrow}></span>
                </span>
              </button>
              {activeMenu === "digital" && (
                <ul className={styles.submenu}>
                  <li>
                    <Link href="/digital/app-saude-digital">
                      App Saúde Digital
                    </Link>
                  </li>
                  <li>
                    <Link href="/digital/app-meu-sus">App Meu SUS Digital</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Contatos */}
            <li>
              <button
                onClick={() => toggleMenu("contatos")}
                className={`${styles.menuBtn} ${activeMenu === "contatos" ? styles.active : ""}`}
              >
                <span className={styles.left}>
                  <span className={styles.iconWrapper}>
                    <Image
                      src="/img/icon/contato.png"
                      alt="Contatos"
                      width={iconSize}
                      height={iconSize}
                      className={`${styles.icon} ${styles.iconDefault}`}
                    />
                    <Image
                      src="/img/icon/contato-hover.png"
                      alt="Contatos Hover"
                      width={iconSize}
                      height={iconSize}
                      className={`${styles.icon} ${styles.iconHover}`}
                    />
                  </span>
                  Contatos
                </span>
                <span className={styles.right}>
                  <span className={styles.arrow}></span>
                </span>
              </button>
              {activeMenu === "contatos" && (
                <ul className={styles.submenu}>
                  <li>
                    <Link href="/contatos/contatos">Contatos</Link>
                  </li>
                  <li>
                    <Link href="/contatos/ouvidoria">Ouvidoria</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Fluxos Assistenciais */}
            <li>
              <Link href="/fluxos-assistenciais" className={styles.menuLink}>
                <span className={styles.left}>
                  <span className={styles.iconWrapper}>
                    <Image
                      src="/img/icon/servico-saude.png"
                      alt="Fluxos Assistenciais"
                      width={iconSize}
                      height={iconSize}
                      className={`${styles.icon} ${styles.iconDefault}`}
                    />
                    <Image
                      src="/img/icon/servico-saude-hover.png"
                      alt="Fluxos Assistenciais Hover"
                      width={iconSize}
                      height={iconSize}
                      className={`${styles.icon} ${styles.iconHover}`}
                    />
                  </span>
                  Fluxos Assistenciais
                </span>
              </Link>
            </li>
            {/* Transparência */}
            <li>
              <Link href="/transparencia" className={styles.menuLink}>
                <span className={styles.left}>
                  <span className={styles.iconWrapper}>
                    <Image
                      src="/img/icon/transparencia.png"
                      alt="Transparência"
                      width={iconSize}
                      height={iconSize}
                      className={`${styles.icon} ${styles.iconDefault}`}
                    />
                    <Image
                      src="/img/icon/transparencia-hover.png"
                      alt="Transparência Hover"
                      width={iconSize}
                      height={iconSize}
                      className={`${styles.icon} ${styles.iconHover}`}
                    />
                  </span>
                  Transparência
                </span>
              </Link>
            </li>
            {/* Transparência */}
            <li>
              <Link href="/producao-hospitalar" className={styles.menuLink}>
                <span className={styles.left}>
                  <span className={styles.iconWrapper}>
                    <Image
                      src="/img/icon/transparencia.png"
                      alt="Producao Hospitalar"
                      width={iconSize}
                      height={iconSize}
                      className={`${styles.icon} ${styles.iconDefault}`}
                    />
                    <Image
                      src="/img/icon/transparencia-hover.png"
                      alt="Transparência Hover"
                      width={iconSize}
                      height={iconSize}
                      className={`${styles.icon} ${styles.iconHover}`}
                    />
                  </span>
                  Produção Hospitalar
                </span>
              </Link>
            </li>
            {/* Carteira der servicos */}
            <li>
              <Link href="/carteira-de-servicos" className={styles.menuLink}>
                <span className={styles.left}>
                  <span className={styles.iconWrapper}>
                    <Image
                      src="/img/icon/transparencia.png"
                      alt="Producao Hospitalar"
                      width={iconSize}
                      height={iconSize}
                      className={`${styles.icon} ${styles.iconDefault}`}
                    />
                    <Image
                      src="/img/icon/transparencia-hover.png"
                      alt="Transparência Hover"
                      width={iconSize}
                      height={iconSize}
                      className={`${styles.icon} ${styles.iconHover}`}
                    />
                  </span>
                  Carteira de Serviços
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
