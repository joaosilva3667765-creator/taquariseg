import Image from "next/image"

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="bg-white py-20 md:py-24 scroll-mt-20"
      aria-labelledby="sobre-title"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Column Left: Visual area */}
          <div className="relative w-full aspect-[3/2] bg-[#F8FAFC] rounded-[2rem] overflow-hidden shadow-md">
            <Image
              src="/imagemdafaixada.png"
              alt="Fachada da Taquariseg Seguros em Taquarituba"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-contain"
              priority
            />
          </div>

          {/* Column Right: Text area */}
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red px-3 py-1 bg-red-50 rounded-full w-fit">
              Quem somos
            </span>
            <h2
              id="sobre-title"
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-navy mt-4 tracking-tight leading-tight"
            >
              Uma corretora que faz parte da história de Taquarituba
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-brand-gray-text text-base leading-relaxed">
              <p>
                A Taquariseg está há 31 anos ajudando famílias, empresas e produtores da nossa região a proteger o que mais importa. Trabalhamos com as principais seguradoras do país e escolhemos a proteção certa para cada perfil — do carro da família ao maquinário da propriedade rural.
              </p>
              <p>
                Nosso jeito de trabalhar é simples: escutar o que você precisa, explicar sem enrolação e estar do seu lado quando você mais precisa — principalmente na hora de um sinistro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
