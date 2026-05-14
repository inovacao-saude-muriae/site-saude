"use client";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Coluna 1 - Institucional */}
        <div className={styles.col}>
          <h4>Prefeitura de Muriaé</h4>
          <p>Secretaria Municipal de Saúde</p>
          <p>© {new Date().getFullYear()} Todos os direitos reservados</p>
        </div>

        {/* Coluna 2 - Links rápidos */}
        <div className={styles.col}>
          <h4>Links Rápidos</h4>
          <ul>
            <li><Link href="/">Página Inicial</Link></li>
            <li><Link href="/eventos">Eventos</Link></li>
            <li><Link href="/noticias">Notícias</Link></li>
            <li><Link href="/contatos/ouvidoria">Ouvidoria</Link></li>
          </ul>
        </div>

        {/* Coluna 3 - Contato */}
        <div className={styles.col}>
          <h4>Contato</h4>
          <p>Telefone: (32) 3696-3305</p>
          <p>Endereço: Av. Maestro Sansão, 236 - 1º andar Muriaé/MG</p>
        </div>
      </div>
    </footer>
  );
}
