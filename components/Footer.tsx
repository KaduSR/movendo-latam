import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link href="/" className="footer-logo" aria-label="Movendo Latam">
            MOVENDO<span> LATAM</span>
          </Link>
          <p>Desenvolvimento de líderes, equipes e culturas organizacionais.</p>
        </div>
        <div className="footer-nav">
          <span className="footer-label">Navegação</span>
          <Link href="#solucoes">Soluções</Link>
          <Link href="#metodologia">Metodologia</Link>
          <Link href="#casos">Resultados</Link>
          <Link href="#contato">Contato</Link>
        </div>
        <div className="footer-nav">
          <span className="footer-label">Movendo</span>
          <Link href="#equipo">Equipe</Link>
          <Link href="https://www.linkedin.com/company/movendo-latam/" target="_blank" rel="noreferrer noopener">LinkedIn <span className="visually-hidden">(abre em nova aba)</span></Link>
          <Link href="https://www.instagram.com/movendolatam/" target="_blank" rel="noreferrer noopener">Instagram <span className="visually-hidden">(abre em nova aba)</span></Link>
        </div>
        <div className="footer-contact">
          <span className="footer-label">Fale conosco</span>
          <a href="mailto:contato@movendolatam.com.br">contato@movendolatam.com.br</a>
          <span>Latam · Global</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Movendo Latam. Todos os direitos reservados.</span>
        <span>Desenvolvimento com intenção.</span>
      </div>
    </footer>
  );
}
