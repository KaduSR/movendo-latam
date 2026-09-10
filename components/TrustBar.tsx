import { Globe2, Layers3, Sparkles, UsersRound } from "lucide-react";

const proofPoints = [
  { icon: Layers3, label: "Metodologia própria", copy: "Do diagnóstico à sustentação do impacto." },
  { icon: UsersRound, label: "Experiência regional", copy: "Líderes, times e culturas em diferentes contextos." },
  { icon: Globe2, label: "Olhar global", copy: "Soluções que respeitam idiomas, culturas e realidades." },
  { icon: Sparkles, label: "Acompanhamento próximo", copy: "Intervenções práticas, não receitas prontas." },
];

export function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Diferenciais da Movendo">
      <div className="container trust-grid">
        {proofPoints.map((point, index) => {
          const Icon = point.icon;
          return (
            <div className="trust-item" key={point.label}>
              <span className="trust-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Icon size={23} aria-hidden="true" />
              <div>
                <strong>{point.label}</strong>
                <span>{point.copy}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
