import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yasmin Veras | Nutricionista Clínica",
  description:
    "Atendimento nutricional individualizado, fundamentado em evidências científicas. Especialista em Nutrição Clínica, Estética, Reeducação Alimentar e Nutrição Comportamental. CRN7 18989.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={cn(cormorant.variable, dmSans.variable, "font-mono", jetbrainsMono.variable)}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
