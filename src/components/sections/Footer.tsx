import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, MessageCircle, Mail } from "lucide-react"

const insuranceTypes = [
  "Auto",
  "Residencial",
  "Vida",
  "Empresarial",
  "Saúde",
  "Transporte",
  "Máquinas Agrícolas",
]

export default function Footer() {
  return (
    <footer className="bg-brand-navy-dark text-slate-300 py-16 px-4 md:px-6 border-t border-slate-800">
      <div className="container mx-auto">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Brand */}
          <div className="flex flex-col gap-4">
            <Link href="#" className="flex items-center gap-4 w-fit focus-visible:outline-none">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-white/10 p-1.5">
                <Image
                  src="/logo.png"
                  alt="Logo Taquariseg"
                  fill
                  sizes="80px"
                  className="object-contain p-1"
                />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Taquariseg Seguros
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mt-2 max-w-sm">
              Há 31 anos protegendo famílias, empresas e produtores de Taquarituba e região com confiança e proximidade.
            </p>
          </div>

          {/* Column 2 - Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-lg tracking-tight relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-12 after:bg-brand-red">
              Contato
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm mt-2">
              <li className="flex items-start gap-3">
                <MapPin className="size-5 shrink-0 text-brand-red mt-0.5" />
                <span className="leading-relaxed">
                  R. Dr. Ataliba Leonel, 152 - Centro, Taquarituba - SP, 18740-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-5 shrink-0 text-brand-red" />
                <span>(14) 99723-0206</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="size-5 shrink-0 text-brand-red" />
                <a
                  href="https://wa.me/5514997230206"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline underline-offset-4 font-semibold text-slate-200"
                >
                  WhatsApp: (14) 99723-0206
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 shrink-0 text-brand-red" />
                <a
                  href="mailto:[EMAIL]"
                  className="hover:text-white transition-colors"
                >
                  [EMAIL]
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Insurance list */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-lg tracking-tight relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-12 after:bg-brand-red">
              Nossos Seguros
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm mt-2">
              {insuranceTypes.map((type) => (
                <li key={type}>
                  <Link
                    href="#seguros"
                    className="hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="size-1.5 rounded-full bg-brand-red shrink-0" />
                    <span>{type}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
            <span>CNPJ: [CNPJ]</span>
            <span className="hidden md:inline text-slate-800">|</span>
            <span>SUSEP: [SUSEP]</span>
            <span className="hidden md:inline text-slate-800">|</span>
            <span>© 2026 Taquariseg Seguros. Todos os direitos reservados.</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="hover:text-slate-300 transition-colors duration-200 underline underline-offset-4"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
