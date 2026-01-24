"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/constants"


export function Header() {

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur">
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/header/logo.jpeg"
            alt="Publibarbosa logo"
            width={90}
            height={90}
            className="rounded-full"
            priority
          />

          <div className="leading-tight">
            <span className="block text-xl font-extrabold tracking-wide">
              Publibarbosa
            </span>
            <span className="block text-xs text-muted-foreground tracking-wider">
              Publicidad · Avisos · Litografía
            </span>
          </div>
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#servicios" className="nav-link">
            Servicios
          </Link>
          <Link href="#portafolio" className="nav-link">
            Portafolio
          </Link>
          <Link href="#contacto" className="nav-link">
            Contacto
          </Link>

          {/* WHATSAPP CTA */}
          <Button asChild className="whatsapp-btn brand-glow">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaWhatsapp className="h-5 w-5" />
              Cotizar
            </a>
          </Button>
        </nav>

        {/* MOBILE */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </div>
    </header>
  )
}


