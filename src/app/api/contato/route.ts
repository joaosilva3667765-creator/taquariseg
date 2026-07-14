import { NextResponse } from "next/server"
import { Resend } from "resend"
import { contatoSchema } from "@/lib/validations"

const resend = new Resend(process.env.RESEND_API_KEY ?? "")

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = contatoSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: "Dados inválidos" }, { status: 400 })
    }
    const { nome, email, telefone, assunto, mensagem } = parsed.data
    const { data, error } = await resend.emails.send({
      from: "Taquariseg Site <noreply@taquariseg.com.br>",
      to: ["contato@taquariseg.com.br"],
      replyTo: email,
      subject: `Nova mensagem do site: ${assunto}`,
      html: `
        <h2>Nova mensagem do site Taquariseg</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Assunto:</strong> ${assunto}</p>
        <p><strong>Mensagem:</strong> ${mensagem || "Não informada"}</p>
      `,
    })
    if (error) {
      console.error("Erro Resend:", error)
      return NextResponse.json({ error: "Erro ao enviar" }, { status: 500 })
    }
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Erro interno:", error)
    return NextResponse.json({ error: "Erro interno" }, { status: 500 })
  }
}
