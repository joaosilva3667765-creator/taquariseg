import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taquariseg.com.br"),
  title: "Taquariseg Seguros — 30+ anos protegendo Taquarituba",
  description: "Corretora de seguros em Taquarituba há mais de 30 anos. Auto, residencial, vida, empresarial, saúde, transporte e máquinas agrícolas. Atendimento próximo e humano.",
  openGraph: {
    title: "Taquariseg Seguros — 30+ anos protegendo Taquarituba",
    description: "Corretora de seguros em Taquarituba há mais de 30 anos. Auto, residencial, vida, empresarial, saúde, transporte e máquinas agrícolas. Atendimento próximo e humano.",
    url: "https://taquariseg.com.br",
    siteName: "Taquariseg Seguros",
    locale: "pt-BR",
    type: "website",
  },

  other: {
    "msapplication-TileImage": "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppFloat />
        <Toaster />
      </body>
    </html>
  );
}
