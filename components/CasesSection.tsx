import { ArrowRight, Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const cases = [
  {
    metric: "+38%",
    metricLabel: "eficiência de gestão",
    quote:
      "A metodologia nos deu um linguagem comum para decidir mais rápido e liderar com mais clareza.",
    company: "Grupo farmacêutico",
    initials: "GF",
  },
  {
    metric: "4.8 / 5",
    metricLabel: "satisfação dos participantes",
    quote:
      "Conseguimos alinhar áreas com prioridades diferentes sem perder de vista as pessoas.",
    company: "Multinacional de serviços",
    initials: "MS",
  },
  {
    metric: "6 semanas",
    metricLabel: "para os primeiros sinais de mudança",
    quote:
      "O acompanhamento foi direto, prático e conectado aos desafios reais do nosso negócio.",
    company: "Empresa de tecnologia",
    initials: "TE",
  },
];

export function CasesSection({ cases: caseItems }: { cases: typeof cases }) {
  return (
    <section id="casos" className="section section--cases" aria-labelledby="cases-title">
      <div className="container">
        <SectionHeading
          eyebrow="Resultados que se sustentam"
          title="Quando o desenvolvimento entra no fluxo do trabalho."
          copy="A gente não fecha uma intervenção quando termina o encontro. Fechamos quando o aprendizado começa a aparecer na rotina."
        />
        <div className="cases-grid">
          {caseItems.map((item, index) => (
            <Reveal key={item.company} className="case-card">
              <div className="case-card__top">
                <span className="case-card__index">0{index + 1}</span>
                <Quote size={22} aria-hidden="true" />
              </div>
              <div className="case-card__metric">{item.metric}</div>
              <div className="case-card__metric-label">{item.metricLabel}</div>
              <blockquote>“{item.quote}”</blockquote>
              <div className="case-card__company">
                <span className="case-card__initials" aria-hidden="true">
                  {item.initials}
                </span>
                {item.company}
              </div>
            </Reveal>
          ))}
        </div>
        <div className="case-cta">
          <div>
            <span className="section-kicker">Pronto para começar?</span>
            <h3>Conte o que está em movimento na sua organização.</h3>
          </div>
          <a href="#contato" className="button-link button-link--light">
            Falar com a Movendo <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
