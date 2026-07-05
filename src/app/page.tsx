import Header from "@/components/sections/Header"
import Hero from "@/components/sections/Hero"
import Numeros from "@/components/sections/Numeros"
import Sobre from "@/components/sections/Sobre"
import Seguros from "@/components/sections/Seguros"
import ComoFunciona from "@/components/sections/ComoFunciona"
import Diferenciais from "@/components/sections/Diferenciais"
import Perguntas from "@/components/sections/Perguntas"
import CTAFinal from "@/components/sections/CTAFinal"
import Contato from "@/components/sections/Contato"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Numeros />
        <Sobre />
        <Seguros />
        <ComoFunciona />
        <Diferenciais />
        <Perguntas />
        <CTAFinal />
        
        {/* Rodada 3: Formulário de Contato / Cotação */}
        <Contato />
      </main>
      <Footer />
    </>
  )
}
