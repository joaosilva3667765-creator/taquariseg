import { Car, Home, HeartHandshake, Building2, Stethoscope, Truck, Tractor, ArrowRight } from "lucide-react"
import SectionHeading from "./SectionHeading"

const insuranceCards = [
  {
    name: "Auto",
    icon: Car,
    description: "Proteção completa para o seu veículo, com as melhores coberturas.",
    whatsappMsg: "Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Seguro%20Auto",
  },
  {
    name: "Residencial",
    icon: Home,
    description: "Sua casa segura contra imprevistos do dia a dia.",
    whatsappMsg: "Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Seguro%20Residencial",
  },
  {
    name: "Vida",
    icon: HeartHandshake,
    description: "Tranquilidade para você e para quem você ama.",
    whatsappMsg: "Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Seguro%20Vida",
  },
  {
    name: "Empresarial",
    icon: Building2,
    description: "Proteção sob medida para o seu negócio crescer seguro.",
    whatsappMsg: "Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Seguro%20Empresarial",
  },
  {
    name: "Saúde",
    icon: Stethoscope,
    description: "Planos individuais e familiares com as melhores operadoras.",
    whatsappMsg: "Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Seguro%20Sa%C3%BAde",
  },
  {
    name: "Transporte",
    icon: Truck,
    description: "Cargas e frotas protegidas em todo o trajeto.",
    whatsappMsg: "Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Seguro%20Transporte",
  },
  {
    name: "Máquinas Agrícolas",
    icon: Tractor,
    description: "Proteção para quem vive do campo e depende do maquinário.",
    whatsappMsg: "Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Seguro%20M%C3%A1quinas%20Agr%C3%ADcolas",
  },
]

export default function Seguros() {
  return (
    <section
      id="seguros"
      className="bg-brand-gray-light py-20 md:py-24 border-y border-slate-100 scroll-mt-20"
      aria-labelledby="seguros-title"
    >
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          subtitle="Nossos seguros"
          title="Proteção completa para cada momento da sua vida"
          description="Escolha o seguro ideal e fale com a gente pelo WhatsApp para uma cotação sem compromisso."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {insuranceCards.map((card, index) => {
            const Icon = card.icon
            // Alternate colors for standard premium visual design
            const isRedColor = index % 2 === 0
            
            return (
              <div
                key={card.name}
                className={`group flex flex-col justify-between bg-white border border-slate-200/60 rounded-xl p-7 md:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
                  index === 6 ? "lg:col-start-2" : ""
                }`}
              >
                <div>
                  {/* Icon Circle */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                      isRedColor ? "bg-[#FEE2E2] text-brand-red" : "bg-[#DBEAFE] text-brand-navy"
                    }`}
                  >
                    <Icon className="size-6 shrink-0" />
                  </div>

                  {/* Name & Description */}
                  <h3 className="text-lg md:text-xl font-bold text-brand-navy tracking-tight mb-2">
                    {card.name}
                  </h3>
                  <p className="text-brand-gray-text text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Card footer CTA link */}
                <a
                  href={`https://wa.me/5514997230206?text=${card.whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:text-brand-red-dark w-fit transition-colors group-hover:underline underline-offset-4 cursor-pointer"
                >
                  <span>Falar sobre este seguro</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
