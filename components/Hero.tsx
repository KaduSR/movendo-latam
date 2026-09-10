import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { ButtonLink } from "./ButtonLink";

export function Hero() {
  return (
    <section className="hero section-shell" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal>
            <div className="eyebrow eyebrow--orange">
              <span aria-hidden="true" />
              Consultoria de desenvolvimento organizacional
            </div>
            <h1 id="hero-title">
              <span className="hero-line">Líderes que movem</span>
              <span className="hero-line">pessoas e negócios.</span>
            </h1>
            <p className="hero-lead">
              Criamos experiências práticas para desenvolver líderes, fortalecer
              equipes e construir culturas que acompanham o crescimento — sem
              perder de vista quem faz a empresa acontecer.
            </p>
          </Reveal>

          <Reveal className="hero-actions">
            <ButtonLink href="#contato" className="hero-primary">
              Quero uma proposta
            </ButtonLink>
            <Link href="#metodologia" className="text-link">
              Conhecer nossa metodologia
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </Reveal>

          <Reveal className="hero-proof">
            <CheckCircle2 size={18} aria-hidden="true" />
            <span>
              Diagnóstico, desenho e acompanhamento conectados à sua realidade.
            </span>
          </Reveal>
        </div>

        <div className="hero-visual" aria-label="Equipe Movendo em uma conversa de trabalho">
          <div className="visual-frame">
            <Image
              src="/assets/movendo-team.jpg"
              alt="Equipe Movendo em uma conversa de trabalho"
              width={720}
              height={840}
              className="hero-image"
              priority
            />
            <div className="visual-caption">
              <span className="visual-caption__label">MOVENDO LATAM</span>
              <span className="visual-caption__text">
                Experiência regional. Perspectiva global.
              </span>
            </div>
          </div>
          <div className="visual-chip visual-chip--one">
            <span className="visual-chip__number">01</span>
            <span>Escuta</span>
          </div>
          <div className="visual-chip visual-chip--two">
            <span className="visual-chip__number">02</span>
            <span>Ativação</span>
          </div>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <i />
      </div>
    </section>
  );
}
