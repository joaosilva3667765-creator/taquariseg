"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5514997230206"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 hover:bg-[#1EBE57] transition-all duration-200 group focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#25D366]/50"
    >
      {/* Subtle pulse animation element behind the button */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10 group-hover:opacity-0 transition-opacity duration-200" />
      
      {/* Lucide MessageCircle icon */}
      <MessageCircle className="w-8 h-8 shrink-0 animate-none group-hover:rotate-12 transition-transform duration-200" />
    </a>
  )
}
