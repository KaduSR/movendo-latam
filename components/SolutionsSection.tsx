import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const solutions = [
  {
    eyebrow: "Para você",
    title: "Desenvolvimento que cabe no seu momento",
    copy:
      "Um caminho sob medida para profissionais que estão assumindo a liderança, transicionando de carreira ou buscando mais clareza para liderar com intenção.",
    tags: ["Aceleração individual", "Mentoria", "Transições de carreira"],
    image: "ba653d_960274584d204706907cc126be52f276~mv2.jpg",
  },
  {
    eyebrow: "Para times",
    title: "Mais alinhamento para entregar juntos",
    copy:
      "Facilitação, team coaching e encontros estratégicos que ajudam grupos a atravessar mudanças com maturidade, foco e energia.",
    tags: ["Team coaching", "Team building", "Facilitação de mudanças"],
    image: "ba653d_d503fe7e8d9c4a20a12be6ece317eb25~mv2.jpg",
  },
  {
    eyebrow: "Para empresas",
    title: "Cultura que sustenta o crescimento",
    copy:
      "Diagnósticos, intervenções e jornadas de aprendizagem conectadas à estratégia, aos processos e ao ecossistema de trabalho.",
    tags: ["Diagnóstico", "Liderança", "Cultura organizacional"],
    image: "ba653d_0eeb9d403b9b480d8689e44799bb1d91~mv2.jpg",
  },
];

export function SolutionsSection() {
  return (
    <section id="solucoes" className="section section--solutions" aria-labelledby="solutions-title">
      <div className="container">
        <SectionHeading
          eyebrow="O que movemos"
          title="Desenvolvimento com intenção, na medida certa."
          copy="Cada intervenção nasce do contexto. Não entregamos fórmulas prontas: criamos condições para líderes, equipes e organizações evoluírem."
        />
        <div className="solution-grid">
          {solutions.map((solution, index) => (
            <Reveal key={solution.eyebrow} className={`solution-card solution-card--${index + 1}`}>
              <div className="solution-card__media">
                <img
                  src={`/assets/${solution.image}`}
                  alt={`Ilustração representando ${solution.title.toLowerCase()}`}
                  width={560}
                  height={420}
                  loading="lazy"
                />
                <span className="solution-card__index">0{index + 1}</span>
              </div>
              <div className="solution-card__body">
                <div className="solution-card__eyebrow">{solution.eyebrow}</div>
                <h3>{solution.title}</h3>
                <p>{solution.copy}</p>
                <div className="tag-list">
                  {solution.tags.map((tag) => (
                    <span key={tag}>
                      <Check size={13} aria-hidden="true" />
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href="#contato" className="solution-card__link">
                  Conversar sobre isso <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
