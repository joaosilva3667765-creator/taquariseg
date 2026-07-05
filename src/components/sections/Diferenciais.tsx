import { Users, Award, Handshake, LifeBuoy } from "lucide-react"
import SectionHeading from "./SectionHeading"

const stats = [
  {
    icon: Users,
    title: "Atendimento humano",
    description: "Você conversa com quem conhece você e a região.",
  },
  {
    icon: Award,
    title: "31 anos de tradição",
    description: "Décadas ajudando famílias e empresas de Taquarituba.",
  },
  {
    icon: Handshake,
    title: "Melhores seguradoras",
    description: "Trabalhamos com as principais do país.",
  },
  {
    icon: LifeBuoy,
    title: "Suporte no sinistro",
    description: "Do primeiro momento até a resolução completa.",
  },
]

export default function Diferenciais() {
  return (
    <section
      id="diferenciais"
      className="bg-brand-gray-light py-20 md:py-24 border-y border-slate-100 scroll-mt-20"
      aria-labelledby="diferenciais-title"
    >
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          subtitle="Por que Taquariseg"
          title="O que faz a diferença no nosso atendimento"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {stats.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group bg-white border border-slate-200/60 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-full bg-[#FEE2E2] text-brand-red flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-5 shrink-0" />
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-brand-navy tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-brand-gray-text text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
