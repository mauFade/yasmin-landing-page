"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import Image from "next/image";
import {
  HouseIcon as House,
  MonitorIcon as Monitor,
  HeartbeatIcon as Heartbeat,
  FlowerLotusIcon as FlowerLotus,
  ClipboardTextIcon as ClipboardText,
  CarrotIcon as Carrot,
  FileTextIcon as FileText,
  CalendarCheckIcon as CalendarCheck,
  InstagramLogoIcon as InstagramLogo,
  ChatCircleDotsIcon as ChatCircleDots,
  MapPinIcon as MapPin,
  ArrowRightIcon as ArrowRight,
  ListIcon as List,
  XIcon as X,
  NumberCircleOneIcon as NumberCircleOne,
  NumberCircleTwoIcon as NumberCircleTwo,
  NumberCircleThreeIcon as NumberCircleThree,
  NumberCircleFourIcon as NumberCircleFour,
  MedalIcon as Medal,
  LeafIcon as Leaf,
  CheckCircleIcon as CheckCircle,
  QuotesIcon as Quotes,
} from "@phosphor-icons/react";

const WA_LINK = "https://wa.me/5568992025316";
const IG_LINK = "https://www.instagram.com/nutriyasminveras/";

/* ── Scroll-reveal wrapper ── */
function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const baseClass =
    direction === "left"
      ? "scroll-reveal-left"
      : direction === "right"
      ? "scroll-reveal-right"
      : "scroll-reveal";

  const delayClass =
    delay === 100
      ? "delay-100"
      : delay === 200
      ? "delay-200"
      : delay === 300
      ? "delay-300"
      : delay === 400
      ? "delay-400"
      : delay === 500
      ? "delay-500"
      : "";

  return (
    <div ref={ref} className={`${baseClass} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}

/* ── Header ── */
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#metodologia", label: "Metodologia" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 0.4s ease, box-shadow 0.4s ease",
          background: scrolled ? "rgba(248,245,239,0.96)" : "transparent",
          boxShadow: scrolled ? "0 1px 24px rgba(0,0,0,0.07)" : "none",
          backdropFilter: scrolled ? "blur(10px)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 2rem",
            height: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "1.5rem",
              fontWeight: 500,
              color: "var(--text-dark)",
              textDecoration: "none",
              letterSpacing: "0.04em",
            }}
          >
            Yasmin <span style={{ color: "var(--sage-dark)", fontStyle: "italic" }}>Veras</span>
          </a>

          {/* Desktop nav */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2.5rem",
            }}
            className="hidden md:flex"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.82rem",
                  fontWeight: 400,
                  color: "var(--text-mid)",
                  textDecoration: "none",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  transition: "color 0.25s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--sage-dark)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--text-mid)")
                }
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.82rem",
                fontWeight: 500,
                background: "var(--sage-dark)",
                color: "#fff",
                padding: "0.6rem 1.5rem",
                borderRadius: "50px",
                textDecoration: "none",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "background 0.25s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--sage)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--sage-dark)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Agende sua Consulta
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text-dark)",
              padding: "0.5rem",
            }}
            aria-label="Abrir menu"
          >
            <List size={26} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: "var(--cream)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.5rem",
            animation: "fadeIn 0.25s ease",
          }}
        >
          <button
            onClick={() => setOpen(false)}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "2rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text-dark)",
            }}
            aria-label="Fechar menu"
          >
            <X size={28} />
          </button>

          <a
            href="#"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "1.6rem",
              fontWeight: 500,
              color: "var(--text-dark)",
              textDecoration: "none",
              marginBottom: "1rem",
            }}
          >
            Yasmin <span style={{ color: "var(--sage-dark)", fontStyle: "italic" }}>Veras</span>
          </a>

          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "1.8rem",
                fontWeight: 400,
                color: "var(--text-dark)",
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              {l.label}
            </a>
          ))}

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.85rem",
              fontWeight: 500,
              background: "var(--sage-dark)",
              color: "#fff",
              padding: "0.85rem 2.4rem",
              borderRadius: "50px",
              textDecoration: "none",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginTop: "1rem",
            }}
          >
            Agendar Consulta
          </a>
        </div>
      )}
    </>
  );
}

/* ── Hero ── */
function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "var(--cream)",
        display: "flex",
        alignItems: "center",
        paddingTop: "72px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "4rem 2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
          width: "100%",
        }}
        className="hero-grid"
      >
        {/* Text */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div
            className="animate-fade-in"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "var(--sage-xlight)",
              color: "var(--sage-dark)",
              padding: "0.4rem 1rem",
              borderRadius: "50px",
              width: "fit-content",
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            <Leaf size={14} weight="fill" />
            Nutricionista Clínica · CRN7 18989
          </div>

          <h1
            className="animate-fade-in-up"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "var(--text-dark)",
              animationDelay: "0.1s",
            }}
          >
            Transforme sua{" "}
            <em style={{ color: "var(--sage-dark)", fontStyle: "italic" }}>
              relação
            </em>{" "}
            <br />
            com a comida
          </h1>

          <p
            className="animate-fade-in-up"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "var(--text-mid)",
              maxWidth: 480,
              fontWeight: 300,
              animationDelay: "0.2s",
            }}
          >
            Atendimento nutricional individualizado, fundamentado em evidências
            científicas, com escuta qualificada e acolhimento da sua trajetória
            e hábitos alimentares. Consultas online e presencial.
          </p>

          <div
            className="animate-fade-in-up"
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              animationDelay: "0.3s",
            }}
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-pulse-ring"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "var(--sage-dark)",
                color: "#fff",
                padding: "0.9rem 2rem",
                borderRadius: "50px",
                textDecoration: "none",
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.88rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                transition: "background 0.25s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--sage)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--sage-dark)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <ChatCircleDots size={18} weight="fill" />
              Agendar pelo WhatsApp
            </a>

            <a
              href="#sobre"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "var(--text-mid)",
                textDecoration: "none",
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.88rem",
                fontWeight: 400,
                padding: "0.9rem 1.5rem",
                border: "1px solid var(--cream-dark)",
                borderRadius: "50px",
                transition: "border-color 0.25s, color 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--sage)";
                (e.currentTarget as HTMLElement).style.color = "var(--sage-dark)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--cream-dark)";
                (e.currentTarget as HTMLElement).style.color = "var(--text-mid)";
              }}
            >
              Conheça meu trabalho <ArrowRight size={15} />
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="animate-fade-in"
            style={{
              display: "flex",
              gap: "1.5rem",
              flexWrap: "wrap",
              paddingTop: "0.5rem",
              animationDelay: "0.5s",
            }}
          >
            {[
              "Atendimento Humanizado",
              "Online & Presencial",
              "Baseado em Evidências",
            ].map((badge) => (
              <span
                key={badge}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.75rem",
                  color: "var(--text-light)",
                  letterSpacing: "0.04em",
                }}
              >
                <CheckCircle size={13} weight="fill" color="var(--sage)" />
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Portrait image */}
        <div
          className="animate-fade-in hero-image-wrap"
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            animationDelay: "0.25s",
          }}
        >
          {/* Decorative blob behind */}
          <div
            style={{
              position: "absolute",
              inset: "-10%",
              background: "var(--sage-xlight)",
              borderRadius: "60% 40% 50% 50% / 50% 60% 40% 50%",
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              maxWidth: 440,
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              overflow: "hidden",
              aspectRatio: "4/5",
            }}
          >
            <Image
              src="/yasmin-photo-1.jpg"
              alt="Yasmin Veras — Nutricionista"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Floating credential card */}
          <div
            style={{
              position: "absolute",
              bottom: "8%",
              left: "-4%",
              background: "#fff",
              borderRadius: 16,
              padding: "1rem 1.25rem",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              zIndex: 2,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "var(--sage-xlight)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Medal size={20} weight="fill" color="var(--sage-dark)" />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: "var(--text-dark)",
                }}
              >
                CRN7 18989
              </div>
              <div
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.68rem",
                  color: "var(--text-light)",
                }}
              >
                Nutricionista Registrada
              </div>
            </div>
          </div>

          {/* Floating tag */}
          <div
            style={{
              position: "absolute",
              top: "12%",
              right: "-2%",
              background: "var(--sage-dark)",
              color: "#fff",
              borderRadius: 12,
              padding: "0.6rem 1rem",
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.06em",
              zIndex: 2,
            }}
          >
            UFAC · Pós-Graduanda
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            padding: 3rem 1.5rem !important;
          }
          .hero-image-wrap {
            order: -1;
            max-height: 380px;
          }
        }
      `}</style>
    </section>
  );
}

/* ── About ── */
function About() {
  const credentials = [
    "Graduada em Nutrição pela Universidade Federal do Acre (UFAC)",
    "Pós-Graduação em Nutrição na Oncologia",
    "Especializada em Saúde da Mulher",
    "Atendimento online para todo o Brasil e presencial",
  ];

  return (
    <section
      id="sobre"
      style={{
        background: "var(--cream-dark)",
        padding: "6rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* Image */}
        <Reveal direction="left">
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                aspectRatio: "4/5",
                maxWidth: 420,
              }}
            >
              <Image
                src="/yasmin-photo-2.jpg"
                alt="Yasmin Veras sorrindo"
                width={420}
                height={525}
                style={{ objectFit: "cover", objectPosition: "center top", width: "100%", height: "100%" }}
              />
            </div>
            {/* Decorative border */}
            <div
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                right: -20,
                bottom: -20,
                border: "2px solid var(--sage-light)",
                borderRadius: 24,
                zIndex: -1,
              }}
            />
          </div>
        </Reveal>

        {/* Text */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          <Reveal>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "var(--sage-dark)",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Sobre Mim
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
                fontWeight: 400,
                lineHeight: 1.15,
                color: "var(--text-dark)",
              }}
            >
              Cuidar de você é{" "}
              <em style={{ color: "var(--sage-dark)", fontStyle: "italic" }}>
                minha vocação
              </em>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "var(--text-mid)",
                fontWeight: 300,
              }}
            >
              Sou Yasmin Veras, nutricionista formada pela Universidade Federal
              do Acre e Pós-Graduanda em Nutrição Oncológica e Nutrição Aplicada
              à Saúde da Mulher. Meu trabalho é ajudar você a passar pelas
              diferentes fases da vida de maneira leve, responsável e
              sustentável.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "var(--text-mid)",
                fontWeight: 300,
              }}
            >
              Não acredito em dietas restritivas ou soluções milagrosas. Cada
              paciente é único — realizo atendimento 100% individualizado,
              baseado na sua rotina, intolerâncias e objetivos. Atendo de forma
              humanizada, combinando evidências científicas com escuta ativa e
              respeito à sua história.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {credentials.map((c) => (
                <li
                  key={c}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.6rem",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "0.9rem",
                    color: "var(--text-mid)",
                    fontWeight: 400,
                  }}
                >
                  <CheckCircle
                    size={17}
                    weight="fill"
                    color="var(--sage)"
                    style={{ flexShrink: 0, marginTop: 2 }}
                  />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={400}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "var(--sage-dark)",
                color: "#fff",
                padding: "0.85rem 2rem",
                borderRadius: "50px",
                textDecoration: "none",
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.85rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                width: "fit-content",
                transition: "background 0.25s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--sage)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--sage-dark)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Agendar consulta <ArrowRight size={15} />
            </a>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ── Services ── */
const services = [
  {
    icon: <House size={28} weight="duotone" color="var(--sage-dark)" />,
    title: "Consulta Presencial",
    desc: "Consulta com duração aproximada de 60 minutos, incluindo avaliação corporal detalhada por pregas cutâneas, interpretação de exames laboratoriais, investigação clínica completa e análise metabólica personalizada.",
    tag: "Presencial",
  },
  {
    icon: <Monitor size={28} weight="duotone" color="var(--sage-dark)" />,
    title: "Consulta Online",
    desc: "Mesma entrega da consulta presencial — avaliação física via app, análise de exames, anamnese e mapeamento metabólico — com a flexibilidade de horário que você precisa, de qualquer lugar do Brasil.",
    tag: "Online",
  },
  {
    icon: <Heartbeat size={28} weight="duotone" color="var(--sage-dark)" />,
    title: "Nutrição Oncológica",
    desc: "Planejamento alimentar focado em manejo de sintomas, prevenção de desnutrição e preparo para quimio e radioterapia. Suporte especializado para paciente e familiares em cada etapa do tratamento.",
    tag: "Especialidade",
  },
  {
    icon: <FlowerLotus size={28} weight="duotone" color="var(--sage-dark)" />,
    title: "Saúde da Mulher",
    desc: "Manejo nutricional de SOP e endometriose, menopausa, saúde óssea e questões gastroentéricas na saúde feminina. Cuidado individualizado para cada fase da vida da mulher.",
    tag: "Especialidade",
  },
];

function Services() {
  return (
    <section
      id="servicos"
      style={{ background: "var(--cream)", padding: "6rem 2rem" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <Reveal>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "var(--sage-dark)",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              O que ofereço
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
                fontWeight: 400,
                color: "var(--text-dark)",
                lineHeight: 1.2,
              }}
            >
              Serviços{" "}
              <em style={{ color: "var(--sage-dark)", fontStyle: "italic" }}>
                personalizados
              </em>{" "}
              para você
            </h2>
          </Reveal>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 100 as 0 | 100 | 200 | 300 | 400 | 500}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  padding: "2.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  border: "1px solid var(--cream-dark)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "default",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 12px 40px rgba(0,0,0,0.09)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "var(--sage-xlight)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {s.icon}
                </div>
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "0.65rem",
                      fontWeight: 500,
                      color: "var(--sage-dark)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      background: "var(--sage-xlight)",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "50px",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {s.tag}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "1.4rem",
                      fontWeight: 500,
                      color: "var(--text-dark)",
                      lineHeight: 1.2,
                    }}
                  >
                    {s.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    color: "var(--text-mid)",
                    fontWeight: 300,
                    flexGrow: 1,
                  }}
                >
                  {s.desc}
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    color: "var(--sage-dark)",
                    textDecoration: "none",
                    transition: "gap 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.gap = "0.6rem")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.gap = "0.35rem")
                  }
                >
                  Agendar <ArrowRight size={14} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Methodology ── */
const steps = [
  {
    num: <NumberCircleOne size={40} weight="fill" color="var(--sage)" />,
    icon: <ClipboardText size={22} weight="duotone" color="var(--sage-dark)" />,
    title: "Anamnese Completa",
    desc: "Entendo sua história, rotina, objetivos e relação com os alimentos em uma primeira conversa acolhedora e sem julgamentos.",
  },
  {
    num: <NumberCircleTwo size={40} weight="fill" color="var(--sage)" />,
    icon: <Carrot size={22} weight="duotone" color="var(--sage-dark)" />,
    title: "Avaliação Nutricional",
    desc: "Análise detalhada do consumo alimentar, estado nutricional, exames laboratoriais e necessidades individuais.",
  },
  {
    num: <NumberCircleThree size={40} weight="fill" color="var(--sage)" />,
    icon: <FileText size={22} weight="duotone" color="var(--sage-dark)" />,
    title: "Plano Personalizado",
    desc: "Elaboração de estratégias alimentares flexíveis, práticas e alinhadas aos seus objetivos, estilo de vida e preferências.",
  },
  {
    num: <NumberCircleFour size={40} weight="fill" color="var(--sage)" />,
    icon: <CalendarCheck size={22} weight="duotone" color="var(--sage-dark)" />,
    title: "Acompanhamento Contínuo",
    desc: "Retornos periódicos para ajustes, suporte e celebração das suas conquistas ao longo de toda a jornada.",
  },
];

function Methodology() {
  return (
    <section
      id="metodologia"
      style={{ background: "var(--cream-dark)", padding: "6rem 2rem" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <Reveal>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "var(--sage-dark)",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Como funciona
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
                fontWeight: 400,
                color: "var(--text-dark)",
                lineHeight: 1.2,
              }}
            >
              Minha{" "}
              <em style={{ color: "var(--sage-dark)", fontStyle: "italic" }}>
                metodologia
              </em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "1rem",
                color: "var(--text-mid)",
                fontWeight: 300,
                maxWidth: 520,
                margin: "1rem auto 0",
                lineHeight: 1.75,
              }}
            >
              Um acompanhamento humanizado e no seu tempo, que valoriza cada
              capítulo da sua história.
            </p>
          </Reveal>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
            position: "relative",
          }}
        >
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={(i * 100) as 0 | 100 | 200 | 300 | 400 | 500}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  border: "1px solid transparent",
                  transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--sage-light)";
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.07)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "transparent";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  {s.num}
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: "var(--sage-xlight)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {s.icon}
                  </div>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "1.3rem",
                    fontWeight: 500,
                    color: "var(--text-dark)",
                    lineHeight: 1.2,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    color: "var(--text-mid)",
                    fontWeight: 300,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA Banner ── */
function CtaBanner() {
  return (
    <section
      style={{
        background: "var(--sage-dark)",
        padding: "5rem 2rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 680, margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "center" }}>
        <Reveal>
          <Leaf size={32} weight="fill" color="rgba(255,255,255,0.5)" />
        </Reveal>
        <Reveal delay={100}>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "#fff",
              lineHeight: 1.2,
            }}
          >
            Dê o primeiro passo para{" "}
            <em style={{ fontStyle: "italic" }}>transformar sua saúde</em>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.8)",
              fontWeight: 300,
              lineHeight: 1.75,
            }}
          >
            Agende sua consulta e comece sua jornada rumo a uma vida mais
            saudável, equilibrada e prazerosa. Atendimento online para todo o
            Brasil.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-ring"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              background: "#fff",
              color: "var(--sage-dark)",
              padding: "1rem 2.25rem",
              borderRadius: "50px",
              textDecoration: "none",
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.9rem",
              fontWeight: 500,
              letterSpacing: "0.06em",
              transition: "transform 0.2s, background 0.25s",
              marginTop: "0.5rem",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              (e.currentTarget as HTMLElement).style.background = "var(--cream)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.background = "#fff";
            }}
          >
            <ChatCircleDots size={20} weight="fill" />
            Agendar pelo WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Quote / Testimonial ── */
function Quote() {
  return (
    <section
      style={{
        background: "var(--cream)",
        padding: "5rem 2rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <Reveal>
          <Quotes size={40} weight="fill" color="var(--sage-light)" />
        </Reveal>
        <Reveal delay={100}>
          <blockquote
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--text-dark)",
              lineHeight: 1.5,
              margin: "1.25rem 0",
            }}
          >
            "Não acredito em dietas restritivas ou gomas milagrosas. Acredito
            que cada paciente é diferente e merece um cuidado que respeite a sua
            história."
          </blockquote>
        </Reveal>
        <Reveal delay={200}>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.82rem",
              color: "var(--sage-dark)",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            — Yasmin Veras, Nutricionista CRN7 18989
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contato"
      style={{
        background: "var(--text-dark)",
        color: "rgba(255,255,255,0.75)",
        padding: "4rem 2rem 2.5rem",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr",
          gap: "3rem",
          paddingBottom: "2.5rem",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
        className="footer-grid"
      >
        {/* Brand */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <span
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "1.6rem",
              fontWeight: 500,
              color: "#fff",
            }}
          >
            Yasmin{" "}
            <em style={{ color: "var(--sage-light)", fontStyle: "italic" }}>
              Veras
            </em>
          </span>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.88rem",
              lineHeight: 1.7,
              fontWeight: 300,
              maxWidth: 300,
            }}
          >
            Nutricionista clínica comprometida com seu bem-estar e saúde de
            forma individualizada, humanizada e baseada em evidências.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
            <a
              href={IG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                transition: "border-color 0.25s, color 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--sage-light)";
                (e.currentTarget as HTMLElement).style.color = "var(--sage-light)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)";
              }}
              aria-label="Instagram"
            >
              <InstagramLogo size={18} />
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                transition: "border-color 0.25s, color 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--sage-light)";
                (e.currentTarget as HTMLElement).style.color = "var(--sage-light)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)";
              }}
              aria-label="WhatsApp"
            >
              <ChatCircleDots size={18} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.72rem",
              fontWeight: 500,
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Navegação
          </p>
          {[
            { href: "#sobre", label: "Sobre Mim" },
            { href: "#servicos", label: "Serviços" },
            { href: "#metodologia", label: "Metodologia" },
            { href: IG_LINK, label: "@nutriyasminveras", external: true },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.88rem",
                color: "rgba(255,255,255,0.65)",
                textDecoration: "none",
                fontWeight: 300,
                transition: "color 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--sage-light)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)")
              }
            >
              {l.external && <InstagramLogo size={13} />}
              {l.label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.72rem",
              fontWeight: 500,
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "0.25rem",
            }}
          >
            Contato
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              background: "var(--sage-dark)",
              color: "#fff",
              padding: "0.8rem 1.5rem",
              borderRadius: "50px",
              textDecoration: "none",
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.82rem",
              fontWeight: 500,
              letterSpacing: "0.04em",
              width: "fit-content",
              transition: "background 0.25s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--sage)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--sage-dark)")
            }
          >
            <ChatCircleDots size={16} weight="fill" />
            Agendar Consulta
          </a>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              marginTop: "0.25rem",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.85rem",
                fontWeight: 300,
                color: "rgba(255,255,255,0.6)",
              }}
            >
              <MapPin size={14} color="var(--sage-light)" />
              Rio Branco, Acre — Online para todo o Brasil
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1200,
          margin: "2rem auto 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "0.78rem",
            color: "rgba(255,255,255,0.35)",
            fontWeight: 300,
          }}
        >
          © {year} Yasmin Veras · Todos os direitos reservados
        </p>
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "0.78rem",
            color: "rgba(255,255,255,0.35)",
            fontWeight: 300,
          }}
        >
          CRN7 18989 · Nutricionista Clínica
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}

/* ── Page ── */
export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Quote />
      <Methodology />
      <CtaBanner />
      <Footer />
    </main>
  );
}
