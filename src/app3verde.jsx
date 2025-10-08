import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Ma.In — Modo Recriação 100% Novo
 * Site conceitual criado do zero, usando apenas as informações fornecidas.
 * Layout diferente: navegação lateral fixa + conteúdo em seções modulares.
 * JSX puro. Sem TypeScript.
 */

// ===== Util: Meta e JSON-LD =====
function Meta() {
  useEffect(() => {
    document.title = "Ma.In — Manutenzione • Carpenteria • Automazione";
    const d = document.documentElement;
    d.lang = "it";

    const add = (sel, attrs) => {
      let el = document.querySelector(`meta[${sel}]`);
      if (!el) { el = document.createElement("meta"); document.head.appendChild(el); }
      Object.entries(attrs).forEach(([k,v]) => el.setAttribute(k,v));
    };
    add("name='description'", { name: "description", content: "Manutenzione impianti, carpenteria metallica, automazione e CNC. Revamping, piping, saldature qualificate, HSE." });
    add("property='og:title'", { property: "og:title", content: "Ma.In" });
    add("property='og:type'", { property: "og:type", content: "website" });

    const ld = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Ma.In",
      address: { "@type": "PostalAddress", streetAddress: "Via Pantanelle, km 0/200", addressLocality: "Nettuno", postalCode: "00048", addressRegion: "RM", addressCountry: "IT" },
      telephone: "+39 06 981 9415",
      email: "main.srl@pec.main-cmc.it"
    };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.text = JSON.stringify(ld); document.head.appendChild(s);
    return () => document.head.removeChild(s);
  }, []);
  return null;
}

// ===== Navegação lateral (layout novo) =====
// eslint-disable-next-line no-unused-vars
function Sidebar({ open, setOpen }) {
  const items = useMemo(() => ([
    { href: "#intro", label: "Intro" },
    { href: "#servizi", label: "Servizi" },
    { href: "#progetti", label: "Progetti" },
    { href: "#chisiamo", label: "Chi Siamo" },
    { href: "#sede", label: "Sede" },
    { href: "#contatti", label: "Contatti" },
  ]), []);

  return (
    <aside className="fixed left-0 top-0 bottom-0 z-50 w-72 bg-white/90 backdrop-blur border-r border-slate-200 hidden lg:flex flex-col">
      <a href="#intro" className="flex items-center gap-3 px-6 h-16 border-b border-slate-200">
        <img src="/logo.jpg" alt="Logo Ma.In" width={40} height={40} className="h-10 w-10 rounded"/>
        <div className="leading-tight">
          <p className="text-xs text-slate-500">Manutenzione Industriale - S.r.l.</p>
          <strong className="text-slate-900">Ma.In</strong>
        </div>
      </a>
      <nav className="p-4 grow overflow-y-auto">
        <ul className="space-y-1">
          {items.map(i => (
            <li key={i.href}>
              <a href={i.href} className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700">{i.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-slate-200 text-xs text-slate-500">
        © {new Date().getFullYear()} Ma.In
      </div>
    </aside>
  );
}

function Topbar({ open, setOpen, toggleDark }) {
  return (
    <header className="lg:hidden fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="h-14 px-4 flex items-center justify-between">
        <a href="#intro" className="flex items-center gap-2">
          <img src="/logo.jpg" alt="Logo Ma.In" className="h-8 w-8 rounded"/>
          <strong className="text-slate-900">Ma.In</strong>
        </a>
        <div className="flex items-center gap-2">
          <button onClick={toggleDark} aria-label="Dark mode" className="w-9 h-9 rounded-full border border-slate-300 grid place-items-center">
            <span className="i">☾</span>
          </button>
          <button aria-label="Apri menu" onClick={()=>setOpen(v=>!v)} className="w-9 h-9 rounded-full border border-slate-300 grid place-items-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </div>
      </div>
      {/* Drawer */}
      <nav className={`${open? 'block':'hidden'} bg-white border-t border-slate-200`}>
        <ul className="px-4 py-3 grid gap-2">
          {['Intro','Servizi','Progetti','Chi Siamo','Sede','Contatti'].map(label => (
            <li key={label}><a href={`#${label.replace(/\s/g,'').toLowerCase()}`} className="block py-2" onClick={()=>setOpen(false)}>{label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

// ===== Seções =====
function Intro(){
  return (
    <section id="intro" className="relative min-h-[70vh] grid items-center bg-gradient-to-br from-emerald-700 to-emerald-500 text-white rounded-3xl overflow-hidden">
      <img src="/soldador.jpg" alt="Saldatura industriale" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"/>
      <div className="relative p-8 md:p-12 lg:p-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">Affidabilità per impianti industriali</h1>
          <p className="mt-4 text-lg text-emerald-50">Manutenzione, carpenteria e automazione con tempi certi, sicurezza e tracciabilità.</p>
          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            {['SLA chiari','Squadre qualificate','Report digitali'].map(x=> <span key={x} className="rounded-full bg-white/20 px-3 py-1">{x}</span>)}
          </div>
          <div className="mt-8 flex gap-3">
            <a href="#contatti" className="rounded-full bg-white text-emerald-800 hover:bg-emerald-50 px-6 py-3 font-semibold shadow">Richiedi preventivo</a>
            <a href="#progetti" className="rounded-full bg-black/20 hover:bg-black/25 text-white px-6 py-3 font-semibold">Vedi progetti</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Servizi(){
  const data = [
    {t:'Manutenzione impianti', d:['Meccanica, piping, valvole','Revamping e adeguamenti','Fermi impianto pianificati']},
    {t:'Carpenteria metallica', d:['Scale, passerelle, strutture','Saldature MIG/TIG qualificate','Trattamenti e verniciature']},
    {t:'Automazione e CNC', d:['Manutenzione e calibrazione','Componenti e retrofitting','Diagnostica e ottimizzazione']},
    {t:'Piping e saldatura', d:['Isometrie e tracciabilità','Materiali certificati','NDT su richiesta']},
    {t:'Pronto intervento', d:['Reperibilità su accordo','Mezzi e attrezzature','Procedure HSE']},
    {t:'Qualità e sicurezza', d:['Piani di sicurezza','Procedure e permessi','Report digitali']},
  ];
  return (
    <section id="servizi" className="rounded-3xl bg-white ring-1 ring-slate-200 p-6 md:p-10">
      <header className="flex items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Servizi</h2>
          <p className="text-slate-600">Soluzioni complete per impianti produttivi.</p>
        </div>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {data.map((s,i)=> (
          <article key={i} className="rounded-2xl p-6 bg-slate-50 hover:bg-slate-100 transition">
            <h3 className="text-lg font-semibold text-emerald-800">{s.t}</h3>
            <ul className="mt-3 list-disc list-inside text-sm text-slate-700 space-y-1">
              {s.d.map((x,j)=>(<li key={j}>{x}</li>))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Progetti(){
  const list = [
    {t:'Revamping linea imbottigliamento', img:'/engrenagem.jpg'},
    {t:'Ingranaggi', img:'/engrenagem2.jpg'},
    {t:'Lavorazione acciaio inox', img:'/engrenagem3.jpg'},
  ];
  return (
    <section id="progetti" className="rounded-3xl bg-white ring-1 ring-slate-200 p-6 md:p-10">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">Progetti</h2>
        <p className="text-slate-600">Selezione di interventi e lavorazioni.</p>
      </header>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
        {list.map((p,i)=> (
          <figure key={i} className="mb-6 break-inside-avoid rounded-xl overflow-hidden shadow">
            <img src={p.img} alt={p.t} className="w-full h-auto object-cover" loading="lazy" decoding="async"/>
            <figcaption className="p-4 text-slate-800 font-medium bg-white">{p.t}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function ChiSiamo(){
  return (
    <section id="chisiamo" className="rounded-3xl bg-white ring-1 ring-slate-200 p-6 md:p-10">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">Chi Siamo</h2>
      </header>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <p className="text-slate-700">Ma.In è una realtà italiana nel settore della manutenzione industriale. Operiamo con team qualificati e tecnologie all’avanguardia per garantire sicurezza e affidabilità negli impianti produttivi.</p>
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            {n:'24+', l:'Anni di esperienza'},
            {n:'35', l:'Dipendenti'},
            {n:'120+', l:'Progetti/anno'},
          ].map((k,i)=> (
            <div key={i} className="rounded-xl bg-emerald-50 p-4">
              <p className="text-2xl font-bold text-emerald-800">{k.n}</p>
              <p className="text-xs text-slate-700">{k.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sede(){
  return (
    <section id="sede" className="rounded-3xl bg-white ring-1 ring-slate-200 p-6 md:p-10">
      <header className="mb-6"><h2 className="text-3xl font-bold text-slate-900">La nostra sede</h2></header>
      <img src="/ma.in.png" alt="Facciata della sede Ma.In" className="w-full rounded-xl shadow" loading="lazy" decoding="async"/>
    </section>
  );
}

function Contatti(){
  const ref = useRef(null);
  const loadMap = () => {
    if (!ref.current) return;
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.google.com/maps/embed?pb=!4v1728291000000!6m8!1m7!1srHunZFejEIYGujupt66JOw!2m2!1d41.5353065!2d12.6367095!3f130.24!4f-2.49!5f0.7820865974627469';
    iframe.width = '100%'; iframe.height = '380'; iframe.loading = 'lazy'; iframe.style.border='0'; iframe.title='Street View Ma.In';
    ref.current.replaceWith(iframe);
  };
  return (
    <section id="contatti" className="rounded-3xl bg-white ring-1 ring-slate-200 p-6 md:p-10">
      <header className="mb-8"><h2 className="text-3xl font-bold text-slate-900">Contatti</h2></header>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <ul className="text-slate-700 space-y-2 mb-6">
            <li>📍 Via Pantanelle, km 0/200, 00048 Nettuno RM</li>
            <li>📞 <a href="tel:+39069819415" className="text-emerald-800 underline">06 981 9415</a></li>
            <li>📧 <a href="mailto:main.srl@pec.main-cmc.it" className="text-emerald-800 underline">main.srl@pec.main-cmc.it</a></li>
            <li>➕ Plus Code: GJPP+4P Nettuno, Roma</li>
          </ul>
          <form className="space-y-3">
            <input className="w-full p-3 border rounded" placeholder="Nome"/>
            <input type="email" className="w-full p-3 border rounded" placeholder="Email"/>
            <textarea rows={4} className="w-full p-3 border rounded" placeholder="Messaggio"/>
            <button className="rounded-full bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 font-semibold">Invia</button>
          </form>
        </div>
        <div className="relative">
          <button ref={ref} onClick={loadMap} className="group w-full h-[380px] rounded-xl ring-1 ring-slate-200 bg-[url('/map-placeholder.jpg')] bg-center bg-cover flex items-end">
            <span className="m-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow group-hover:bg-white">Apri mappa</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer(){
  return (
    <footer className="text-sm text-slate-600 text-center py-10">
      <nav className="space-x-4 mb-3">
        {['Intro','Servizi','Progetti','Chi Siamo','Sede','Contatti'].map(l => (
          <a key={l} href={`#${l.replace(/\s/g,'').toLowerCase()}`} className="hover:text-slate-900">{l}</a>
        ))}
      </nav>
      <p>© {new Date().getFullYear()} MAIN S.R.L. Tutti i diritti riservati.</p>
    </footer>
  );
}

function WhatsAppFAB(){
  return (
    <a
      href="https://wa.me/393491234567?text=Ciao%20Ma.In!%20Vorrei%20ricevere%20informazioni%20sui%20vostri%20servizi."
      target="_blank" rel="noopener noreferrer" aria-label="Chatta su WhatsApp"
      className="group fixed right-5 z-[60]" style={{ bottom: `calc(20px + env(safe-area-inset-bottom))` }}
    >
      <span className="absolute -inset-1 rounded-full blur-md opacity-60 group-hover:opacity-90" style={{background:"conic-gradient(from 0deg, #25D36622, #25D36688, #25D36622)"}} />
      <span className="relative inline-flex w-16 h-16 items-center justify-center rounded-full shadow-2xl" style={{ backgroundColor: "#25D366" }}>
        <svg viewBox="0 0 32 32" fill="white" className="w-8 h-8" aria-hidden><path d="M16.01 0.003c-8.84 0-16 6.73-16 15.01 0 2.65 0.84 5.17 2.3 7.36l-2.3 6.62 6.86-2.23c2.13 1.16 4.57 1.84 9.14 1.84 8.84 0 16-6.73 16-15.01s-7.16-15.01-16-15.01zM16.01 27.7c-2.71 0-4.93-0.48-7.11-1.68l-0.51-0.29-4.08 1.33 1.33-3.95-0.33-0.52c-1.17-1.76-1.88-3.83-1.88-6.11 0-6.54 5.51-11.86 12.29-11.86 6.61 0 12.01 5.17 12.01 11.71 0 6.66-5.4 12.37-12.71 12.37zM21.68 19.79c-0.36-0.18-2.16-1.06-2.49-1.18-0.33-0.12-0.57-0.18-0.81 0.18-0.24 0.36-0.93 1.18-1.14 1.42-0.21 0.24-0.42 0.27-0.78 0.09-0.36-0.18-1.52-0.56-2.89-1.77-1.07-0.95-1.78-2.11-1.99-2.47s-0.02-0.55 0.15-0.73c0.15-0.15 0.33-0.39 0.51-0.6 0.18-0.21 0.24-0.36 0.36-0.6s0.06-0.45-0.03-0.63c-0.09-0.18-0.81-1.95-1.11-2.67-0.3-0.72-0.6-0.63-0.81-0.63h-0.69c-0.24 0-0.63 0.09-0.96 0.45-0.33 0.36-1.26 1.23-1.26 3s1.29 3.48 1.47 3.72c0.18 0.24 2.55 4.02 6.15 5.65 0.86 0.36 1.53 0.57 2.07 0.72 0.87 0.27 1.65 0.24 2.27 0.15 0.69-0.09 2.13-0.84 2.43-1.63 0.3-0.78 0.3-1.44 0.21-1.6-0.09-0.15-0.33-0.24-0.69-0.42z"/></svg>
        <span className="sr-only">Chatta su WhatsApp</span>
        <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-white"><span className="absolute inset-0 rounded-full bg-emerald-500" /></span>
      </span>
    </a>
  );
}

export default function App(){
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  useEffect(()=>{
    document.body.classList.toggle('lg:pl-72', true); // reserva espaço para sidebar em telas largas
  },[]);
  useEffect(()=>{
    const r = document.documentElement; r.classList.toggle('dark', dark);
  },[dark]);

  useEffect(()=>{
    const s = document.createElement('style'); s.innerHTML = `html{scroll-behavior:smooth}`; document.head.appendChild(s);
    return ()=> document.head.removeChild(s);
  },[]);

  const toggleDark = () => setDark(v=>!v);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100">
      <Meta/>
      <a href="#intro" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-3 py-2 rounded shadow">Salta al contenuto</a>

      <Sidebar open={open} setOpen={setOpen} />
      <Topbar open={open} setOpen={setOpen} toggleDark={toggleDark} />

      {/* Conteúdo principal com espaçamento lateral */}
      <div className="lg:ml-72 px-4 sm:px-6 lg:px-10 pt-16 lg:pt-10 pb-16 max-w-7xl mx-auto grid gap-8">
        <Intro/>
        <Servizi/>
        <Progetti/>
        <ChiSiamo/>
        <Sede/>
        <Contatti/>
        <Footer/>
      </div>

      <WhatsAppFAB/>
    </main>
  );
}
