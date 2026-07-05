import { z } from "zod"

export const contatoSchema = z.object({
  nome: z.string().min(3, "Digite seu nome completo"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().refine(
    (val) => val.replace(/\D/g, "").length >= 10,
    "Telefone inválido"
  ),
  assunto: z.string().min(1, "Selecione um assunto"),
  mensagem: z.string().optional(),
  consentimento: z.literal(true, {
    message: "É necessário autorizar o contato",
  }),
})

export type ContatoInput = z.infer<typeof contatoSchema>
