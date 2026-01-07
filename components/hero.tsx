"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Hero() {
  const { elementRef, isVisible } = useScrollAnimation(0.3)

  const whatsappNumber = "573001234567" // Replace with actual WhatsApp Business number
  const whatsappMessage = "Hola, me gustaría solicitar una cotización para mis productos publicitarios"

  const scrollToPortfolio = () => {
    document.getElementById("portafolio")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div
        ref={elementRef}
        className={`mx-auto max-w-4xl text-center transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          Soluciones de publicidad profesional
        </div>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
          {"Transforma tu marca con "}
          <span className="text-primary">publicidad de impacto</span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty">
          Especialistas en litografía, sublimación, bordados, impresión 3D y todo tipo de productos publicitarios. Más
          de 10 años haciendo realidad tus ideas.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="gap-2" asChild>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar cotización
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" onClick={scrollToPortfolio}>
            Ver nuestros trabajos
          </Button>
        </div>
      </div>
    </section>
  )
}
