import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Printer, Stamp, Shirt, Palette, Box, Scissors } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Litografía",
    description: "Impresión offset de alta calidad para todos tus materiales promocionales y corporativos.",
  },
  {
    icon: Printer,
    title: "Avisos Publicitarios",
    description: "Diseño y fabricación de avisos luminosos, vallas, letreros y señalética personalizada.",
  },
  {
    icon: Stamp,
    title: "Sellos",
    description: "Sellos personalizados automáticos, de madera y digitales para tu negocio.",
  },
  {
    icon: Shirt,
    title: "Sublimación de Prendas",
    description: "Estampado de alta durabilidad en camisetas, gorras, termos y todo tipo de textiles.",
  },
  {
    icon: Scissors,
    title: "Bordados",
    description: "Bordado computarizado de logos y diseños en prendas, uniformes y accesorios.",
  },
  {
    icon: Box,
    title: "Impresión 3D y Plotter",
    description: "Corte de precisión en vinil, prototipado 3D y producción de piezas personalizadas.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="border-t border-border bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">
            {"Servicios que "}
            <span className="text-primary">impulsan tu marca</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Ofrecemos soluciones integrales en publicidad con tecnología de última generación y un equipo altamente
            capacitado.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
