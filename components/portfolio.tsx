"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const portfolioCategories = [
  {
    id: "sublimacion",
    title: "Sublimación",
    description: "Estampados vibrantes y duraderos en prendas y productos",
    images: [
      { src: "/portfolio/sublimacion/imagen-1.jpeg", alt: "Camiseta sublimada con diseño personalizado" },
      { src: "/portfolio/sublimacion/imagen-2.jpeg", alt: "Tazas personalizadas con sublimación" },
      { src: "/portfolio/sublimacion/imagen-3.jpeg", alt: "Gorras con diseños sublimados" },
      { src: "/portfolio/sublimacion/imagen-4.jpeg", alt: "Productos promocionales sublimados" },
    ],
  },
  {
    id: "avisos",
    title: "Avisos Publicitarios",
    description: "Señalización impactante para tu negocio",
    images: [
      { src: "/portfolio/avisos/imagen-1.jpeg", alt: "Aviso luminoso para fachada" },
      { src: "/portfolio/avisos/imagen-2.jpeg", alt: "Letrero corporativo de gran formato" },
      { src: "/portfolio/avisos/imagen-3.jpeg", alt: "Valla publicitaria exterior" },
      { src: "/portfolio/avisos/imagen-4.jpeg", alt: "Rótulo para tienda comercial" },
    ],
  },
  {
    id: "bordados",
    title: "Bordados",
    description: "Detalles de calidad premium en tus prendas",
    images: [
      { src: "/portfolio/bordados/imagen-1.jpeg", alt: "Logo bordado en uniformes corporativos" },
      { src: "/portfolio/bordados/imagen-2.jpeg", alt: "Bordados en gorras personalizadas" },
      { src: "/portfolio/bordados/imagen-3.jpeg", alt: "Chaquetas con bordado empresarial" },
      { src: "/portfolio/bordados/imagen-4.jpeg", alt: "Bordados decorativos en textiles" },
    ],
  },
  {
    id: "impresion3d",
    title: "Impresión 3D",
    description: "Prototipos y piezas personalizadas en 3D",
    images: [
      { src: "/portfolio/impresion3d/imagen-1.jpeg", alt: "Prototipo funcional en 3D" },
      { src: "/portfolio/impresion3d/imagen-2.jpeg", alt: "Figura personalizada impresa" },
      { src: "/portfolio/impresion3d/imagen-3.jpeg", alt: "Pieza técnica de repuesto" },
      { src: "/portfolio/impresion3d/imagen-4.jpeg", alt: "Modelo arquitectónico en miniatura" },
    ],
  },
  {
    id: "plotter",
    title: "Plotter de Corte",
    description: "Cortes precisos en vinil y otros materiales",
    images: [
      { src: "/portfolio/plotter/imagen-1.jpeg", alt: "Vinil decorativo para vehículos" },
      { src: "/portfolio/plotter/imagen-2.jpeg", alt: "Stickers personalizados cortados" },
      { src: "/portfolio/plotter/imagen-3.jpeg", alt: "Rotulación de vitrinas comerciales" },
      { src: "/portfolio/plotter/imagen-4.jpeg", alt: "Diseños en vinil para paredes" },
    ],
  },
  {
    id: "sellos",
    title: "Sellos",
    description: "Sellos profesionales personalizados",
    images: [
      { src: "/portfolio/sellos/imagen-1.jpeg", alt: "Sello automático corporativo" },
      { src: "/portfolio/sellos/imagen-2.jpeg", alt: "Sello manual personalizado" },
      { src: "/portfolio/sellos/imagen-3.jpeg", alt: "Sellos para fechador" },
      { src: "/portfolio/sellos/imagen-4.jpeg", alt: "Juego de sellos empresariales" },
    ],
  },
]

function CategorySlider({
  category,
  isVisible,
}: {
  category: (typeof portfolioCategories)[0]
  isVisible: boolean
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mb-8 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-2">{category.title}</h3>
        <p className="text-muted-foreground">{category.description}</p>
      </div>

      <div className="relative group">
        <Card className="overflow-hidden">
          <div className="relative aspect-[16/9] bg-muted">
            <Image
              src={category.images[currentIndex].src}
              alt={category.images[currentIndex].alt}
              fill
              className="object-contain bg-muted"
              sizes="100vw"
              priority={false}
            />
          </div>
        </Card>

        <Button
          size="icon"
          variant="outline"
          onClick={() =>
            setCurrentIndex((i) => (i - 1 + category.images.length) % category.images.length)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2"
        >
          <ChevronLeft />
        </Button>

        <Button
          size="icon"
          variant="outline"
          onClick={() => setCurrentIndex((i) => (i + 1) % category.images.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2"
        >
          <ChevronRight />
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-2 mt-4">
        {category.images.map((image, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`relative aspect-video overflow-hidden rounded ${
              i === currentIndex ? "ring-2 ring-primary" : "opacity-70"
            }`}
          >
            <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="25vw" />
          </button>
        ))}
      </div>
    </div>
  )
}

export function Portfolio() {
  const [visible, setVisible] = useState<Set<string>>(new Set())
  const refs = useRef<Record<string, HTMLDivElement | null>>({})

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          setVisible((v) => {
            const s = new Set(v)
            e.isIntersecting ? s.add(e.target.id) : s.delete(e.target.id)
            return s
          }),
        ),
      { threshold: 0.2 },
    )

    Object.values(refs.current).forEach((el) => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="portafolio" className="py-20">
      <div className="max-w-6xl mx-auto space-y-24 px-4">
        {portfolioCategories.map((c) => (
          <div key={c.id} id={c.id} ref={(el) => { refs.current[c.id] = el}}>
            <CategorySlider category={c} isVisible={visible.has(c.id)} />
          </div>
        ))}
      </div>
    </section>
  )
}
