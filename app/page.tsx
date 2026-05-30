"use client";

import { useState, useEffect, useRef, useCallback, type ReactNode } from "react";
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
  XIcon,
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

const WA = "https://wa.me/5568992025316";
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

function Label({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-[11px] font-[500] tracking-[0.14em] uppercase",
        "text-[var(--color-sage)]",
        className
      )}
    >
      <LeafIcon size={11} weight="fill" />
      {children}
    </span>
  );
}

function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-[500] tracking-wide",
        "bg-[var(--color-sage-muted)] text-[var(--color-sage)]",
        className
      )}
    >
      {children}
    </span>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#especialidades", label: "Especialidades" },
    { href: "#metodologia", label: "Metodologia" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out",
          scrolled
            ? "bg-white/80 backdrop-blur-md border-b border-[var(--color-border)] shadow-[0_1px_24px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-[var(--font-display)] text-[1.35rem] font-[400] tracking-tight text-[var(--color-charcoal)]"
          >
            Yasmin{" "}
            <em className="not-italic text-[var(--color-sage)] font-[300]">Veras</em>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "text-[13px] font-[400] tracking-wide text-[var(--color-slate-mid)]",
                  "transition-colors duration-300 hover:text-[var(--color-charcoal)]"
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={IG}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center",
                "border border-[var(--color-border)] text-[var(--color-slate-soft)]",
                "transition-all duration-300 hover:border-[var(--color-sage-border)] hover:text-[var(--color-sage)]"
              )}
            >
              <InstagramLogoIcon size={15} />
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-[500] tracking-wide",
                "bg-[var(--color-charcoal)] text-white",
                "transition-all duration-300 hover:bg-[var(--color-sage)] hover:-translate-y-px",
                "animate-pulse-glow"
              )}
            >
              <ChatCircleDotsIcon size={14} weight="fill" />
              Agendar Consulta
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className={cn(
              "md:hidden w-9 h-9 rounded-lg flex items-center justify-center",
              "border border-[var(--color-border)] text-[var(--color-slate-mid)]",
              "transition-colors hover:text-[var(--color-charcoal)]"
            )}
            aria-label="Abrir menu"
          >
            <ListIcon size={18} />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[200] bg-[var(--color-alabaster)] animate-fade-in flex flex-col">
          <div className="flex items-center justify-between px-6 h-16 border-b border-[var(--color-border)]">
            <span className="font-[var(--font-display)] text-[1.35rem] text-[var(--color-charcoal)]">
              Yasmin <em className="not-italic text-[var(--color-sage)] font-[300]">Veras</em>
            </span>
            <button
              onClick={close}
              className="w-9 h-9 rounded-lg flex items-center justify-center border border-[var(--color-border)]"
              aria-label="Fechar menu"
            >
              <XIcon size={17} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center gap-8 flex-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="font-[var(--font-display)] text-3xl font-[300] text-[var(--color-charcoal)] hover:text-[var(--color-sage)] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className={cn(
                "mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-[500]",
                "bg-[var(--color-charcoal)] text-white"
              )}
            >
              <ChatCircleDotsIcon size={15} weight="fill" />
              Agendar Consulta
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen bg-[var(--color-alabaster)] pt-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-[var(--color-sage-muted)] opacity-40 blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[var(--color-canvas)] opacity-60 blur-[60px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="animate-fade-up">
              <Pill>
                <StarIcon size={10} weight="fill" />
                Nutricionista Clínica · CRN7 18989
              </Pill>
            </div>

            <h1
              className={cn(
                "animate-fade-up delay-100",
                "font-[var(--font-display)] font-[400] leading-[1.05] tracking-tight",
                "text-[clamp(3rem,6vw,5.5rem)] text-[var(--color-charcoal)]"
              )}
            >
              Nutrição que{" "}
              <em className="italic text-[var(--color-sage)]">transforma</em>
              <br />
              de dentro
              <br />
              para fora
            </h1>

            <p
              className={cn(
                "animate-fade-up delay-200",
                "font-[var(--font-body)] font-[300] text-[1.05rem] leading-[1.75]",
                "text-[var(--color-slate-mid)] max-w-[480px]"
              )}
            >
              Atendimento individualizado que une ciência, escuta ativa e
              acolhimento. Uma abordagem que respeita sua história e transforma
              sua relação com os alimentos de forma sustentável.
            </p>

            <div className="animate-fade-up delay-300 flex flex-wrap gap-3">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3.5 rounded-full",
                  "text-[13px] font-[500] tracking-wide text-white",
                  "bg-[var(--color-charcoal)]",
                  "transition-all duration-500 ease-out",
                  "hover:bg-[var(--color-sage)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--color-sage)]/20",
                  "animate-pulse-glow"
                )}
              >
                <ChatCircleDotsIcon size={16} weight="fill" />
                Agendar pelo WhatsApp
              </a>
              <a
                href="#sobre"
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3.5 rounded-full",
                  "text-[13px] font-[400] tracking-wide text-[var(--color-slate-mid)]",
                  "border border-[var(--color-border)]",
                  "transition-all duration-300 hover:border-[var(--color-sage-border)] hover:text-[var(--color-charcoal)]"
                )}
              >
                Conheça meu trabalho
                <ArrowRightIcon size={14} />
              </a>
            </div>

            <div className="animate-fade-up delay-400 flex items-center gap-6 pt-2">
              {["Sem dietas restritivas", "Online & Presencial", "Evidências científicas"].map(
                (t) => (
                  <span
                    key={t}
                    className="flex items-center gap-1.5 text-[12px] text-[var(--color-slate-soft)]"
                  >
                    <CheckCircleIcon size={12} weight="fill" color="var(--color-sage)" />
                    {t}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">
              <div
                className={cn(
                  "relative overflow-hidden",
                  "rounded-[40%_60%_60%_40%/40%_40%_60%_60%]",
                  "aspect-[4/5] animate-fade-in delay-200"
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
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-sage)]/10 to-transparent" />
              </div>

              <div
                className={cn(
                  "absolute -bottom-4 -left-4 lg:-left-10",
                  "bg-white rounded-2xl px-4 py-3.5 shadow-xl shadow-black/8",
                  "border border-[var(--color-border)]",
                  "flex items-center gap-3 animate-fade-up delay-400"
                )}
              >
                <div className="w-9 h-9 rounded-full bg-[var(--color-sage-muted)] flex items-center justify-center">
                  <MedalIcon size={18} weight="fill" color="var(--color-sage)" />
                </div>
                <div>
                  <p className="text-[12px] font-[500] text-[var(--color-charcoal)] leading-none">
                    CRN7 18989
                  </p>
                  <p className="text-[11px] text-[var(--color-slate-soft)] mt-0.5">
                    Nutricionista Registrada
                  </p>
                </div>
              </div>

              <div
                className={cn(
                  "absolute -top-2 -right-2 lg:right-0",
                  "bg-[var(--color-sage)] text-white rounded-2xl px-3.5 py-2.5",
                  "text-[11px] font-[500] tracking-wide",
                  "animate-fade-up delay-500 shadow-lg shadow-[var(--color-sage)]/25"
                )}
              >
                UFAC · Pós-Graduanda
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pb-16">
        <div
          className={cn(
            "grid grid-cols-2 md:grid-cols-4 gap-px",
            "border border-[var(--color-border)] rounded-2xl overflow-hidden",
            "bg-[var(--color-border)]",
            "animate-fade-up delay-500"
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
              className="bg-[var(--color-alabaster)] py-6 px-5 flex flex-col gap-1"
            >
              <span className="font-[var(--font-display)] text-2xl font-[500] text-[var(--color-charcoal)]">
                {value}
              </span>
              <span className="text-[12px] text-[var(--color-slate-soft)] tracking-wide">
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
    <section id="sobre" className="bg-[var(--color-canvas)] py-28 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <Reveal direction="left" className="relative">
          <div className="relative max-w-[460px]">
            <div className="overflow-hidden rounded-3xl aspect-[4/5]">
              <Image
                src="/yasmin-photo-2.jpg"
                alt="Yasmin Veras"
                width={460}
                height={575}
                className="object-cover object-top w-full h-full transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div
              className={cn(
                "absolute top-5 left-5 right-[-12px] bottom-[-12px]",
                "border border-[var(--color-sage-border)] rounded-3xl -z-10"
              )}
            />
            <div
              className={cn(
                "absolute bottom-6 right-6",
                "bg-white/90 backdrop-blur-sm rounded-2xl p-4",
                "border border-[var(--color-border)] shadow-lg shadow-black/6"
              )}
            >
              <div className="flex items-center gap-2 mb-2">
                <SparkleIcon size={14} color="var(--color-sage)" weight="fill" />
                <span className="text-[11px] font-[500] text-[var(--color-sage)] tracking-wide uppercase">
                  Formação
                </span>
              </div>
              <p className="text-[12px] text-[var(--color-slate-mid)] leading-relaxed">
                Graduada em Nutrição pela
                <br />
                <strong className="font-[500] text-[var(--color-charcoal)]">
                  Universidade Federal do Acre
                </strong>
              </p>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-7">
          <Reveal>
            <Label>Sobre Mim</Label>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className={cn(
                "font-[var(--font-display)] font-[400] leading-[1.1] tracking-tight",
                "text-[clamp(2.2rem,4vw,3.4rem)] text-[var(--color-charcoal)]"
              )}
            >
              Cuidar de você é{" "}
              <em className="italic text-[var(--color-sage)]">minha vocação</em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-[var(--font-body)] font-[300] text-[1rem] leading-[1.8] text-[var(--color-slate-mid)]">
              Sou Yasmin Veras, nutricionista formada pela Universidade Federal
              do Acre e Pós-Graduanda em Nutrição Oncológica e Nutrição Aplicada
              à Saúde da Mulher. Meu trabalho é ajudar você a navegar pelas
              diferentes fases da vida de maneira leve, responsável e
              sustentável.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <p className="font-[var(--font-body)] font-[300] text-[1rem] leading-[1.8] text-[var(--color-slate-mid)]">
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
                  className="flex items-start gap-2.5 text-[0.9rem] font-[300] text-[var(--color-slate-mid)]"
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
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 w-fit px-6 py-3 rounded-full",
                "text-[13px] font-[500] tracking-wide text-white",
                "bg-[var(--color-charcoal)]",
                "transition-all duration-300 hover:bg-[var(--color-sage)] hover:-translate-y-px"
              )}
            >
              Agendar uma conversa
              <ArrowRightIcon size={14} />
            </a>
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
    accent: true,
  },
  {
    icon: <FlowerLotusIcon size={26} weight="duotone" />,
    tag: "Estética",
    title: "Estética & Emagrecimento",
    desc: "Composição corporal e emagrecimento sustentável — sem dietas restritivas, sem privação. Um plano que respeita seu corpo e se adapta ao seu estilo de vida.",
    accent: false,
  },
  {
    icon: <CarrotIcon size={26} weight="duotone" />,
    tag: "Comportamental",
    title: "Reeducação Alimentar",
    desc: "Transforme sua relação com os alimentos de forma gradual e prazerosa. Um aprendizado que dura a vida toda, sem regras rígidas ou proibições que não fazem sentido.",
    accent: false,
  },
  {
    icon: <ClipboardTextIcon size={26} weight="duotone" />,
    tag: "Comportamental",
    title: "Nutrição Comportamental",
    desc: "Compreensão dos fatores emocionais, sensoriais e cognitivos que influenciam sua alimentação. Escuta ativa, acolhimento e suporte em cada etapa da jornada.",
    accent: false,
  },
];

function Specialties() {
  return (
    <section id="especialidades" className="bg-[var(--color-alabaster)] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-4">
            <Reveal>
              <Label>Especialidades</Label>
            </Reveal>
            <Reveal delay={100}>
              <h2
                className={cn(
                  "font-[var(--font-display)] font-[400] leading-[1.1] tracking-tight",
                  "text-[clamp(2.2rem,4vw,3.4rem)] text-[var(--color-charcoal)]"
                )}
              >
                Quatro pilares de{" "}
                <em className="italic text-[var(--color-sage)]">cuidado</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200} className="shrink-0">
            <p className="font-[var(--font-body)] font-[300] text-[0.95rem] leading-[1.8] text-[var(--color-slate-mid)] max-w-[340px]">
              Uma abordagem integrativa que une a precisão clínica com a
              sensibilidade humana.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 auto-rows-fr">
          {pillars.map((p, i) => {
            const isFeatured = i === 0;
            return (
              <Reveal
                key={p.title}
                delay={([undefined, 100, 200, 300] as const)[i]}
                className={cn(isFeatured && "lg:col-span-2")}
              >
                <div
                  className={cn(
                    "group relative flex flex-col justify-between gap-6",
                    "rounded-2xl p-7 h-full border",
                    "transition-all duration-500 ease-out",
                    "hover:-translate-y-1 hover:shadow-xl",
                    isFeatured
                      ? "bg-[var(--color-charcoal)] border-transparent text-white hover:shadow-black/15"
                      : "bg-[var(--color-surface)] border-[var(--color-border)] hover:border-[var(--color-sage-border)] hover:shadow-black/6"
                  )}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center",
                        isFeatured
                          ? "bg-[var(--color-sage)]/20 text-[var(--color-sage-light)]"
                          : "bg-[var(--color-sage-muted)] text-[var(--color-sage)]"
                      )}
                    >
                      {p.icon}
                    </div>
                    <Pill
                      className={cn(
                        isFeatured && "bg-white/10 text-white/70"
                      )}
                    >
                      {p.tag}
                    </Pill>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3
                      className={cn(
                        "font-[var(--font-display)] text-[1.6rem] font-[400] leading-tight tracking-tight",
                        isFeatured ? "text-white" : "text-[var(--color-charcoal)]"
                      )}
                    >
                      {p.title}
                    </h3>
                    <p
                      className={cn(
                        "font-[var(--font-body)] font-[300] text-[0.9rem] leading-[1.75]",
                        isFeatured ? "text-white/65" : "text-[var(--color-slate-mid)]"
                      )}
                    >
                      {p.desc}
                    </p>
                  </div>

                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center gap-1.5 text-[12px] font-[500] tracking-wide w-fit",
                      "transition-all duration-300",
                      isFeatured
                        ? "text-[var(--color-sage-light)] hover:gap-2.5"
                        : "text-[var(--color-sage)] hover:gap-2.5"
                    )}
                  >
                    Agendar <ArrowUpRightIcon size={12} />
                  </a>
                </div>
              </Reveal>
            );
          })}
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
    <section id="metodologia" className="bg-[var(--color-canvas)] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-20">
          <Reveal>
            <Label>Como Funciona</Label>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className={cn(
                "mt-4 font-[var(--font-display)] font-[400] leading-[1.1] tracking-tight",
                "text-[clamp(2.2rem,4vw,3.4rem)] text-[var(--color-charcoal)]"
              )}
            >
              Um processo{" "}
              <em className="italic text-[var(--color-sage)]">humanizado</em>
              <br />e no seu tempo
            </h2>
          </Reveal>
        </div>

        <div className="relative grid lg:grid-cols-2 gap-6">
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-[var(--color-border)] -translate-x-1/2" />

          {steps.map((s, i) => {
            const isLeft = i % 2 === 0;
            return (
              <Reveal
                key={s.title}
                direction={isLeft ? "left" : "right"}
                delay={([undefined, 100, 200, 300] as const)[i]}
                className={cn(!isLeft && "lg:mt-16")}
              >
                <div
                  className={cn(
                    "group bg-[var(--color-surface)] rounded-2xl p-7",
                    "border border-[var(--color-border)]",
                    "transition-all duration-500 ease-out",
                    "hover:-translate-y-1 hover:border-[var(--color-sage-border)] hover:shadow-lg hover:shadow-black/5"
                  )}
                >
                  <div className="flex items-start justify-between mb-5">
                    {s.num}
                    <div
                      className={cn(
                        "w-9 h-9 rounded-xl flex items-center justify-center",
                        "bg-[var(--color-sage-muted)] text-[var(--color-sage)]"
                      )}
                    >
                      {s.icon}
                    </div>
                  </div>
                  <h3
                    className={cn(
                      "font-[var(--font-display)] text-[1.4rem] font-[400] leading-tight tracking-tight",
                      "text-[var(--color-charcoal)] mb-3"
                    )}
                  >
                    {s.title}
                  </h3>
                  <p className="font-[var(--font-body)] font-[300] text-[0.9rem] leading-[1.75] text-[var(--color-slate-mid)]">
                    {s.desc}
                  </p>
                </div>
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
    <section className="bg-[var(--color-alabaster)] py-24 px-6">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <Reveal>
          <QuotesIcon size={36} weight="fill" color="var(--color-sage-border)" />
        </Reveal>
        <Reveal delay={100}>
          <blockquote
            className={cn(
              "font-[var(--font-display)] italic font-[300] leading-[1.5]",
              "text-[clamp(1.5rem,3vw,2.2rem)] text-[var(--color-charcoal)]"
            )}
          >
            "Não acredito em dietas restritivas ou soluções milagrosas. Acredito
            que cada paciente é único e merece um cuidado que respeite, de
            verdade, a sua história."
          </blockquote>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-[12px] font-[500] tracking-[0.14em] uppercase text-[var(--color-sage)]">
            — Yasmin Veras, Nutricionista CRN7 18989
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="bg-[var(--color-canvas)] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          {[
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
          ].map((s) => (
            <Reveal key={s.title}>
              <div
                className={cn(
                  "group bg-[var(--color-surface)] rounded-2xl p-7",
                  "border border-[var(--color-border)]",
                  "transition-all duration-500 ease-out",
                  "hover:-translate-y-1 hover:border-[var(--color-sage-border)] hover:shadow-xl hover:shadow-black/5"
                )}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-sage-muted)] flex items-center justify-center text-[var(--color-sage)]">
                    {s.icon}
                  </div>
                  <Pill>{s.badge}</Pill>
                </div>
                <h3 className="font-[var(--font-display)] text-[1.5rem] font-[400] text-[var(--color-charcoal)] mb-3 leading-tight">
                  {s.title}
                </h3>
                <p className="font-[var(--font-body)] font-[300] text-[0.9rem] leading-[1.75] text-[var(--color-slate-mid)] mb-6">
                  {s.desc}
                </p>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center gap-1.5 text-[12px] font-[500] text-[var(--color-sage)]",
                    "transition-all duration-300 hover:gap-2.5"
                  )}
                >
                  Agendar <ArrowUpRightIcon size={12} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="bg-[var(--color-charcoal)] py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[var(--color-sage)]/10 blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] max-w-[380px] max-h-[380px] rounded-full bg-[var(--color-sage)]/6 blur-[60px]" />
      </div>
      <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center gap-7">
        <Reveal>
          <LeafIcon size={28} weight="fill" color="rgba(143,175,126,0.5)" />
        </Reveal>
        <Reveal delay={100}>
          <h2
            className={cn(
              "font-[var(--font-display)] font-[400] leading-[1.1] tracking-tight text-white",
              "text-[clamp(2rem,4vw,3.2rem)]"
            )}
          >
            Dê o primeiro passo para{" "}
            <em className="italic text-[var(--color-sage-light)]">
              transformar sua saúde
            </em>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="font-[var(--font-body)] font-[300] text-[1rem] leading-[1.75] text-white/60 max-w-xl">
            Agende sua consulta e comece uma jornada rumo a uma vida mais
            saudável, equilibrada e prazerosa. Atendimento online para todo o
            Brasil.
          </p>
        </Reveal>
        <Reveal delay={300} className="flex flex-wrap gap-3 justify-center">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 px-7 py-4 rounded-full",
              "text-[13px] font-[500] tracking-wide bg-white text-[var(--color-charcoal)]",
              "transition-all duration-300 hover:bg-[var(--color-sage-muted)] hover:-translate-y-0.5",
              "animate-pulse-glow"
            )}
          >
            <ChatCircleDotsIcon size={16} weight="fill" color="var(--color-sage)" />
            Agendar pelo WhatsApp
          </a>
          <a
            href={IG}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 px-7 py-4 rounded-full",
              "text-[13px] font-[400] tracking-wide text-white/70",
              "border border-white/15",
              "transition-all duration-300 hover:border-white/30 hover:text-white"
            )}
          >
            <InstagramLogoIcon size={15} />
            @nutriyasminveras
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contato" className="bg-[var(--color-charcoal)] border-t border-white/8 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-[var(--font-display)] text-[1.2rem] font-[400] text-white/80">
          Yasmin{" "}
          <em className="not-italic text-[var(--color-sage-light)] font-[300]">Veras</em>
        </span>

        <div className="flex flex-wrap items-center justify-center gap-6">
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
        </div>

        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-[12px] text-white/40">
            <MapPinIcon size={12} color="var(--color-sage-light)" />
            Rio Branco, AC
          </span>
          <a
            href={IG}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white/70 hover:border-white/30 transition-all"
            aria-label="Instagram"
          >
            <InstagramLogoIcon size={14} />
          </a>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white/70 hover:border-white/30 transition-all"
            aria-label="WhatsApp"
          >
            <ChatCircleDotsIcon size={14} />
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/6 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-[11px] text-white/25">
          © {year} Yasmin Veras · Todos os direitos reservados
        </p>
        <p className="text-[11px] text-white/25">CRN7 18989 · Nutricionista Clínica</p>
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
