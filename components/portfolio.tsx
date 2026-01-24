"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

/* =========================
   Tipos
========================= */

type SheetRow = {
  categoria: string
  imagen: string
  texto: string
  orden: number
  mostrar: string
}

type PortfolioCategory = {
  id: string
  title: string
  description: string
  images: {
    src: string
    alt: string
  }[]
}

/* =========================
   Fetch de Google Sheets
========================= */

function normalizeImageUrl(url: string): string {
  if (!url) return ""

  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/)

  if (match?.[1]) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`
  }

  return url
}

async function fetchPortfolioFromSheet(): Promise<PortfolioCategory[]> {
  const res = await fetch(
    "https://docs.google.com/spreadsheets/d/1wq39iARwqcpjYBCKDALYw9q6UVZkvHm3MZ8U_8gT8wI/gviz/tq?tqx=out:json"
  )

  const text = await res.text()
  const json = JSON.parse(text.substring(47).slice(0, -2))
  const rows = json.table.rows

  const data: SheetRow[] = rows.map((r: any) => ({
    categoria: r.c[0]?.v,
    imagen: r.c[1]?.v,
    texto: r.c[2]?.v,
    orden: r.c[3]?.v ?? 0,
    mostrar: r.c[4]?.v,
  }))

  const categoriesMap: Record<string, PortfolioCategory> = {}

  data
    .filter(
      (r) =>
        r.mostrar === "SI" &&
        r.categoria &&
        r.imagen &&
        r.imagen.startsWith("http")
    )
    .sort((a, b) => a.orden - b.orden)
    .forEach((row) => {
      if (!categoriesMap[row.categoria]) {
        categoriesMap[row.categoria] = {
          id: row.categoria,
          title: row.categoria.replace(/^\w/, (c) => c.toUpperCase()),
          description: "",
          images: [],
        }
      }

      categoriesMap[row.categoria].images.push({
        src: normalizeImageUrl(row.imagen),
        alt: row.texto || "",
      })
    })

  return Object.values(categoriesMap)
}


/* =========================
   Category Slider
========================= */

function CategorySlider({
  category,
  isVisible,
}: {
  category: PortfolioCategory
  isVisible: boolean
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (category.images.length === 0) return null

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mb-8 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-2">
          {category.title}
        </h3>
        {category.description && (
          <p className="text-muted-foreground">
            {category.description}
          </p>
        )}
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
            />
          </div>
        </Card>

        <Button
          size="icon"
          variant="outline"
          onClick={() =>
            setCurrentIndex(
              (i) => (i - 1 + category.images.length) % category.images.length
            )
          }
          className="absolute left-4 top-1/2 -translate-y-1/2"
        >
          <ChevronLeft />
        </Button>

        <Button
          size="icon"
          variant="outline"
          onClick={() =>
            setCurrentIndex((i) => (i + 1) % category.images.length)
          }
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
              i === currentIndex
                ? "ring-2 ring-primary"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="25vw"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

/* =========================
   Portfolio
========================= */

export function Portfolio() {
  const [categories, setCategories] = useState<PortfolioCategory[]>([])
  const [visible, setVisible] = useState<Set<string>>(new Set())
  const refs = useRef<Record<string, HTMLDivElement | null>>({})

  useEffect(() => {
    fetchPortfolioFromSheet().then(setCategories)
  }, [])

  useEffect(() => {
    if (!categories.length) return

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
  }, [categories])

  return (
    <section id="portafolio" className="py-20">
      <div className="max-w-6xl mx-auto space-y-24 px-4">
        {categories.map((c) => (
          <div
            key={c.id}
            id={c.id}
            ref={(el) => {
              refs.current[c.id] = el
            }}
          >
            <CategorySlider
              category={c}
              isVisible={visible.has(c.id)}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
