import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const people = [
  { name: "Bjorn Frederick", role: "Managing Director", initials: "BF", image: "bjorn" },
  { name: "Evelise Oliveira", role: "Head Business Latam", initials: "EO", image: "evelise" },
  { name: "Ana Paula Prata", role: "Designer de experiências", initials: "AP", image: "ana" },
  { name: "Camila Oliveira", role: "Project Partner", initials: "CO", image: "camila" },
];

export function PeopleSection() {
  return (
    <section id="equipo" className="section section--people" aria-labelledby="people-title">
      <div className="container">
        <div className="people-heading">
          <Reveal>
            <div className="eyebrow eyebrow--blue">Quem move com a gente</div>
            <h2 id="people-title">Experiência humana. Rigor profissional.</h2>
            <p>
              Uma equipe multicolorida por experiências, mercados e olhares. O
              suficiente para ouvir o contexto e o cuidado para transformar isso em
              uma intervenção relevante.
            </p>
          </Reveal>
          <Link href="#contato" className="text-link text-link--blue">
            Conheça a Movendo <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="people-grid">
          {people.map((person, index) => (
            <Reveal key={person.name} className="person-card" delay={index * 70}>
              <div className="person-card__image">
                <Image
                  src={`/assets/${person.image}.jpg`}
                  alt={person.name}
                  width={420}
                  height={500}
                  loading="lazy"
                />
                <span className="person-card__number">0{index + 1}</span>
              </div>
              <div className="person-card__body">
                <span className="person-card__role">{person.role}</span>
                <h3>{person.name}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
