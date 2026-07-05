"use client"

import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { MessageCircle, Mail, MapPin, Send, Loader2 } from "lucide-react"
import { toast } from "sonner"

import { contatoSchema, type ContatoInput } from "@/lib/validations"
import { Field, FieldLabel, FieldError } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

export default function Contato() {
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContatoInput>({
    resolver: zodResolver(contatoSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      assunto: "",
      mensagem: "",
      consentimento: false as any,
    },
  })

  async function onSubmit(data: ContatoInput) {
    setLoading(true)
    try {
      await new Promise((r) => setTimeout(r, 1200)) // Simulates network latency
      console.log("Dados do formulário:", data)
      toast.success("Mensagem enviada!", {
        description: "Retornamos em até 1 dia útil.",
      })
      reset()
    } catch (error) {
      console.error(error)
      toast.error("Erro ao enviar", {
        description: "Tente novamente ou chame no WhatsApp.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contato" className="bg-[#F8FAFC] py-20 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-navy leading-tight">
                Vamos conversar sobre o seguro ideal para você
              </h2>
              <p className="text-slate-500 mt-4 leading-relaxed text-base">
                Preencha o formulário ou fale direto pelo WhatsApp. Retornamos em até 1 dia útil.
              </p>
            </div>

            {/* Contact list info */}
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center size-11 rounded-full bg-[#FEE2E2] text-brand-red shrink-0 shadow-sm">
                  <MessageCircle className="size-5 shrink-0" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                    WhatsApp
                  </span>
                  <a
                    href="https://wa.me/5514997230206"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-navy hover:text-brand-red hover:underline font-extrabold transition-colors mt-0.5 inline-block text-base"
                  >
                    (14) 99723-0206
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center size-11 rounded-full bg-[#FEE2E2] text-brand-red shrink-0 shadow-sm">
                  <Mail className="size-5 shrink-0" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                    E-mail
                  </span>
                  <span className="text-slate-600 font-semibold mt-0.5 inline-block text-base">
                    [EMAIL]
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center size-11 rounded-full bg-[#FEE2E2] text-brand-red shrink-0 shadow-sm">
                  <MapPin className="size-5 shrink-0" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Endereço
                  </span>
                  <span className="text-slate-600 font-semibold mt-0.5 inline-block text-base leading-relaxed">
                    R. Dr. Ataliba Leonel, 152 — Centro, Taquarituba - SP
                  </span>
                </div>
              </div>
            </div>

            {/* Secondary CTA button */}
            <div className="pt-2">
              <a
                href="https://wa.me/5514997230206"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-lg border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-bold transition-all duration-200 cursor-pointer text-sm shadow-sm"
              >
                <MessageCircle className="size-5 shrink-0" />
                <span>Prefiro pelo WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column - Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 md:p-10">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-brand-navy tracking-tight">
                  Solicite sua cotação
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Preencha os campos e retornamos rapidinho.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                {/* Full name input */}
                <Field>
                  <FieldLabel htmlFor="nome">Nome completo</FieldLabel>
                  <Input
                    id="nome"
                    placeholder="Seu nome completo"
                    {...register("nome")}
                    className="h-10 px-3.5 focus-visible:ring-3 focus-visible:ring-brand-red/45 focus-visible:border-brand-red"
                    aria-invalid={!!errors.nome}
                  />
                  <FieldError>{errors.nome?.message}</FieldError>
                </Field>

                {/* Email input */}
                <Field>
                  <FieldLabel htmlFor="email">E-mail</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu.email@exemplo.com"
                    {...register("email")}
                    className="h-10 px-3.5 focus-visible:ring-3 focus-visible:ring-brand-red/45 focus-visible:border-brand-red"
                    aria-invalid={!!errors.email}
                  />
                  <FieldError>{errors.email?.message}</FieldError>
                </Field>

                {/* Telephone / WhatsApp input */}
                <Field>
                  <FieldLabel htmlFor="telefone">Telefone / WhatsApp</FieldLabel>
                  <Input
                    id="telefone"
                    type="tel"
                    placeholder="(14) 99999-9999"
                    {...register("telefone")}
                    className="h-10 px-3.5 focus-visible:ring-3 focus-visible:ring-brand-red/45 focus-visible:border-brand-red"
                    aria-invalid={!!errors.telefone}
                  />
                  <FieldError>{errors.telefone?.message}</FieldError>
                </Field>

                {/* Subject select */}
                <Field>
                  <FieldLabel htmlFor="assunto">Assunto</FieldLabel>
                  <Controller
                    control={control}
                    name="assunto"
                    render={({ field }) => (
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger
                          id="assunto"
                          className="w-full h-10 px-3.5 border border-input rounded-lg bg-transparent text-sm focus-visible:ring-3 focus-visible:ring-brand-red/45 focus-visible:border-brand-red aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 cursor-pointer"
                          aria-invalid={!!errors.assunto}
                        >
                          <SelectValue placeholder="Sobre qual seguro deseja falar?" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-slate-200 shadow-lg rounded-lg">
                          <SelectItem value="Auto">Auto</SelectItem>
                          <SelectItem value="Residencial">Residencial</SelectItem>
                          <SelectItem value="Vida">Vida</SelectItem>
                          <SelectItem value="Empresarial">Empresarial</SelectItem>
                          <SelectItem value="Saúde">Saúde</SelectItem>
                          <SelectItem value="Transporte">Transporte</SelectItem>
                          <SelectItem value="Máquinas Agrícolas">Máquinas Agrícolas</SelectItem>
                          <SelectItem value="Outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  <FieldError>{errors.assunto?.message}</FieldError>
                </Field>

                {/* Message textarea */}
                <Field>
                  <FieldLabel htmlFor="mensagem">Mensagem (opcional)</FieldLabel>
                  <Textarea
                    id="mensagem"
                    rows={4}
                    placeholder="Conte um pouco sobre o que você precisa (opcional)"
                    {...register("mensagem")}
                    className="min-h-[100px] px-3.5 py-2.5 focus-visible:ring-3 focus-visible:ring-brand-red/45 focus-visible:border-brand-red"
                    aria-invalid={!!errors.mensagem}
                  />
                  <FieldError>{errors.mensagem?.message}</FieldError>
                </Field>

                {/* Consent checkbox */}
                <div className="flex items-start gap-3 mt-1" data-invalid={!!errors.consentimento}>
                  <div className="pt-0.5 shrink-0">
                    <Controller
                      control={control}
                      name="consentimento"
                      render={({ field }) => (
                        <Checkbox
                          id="consentimento"
                          checked={!!field.value}
                          onCheckedChange={(checked) => field.onChange(checked === true)}
                          aria-invalid={!!errors.consentimento}
                          className="cursor-pointer focus-visible:ring-brand-red/45"
                        />
                      )}
                    />
                  </div>
                  <div className="grid gap-1 leading-tight">
                    <label
                      htmlFor="consentimento"
                      className="text-sm font-semibold text-brand-navy hover:text-brand-navy-dark select-none cursor-pointer leading-tight"
                    >
                      Autorizo a Taquariseg a entrar em contato comigo por WhatsApp, e-mail ou telefone.
                    </label>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Seus dados são tratados com respeito à LGPD e não serão compartilhados com terceiros.
                    </p>
                    {errors.consentimento && (
                      <span className="text-xs font-semibold text-destructive mt-1 block">
                        {errors.consentimento.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-11 bg-brand-red hover:bg-brand-red-dark text-white font-bold rounded-lg shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99] border-transparent"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="size-5 shrink-0 animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="size-5 shrink-0" />
                        <span>Enviar mensagem</span>
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
