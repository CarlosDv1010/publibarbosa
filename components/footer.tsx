"use client"

import Link from "next/link"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-primary-foreground">PB</span>
              </div>
              <span className="text-xl font-bold">Publibarbosa</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Tu aliado en soluciones publicitarias integrales con más de 10 años de experiencia.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("litografia")}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Litografía
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("avisos")}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Avisos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sublimacion")}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Sublimación
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("bordados")}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Bordados
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("portafolio")}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Portafolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Publibarbosa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
