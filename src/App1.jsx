import { useEffect, useState } from "react";

// Layout visual inicial da Ma.In (Manutenzione Industriale - S.r.l.)
// Conteúdo 100% em italiano conforme solicitado.
// Este arquivo pode substituir temporariamente seu src/App.jsx para visualização rápida.
// Depois, podemos modularizar em componentes.

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setMenuOpen(false);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#chi-siamo", label: "Chi Siamo" },
    { href: "#servizi", label: "Servizi" },
    { href: "#progetti", label: "Progetti" },
    { href: "#contatti", label: "Contatti" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-red-700/60 selection:text-white">
      {/* ====== Estilos adicionais para keyframes e utilitários ====== */}
      <style>{`
        @keyframes floatX {
          0% { transform: translateX(-2%); }
          50% { transform: translateX(2%); }
          100% { transform: translateX(-2%); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 0px rgba(239,68,68,0.0); }
          50% { box-shadow: 0 0 34px rgba(239,68,68,0.25); }
        }
        .btn-primary {
          background: linear-gradient(135deg, #7f1d1d 0%, #ef4444 100%);
        }
        .btn-primary:hover { filter: brightness(1.05); }
        .glass {
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .metalic-text {
          background: linear-gradient(90deg, #cbd5e1 0%, #ffffff 20%, #9ca3af 50%, #f3f4f6 80%, #cbd5e1 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .grid-stripes {
          background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 24px 24px, 24px 24px;
          mask-image: radial-gradient(ellipse at center, black, transparent 65%);
          animation: floatX 14s ease-in-out infinite;
        }
        .card-hover:hover { transform: translateY(-4px); }
      `}</style>

      {/* ====== Navbar ====== */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/logo.jpg" // coloque o logo real em /public
              alt="Logo Ma.In"
              className="h-9 w-9 rounded bg-neutral-800 object-contain p-1 ring-1 ring-white/10 group-hover:ring-red-500/40 transition"
            />
            <div>
              <p className="text-sm uppercase tracking-widest text-neutral-300">Manutenzione Industriale - S.r.l.</p>
              <p className="-mt-0.5 text-lg font-semibold text-white">Ma.In</p>
            </div>
          </a>

          <nav className="hidden gap-6 md:flex">
            {navItems.map((i) => (
              <a key={i.href} href={i.href} className="text-sm text-neutral-300 hover:text-white transition-colors">
                {i.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 hover:border-white/20"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Apri menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-white/5 bg-neutral-950/95">
            <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
              <div className="flex flex-col gap-3">
                {navItems.map((i) => (
                  <a
                    key={i.href}
                    href={i.href}
                    className="text-sm text-neutral-300 hover:text-white py-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    {i.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ====== Hero ====== */}
      <section id="home" className="relative isolate overflow-hidden pt-28">
        {/* fundo com textura de grades e brilho sutil */}
        <div className="pointer-events-none absolute inset-0 grid-stripes opacity-60" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-red-900/20 via-transparent to-neutral-950" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="metalic-text text-4xl font-extrabold leading-tight sm:text-6xl">
                Tecnologia e precisione in ogni dettaglio industriale
              </h1>
              <p className="mt-5 max-w-xl text-neutral-300">
                Soluzioni di manutenzione e metalmeccanica ad alte prestazioni per impianti industriali.
                Affidabilità, sicurezza e tempi certi, con un team altamente qualificato.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#servizi" className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white transition will-change-transform animate-[glowPulse_2.8s_ease-in-out_infinite]">
                  Scopri i Servizi
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 4.5v15m7.5-7.5h-15"/></svg>
                </a>
                <a href="#progetti" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition">
                  Vedi i Progetti
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400"></span>
                  <span className="text-xs">Operatività H24 su richiesta</span>
                </div>
                <div className="text-xs">ISO-ready • Procedure di sicurezza avanzate</div>
              </div>
            </div>

            <div className="relative">
              <div className="glass relative rounded-3xl p-2">
                <img
                  src="/ma.in.png" // substitua por uma imagem hero real de maquinário
                  alt="Impianti industriali moderni"
                  className="h-[340px] w-full rounded-2xl object-cover object-center sm:h-[420px]"
                />
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
              </div>
              <div className="absolute -bottom-6 left-3 right-3 grid grid-cols-3 gap-3">
                {["Manutenzione", "Carpenteria", "Automazione"].map((t) => (
                  <div key={t} className="glass card-hover rounded-2xl px-3 py-2 text-center text-xs text-neutral-300 transition">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== Chi Siamo ====== */}
      <section id="chi-siamo" className="relative border-t border-white/5 bg-neutral-950">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-neutral-900/20 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Chi Siamo</h2>
              <p className="mt-4 text-neutral-300">
                Ma.In è un'azienda italiana specializzata in manutenzione industriale e metalmeccanica.
                Dal 2001 supportiamo impianti produttivi con interventi programmati e straordinari, costruzioni 
                di carpenteria, piping e soluzioni su misura. La nostra visione: efficienza, sostenibilità e sicurezza.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                {[
                  { k: "Anni di esperienza", v: "24+" },
                  { k: "Dipendenti", v: "35" },
                  { k: "Progetti/anno", v: "120+" },
                ].map((i) => (
                  <div key={i.k} className="glass rounded-2xl p-5">
                    <div className="text-2xl font-semibold text-white">{i.v}</div>
                    <div className="mt-1 text-xs text-neutral-400">{i.k}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <Feature
                title="Missione"
                text="Garantire continuità operativa ai clienti attraverso manutenzioni precise, tempestive e sicure."
              />
              <Feature
                title="Visione"
                text="Tecnologia e competenze per impianti più affidabili, sostenibili e performanti."
              />
              <Feature
                title="Valori"
                text="Qualità, sicurezza, responsabilità, formazione continua, collaborazione."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====== Servizi ====== */}
      <section id="servizi" className="relative border-t border-white/5 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Servizi</h2>
            <a href="#contatti" className="hidden rounded-xl border border-white/15 px-4 py-2 text-sm text-neutral-200 hover:bg-white/10 md:inline-flex">Richiedi preventivo</a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>

          <div className="mt-10 grid gap-6 rounded-3xl border border-white/10 p-6 sm:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold">Tecnologie</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-neutral-300">
                <li>Taglio e saldatura MIG/TIG, acciai e leghe</li>
                <li>Carpenteria medio-pesante, montaggi in quota</li>
                <li>Macchine CNC, laser, piegatura, tornitura</li>
                <li>Controlli non distruttivi (NDT) su richiesta</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Differenziali</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-neutral-300">
                <li>Squadre certificate, procedure HSE e permessi di lavoro</li>
                <li>Pronto intervento e pianificazione flessibile</li>
                <li>Tracciabilità e reportistica digitale</li>
                <li>Fornitura, prefabricazione e montaggio end-to-end</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ====== Progetti ====== */}
      <section id="progetti" className="relative border-t border-white/5 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Progetti</h2>
            <a href="#contatti" className="hidden rounded-xl border border-white/15 px-4 py-2 text-sm text-neutral-200 hover:bg-white/10 md:inline-flex">Parla con noi</a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ====== Contatti ====== */}
      <section id="contatti" className="relative border-t border-white/5 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contatti</h2>
              <div className="mt-6 space-y-3 text-neutral-300">
                <p><strong>Indirizzo:</strong> Via Pantanelle, km 0/200, 00048 Nettuno RM</p>
                <p><strong>Telefono:</strong> <a href="tel:+39069819415" className="hover:underline">06 981 9415</a></p>
                <p><strong>Email:</strong> <a href="mailto:main.srl@pec.main-cmc.it" className="hover:underline">main.srl@pec.main-cmc.it</a></p>
                <p><strong>Plus Code:</strong> GJPP+4P Nettuno, Roma</p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold">Scrivici</h3>
                <form className="mt-3 grid gap-3">
                  <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-neutral-400 focus:border-red-500/50" placeholder="Nome e Cognome" />
                  <input type="email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-neutral-400 focus:border-red-500/50" placeholder="Email" />
                  <textarea rows={4} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-neutral-400 focus:border-red-500/50" placeholder="Messaggio" />
                  <button type="button" className="btn-primary rounded-xl px-5 py-3 text-sm font-medium text-white">Invia richiesta</button>
                </form>
              </div>
            </div>

            <div className="glass card-hover h-[420px] overflow-hidden rounded-3xl">
  <iframe
    title="Mappa Ma.In"
    width="100%"
    height="100%"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed?pb=!4v1728291000000!6m8!1m7!1srHunZFejEIYGujupt66JOw!2m2!1d41.5353065!2d12.6367095!3f130.24!4f-2.49!5f0.7820865974627469"
    allowfullscreen
  ></iframe>
</div>

          </div>
        </div>
      </section>

      {/* ====== Footer ====== */}
      <footer className="border-t border-white/5 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-lg font-semibold text-white">Ma.In</p>
              <p className="mt-2 text-sm text-neutral-300">Manutenzione Industriale - S.r.l.</p>
              <p className="mt-2 text-xs text-neutral-400">Tecnologia e precisione per la metalmeccanica italiana.</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Navigazione</p>
              <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                {navItems.map((i) => (
                  <li key={i.href}><a href={i.href} className="hover:text-white">{i.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Dati societari</p>
              <ul className="mt-3 space-y-1 text-xs text-neutral-400">
                <li>Partita IVA: 01593111006</li>
                <li>Codice Fiscale: 06670620589</li>
                <li>REA: 537751</li>
                <li>Fatturato: € 3.582.120,00 (2024)</li>
                <li>Dipendenti: 35 (2025)</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Contatti</p>
              <ul className="mt-3 space-y-1 text-sm text-neutral-300">
                <li>📍 Via Pantanelle, km 0/200, 00048 Nettuno RM</li>
                <li>📞 06 981 9415</li>
                <li>📧 main.srl@pec.main-cmc.it</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-neutral-500 sm:flex-row">
            <p>© {new Date().getFullYear()} Ma.In — Tutti i diritti riservati.</p>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-neutral-300">Privacy</a>
              <span aria-hidden>•</span>
              <a href="#" className="hover:text-neutral-300">Cookie</a>
              <span aria-hidden>•</span>
              <a href="#" className="hover:text-neutral-300">Note legali</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Feature({ title, text }) {
  return (
    <div className="glass rounded-3xl p-6 card-hover transition will-change-transform">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-300">{text}</p>
    </div>
  );
}

function ServiceCard({ title, text, points, icon }) {
  return (
    <div className="group glass card-hover h-full rounded-3xl p-5 transition">
      <div className="flex items-center gap-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-2 text-red-400">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-neutral-300">{text}</p>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-neutral-400">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <div className="mt-4 h-1 w-0 bg-gradient-to-r from-red-500 to-red-300 transition-all duration-300 group-hover:w-full" />
    </div>
  );
}

function ProjectCard({ title, text, image }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      <img src={image} alt={title} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-900/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="mt-1 text-xs text-neutral-300">{text}</p>
      </div>
    </div>
  );
}

const services = [
  {
    title: "Manutenzione impianti",
    text: "Programmata e straordinaria per linee produttive e utilities.",
    points: ["Meccanica, piping, valvole", "Revamping e adeguamenti", "Fermi impianto pianificati"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M3 7.5h18M3 12h18M3 16.5h18"/></svg>
    ),
  },
  {
    title: "Carpenteria metallica",
    text: "Costruzioni e montaggi in acciaio al carbonio e inox.",
    points: ["Scale, passerelle, strutture", "Saldature MIG/TIG qualificate", "Trattamenti e verniciature"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 3l8.66 5v8L12 21 3.34 16V8z"/></svg>
    ),
  },
  {
    title: "Automazione e CNC",
    text: "Supporto a macchine CNC e sistemi di automazione.",
    points: ["Manutenzione e calibrazione", "Componenti e retrofitting", "Diagnostica e ottimizzazione"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4.5 6h15v12h-15zM9 9h6v6H9z"/></svg>
    ),
  },
  {
    title: "Piping e saldatura",
    text: "Prefabbricazione, montaggio e collaudi.",
    points: ["Isometrie e tracciabilità", "Materiali certificati", "NDT su richiesta"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M5 8h14v3H5zM5 13h14v3H5z"/></svg>
    ),
  },
  {
    title: "Pronto intervento",
    text: "Task force per fermo imprevisto e sicurezza.",
    points: ["Reperibilità su accordo", "Mezzi e attrezzature", "Procedure HSE"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 4.5l7.5 4.5V15L12 19.5 4.5 15V9z"/></svg>
    ),
  },
  {
    title: "Qualità e sicurezza",
    text: "Controllo documentale e formazione continua.",
    points: ["Piani di sicurezza", "Procedure e permessi", "Report digitali"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 3l7 4v5c0 4.418-3.582 8-8 8s-8-3.582-8-8V7l9-4z"/></svg>
    ),
  },
];

const projects = [
  {
    title: "Revamping linea imbottigliamento",
    text: "Adeguamento meccanico e messa in sicurezza con fermo ridotto.",
    image: "/engrenagem.jpg",
  },
  {
    title: "ingranaggi",
    text: "Carpenteria in acciaio zincato per area di processo.",
    image: "/engrenagem2.jpg",
  },
  {
    title: "lavorazione di parti in acciaio inossidabile",
    text: "Prefabbricazione e montaggio con tracciabilità completa.",
    image: "/engrenagem3.jpg",
  },
];
