import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/petops-logo.png";

const links = [
  { to: "/", label: "Início" },
  { to: "/tech", label: "Sistema", accent: "hover:text-tech-cyan" },
  { to: "/planos", label: "Planos", accent: "hover:text-tech-cyan" },
  { to: "/sobre", label: "Sobre" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="Navegação principal" className="fixed top-0 inset-x-0 h-16 z-50 border-b border-white/10 bg-bg-base/80 backdrop-blur-xl">
      <div className="h-full px-5 sm:px-6 lg:px-10 flex items-center justify-between max-w-[1440px] mx-auto">
        <div className="flex items-center gap-10">
          <Link to="/" aria-label="PetOps, página inicial" className="flex items-center gap-2.5 group">
            <img
              src={logo}
              alt=""
              className="size-9 object-contain opacity-95 group-hover:opacity-100 transition"
            />
            <span className="font-semibold tracking-[0.22em] text-titanium text-sm">
              PET<span className="text-tech-cyan">OPS</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-7 font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors hover:text-white ${"accent" in link ? link.accent : ""}`}
                activeProps={{ className: "text-white" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://petops.organizeeconecta.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-block font-mono text-[11px] uppercase tracking-[0.18em] px-4 py-2 border border-white/15 text-white/75 rounded-md hover:text-white hover:border-white/40 transition-all"
          >
            Entrar
          </a>
          <Link
            to="/contato"
            className="hidden sm:inline-flex items-center justify-center font-mono text-[11px] uppercase tracking-[0.18em] px-4 py-2.5 bg-tech-cyan text-bg-base rounded-md hover:opacity-90 transition-all font-semibold shadow-[0_10px_28px_-16px_var(--color-tech-cyan)]"
          >
            Ver demonstração
          </Link>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((value) => !value)}
            className="md:hidden shrink-0 grid place-items-center size-10 -mr-2 text-white/80 hover:text-white"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="menu-mobile" className="md:hidden border-t border-white/10 bg-bg-base backdrop-blur-xl shadow-2xl">
          <div className="px-5 sm:px-6 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="py-3 font-mono text-[12px] uppercase tracking-[0.18em] text-white/65 hover:text-white transition-colors"
                activeProps={{ className: "text-white" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            ))}

            <div className="grid grid-cols-2 gap-3 pt-4 mt-2 border-t border-white/10">
              <a
                href="https://petops.organizeeconecta.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center font-mono text-[11px] uppercase tracking-[0.18em] px-4 py-3 border border-white/15 text-white/80 rounded-md"
              >
                Entrar
              </a>
              <Link
                to="/contato"
                onClick={() => setOpen(false)}
                className="text-center font-mono text-[11px] uppercase tracking-[0.18em] px-4 py-3 bg-tech-cyan text-bg-base rounded-md font-semibold"
              >
                Ver demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
