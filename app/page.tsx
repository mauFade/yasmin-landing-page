"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import Image from "next/image";
import {
  HouseIcon,
  MonitorIcon,
  HeartbeatIcon,
  FlowerLotusIcon,
  ClipboardTextIcon,
  CarrotIcon,
  CalendarCheckIcon,
  InstagramLogoIcon,
  ChatCircleDotsIcon,
  MapPinIcon,
  ArrowRightIcon,
  ListIcon,
  NumberCircleOneIcon,
  NumberCircleTwoIcon,
  NumberCircleThreeIcon,
  NumberCircleFourIcon,
  MedalIcon,
  LeafIcon,
  CheckCircleIcon,
  QuotesIcon,
  ArrowUpRightIcon,
  SparkleIcon,
  StarIcon,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const WA = "https://wa.me/5568992025316?text=Olá%20Yasmin!%20Gostaria%20de%20agendar%20uma%20consulta.";
const IG = "https://www.instagram.com/nutriyasminveras/";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Reveal({
  children,
  className,
  direction = "up",
  delay,
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: 100 | 150 | 200 | 250 | 300 | 400 | 500;
}) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={cn(
        direction === "up" && "reveal",
        direction === "left" && "reveal-left",
        direction === "right" && "reveal-right",
        delay && `delay-${delay}`,
        className
      )}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.14em] uppercase text-(--color-sage)">
      <LeafIcon size={11} weight="fill" />
      {children}
    </span>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#especialidades", label: "Especialidades" },
    { href: "#metodologia", label: "Metodologia" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-(--color-border) shadow-[0_1px_24px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-(--font-display) text-[1.35rem] tracking-tight text-(--color-charcoal)"
        >
          Yasmin{" "}
          <em className="not-italic text-(--color-sage) font-light">
            Veras
          </em>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-normal tracking-wide text-(--color-slate-mid) transition-colors duration-300 hover:text-(--color-charcoal)"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full w-8 h-8 border border-(--color-border) text-(--color-slate-soft) hover:border-(--color-sage-border) hover:text-(--color-sage) hover:bg-transparent"
          >
            <a href={IG} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramLogoIcon size={15} />
            </a>
          </Button>
          <Button
            asChild
            className={cn(
              "rounded-full px-5 h-9 text-[13px] font-medium tracking-wide",
              "bg-(--color-charcoal) text-white hover:bg-(--color-sage)",
              "transition-all duration-300 hover:-translate-y-px animate-pulse-glow"
            )}
          >
            <a href={WA} target="_blank" rel="noopener noreferrer">
              <ChatCircleDotsIcon size={14} weight="fill" />
              Agendar Consulta
            </a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon-sm"
              className="md:hidden rounded-lg border-(--color-border) text-(--color-slate-mid)"
              aria-label="Abrir menu"
            >
              <ListIcon size={18} />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-75 sm:w-85 bg-(--color-alabaster) border-(--color-border) flex flex-col pt-14 px-8 gap-0"
          >
            <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
            <span className="font-(--font-display) text-[1.4rem] text-(--color-charcoal) mb-8 block">
              Yasmin{" "}
              <em className="not-italic text-(--color-sage) font-light">
                Veras
              </em>
            </span>
            <nav className="flex flex-col gap-6 mb-10">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-(--font-display) text-2xl text-(--color-charcoal) hover:text-(--color-sage) transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <Separator className="mb-8 bg-(--color-border)" />
            <Button
              asChild
              className="rounded-full w-full h-11 text-[13px] font-medium bg-(--color-charcoal) text-white hover:bg-(--color-sage) transition-colors"
            >
              <a href={WA} target="_blank" rel="noopener noreferrer">
                <ChatCircleDotsIcon size={15} weight="fill" />
                Agendar Consulta
              </a>
            </Button>
            <a
              href={IG}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 text-[12px] text-(--color-slate-soft) hover:text-(--color-sage) transition-colors"
            >
              <InstagramLogoIcon size={13} />
              @nutriyasminveras
            </a>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen bg-(--color-alabaster) pt-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[55vw] h-[55vw] max-w-175 max-h-175 rounded-full bg-(--color-sage-muted) opacity-40 blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-125 max-h-125 rounded-full bg-(--color-canvas) opacity-60 blur-[60px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="animate-fade-up">
              <Badge
                className={cn(
                  "rounded-full h-auto px-3 py-1 gap-1.5",
                  "bg-(--color-sage-muted) text-(--color-sage) border-transparent",
                  "text-[11px] font-medium tracking-wide"
                )}
              >
                <StarIcon size={10} weight="fill" />
                Nutricionista Clínica · CRN7 18989
              </Badge>
            </div>

            <h1
              className={cn(
                "animate-fade-up delay-100",
                "font-(--font-display) leading-[1.05] tracking-tight",
                "text-[clamp(3rem,6vw,5.5rem)] text-(--color-charcoal)"
              )}
            >
              Nutrição que{" "}
              <em className="italic text-(--color-sage)">transforma</em>
              <br />
              de dentro
              <br />
              para fora
            </h1>

            <p
              className={cn(
                "animate-fade-up delay-200",
                "font-(--font-body) text-[1.05rem] leading-[1.75]",
                "text-(--color-slate-mid) max-w-120"
              )}
            >
              Atendimento individualizado que une ciência, escuta ativa e
              acolhimento. Uma abordagem que respeita sua história e transforma
              sua relação com os alimentos de forma sustentável.
            </p>

            <div className="animate-fade-up delay-300 flex flex-wrap gap-3">
              <Button
                asChild
                className={cn(
                  "rounded-full px-6 h-12 text-[13px] font-medium tracking-wide",
                  "bg-(--color-charcoal) text-white",
                  "hover:bg-(--color-sage) hover:-translate-y-0.5 hover:shadow-lg hover:shadow-(--color-sage)/20",
                  "transition-all duration-500 ease-out animate-pulse-glow"
                )}
              >
                <a href={WA} target="_blank" rel="noopener noreferrer">
                  <ChatCircleDotsIcon size={16} weight="fill" />
                  Agendar pelo WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className={cn(
                  "rounded-full px-6 h-12 text-[13px] font-normal tracking-wide",
                  "border-(--color-border) text-(--color-slate-mid) bg-transparent",
                  "hover:border-(--color-sage-border) hover:text-(--color-charcoal) hover:bg-transparent",
                  "transition-all duration-300"
                )}
              >
                <a href="#sobre">
                  Conheça meu trabalho
                  <ArrowRightIcon size={14} />
                </a>
              </Button>
            </div>

            <div className="animate-fade-up delay-400 flex items-center gap-6 pt-2">
              {[
                "Sem dietas restritivas",
                "Online & Presencial",
                "Evidências científicas",
              ].map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-1.5 text-[12px] text-(--color-slate-soft)"
                >
                  <CheckCircleIcon
                    size={12}
                    weight="fill"
                    color="var(--color-sage)"
                  />
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-105">
              <div
                className={cn(
                  "relative overflow-hidden animate-fade-in delay-200",
                  "rounded-[40%_60%_60%_40%/40%_40%_60%_60%]",
                  "aspect-4/5"
                )}
              >
                <Image
                  src="/yasmin-photo-1.jpg"
                  alt="Yasmin Veras — Nutricionista"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-linear-to-t from-sage/10 to-transparent" />
              </div>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className={cn(
                      "absolute -bottom-4 -left-4 lg:-left-10 cursor-default",
                      "bg-white rounded-2xl px-4 py-3.5",
                      "shadow-xl shadow-black/8 border border-(--color-border)",
                      "flex items-center gap-3 animate-fade-up delay-400",
                      "transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
                    )}
                  >
                    <div className="w-9 h-9 rounded-full bg-(--color-sage-muted) flex items-center justify-center">
                      <MedalIcon
                        size={18}
                        weight="fill"
                        color="var(--color-sage)"
                      />
                    </div>
                    <div>
                      <p className="text-[12px] font-medium text-(--color-charcoal) leading-none">
                        CRN7 18989
                      </p>
                      <p className="text-[11px] text-(--color-slate-soft) mt-0.5">
                        Nutricionista Registrada
                      </p>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  className="rounded-xl text-[11px] font-normal bg-(--color-charcoal)"
                >
                  Conselho Regional de Nutricionistas · 7ª Região
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className={cn(
                      "absolute -top-2 -right-2 lg:right-0 cursor-default",
                      "bg-(--color-sage) text-white rounded-2xl px-3.5 py-2.5",
                      "text-[11px] font-medium tracking-wide",
                      "animate-fade-up delay-500 shadow-lg shadow-(--color-sage)/25",
                      "transition-all duration-300 hover:bg-(--color-sage-dark)"
                    )}
                  >
                    UFAC · Pós-Graduanda
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="rounded-xl text-[11px] bg-(--color-charcoal)"
                >
                  Universidade Federal do Acre
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pb-16">
        <div
          className={cn(
            "grid grid-cols-2 md:grid-cols-4 gap-px",
            "border border-(--color-border) rounded-2xl overflow-hidden",
            "bg-(--color-border) animate-fade-up delay-500"
          )}
        >
          {[
            { value: "100%", label: "Individualizado" },
            { value: "UFAC", label: "Universidade Federal do Acre" },
            { value: "Online", label: "Todo o Brasil" },
            { value: "2+", label: "Especializações" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="bg-(--color-alabaster) py-6 px-5 flex flex-col gap-1"
            >
              <span className="font-(--font-display) text-2xl text-(--color-charcoal)">
                {value}
              </span>
              <span className="text-[12px] text-(--color-slate-soft) tracking-wide">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="bg-(--color-canvas) py-28 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <Reveal direction="left" className="relative">
          <div className="relative max-w-115">
            <div className="overflow-hidden rounded-3xl aspect-4/5">
              <Image
                src="/yasmin-photo-2.jpg"
                alt="Yasmin Veras"
                width={460}
                height={575}
                className="object-cover object-top w-full h-full transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute top-5 left-5 -right-3 -bottom-3 border border-(--color-sage-border) rounded-3xl -z-10" />
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-(--color-border) shadow-lg shadow-black/6">
              <div className="flex items-center gap-2 mb-2">
                <SparkleIcon
                  size={14}
                  color="var(--color-sage)"
                  weight="fill"
                />
                <span className="text-[11px] font-medium text-(--color-sage) tracking-wide uppercase">
                  Formação
                </span>
              </div>
              <p className="text-[12px] text-(--color-slate-mid) leading-relaxed">
                Graduada em Nutrição pela
                <br />
                <strong className="font-medium text-(--color-charcoal)">
                  Universidade Federal do Acre
                </strong>
              </p>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-7">
          <Reveal>
            <SectionLabel>Sobre Mim</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className={cn(
                "font-(--font-display) leading-[1.1] tracking-tight",
                "text-[clamp(2.2rem,4vw,3.4rem)] text-(--color-charcoal)"
              )}
            >
              Cuidar de você é{" "}
              <em className="italic text-(--color-sage)">minha vocação</em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-(--font-body) text-[1rem] leading-[1.8] text-(--color-slate-mid)">
              Sou Yasmin Veras, nutricionista formada pela Universidade Federal
              do Acre e Pós-Graduanda em Nutrição Oncológica e Nutrição Aplicada
              à Saúde da Mulher. Meu trabalho é ajudar você a navegar pelas
              diferentes fases da vida de maneira leve, responsável e
              sustentável.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <p className="font-(--font-body) text-[1rem] leading-[1.8] text-(--color-slate-mid)">
              Não acredito em dietas restritivas ou soluções milagrosas. Cada
              pessoa carrega uma história única — e é a partir dessa história que
              construímos juntos um caminho alimentar que faz sentido para a sua
              vida real.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <ul className="flex flex-col gap-3">
              {[
                "Graduada em Nutrição pela Universidade Federal do Acre (UFAC)",
                "Pós-Graduação em Nutrição Oncológica",
                "Especializada em Saúde da Mulher",
                "Atendimento online para todo o Brasil e presencial",
              ].map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-2.5 text-[0.9rem] font-light text-(--color-slate-mid)"
                >
                  <CheckCircleIcon
                    size={16}
                    weight="fill"
                    color="var(--color-sage)"
                    className="mt-0.5 shrink-0"
                  />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={400}>
            <Button
              asChild
              className={cn(
                "w-fit rounded-full px-6 h-11 text-[13px] font-medium tracking-wide",
                "bg-(--color-charcoal) text-white",
                "hover:bg-(--color-sage) hover:-translate-y-px transition-all duration-300"
              )}
            >
              <a href={WA} target="_blank" rel="noopener noreferrer">
                Agendar uma conversa
                <ArrowRightIcon size={14} />
              </a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const pillars = [
  {
    icon: <HeartbeatIcon size={26} weight="duotone" />,
    tag: "Clínica",
    title: "Nutrição Clínica",
    desc: "Análise completa de exames, avaliação metabólica e tratamento nutricional de condições como SOP, endometriose, distúrbios hormonais e saúde oncológica. Cuidado rigoroso baseado em evidências.",
    featured: true,
  },
  {
    icon: <FlowerLotusIcon size={26} weight="duotone" />,
    tag: "Estética",
    title: "Estética & Emagrecimento",
    desc: "Composição corporal e emagrecimento sustentável — sem dietas restritivas, sem privação. Um plano que respeita seu corpo e se adapta ao seu estilo de vida.",
    featured: false,
  },
  {
    icon: <CarrotIcon size={26} weight="duotone" />,
    tag: "Reeducação",
    title: "Reeducação Alimentar",
    desc: "Transforme sua relação com os alimentos de forma gradual e prazerosa. Um aprendizado que dura a vida toda, sem regras rígidas ou proibições que não fazem sentido.",
    featured: false,
  },
  {
    icon: <ClipboardTextIcon size={26} weight="duotone" />,
    tag: "Comportamental",
    title: "Nutrição Comportamental",
    desc: "Compreensão dos fatores emocionais, sensoriais e cognitivos que influenciam sua alimentação. Escuta ativa, acolhimento e suporte em cada etapa da jornada.",
    featured: false,
  },
];

function Specialties() {
  return (
    <section id="especialidades" className="bg-(--color-alabaster) py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-4">
            <Reveal>
              <SectionLabel>Especialidades</SectionLabel>
            </Reveal>
            <Reveal delay={100}>
              <h2
                className={cn(
                  "font-(--font-display) leading-[1.1] tracking-tight",
                  "text-[clamp(2.2rem,4vw,3.4rem)] text-(--color-charcoal)"
                )}
              >
                Quatro pilares de{" "}
                <em className="italic text-(--color-sage)">cuidado</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200} className="shrink-0">
            <p className="font-(--font-body) text-[0.95rem] leading-[1.8] text-(--color-slate-mid) max-w-85">
              Uma abordagem integrativa que une a precisão clínica com a
              sensibilidade humana.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 auto-rows-fr">
          {pillars.map((p, i) => (
            <Reveal
              key={p.title}
              delay={([undefined, 100, 200, 300] as const)[i]}
              className={cn(p.featured && "lg:col-span-2", "h-full")}
            >
              <Card
                className={cn(
                  "rounded-2xl ring-0 border h-full gap-0 py-0",
                  "transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl",
                  p.featured
                    ? "bg-linear-to-br from-[#243E2A] to-[#152419] border-[#2E5238] hover:shadow-[#152419]/40"
                    : "bg-(--color-surface) border-(--color-border) hover:border-(--color-sage-border) hover:shadow-black/6"
                )}
              >
                <CardHeader className="px-7 pt-7 pb-4 rounded-none border-none">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center",
                        p.featured
                          ? "bg-white/10 text-[#A8D4A0]"
                          : "bg-(--color-sage-muted) text-(--color-sage)"
                      )}
                    >
                      {p.icon}
                    </div>
                    <Badge
                      className={cn(
                        "rounded-full h-auto px-2.5 py-0.5 text-[10px] font-medium tracking-wide border-transparent",
                        p.featured
                          ? "bg-white/10 text-white/60"
                          : "bg-(--color-sage-muted) text-(--color-sage)"
                      )}
                    >
                      {p.tag}
                    </Badge>
                  </div>
                  <h3
                    className={cn(
                      "font-(--font-display) text-[1.6rem] leading-tight tracking-tight",
                      p.featured ? "text-white" : "text-(--color-charcoal)"
                    )}
                  >
                    {p.title}
                  </h3>
                </CardHeader>

                <CardContent className="px-7 pb-0 flex-1">
                  <p
                    className={cn(
                      "font-(--font-body) text-[0.9rem] leading-[1.75]",
                      p.featured ? "text-white/60" : "text-(--color-slate-mid)"
                    )}
                  >
                    {p.desc}
                  </p>
                </CardContent>

                <CardFooter
                  className="px-7 pb-7 pt-5 border-t-0 border-transparent"
                >
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center gap-1.5 text-[12px] font-medium tracking-wide",
                      "transition-all duration-300 hover:gap-2.5",
                      p.featured
                        ? "text-[#A8D4A0] hover:text-white"
                        : "text-(--color-sage)"
                    )}
                  >
                    Agendar <ArrowUpRightIcon size={12} />
                  </a>
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    num: <NumberCircleOneIcon size={32} weight="fill" color="var(--color-sage)" />,
    icon: <ClipboardTextIcon size={18} weight="duotone" />,
    title: "Anamnese Completa",
    desc: "Uma conversa acolhedora onde entendo sua história, rotina, objetivos, relação com os alimentos e tudo que importa para você.",
  },
  {
    num: <NumberCircleTwoIcon size={32} weight="fill" color="var(--color-sage)" />,
    icon: <HeartbeatIcon size={18} weight="duotone" />,
    title: "Avaliação Nutricional",
    desc: "Análise detalhada do consumo alimentar, exames laboratoriais, estado nutricional e necessidades individuais do seu organismo.",
  },
  {
    num: <NumberCircleThreeIcon size={32} weight="fill" color="var(--color-sage)" />,
    icon: <CarrotIcon size={18} weight="duotone" />,
    title: "Plano Personalizado",
    desc: "Estratégias alimentares flexíveis e práticas, construídas com você — respeitando seu paladar, rotina e objetivos reais.",
  },
  {
    num: <NumberCircleFourIcon size={32} weight="fill" color="var(--color-sage)" />,
    icon: <CalendarCheckIcon size={18} weight="duotone" />,
    title: "Acompanhamento Contínuo",
    desc: "Retornos periódicos para ajustes finos, suporte na jornada e celebração de cada conquista ao longo do caminho.",
  },
];

function Methodology() {
  return (
    <section id="metodologia" className="bg-(--color-canvas) py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-20">
          <Reveal>
            <SectionLabel>Como Funciona</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className={cn(
                "mt-4 font-(--font-display) leading-[1.1] tracking-tight",
                "text-[clamp(2.2rem,4vw,3.4rem)] text-(--color-charcoal)"
              )}
            >
              Um processo{" "}
              <em className="italic text-(--color-sage)">humanizado</em>
              <br />e no seu tempo
            </h2>
          </Reveal>
        </div>

        <div className="relative grid lg:grid-cols-2 gap-6">
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-(--color-border) -translate-x-1/2" />

          {steps.map((s, i) => {
            const isLeft = i % 2 === 0;
            return (
              <Reveal
                key={s.title}
                direction={isLeft ? "left" : "right"}
                delay={([undefined, 100, 200, 300] as const)[i]}
                className={cn(!isLeft && "lg:mt-16")}
              >
                <Card
                  className={cn(
                    "rounded-2xl ring-0 gap-0 py-0",
                    "bg-(--color-surface) border border-(--color-border)",
                    "transition-all duration-500 ease-out",
                    "hover:-translate-y-1 hover:border-(--color-sage-border) hover:shadow-lg hover:shadow-black/5"
                  )}
                >
                  <CardHeader className="px-7 pt-7 pb-4 rounded-none border-none">
                    <div className="flex items-start justify-between">
                      {s.num}
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-(--color-sage-muted) text-(--color-sage)">
                        {s.icon}
                      </div>
                    </div>
                    <h3
                      className={cn(
                        "font-(--font-display) text-[1.4rem] leading-tight tracking-tight",
                        "text-(--color-charcoal) mt-4"
                      )}
                    >
                      {s.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="px-7 pb-7">
                    <p className="font-(--font-body) text-[0.9rem] leading-[1.75] text-(--color-slate-mid)">
                      {s.desc}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="bg-(--color-alabaster) py-24 px-6">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <Reveal>
          <QuotesIcon size={36} weight="fill" color="var(--color-sage-border)" />
        </Reveal>
        <Reveal delay={100}>
          <blockquote
            className={cn(
              "font-(--font-display) italic leading-normal",
              "text-[clamp(1.5rem,3vw,2.2rem)] text-(--color-charcoal)"
            )}
          >
            "Não acredito em dietas restritivas ou soluções milagrosas. Acredito
            que cada paciente é único e merece um cuidado que respeite, de
            verdade, a sua história."
          </blockquote>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-[12px] font-medium tracking-[0.14em] uppercase text-(--color-sage)">
            — Yasmin Veras, Nutricionista CRN7 18989
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      icon: <HouseIcon size={22} weight="duotone" />,
      title: "Consulta Presencial",
      desc: "60 minutos de avaliação completa: pregas cutâneas, interpretação de exames, investigação clínica e análise metabólica individualizada.",
      badge: "Presencial",
    },
    {
      icon: <MonitorIcon size={22} weight="duotone" />,
      title: "Consulta Online",
      desc: "Toda a entrega da consulta presencial com a flexibilidade de atendimento remoto. Para você, de qualquer lugar do Brasil.",
      badge: "Online · Todo o Brasil",
    },
  ];

  return (
    <section className="bg-(--color-canvas) py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((s) => (
            <Reveal key={s.title}>
              <Card
                className={cn(
                  "rounded-2xl ring-0 gap-0 py-0",
                  "bg-(--color-surface) border border-(--color-border)",
                  "transition-all duration-500 ease-out",
                  "hover:-translate-y-1 hover:border-(--color-sage-border) hover:shadow-xl hover:shadow-black/5"
                )}
              >
                <CardHeader className="px-7 pt-7 pb-4 rounded-none border-none">
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 rounded-xl bg-(--color-sage-muted) flex items-center justify-center text-(--color-sage)">
                      {s.icon}
                    </div>
                    <Badge
                      className={cn(
                        "rounded-full h-auto px-2.5 py-1 text-[10px] font-medium tracking-wide",
                        "bg-(--color-sage-muted) text-(--color-sage) border-transparent"
                      )}
                    >
                      {s.badge}
                    </Badge>
                  </div>
                  <h3 className="font-(--font-display) text-[1.5rem] text-(--color-charcoal) mt-4 leading-tight">
                    {s.title}
                  </h3>
                </CardHeader>
                <CardContent className="px-7 pb-0">
                  <p className="font-(--font-body) text-[0.9rem] leading-[1.75] text-(--color-slate-mid)">
                    {s.desc}
                  </p>
                </CardContent>
                <CardFooter className="px-7 pb-7 pt-5 border-t-0">
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[12px] font-medium text-(--color-sage) transition-all duration-300 hover:gap-2.5"
                  >
                    Agendar <ArrowUpRightIcon size={12} />
                  </a>
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="bg-linear-to-br from-[#243E2A] to-[#152419] py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-125 max-h-125 rounded-full bg-white/5 blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] max-w-95 max-h-95 rounded-full bg-[#A8D4A0]/8 blur-[60px]" />
      </div>
      <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center gap-7">
        <Reveal>
          <LeafIcon size={28} weight="fill" color="rgba(143,175,126,0.5)" />
        </Reveal>
        <Reveal delay={100}>
          <h2
            className={cn(
              "font-(--font-display) leading-[1.1] tracking-tight text-white",
              "text-[clamp(2rem,4vw,3.2rem)]"
            )}
          >
            Dê o primeiro passo para{" "}
            <em className="italic text-[#A8D4A0]">
              transformar sua saúde
            </em>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="font-light text-[1rem] leading-[1.75] text-white/55 max-w-xl">
            Agende sua consulta e comece uma jornada rumo a uma vida mais
            saudável, equilibrada e prazerosa. Atendimento online para todo o
            Brasil.
          </p>
        </Reveal>
        <Reveal delay={300} className="flex flex-wrap gap-3 justify-center">
          <Button
            asChild
            className={cn(
              "rounded-full px-7 h-12 text-[13px] font-medium tracking-wide",
              "bg-white text-(--color-charcoal)",
              "hover:bg-(--color-sage-muted) hover:-translate-y-0.5 transition-all duration-300",
              "animate-pulse-glow"
            )}
          >
            <a href={WA} target="_blank" rel="noopener noreferrer">
              <ChatCircleDotsIcon size={16} weight="fill" color="var(--color-sage)" />
              Agendar pelo WhatsApp
            </a>
          </Button>
          <Button
            variant="outline"
            asChild
            className={cn(
              "rounded-full px-7 h-12 text-[13px] font-normal tracking-wide",
              "text-white/70 bg-transparent border-white/15",
              "hover:bg-transparent hover:border-white/30 hover:text-white transition-all duration-300"
            )}
          >
            <a href={IG} target="_blank" rel="noopener noreferrer">
              <InstagramLogoIcon size={15} />
              @nutriyasminveras
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      id="contato"
      className="bg-[#152419] border-t border-[#2E5238]/50 px-6 pt-12 pb-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col gap-3">
          <span className="font-(--font-display) text-[1.2rem] text-white/80">
            Yasmin{" "}
            <em className="not-italic text-(--color-sage-light) font-light">
              Veras
            </em>
          </span>
          <p className="text-[12px] font-light text-white/40 max-w-60 leading-relaxed">
            Nutricionista clínica comprometida com o seu cuidado de forma
            individualizada e humanizada.
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-6">
          {[
            { href: "#sobre", label: "Sobre" },
            { href: "#especialidades", label: "Especialidades" },
            { href: "#metodologia", label: "Metodologia" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[12px] tracking-wide text-white/40 hover:text-white/70 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="w-8 h-8 rounded-full border border-white/15 text-white/40 hover:text-white/70 hover:border-white/30 hover:bg-transparent transition-all"
          >
            <a href={IG} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramLogoIcon size={14} />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="w-8 h-8 rounded-full border border-white/15 text-white/40 hover:text-white/70 hover:border-white/30 hover:bg-transparent transition-all"
          >
            <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <ChatCircleDotsIcon size={14} />
            </a>
          </Button>
        </div>
      </div>

      <Separator className="max-w-6xl mx-auto mt-8 mb-6 bg-white/8" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-[11px] text-white/25 flex items-center gap-1.5">
          <MapPinIcon size={11} color="var(--color-sage-light)" />
          Rio Branco, Acre · Atendimento online para todo o Brasil
        </p>
        <p className="text-[11px] text-white/25">
          © {year} Yasmin Veras · CRN7 18989 · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Specialties />
      <Quote />
      <Methodology />
      <Services />
      <Cta />
      <Footer />
    </main>
  );
}
