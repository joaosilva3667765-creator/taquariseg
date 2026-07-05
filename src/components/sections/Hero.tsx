import { MessageCircle } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[500px] flex items-center justify-center py-24 md:py-32 overflow-hidden bg-white scroll-mt-20"
    >
      {/* Soft background decorative blobs */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#FEE2E2]/60 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#DBEAFE]/60 blur-3xl" />
        <div className="absolute top-1/2 left-2/3 w-80 h-80 rounded-full bg-[#FEE2E2]/30 blur-3xl" />
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center max-w-4xl">
        {/* Badge */}
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold bg-[#DBEAFE] text-[#1E3A8A] tracking-wide mb-6">
          Corretora de seguros em Taquarituba
        </span>

        {/* H1 Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#1E3A8A] leading-tight max-w-3xl mx-auto tracking-tight">
          Mais de 30 anos protegendo quem confia na gente.
        </h1>

        {/* Subtitle */}
        <p className="text-[#475569] text-base md:text-lg font-normal leading-relaxed max-w-2xl mx-auto mt-6">
          Auto, residencial, vida, empresarial e mais. Cotamos com as melhores seguradoras e cuidamos de você do primeiro contato ao sinistro.
        </p>

        {/* Actions Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto px-4 sm:px-0 justify-center">
          {/* Primary Button: WhatsApp */}
          <a
            href="https://wa.me/5514997230206"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-base w-full sm:w-auto border border-transparent"
          >
            <MessageCircle className="size-5 shrink-0" />
            <span>Fale no WhatsApp</span>
          </a>

          {/* Secondary Button: Anchor Link */}
          <a
            href="#contato"
            className="inline-flex items-center justify-center border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold transition-all duration-200 cursor-pointer text-base w-full sm:w-auto"
          >
            <span>Solicitar cotação</span>
          </a>
        </div>
      </div>
    </section>
  )
}
