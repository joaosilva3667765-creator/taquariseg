import { MessageCircle, Search, ShieldCheck } from "lucide-react"
import SectionHeading from "./SectionHeading"

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Você fala com a gente",
    description: "Chama no WhatsApp ou preenche o formulário do site.",
  },
  {
    number: "02",
    icon: Search,
    title: "Cotamos com as melhores seguradoras",
    description: "Analisamos opções e trazemos o que faz sentido para você.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Você escolhe e fecha",
    description: "Explicamos tudo com clareza e você decide sem pressão.",
  },
]

export default function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="bg-white py-20 md:py-24 scroll-mt-20"
      aria-labelledby="como-funciona-title"
    >
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          subtitle="Simples assim"
          title="Como funciona a cotação"
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Dashed Connection Line (Desktop only) */}
          <div className="hidden md:block absolute top-[30%] left-[16%] right-[16%] h-0 border-t-2 border-dashed border-slate-200/80 -z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  className="flex flex-col items-center text-center p-6 bg-white rounded-xl"
                >
                  {/* Step Number */}
                  <span className="text-4xl md:text-5xl font-black text-brand-red tracking-tight leading-none mb-4 select-none">
                    {step.number}
                  </span>

                  {/* Icon Circle */}
                  <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-navy mb-5 shadow-inner">
                    <Icon className="size-5 shrink-0" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg md:text-xl font-bold text-brand-navy tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-brand-gray-text text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
