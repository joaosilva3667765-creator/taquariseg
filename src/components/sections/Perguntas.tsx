import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import SectionHeading from "./SectionHeading"

const faqItems = [
  {
    value: "faq-1",
    question: "Preciso ir até a loja para fazer uma cotação?",
    answer: "Não. Você pode nos chamar no WhatsApp ou preencher o formulário do site que retornamos em até 1 dia útil.",
  },
  {
    value: "faq-2",
    question: "Vocês atendem só Taquarituba?",
    answer: "Atendemos toda a região de Taquarituba e cidades vizinhas.",
  },
  {
    value: "faq-3",
    question: "Como funciona a cotação?",
    answer: "Você nos passa alguns dados, consultamos as melhores seguradoras e apresentamos as opções para você escolher.",
  },
  {
    value: "faq-4",
    question: "Quanto tempo demora para ter um retorno?",
    answer: "Normalmente respondemos em até 1 dia útil, geralmente no mesmo dia.",
  },
  {
    value: "faq-5",
    question: "E se eu tiver um sinistro?",
    answer: "Você fala com a gente primeiro. A gente orienta você em cada passo e acompanha até a resolução.",
  },
]

export default function Perguntas() {
  return (
    <section
      id="perguntas"
      className="bg-white py-20 md:py-24 scroll-mt-20"
      aria-labelledby="perguntas-title"
    >
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          subtitle="Perguntas frequentes"
          title="Tire suas dúvidas"
          description="Se ficou alguma pergunta, chama no WhatsApp — a gente responde sem enrolação."
        />

        <div className="max-w-3xl mx-auto bg-white rounded-xl border border-slate-200/60 p-6 md:p-8 shadow-sm">
          <Accordion className="w-full">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="border-slate-100 py-3 first:pt-0 last:pb-0"
              >
                <AccordionTrigger className="text-brand-navy font-bold text-sm md:text-base hover:text-brand-red transition-colors duration-200 hover:no-underline py-2.5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-brand-gray-text text-sm leading-relaxed mt-2 pb-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
