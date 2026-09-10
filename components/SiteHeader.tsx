"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/app/page";
import { ButtonLink } from "./ButtonLink";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Movendo Latam — página inicial">
          <Image
            src="/assets/movendo-logo.png"
            alt="Movendo Latam"
            width={154}
            height={52}
            className="brand-logo"
            priority
          />
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <ButtonLink href="#contato" className="header-cta">
            Fale conosco
          </ButtonLink>
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div id="mobile-navigation" className={`mobile-nav ${open ? "is-open" : ""}`}>
        <nav aria-label="Navegação móvel">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={index === 0 ? "mobile-nav__first" : ""}
            >
              {item.label}
              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </nav>
        <ButtonLink href="#contato" className="mobile-nav__cta">
          Quero uma proposta
        </ButtonLink>
        <p className="mobile-nav__note">
          Desenvolvimento de líderes, equipes e culturas organizacionais.
        </p>
      </div>
    </header>
  );
}
