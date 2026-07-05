import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default function CTAFinal() {
  return (
    <section className="bg-gradient-to-r from-brand-red to-brand-red-dark text-white py-20 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
          Peça sua cotação sem compromisso
        </h2>

        {/* Subtitle */}
        <p className="text-red-100 text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
          Fale com a Taquariseg agora pelo WhatsApp e receba a melhor opção para o seu perfil.
        </p>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://wa.me/5514997230206"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "h-12 px-8 bg-white hover:bg-red-50 text-brand-red hover:text-brand-red-dark rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-200 gap-2 cursor-pointer text-base border-transparent"
            )}
          >
            <MessageCircle className="size-5 shrink-0" />
            <span>Fale no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
