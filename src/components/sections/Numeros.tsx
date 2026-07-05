import { Award, Shield } from "lucide-react"

export default function Numeros() {
  return (
    <section
      id="numeros"
      className="bg-brand-gray-light py-16 border-y border-slate-100 scroll-mt-20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200/85 max-w-4xl mx-auto">
          {/* Block 1: 31 Years */}
          <div className="flex flex-col items-center text-center pb-8 md:pb-0 md:pr-12">
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-brand-red mb-4">
              <Award className="size-6" />
            </div>
            <span className="text-5xl md:text-6xl font-black text-brand-red tracking-tight">
              31 anos
            </span>
            <p className="text-brand-navy font-bold text-base md:text-lg mt-3">
              De tradição em Taquarituba
            </p>
            <p className="text-brand-gray-text text-sm max-w-xs mt-1">
              Atendimento humano e próximo, consolidado por mais de três décadas de história.
            </p>
          </div>

          {/* Block 2: 7 Types of Insurance */}
          <div className="flex flex-col items-center text-center pt-8 md:pt-0 md:pl-12">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-brand-navy mb-4">
              <Shield className="size-6" />
            </div>
            <span className="text-5xl md:text-6xl font-black text-brand-navy tracking-tight">
              7 tipos
            </span>
            <p className="text-brand-navy font-bold text-base md:text-lg mt-3">
              De seguro para você e sua empresa
            </p>
            <p className="text-brand-gray-text text-sm max-w-xs mt-1">
              Soluções completas sob medida para proteger todos os seus bens e quem você ama.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
