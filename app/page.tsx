import { ArrowRight, BarChart3, Check, Globe2, Users } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CasesSection } from "@/components/Cases";
import { ContactSection } from "@/components/ContactSection";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { MethodologySection } from "@/components/Methodology";
import { PeopleSection } from "@/components/People";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SolutionsSection } from "@/components/Solutions";
import { TrustBar } from "@/components/TrustBar";

const cases = [
  {
    metric: "+38%",
    metricLabel: "melhoria na eficiência de gestão",
    quote:
      "A metodologia nos deu uma linguagem comum para decidir mais rápido e liderar com mais clareza.",
    company: "Grupo farmacêutico",
    initials: "GF",
  },
  {
    metric: "4.8 / 5",
    metricLabel: "satisfação dos participantes",
    quote:
      "Conseguimos alinhar áreas com prioridades distintas sem perder de vista as pessoas.",
    company: "Multinacional de serviços",
    initials: "MS",
  },
  {
    metric: "6 semanas",
    metricLabel: "para ver os primeiros sinais de mudança",
    quote:
      "O acompanhamento foi direto, prático e conectado aos desafios reais do nosso negócio.",
    company: "Empresa de tecnologia",
    initials: "TE",
  },
];

export default function HomePage() {
  return (
    <div className="site-shell">
      <Hero />
      <TrustBar />
      <SolutionsSection />
      <MethodologySection />
      <CasesSection cases={cases} />
      <PeopleSection />
      <CtaBand />
      <ContactSection />
    </div>
  );
}

export const proofPoints = [
  { icon: BarChart3, text: "Métricas que conectam aprendizado ao negócio" },
  { icon: Users, text: "Experiência regional com olhar multicultural" },
  { icon: Globe2, text: "Soluções adaptadas a cada contexto" },
];

export const solutionCards = [
  {
    icon: Users,
    eyebrow: "Liderança",
    title: "Liderança que se vê em resultados",
    copy:
      "Desenvolvemos a autogestão, a clareza e a capacidade de decidir de quem guia pessoas e negócios.",
    tags: ["Academia de líderes", "Mentoria", "Feedback"],
  },
  {
    icon: BarChart3,
    eyebrow: "Equipes",
    title: "Equipes que avançam juntas",
    copy:
      "Criamos condições para que os times alinhem prioridades, conversem com maturidade e entreguem com mais energia.",
    tags: ["Team coaching", "Team building", "Facilitação"],
  },
  {
    icon: Globe2,
    eyebrow: "Organização",
    title: "Cultura que sustenta o crescimento",
    copy:
      "Conectamos estratégia, processos e comportamentos para que o crescimento não dependa do esgotamento das pessoas.",
    tags: ["Diagnóstico", "Cultura", "Transformação"],
  },
];

export const methodologySteps = [
  {
    number: "01",
    title: "Escutamos o contexto",
    copy:
      "Entendemos o seu negócio, as suas pessoas e os sinais que já indicam onde está a oportunidade.",
  },
  {
    number: "02",
    title: "Desenhamos o ponto de alavancagem",
    copy:
      "Convertemos o diagnóstico em um foco claro: o que mudar, quem deve se envolver e como medir.",
  },
  {
    number: "03",
    title: "Ativamos a mudança",
    copy:
      "Levamos a metodologia para o território com experiências práticas, acompanhamento e espaços de conversa.",
  },
  {
    number: "04",
    title: "Tornamos o impacto sustentável",
    copy:
      "Fechamos o ciclo com evidências, aprendizados e próximos passos para que a mudança continue em movimento.",
  },
];

export const people = [
  { name: "Bjorn Frederick", role: "Managing Director", initials: "BF" },
  { name: "Evelise Oliveira", role: "Head Business Latam", initials: "EO" },
  { name: "Ana Paula Prata", role: "Designer de experiencias", initials: "AP" },
  { name: "Camila Oliveira", role: "Project Partner", initials: "CO" },
];

export const navItems = [
  { label: "Sobre nós", href: "#sobre" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Resultados", href: "#casos" },
  { label: "Equipe", href: "#equipo" },
];

export const contactDetails = [
  { icon: Globe2, label: "Presença regional", text: "Latam e mercados globais" },
  { icon: Users, label: "Um só time", text: "Conexão entre estratégia e território" },
  { icon: Check, label: "Abordagem prática", text: "Metodologia adaptada à sua realidade" },
];
