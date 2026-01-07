import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Header() {
  const whatsappNumber = "573001234567" // Replace with actual WhatsApp Business number
  const whatsappMessage = "Hola, me gustaría solicitar una cotización"

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-xl font-bold text-primary-foreground">PB</span>
          </div>
          <span className="text-xl font-bold">Publibarbosa</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#servicios" className="text-sm font-medium transition-colors hover:text-primary">
            Servicios
          </Link>
          <Link href="#portafolio" className="text-sm font-medium transition-colors hover:text-primary">
            Portafolio
          </Link>
          <Link href="#contacto" className="text-sm font-medium transition-colors hover:text-primary">
            Contacto
          </Link>
          <Button asChild>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Cotizar ahora
            </a>
          </Button>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </div>
    </header>
  )
}
