import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Ma.In — Reconstrução completa (Opção 2) — JSX puro
 * Corrigido para ambiente .jsx (sem TypeScript).
 */

function Meta() {
  // Injeta metatags e JSON-LD no <head> (SPA) — sem tipos TS
  useEffect(() => {
    const title = "Ma.In — Manutenzione Industriale, Carpenteria e Automazione";
    document.title = title;

    const ensure = (selector, attrs) => {
      let el = document.querySelector(`meta[${selector}]`);
      if (!el) {
        el = document.createElement("meta");
        document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    };

    ensure("name='description'", { name: "description", content: "Soluzioni affidabili di manutenzione industriale, carpenteria e automazione: revamping, piping, saldature qualificate e HSE." });
    ensure("property='og:title'", { property: "og:title", content: title });
    ensure("property='og:description'", { property: "og:description", content: "Manutenzione impianti, carpenteria metallica, automazione e CNC." });
    ensure("property='og:type'", { property: "og:type", content: "website" });

    const ld = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Ma.In",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Via Pantanelle, km 0/200",
        addressLocality: "Nettuno",
        postalCode: "00048",
        addressRegion: "RM",
        addressCountry: "IT",
      },
      telephone: "+39 06 981 9415",
      email: "main.srl@pec.main-cmc.it",
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(ld);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return null;
}

function Header() {
  const [open, setOpen] = useState(false);
  const items = useMemo(
    () => [
      { href: "#servizi", label: "Servizi" },
      { href: "#progetti", label: "Progetti" },
      { href: "#perche", label: "Perché Ma.In" },
      { href: "#contatti", label: "Contatti" },
    ],
    []
  );

  useEffect(() => {
    const onResize = () => setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl h-16 px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Logo Ma.In" width={40} height={40} className="h-10 w-10 rounded" loading="eager" fetchpriority="high"/>
          <div className="leading-tight">
            <p className="text-xs text-slate-500">Manutenzione Industriale - S.r.l.</p>
            <strong className="text-slate-900">Ma.In</strong>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {items.map(i => (
            <a key={i.href} href={i.href} className="text-slate-700 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
              {i.label}
            </a>
          ))}
        </nav>
        <button
          aria-label="Apri menu"
          aria-expanded={open}
          className="md:hidden w-10 h-10 inline-flex items-center justify-center rounded-full border border-slate-300 text-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          onClick={() => setOpen(v => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-3 grid gap-2">
            {items.map(i => (
              <a key={i.href} href={i.href} onClick={() => setOpen(false)} className="py-2">{i.label}</a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-24 text-white">
      <img src="/soldador.jpg" alt="Operatore durante saldatura" className="absolute inset-0 h-full w-full object-cover" loading="eager" fetchpriority="high"/>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-900/30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-extrabold tracking-tight">Manutenzione industriale senza fermate inutili</h1>
          <p className="mt-4 text-lg text-slate-100">Carpenteria, automazione e piping con tempi certi, procedure HSE e report digitali.</p>
          <ul className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
            {['SLA chiari','Squadre qualificate','Ricambi certificati'].map((b,i)=> (
              <li key={i} className="rounded-full bg-white/15 px-4 py-2 text-white/95">{b}</li>
            ))}
          </ul>
          <div className="mt-8 flex gap-3">
            <a href="#contatti" className="rounded-full bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 font-semibold shadow">Richiedi preventivo</a>
            <a href="#progetti" className="rounded-full bg-white/90 text-indigo-800 hover:bg-white px-6 py-3 font-semibold shadow">Vedi progetti</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const data = [
    {title:"Manutenzione impianti", points:["Meccanica, piping, valvole","Revamping e adeguamenti","Fermi impianto pianificati"]},
    {title:"Carpenteria metallica", points:["Scale, passerelle, strutture","Saldature MIG/TIG qualificate","Trattamenti e verniciature"]},
    {title:"Automazione e CNC", points:["Manutenzione e calibrazione","Componenti e retrofitting","Diagnostica e ottimizzazione"]},
    {title:"Piping e saldatura", points:["Isometrie e tracciabilità","Materiali certificati","NDT su richiesta"]},
    {title:"Pronto intervento", points:["Reperibilità su accordo","Mezzi e attrezzature","Procedure HSE"]},
    {title:"Qualità e sicurezza", points:["Piani di sicurezza","Procedure e permessi","Report digitali"]},
  ];
  return (
    <section id="servizi" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Servizi</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((s,i)=> (
            <article key={i} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-indigo-800">{s.title}</h3>
              <ul className="mt-3 list-disc list-inside text-sm text-slate-700 space-y-1">
                {s.points.map((x,j)=>(<li key={j}>{x}</li>))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const list = [
    { title: "Revamping linea imbottigliamento", image: "/engrenagem.jpg" },
    { title: "Ingranaggi", image: "/engrenagem2.jpg" },
    { title: "Lavorazione acciaio inox", image: "/engrenagem3.jpg" },
  ];
  return (
    <section id="progetti" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Progetti</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {list.map((p,i)=> (
            <figure key={i} className="overflow-hidden rounded-xl shadow">
              <img src={p.image} alt={p.title} className="w-full h-48 object-cover" loading="lazy" decoding="async"/>
              <figcaption className="p-4 text-slate-800 font-medium">{p.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const items = [
    {t:'Tempi certi', d:'Pianificazione e fermi impianto programmati'},
    {t:'Qualifiche', d:'Saldature MIG/TIG, NDT su richiesta'},
    {t:'Sicurezza', d:'Procedure HSE e report digitali'},
  ];
  return (
    <section id="perche" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Perché Ma.In</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {items.map((x,i)=>(
            <div key={i} className="rounded-2xl bg-indigo-50 p-6">
              <p className="text-xl font-semibold text-indigo-800">{x.t}</p>
              <p className="mt-2 text-slate-700">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const containerRef = useRef(null);
  const loadMap = () => {
    if (!containerRef.current) return;
    const iframe = document.createElement("iframe");
    iframe.src = "https://www.google.com/maps/embed?pb=!4v1728291000000!6m8!1m7!1srHunZFejEIYGujupt66JOw!2m2!1d41.5353065!2d12.6367095!3f130.24!4f-2.49!5f0.7820865974627469";
    iframe.width = "100%";
    iframe.height = "400";
    iframe.loading = "lazy";
    iframe.style.border = "0";
    iframe.title = "Street View Ma.In";
    // troca o botão pelo iframe
    containerRef.current.replaceWith(iframe);
  };

  return (
    <section id="contatti" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Contatti</h2>
          <p className="text-slate-600 mb-2">Indirizzo: Via Pantanelle, km 0/200, 00048 Nettuno RM</p>
          <p className="text-slate-600 mb-2">Telefono: <a href="tel:+39069819415" className="text-indigo-700 underline">06 981 9415</a></p>
          <p className="text-slate-600 mb-2">Email: <a href="mailto:main.srl@pec.main-cmc.it" className="text-indigo-700 underline">main.srl@pec.main-cmc.it</a></p>
          <p className="text-slate-600 mb-6">Plus Code: GJPP+4P Nettuno, Roma</p>
          <form className="space-y-4">
            <input type="text" placeholder="Nome" className="w-full p-3 border border-slate-300 rounded" />
            <input type="email" placeholder="Email" className="w-full p-3 border border-slate-300 rounded" />
            <textarea placeholder="Messaggio" rows={4} className="w-full p-3 border border-slate-300 rounded" />
            <button className="rounded-full bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 font-semibold shadow">Invia</button>
          </form>
        </div>

        {/* Mappa on-demand */}
        <div className="relative">
          <button
            ref={containerRef}
            type="button"
            className="group w-full h-[400px] rounded-xl overflow-hidden ring-1 ring-slate-200 bg-[url('/map-placeholder.jpg')] bg-cover bg-center flex items-end justify-start"
            onClick={loadMap}
            aria-label="Apri mappa"
          >
            <span className="m-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow group-hover:bg-white">
              Apri mappa
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const nav = ["Home","Servizi","Progetti","Contatti"];
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-600 text-center">
        <nav className="space-x-4 mb-4">
          {nav.map((l,i)=> (
            <a key={i} href={`#${l.toLowerCase()}`} className="hover:text-slate-900">{l}</a>
          ))}
        </nav>
        <p>© {new Date().getFullYear()} MAIN S.R.L. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
}

function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/393491234567?text=Ciao%20Ma.In!%20Vorrei%20ricevere%20informazioni%20sui%20vostri%20servizi."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatta su WhatsApp"
      className="group fixed right-5 z-[60]"
      style={{ bottom: `calc(20px + env(safe-area-inset-bottom))` }}
    >
      <span className="absolute -inset-1 rounded-full blur-md opacity-60 group-hover:opacity-90" style={{background:"conic-gradient(from 0deg, #25D36622, #25D36688, #25D36622)"}} />
      <span className="relative inline-flex w-16 h-16 items-center justify-center rounded-full shadow-2xl" style={{ backgroundColor: "#25D366" }}>
        <svg viewBox="0 0 32 32" fill="white" className="w-8 h-8" aria-hidden><path d="M16.01 0.003c-8.84 0-16 6.73-16 15.01 0 2.65 0.84 5.17 2.3 7.36l-2.3 6.62 6.86-2.23c2.13 1.16 4.57 1.84 9.14 1.84 8.84 0 16-6.73 16-15.01s-7.16-15.01-16-15.01zM16.01 27.7c-2.71 0-4.93-0.48-7.11-1.68l-0.51-0.29-4.08 1.33 1.33-3.95-0.33-0.52c-1.17-1.76-1.88-3.83-1.88-6.11 0-6.54 5.51-11.86 12.29-11.86 6.61 0 12.01 5.17 12.01 11.71 0 6.66-5.4 12.37-12.71 12.37zM21.68 19.79c-0.36-0.18-2.16-1.06-2.49-1.18-0.33-0.12-0.57-0.18-0.81 0.18-0.24 0.36-0.93 1.18-1.14 1.42-0.21 0.24-0.42 0.27-0.78 0.09-0.36-0.18-1.52-0.56-2.89-1.77-1.07-0.95-1.78-2.11-1.99-2.47s-0.02-0.55 0.15-0.73c0.15-0.15 0.33-0.39 0.51-0.6 0.18-0.21 0.24-0.36 0.36-0.6s0.06-0.45-0.03-0.63c-0.09-0.18-0.81-1.95-1.11-2.67-0.3-0.72-0.6-0.63-0.81-0.63h-0.69c-0.24 0-0.63 0.09-0.96 0.45-0.33 0.36-1.26 1.23-1.26 3s1.29 3.48 1.47 3.72c0.18 0.24 2.55 4.02 6.15 5.65 0.86 0.36 1.53 0.57 2.07 0.72 0.87 0.27 1.65 0.24 2.27 0.15 0.69-0.09 2.13-0.84 2.43-1.63 0.3-0.78 0.3-1.44 0.21-1.6-0.09-0.15-0.33-0.24-0.69-0.42z"/></svg>
        <span className="sr-only">Chatta su WhatsApp</span>
        <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-white">
          <span className="absolute inset-0 rounded-full bg-emerald-500" />
        </span>
      </span>
    </a>
  );
}

export default function App() {
  useEffect(() => {
    // Scroll suave e atalhos — sem TS
    const style = document.createElement("style");
    style.innerHTML = `html{scroll-behavior:smooth}`;
    document.head.appendChild(style);

    const onKey = (e) => {
      const key = (e.key || "").toLowerCase();
      if (key === 'g') {
        const btn = document.querySelector("header button[aria-label='Apri menu']");
        if (btn) btn.click();
      }
      if (key === 's') {
        const firstInput = document.querySelector("#contatti input");
        if (firstInput) firstInput.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <Meta />
      <a href="#home" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-white text-slate-900 px-3 py-2 rounded shadow">Salta al contenuto</a>
      <Header />
      <Hero />
      {/* Sede */}
      <section className="py-16 bg-white px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">La nostra sede</h2>
          <img src="/ma.in.png" alt="Facciata della sede Ma.In" className="mx-auto w-full max-w-3xl rounded-xl shadow-xl" loading="lazy" decoding="async" />
        </div>
      </section>
      {/* Chi siamo */}
      <section id="chi-siamo" className="py-20 bg-white px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Chi Siamo</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <p className="text-slate-600">Ma.In è una realtà italiana nel settore della manutenzione industriale. Operiamo con team qualificati e tecnologie all’avanguardia per garantire sicurezza e affidabilità negli impianti produttivi.</p>
            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                {n:"24+", l:"Anni di esperienza"},
                {n:"35", l:"Dipendenti"},
                {n:"120+", l:"Progetti/anno"},
              ].map((k,i)=> (
                <div key={i} className="rounded-xl bg-indigo-50 p-4">
                  <p className="text-3xl font-bold text-indigo-700">{k.n}</p>
                  <p className="text-sm text-slate-600">{k.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Services />
      <Projects />
      <Why />
      <Contact />
      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
