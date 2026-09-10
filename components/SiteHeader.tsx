"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/app/page";
import { ButtonLink } from "./ButtonLink";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      toggleRef.current?.focus();
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !menuRef.current) return;

      const focusable = menuRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;

      const first = focusable[0] as HTMLElement;
      const last = focusable[focusable.length - 1] as HTMLElement;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("keydown", trapFocus);

    // Focus the first link inside the menu when it opens
    const firstLink = menuRef.current?.querySelector("a[href]") as HTMLElement | null;
    firstLink?.focus();

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("keydown", trapFocus);
    };
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
            ref={toggleRef}
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

      <div
        id="mobile-navigation"
        ref={menuRef}
        className={`mobile-nav ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
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
