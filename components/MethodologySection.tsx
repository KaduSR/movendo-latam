import { ArrowRight, Check, Compass, Lightbulb, Radio, Waves } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    number: "01",
    icon: Radio,
    title: "Escuta",
    copy: "Entendemos o negócio, as pessoas e as oportunidades antes de propor qualquer movimento.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Insight",
    copy: "Transformamos o contexto em um ponto de alavancagem claro e compartilhado.",
  },
  {
    number: "03",
    icon: Compass,
    title: "Experiência",
    copy: "Desenhamos intervenções práticas para colocar novas formas de liderar e trabalhar em movimento.",
  },
  {
    number: "04",
    icon: Waves,
    title: "Sustentação",
    copy: "Medimos, ajustamos e criamos condições para o aprendizado continuar depois do encontro.",
  },
];

export function MethodologySection() {
  return (
    <section id="metodologia" className="section methodology-section" aria-labelledby="methodology-title">
      <div className="container methodology-grid">
        <div className="methodology-intro">
          <Reveal>
            <div className="eyebrow eyebrow--blue">Nossa forma de mover</div>
            <h2 id="methodology-title">Menos discurso. Mais movimento.</h2>
            <p>
              Uma metodologia simples de acompanhar, mas exigente o suficiente para
              gerar mudança real. Da primeira conversa ao fechamento, cada etapa tem
              um propósito.
            </p>
            <a href="#contato" className="arrow-link">
              Ver como funciona <ArrowRight size={17} aria-hidden="true" />
            </a>
          </Reveal>
        </div>
        <div className="methodology-steps">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.number} className="methodology-step">
                <div className="methodology-step__head">
                  <span className="methodology-step__number">{step.number}</span>
                  <Icon size={25} aria-hidden="true" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
                <span className="methodology-step__check" aria-hidden="true">
                  <Check size={14} strokeWidth={3} />
                </span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
