import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CtaBand() {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="container cta-band__inner">
        <div>
          <span className="cta-band__eyebrow">O próximo movimento é seu</span>
          <h2 id="cta-title">Vamos conversar sobre o que precisa mudar?</h2>
          <p>
            Conte o momento da sua organização. A Movendo entra com escuta,
            experiência e um ponto de partida claro.
          </p>
        </div>
        <Link href="#contato" className="button-link button-link--orange">
          Quero uma proposta <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
