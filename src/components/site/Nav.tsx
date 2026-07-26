import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/petops-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/tech", label: "Conheça o sistema", accent: "hover:text-tech-cyan" },
  { to: "/planos", label: "Planos", accent: "hover:text-tech-cyan" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 h-16 z-50 border-b border-white/10 bg-bg-base/70 backdrop-blur-xl">
      <div className="h-full px-6 lg:px-10 flex items-center justify-between max-w-[1440px] mx-auto">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src={logo}
              alt="PetOps"
              className="size-9 object-contain opacity-95 group-hover:opacity-100 transition"
            />
            <span className="font-semibold tracking-[0.22em] text-titanium text-sm">
              PET<span className="text-tech-cyan">OPS</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-7 font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`transition-colors hover:text-white ${"accent" in l ? l.accent : ""}`}
                activeProps={{ className: "text-white" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://petops.organizeeconecta.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block font-mono text-[11px] uppercase tracking-[0.18em] px-4 py-2 border border-white/15 text-white/80 rounded-sm hover:text-white hover:border-white/40 transition-all"
          >
            Login
          </a>
          <Link
            to="/contato"
            className="hidden sm:inline-block font-mono text-[11px] uppercase tracking-[0.18em] px-4 py-2 bg-white text-bg-base rounded-sm hover:bg-white/90 transition-all font-medium"
          >
            Agendar Demo
          </Link>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden shrink-0 grid place-items-center size-10 -mr-2 text-white/80 hover:text-white"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-bg-base/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 font-mono text-[12px] uppercase tracking-[0.18em] text-white/60 hover:text-white transition-colors"
                activeProps={{ className: "text-white" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-3">
              <a
                href="https://petops.organizeeconecta.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center font-mono text-[11px] uppercase tracking-[0.18em] px-4 py-3 border border-white/15 text-white/80 rounded-sm"
              >
                Login
              </a>
              <Link
                to="/contato"
                onClick={() => setOpen(false)}
                className="flex-1 text-center font-mono text-[11px] uppercase tracking-[0.18em] px-4 py-3 bg-white text-bg-base rounded-sm font-medium"
              >
                Agendar Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

