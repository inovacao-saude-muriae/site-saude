"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Ignora a página inicial para não duplicar
  if (pathname === "/") return null;

  // Divide a URL em partes (ex: /fluxos-assistenciais/cardiologia vira ["fluxos-assistenciais", "cardiologia"])
  const pathSegments = pathname.split("/").filter((segment) => segment);

  // Função para formatar o texto (ex: "cirurgia-geral" vira "Cirurgia Geral")
  const formatLabel = (segment) => {
    return segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());
  };

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs-container">
      <ul className="breadcrumbs-list">
        <li className="breadcrumb-item">
          <Link href="/">Início</Link>
        </li>

        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;

          return (
            <li key={href} className="breadcrumb-item">
              <span className="separator">/</span>
              {isLast ? (
                <span className="current-page">{formatLabel(segment)}</span>
              ) : (
                <Link href={href}>{formatLabel(segment)}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}