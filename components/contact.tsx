"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Contact() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation(0.3)
  const { elementRef: cardRef, isVisible: cardVisible } = useScrollAnimation(0.2)

  const whatsappNumber = "573001234567"
  const whatsappMessage = "Hola, me gustaría solicitar una cotización para mis productos publicitarios"

  return (
    <section id="contacto" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={`mx-auto mb-12 max-w-2xl text-center transform transition-all duration-700 ${
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">
            {"¿Listo para "}
            <span className="text-primary">impulsar tu marca?</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Contáctanos hoy mismo y recibe una cotización personalizada sin compromiso.
          </p>
        </div>

        <div
          ref={cardRef}
          className={`mx-auto grid max-w-5xl gap-6 lg:grid-cols-2 transform transition-all duration-700 ${
            cardVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Card className="lg:col-span-2">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Información de contacto</CardTitle>
              <CardDescription>Nuestro equipo está listo para atenderte y hacer realidad tus proyectos</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Teléfono</h3>
                  <p className="text-sm text-muted-foreground">+57 (300) 123-4567</p>
                  <p className="text-sm text-muted-foreground">+57 (1) 234-5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Email</h3>
                  <p className="text-sm text-muted-foreground">info@publibarbosa.com</p>
                  <p className="text-sm text-muted-foreground">ventas@publibarbosa.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Ubicación</h3>
                  <p className="text-sm text-muted-foreground">Calle 123 #45-67</p>
                  <p className="text-sm text-muted-foreground">Bogotá, Colombia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Horario</h3>
                  <p className="text-sm text-muted-foreground">Lun - Vie: 8:00 AM - 6:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sáb: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="lg:col-span-2 text-center">
            <Button size="lg" className="gap-2" asChild>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-4 w-4" />
                Solicitar cotización ahora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
