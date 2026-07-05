"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const navLinks = [
  { name: "Sobre", href: "#sobre" },
  { name: "Seguros", href: "#seguros" },
  { name: "Como funciona", href: "#como-funciona" },
  { name: "Perguntas", href: "#perguntas" },
  { name: "Contato", href: "#contato" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Track page scroll to toggle shadow & bg opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.style.overflow = ""
      document.body.classList.remove("overflow-hidden")
    }
    return () => {
      document.body.style.overflow = ""
      document.body.classList.remove("overflow-hidden")
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-slate-200/80 py-2.5"
            : "bg-white/90 backdrop-blur-sm border-slate-200/50 py-3.5"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Left: Logo + Text */}
          <div className="flex-1 flex justify-start">
            <Link href="#" className="flex items-center gap-3.5 group focus-visible:outline-none">
              <div className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Logo Taquariseg"
                  fill
                  sizes="60px"
                  priority
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-black tracking-tight text-brand-navy transition-colors duration-200 group-hover:text-brand-red">
                Taquariseg
              </span>
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-brand-gray-text hover:text-brand-red transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-brand-red after:transition-all after:duration-250"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: Empty placeholder for desktop layout balancing */}
          <div className="hidden md:flex flex-1 justify-end" />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-brand-navy hover:text-brand-red transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red/20"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Overlay and Menu) */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-[300px] h-full bg-white border-l border-slate-200 p-8 flex flex-col gap-6 shadow-2xl transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header inside drawer to hold logo and close button */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg">
              <Image
                src="/logo.png"
                alt="Logo Taquariseg"
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>
            <span className="text-lg font-black tracking-tight text-brand-navy">
              Taquariseg
            </span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-brand-navy hover:text-brand-red transition-colors rounded-md focus:outline-none"
            aria-label="Fechar menu"
          >
            <X className="size-6" />
          </button>
        </div>

        <div className="flex flex-col gap-6">
          <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Navegação</span>
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-brand-navy hover:text-brand-red transition-colors py-2 border-b border-slate-100"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
