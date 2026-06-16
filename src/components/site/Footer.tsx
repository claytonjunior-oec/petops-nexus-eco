import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-bg-base mt-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="size-2 rounded-full bg-tech-neon shadow-[0_0_10px_var(--color-tech-neon)] animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
              PETOPS · TECH + CARE
            </span>
          </div>
          <h3 className="text-2xl font-medium text-white tracking-tight max-w-md leading-tight">
            Infraestrutura de crescimento para negócios pet.
          </h3>
          <p className="mt-4 text-white/40 text-sm max-w-md leading-relaxed">
            Tecnologia, automação e cuidado em um único ecossistema premium.
          </p>
        </div>

        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-4">
            Plataforma
          </div>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li><Link to="/tech" className="hover:text-tech-cyan transition">PetOps Tech</Link></li>
            {/* <li><Link to="/care" className="hover:text-care-blue transition">PetOps Care</Link></li> */}
            <li><Link to="/ecossistema" className="hover:text-white transition">Ecossistema</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-4">
            Empresa
          </div>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li><Link to="/sobre" className="hover:text-white transition">Sobre</Link></li>
            <li><Link to="/contato" className="hover:text-white transition">Contato</Link></li>
            <li><Link to="/contato" className="hover:text-white transition">Agendar Demo</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] tracking-widest text-white/30 uppercase">
          <div>© {new Date().getFullYear()} PetOps · Todos os direitos reservados</div>
          <div>Tech + Care</div>
        </div>
      </div>
    </footer>
  );
}
