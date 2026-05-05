import { ImageIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { CareProduct } from "@/data/care-products";

export function ProductCard({ product }: { product: CareProduct }) {
  return (
    <article className="group relative rounded-xl border border-white/10 bg-bg-surface overflow-hidden hover:border-care-blue/40 transition-all flex flex-col">
      {/* Imagem / placeholder */}
      <div
        className={`relative aspect-square w-full border-b border-white/10 flex items-center justify-center overflow-hidden ${
          product.image
            ? "bg-white"
            : "bg-gradient-to-br from-care-blue/20 via-bg-elevated to-tech-cyan/10"
        }`}
      >
        {product.image
          ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain p-6"
              loading="lazy"
            />
          )
          : (
            <div className="flex flex-col items-center gap-3 text-white/40">
              <ImageIcon className="size-8" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
                Imagem em breve
              </span>
            </div>
          )}
        <div className="absolute top-3 left-3 font-mono text-[10px] tracking-widest text-tech-cyan/80 bg-bg-base/60 backdrop-blur px-2 py-1 rounded-sm">
          {product.code}
        </div>
        <div className="absolute top-3 right-3 font-mono text-[10px] tracking-widest text-white/70 bg-bg-base/60 backdrop-blur px-2 py-1 rounded-sm">
          {product.size}
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-care-blue mb-2">
            {product.category}
          </div>
          <h3 className="text-xl font-medium text-white leading-tight">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-tech-cyan/90 italic">
            {product.headline}
          </p>
        </div>

        <p className="text-sm text-white/60 leading-relaxed">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {product.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm border border-white/10 text-white/70"
            >
              {t}
            </span>
          ))}
        </div>

        <Accordion type="single" collapsible className="mt-auto">
          <AccordionItem value="uso" className="border-white/10">
            <AccordionTrigger className="text-xs uppercase tracking-widest font-mono text-white/70 hover:text-white">
              Modo de uso
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-1.5 text-sm text-white/60 list-disc pl-4">
                {product.usage.map((u) => <li key={u}>{u}</li>)}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="comp" className="border-white/10">
            <AccordionTrigger className="text-xs uppercase tracking-widest font-mono text-white/70 hover:text-white">
              Composição
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-white/60 leading-relaxed">
                {product.composition}
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </article>
  );
}
