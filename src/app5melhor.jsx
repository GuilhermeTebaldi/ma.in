// eslint-disable-next-line no-unused-vars
import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Ma.In — REDESIGN BRUTAL VISUAL (100% novo)
 * Conceito: dark neon + glass • diagonais • carrossel horizontal • masonry cards
 * JSX puro (sem TypeScript). Apenas Tailwind.
 */

// ===== Utils =====
function Meta(){
  useEffect(()=>{
    document.title = "Ma.In — Industrial Service Studio";
    document.documentElement.lang = 'it';
    const s = document.createElement('style');
    s.innerHTML = `html{scroll-behavior:smooth}`;
    document.head.appendChild(s);

    // Preload do vídeo
    const p1 = document.createElement('link');
    p1.rel = 'preload';
    p1.as = 'video';
    p1.href = '/media/welding.webm';    // use o nome real
    p1.type = 'video/webm';
    p1.fetchPriority = 'high';
    document.head.appendChild(p1);

    const p2 = document.createElement('link');
    p2.rel = 'preload';
    p2.as = 'video';
    p2.href = '/media/welding.mp4';
    p2.type = 'video/mp4';
    document.head.appendChild(p2);

    return ()=> { document.head.removeChild(s); document.head.removeChild(p1); document.head.removeChild(p2); };
  },[]);
  return null;
}


// ===== Navbar flutuante =====
function Nav(){
  const items = useMemo(()=>[
    {href:'#start',label:'Start'},
    {href:'#servizi',label:'Servizi'},
    {href:'#progetti',label:'Progetti'},
    {href:'#about',label:'Chi Siamo'},
    {href:'#contatti',label:'Contatti'},
  ],[]);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      {/* Desktop */}
      <div className="hidden md:flex items-center gap-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 px-2 py-1 shadow-lg">
        <a href="#start" className="flex items-center gap-2 rounded-full px-3 py-1.5 text-white/90 hover:text-white">
          <img src="/logo.jpg" alt="Ma.In" className="w-6 h-6 rounded"/>
          <span className="font-semibold tracking-wide">Ma.In</span>
        </a>
        {items.map(i=> (
          <a key={i.href} href={i.href} className="rounded-full px-3 py-1.5 text-sm text-white/80 hover:text-amber-300">
            {i.label}
          </a>
        ))}
        <a href="#contatti" className="ml-2 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-900 text-sm font-bold px-3 py-1.5">
          Preventivo
        </a>
      </div>

      {/* Mobile: só a logo */}
      <a href="#start" className="md:hidden flex items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 px-3 py-2 shadow-lg">
        <img src="/logo.jpg" alt="Ma.In" className="w-7 h-7 rounded"/>
        <span className="sr-only">Ma.In</span>
      </a>
    </div>
  );
}

// ===== Hero diagonal =====
function Hero(){
  return (
    <section id="start" className="relative min-h-[92vh] grid place-items-center overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_50%,#0ea5e955,transparent_60%)]"/>
     {/* BG */}
<div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_50%,#0ea5e955,transparent_60%)]"/>
<video
  className="absolute inset-0 w-full h-full object-cover opacity-40 transition-opacity duration-300"
  poster="/welding-frame.jpg"
  muted
  playsInline
  autoPlay
  loop
  preload="auto"
  onLoadedData={e => { e.currentTarget.style.opacity = 0.4; }}
  aria-label="Soldagem industrial em close"
>
  <source src="/media/welding.webm" type="video/webm" />
  <source src="/media/welding.mp4"  type="video/mp4" />
</video>

<div className="absolute -left-24 -top-24 w-[60vw] h-[60vw] rotate-12 bg-gradient-to-br from-emerald-500/30 to-sky-500/10 blur-3xl"/>
<div className="absolute -right-24 -bottom-24 w-[60vw] h-[60vw] -rotate-12 bg-gradient-to-tr from-amber-400/20 to-fuchsia-500/10 blur-3xl"/>

      <div className="absolute -left-24 -top-24 w-[60vw] h-[60vw] rotate-12 bg-gradient-to-br from-emerald-500/30 to-sky-500/10 blur-3xl"/>
      <div className="absolute -right-24 -bottom-24 w-[60vw] h-[60vw] -rotate-12 bg-gradient-to-tr from-amber-400/20 to-fuchsia-500/10 blur-3xl"/>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-1 text-xs text-white/80">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/> Operativi 24/7 su accordo
            </span>
            <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-[1.05] text-white">
              Tecnologia. Sicurezza. <span className="text-amber-300">Precisione</span>.
            </h1>
            <p className="mt-4 text-white/80 text-lg">
              Manutenzione industriale, carpenteria e automazione con SLA chiari, saldature qualificate e report digitali.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contatti" className="rounded-xl bg-amber-400 text-slate-900 font-bold px-5 py-3 hover:bg-amber-300">Richiedi preventivo</a>
              <a href="#progetti" className="rounded-xl border border-white/30 text-white px-5 py-3 hover:bg-white/10">Vedi progetti</a>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2 text-xs text-white/70">
              {['SLA chiari','NDT su richiesta','Ricambi certificati','Procedure HSE'].map(b=> (
                <li key={b} className="rounded-full bg-white/10 border border-white/20 px-3 py-1">{b}</li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>

      {/* Diagonal divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 skew-y-[-4deg] origin-bottom bg-gradient-to-t from-slate-950 to-transparent"/>
    </section>
  );
}

// ===== Carrossel horizontal de serviços =====
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
    <section id="servizi" className="relative py-16 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_10%_10%,#22c55e22,transparent_60%)]"/>
     
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Servizi</h2>
          <p className="text-white/60 text-sm max-w-md">Soluzioni end‑to‑end per impianti produttivi con tracciabilità e sicurezza.</p>
        </div>
        <div className="mt-8 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none]" style={{scrollbarGutter:'stable'}}>
          <div className="flex gap-6 min-w-max pb-2" style={{scrollSnapType:'x mandatory'}}>
            {data.map((s,i)=> (
              <article key={i} className="snap-start w-[300px] md:w-[360px] rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl p-6 text-white shadow-xl hover:bg-white/10 transition">
                <h3 className="text-xl font-bold text-amber-300">{s.t}</h3>
                <ul className="mt-3 space-y-1 text-sm text-white/80 list-disc list-inside">
                  {s.d.map((x,j)=>(<li key={j}>{x}</li>))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-8 left-0 right-0 h-16 skew-y-[4deg] origin-top bg-gradient-to-b from-slate-950 to-transparent"/>
    </section>
  );
}
// ===== PROGETTI — luxo técnico sem trocar as cores =====
function Progetti() {
  const list = [
    { t: 'Revamping linea imbottigliamento', img: '/engrenagem.jpg' },
    { t: 'Ingranaggi di precisione', img: '/engrenagem2.jpg' },
    { t: 'Lavorazione acciaio inox', img: '/engrenagem3.jpg' },
  ];

  const refs = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const i = Number(e.target.getAttribute('data-i'));
          if (e.isIntersecting) {
            setVisible((v) => {
              const copy = [...(v||[])];
              copy[i] = true;
              return copy;
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="progetti" className="relative py-28 bg-gradient-to-b from-[#0a0c10] via-[#0d1117] to-[#0a0c10] overflow-hidden">
      {/* Luz ambiente suave mantendo paleta */}
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,#0ea5e933,transparent_75%)] blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <header className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            <span className="text-sky-400">Progetti</span> d’Eccellenza
          </h2>
          <p className="mt-4 text-white/75 max-w-2xl">Ogni realizzazione è il risultato di innovazione, design tecnico e precisione artigianale.</p>
        </header>

        {/* Barras diagonais no estilo da imagem, com entrada lateral */}
        <div className="space-y-10 md:space-y-14">
          {list.map((p, i) => (
            <article
              key={i}
              data-i={i}
              ref={(el) => (refs.current[i] = el)}
              className={`relative group gpu transition-all duration-700 ease-out will-change-transform
                ${visible[i] ? 'opacity-100 translate-x-0' : (i % 2 ? 'opacity-0 translate-x-16' : 'opacity-0 -translate-x-16')}`}
              style={{
                // ângulo da barra
                ['--sk']:'-8deg',
              }}
            >
              <div className="relative mx-auto max-w-6xl">
                {/* Barra inclinada */}
                <div className="relative h-[220px] sm:h-[260px] md:h-[300px]">
                  {/* Placa inclinada */}
                  <div className="absolute inset-0 skew-y-[var(--sk)] rounded-[22px] border border-white/10 bg-gradient-to-br from-[#121418] to-[#0b0c10] shadow-[0_0_28px_rgba(0,0,0,0.35)] overflow-hidden">
                    {/* Foto contra-inclinada para manter horizonte */}
                    <img
                      src={p.img}
                      alt={p.t}
                      className="absolute inset-0 w-full h-full object-cover opacity-95 scale-105 transition-transform duration-[1600ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110 -skew-y-[var(--sk)]"
                      loading="lazy"
                    />
                    {/* Sombreamento e brilho lateral */}
                    <div className="absolute inset-0 -skew-y-[var(--sk)] bg-gradient-to-r from-black/50 via-black/15 to-transparent" />
                    <div className="absolute inset-x-0 -bottom-0.5 h-[3px] -skew-y-[var(--sk)] bg-gradient-to-r from-sky-400/0 via-sky-400/90 to-sky-400/0" />
                  </div>

                  {/* Borda externa luminosa fina */}
                  <div className="pointer-events-none absolute -inset-[2px] skew-y-[var(--sk)] rounded-[24px] ring-1 ring-sky-400/30" />
                </div>

                {/* Título e meta flutuando no rodapé da barra */}
                <div className={`absolute ${i % 2 ? 'right-8' : 'left-8'} bottom-5 -skew-y-[var(--sk)]`}>
                  <h3 className="text-xl md:text-2xl font-semibold text-white drop-shadow">{p.t}</h3>
                  <p className="text-sm text-white/75">Engineering & Design</p>
                </div>

                {/* Badge "Case" no canto oposto */}
                <span className={`absolute ${i % 2 ? 'left-6' : 'right-6'} -top-3 -skew-y-[var(--sk)] px-3 py-1 rounded-full bg-sky-500 text-white text-xs font-semibold shadow-lg`}>Case</span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a href="#contatti" className="inline-block px-10 py-4 rounded-full border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white font-bold text-sm uppercase tracking-wider transition-colors shadow-[0_0_15px_rgba(14,165,233,0.25)]">
            Scopri di più
          </a>
        </div>
      </div>
    </section>
  );
}

// ===== SERVIZI — carrossel com estrutura mais precisa e foco acessível =====
function Servizi() {
  const data = [
    { t: "Manutenzione impianti", d: ["Meccanica, piping, valvole", "Revamping e adeguamenti", "Fermi impianto pianificati"] },
    { t: "Carpenteria metallica", d: ["Scale, passerelle, strutture", "Saldature MIG/TIG qualificate", "Trattamenti e verniciature"] },
    { t: "Automazione e CNC", d: ["Manutenzione e calibrazione", "Componenti e retrofitting", "Diagnostica e ottimizzazione"] },
    { t: "Piping e saldatura", d: ["Isometrie e tracciabilità", "Materiali certificati", "NDT su richiesta"] },
    { t: "Pronto intervento", d: ["Reperibilità su accordo", "Mezzi e attrezzature", "Procedure HSE"] },
    { t: "Qualità e sicurezza", d: ["Piani di sicurezza", "Procedure e permessi", "Report digitali"] },
  ];

  const scroll = (dir) => {
    const el = document.getElementById("servizi-track");
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const gap = 24; const step = (card?.clientWidth || 320) + gap;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="servizi" className="relative py-24 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] [background-size:32px_32px,32px_32px]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_15%_25%,#0ea5e91f,transparent_70%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_230deg_at_85%_20%,#fbbf2418,transparent_120deg)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">Servizi</h2>
            <p className="mt-2 text-sm text-white/75 max-w-xl">Soluzioni end-to-end per impianti produttivi con tracciabilità e sicurezza.</p>
          </div>
          <div className="flex gap-2">
            <button type="button" aria-label="Indietro" onClick={() => scroll(-1)} className="h-11 w-11 rounded-2xl border border-white/15 bg-white/5 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300/60">
              <svg className="mx-auto h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M12.7 4.7a1 1 0 0 1 0 1.4L9.41 9.4H16a1 1 0 1 1 0 2H9.41l3.3 3.3a1 1 0 1 1-1.42 1.4l-5-5a1 1 0 0 1 0-1.4l5-5a1 1 0 0 1 1.42 0Z"/></svg>
            </button>
            <button type="button" aria-label="Avanti" onClick={() => scroll(1)} className="h-11 w-11 rounded-2xl border border-white/15 bg-white/5 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300/60">
              <svg className="mx-auto h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M7.3 15.3a1 1 0 0 1 0-1.4l3.3-3.3H4a1 1 0 1 1 0-2h6.59L7.3 5.3a1 1 0 1 1 1.4-1.42l5 5a1 1 0 0 1 0 1.42l-5 5a1 1 0 0 1-1.4 0Z"/></svg>
            </button>
          </div>
        </div>

        <div className="relative mt-10" style={{ WebkitMaskImage: "linear-gradient(to right, transparent, black 28px, black calc(100% - 28px), transparent)", maskImage: "linear-gradient(to right, transparent, black 28px, black calc(100% - 28px), transparent)" }}>
          <div id="servizi-track" className="overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" role="region" aria-label="Carrossel de serviços">
            <div className="flex min-w-max gap-6 pb-4 pe-2">
              {data.map((s, i) => (
                <article key={i} data-card className="group relative snap-start w-[300px] md:w-[360px] rounded-3xl overflow-hidden">
                  <div className="absolute -inset-[1px] rounded-[1.6rem] bg-gradient-to-br from-amber-300/35 via-sky-400/25 to-fuchsia-400/25 opacity-60 blur"/>
                  <div className="relative h-full rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-6 text-white backdrop-blur-xl shadow-xl transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white/85 border border-white/15">{String(i + 1).padStart(2, "0")}</span>
                      <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-white/60"><span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"/>Attivo</span>
                    </div>
                    <div className="mt-4">
                      <div className="rounded-xl bg-gradient-to-r from-amber-300/20 to-sky-400/15 px-4 py-2">
                        <h3 className="text-lg font-bold text-amber-300">{s.t}</h3>
                      </div>
                    </div>
                    <ul className="mt-5 space-y-3 text-sm text-white/85">
                      {s.d.map((x, j) => (
                        <li key={j} className="relative pl-6"><span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-emerald-400/85 shadow-[0_0_0_3px_rgba(16,185,129,0.18)]"/> {x}</li>
                      ))}
                    </ul>
                    <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                    <div className="mt-3 flex items-center justify-between text-xs text-white/70">
                      <span>Su accordo</span>
                      <a href="#contatti" className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200">Contatta
                        <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path d="M7 10a1 1 0 0 0 1 1h5.59l-2.3 2.3a1 1 0 1 0 1.42 1.4l4-4a1 1 0 0 0 0-1.4l-4-4a1 1 0 0 0-1.42 1.4L13.59 9H8a1 1 0 0 0-1 1Z"/></svg>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-950 to-transparent" />
        </div>
        <div className="mt-10 h-[2px] w-full bg-gradient-to-r from-amber-300/60 via-sky-400/60 to-fuchsia-400/60 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" />
      </div>
      <div className="absolute -bottom-8 left-0 right-0 h-16 origin-top skew-y-[4deg] bg-gradient-to-b from-slate-950 to-transparent" />
    </section>
  );
}

// ===== ABOUT — timeline refinada =====
function About(){
  const steps = [
    {k:'1999→', t:'Avvio attività', d:'Manutenzione meccanica su linee imbottigliamento'},
    {k:'2008→', t:'Carpenteria', d:'Scale, passerelle e strutture certificate'},
    {k:'2016→', t:'Automazione CNC', d:'Retrofitting e diagnosi avanzata'},
    {k:'Oggi', t:'Full-service', d:'Piping, HSE, NDT, report digitali'},
  ];
  return (
    <section id="about" className="relative py-16 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(35%_35%_at_30%_70%,#22c55e22,transparent_60%)]"/>
      <div className="relative max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10">Chi Siamo</h2>
        <p className="text-white/85 max-w-3xl">Ma.In è una realtà italiana nel settore della manutenzione industriale. Operiamo con team qualificati e tecnologie all’avanguardia per garantire sicurezza e affidabilità negli impianti produttivi.</p>
        <div className="mt-10 grid md:grid-cols-[220px,1fr] gap-8">
          <div className="rounded-2xl bg-white/5 border border-white/15 p-6 text-white">
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                {n:'24+', l:'Anni'},
                {n:'35', l:'Dip.'},
                {n:'120+', l:'Proj/anno'},
              ].map((x,i)=> (
                <div key={i} className="rounded-xl bg-white/10 p-4">
                  <p className="text-2xl font-extrabold text-amber-300">{x.n}</p>
                  <p className="text-xs text-white/70">{x.l}</p>
                </div>
              ))}
            </div>
          </div>
          <ol className="relative border-l border-white/20 pl-6">
            {steps.map((s,i)=> (
              <li key={i} className="mb-8 last:mb-0">
                <div className="absolute -left-[9px] mt-1 w-4 h-4 rounded-full bg-amber-400 shadow-[0_0_0_4px_rgba(245,158,11,0.2)]"/>
                <p className="text-amber-300 text-sm font-bold">{s.k}</p>
                <h3 className="text-white text-lg font-semibold">{s.t}</h3>
                <p className="text-white/85 text-sm">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

// ===== CONTATTI — chamadas visuais preservando amber/sky =====
function Contatti(){
  const ref = useRef(null);
  const loadMap = () => {
    if (!ref.current) return;
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srHunZFejEIYGujupt66JOw!2m2!1d41.5353065!2d12.6367095!3f130.24!4f-2.49!5f0.7820865974627469';
    iframe.width = '100%'; iframe.height = '380'; iframe.loading = 'lazy';
    iframe.style.border = '0'; iframe.style.background = '#fff';
    iframe.title = 'Street View Ma.In'; iframe.allowFullscreen = true; iframe.referrerPolicy = 'no-referrer-when-downgrade';
    ref.current.replaceWith(iframe);
  };
  useEffect(() => { const id = requestAnimationFrame(loadMap); return () => cancelAnimationFrame(id); }, []);

  return (
    <section id="contatti" className="relative py-16 bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(35%_35%_at_70%_20%,#f59e0b22,transparent_60%)]"/>
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-3xl bg-white/5 border border-white/15 p-6 text-white shadow-xl">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl">
                <img src="/ma.in.png" alt="Sede Ma.In" className="w-full h-full object-cover" loading="lazy" decoding="async"/>
              </div>
              <div className="absolute -bottom-6 -left-6 rotate-[-3deg] rounded-2xl bg-emerald-400 text-slate-900 font-bold px-4 py-2 shadow-xl">35 Dipendenti</div>
              <div className="absolute -top-6 -right-6 rotate-3 rounded-2xl bg-sky-400 text-slate-900 font-bold px-4 py-2 shadow-xl">120+ Progetti/anno</div>
            </div>
            <h2 className="text-3xl font-extrabold mt-8">Contatti</h2>
            <ul className="mt-4 space-y-2 text-white/90">
              <li>📍 Via Pantanelle, km 0/200, 00048 Nettuno RM</li>
              <li>📞 <a href="tel:+39069819415" className="text-amber-300 underline">06 981 9415</a></li>
              <li>📧 <a href="mailto:main.srl@pec.main-cmc.it" className="text-amber-300 underline">main.srl@pec.main-cmc.it</a></li>
              <li>➕ Plus Code: GJPP+4P Nettuno, Roma</li>
            </ul>
            <form className="mt-6 grid gap-3">
              <input className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50" placeholder="Nome" required/>
              <input type="email" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50" placeholder="Email" required/>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50" placeholder="Messaggio" required/>
              <button className="rounded-xl bg-amber-400 text-slate-900 font-bold px-5 py-3 hover:bg-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/60">Invia</button>
            </form>
          </div>
          <div className="rounded-3xl overflow-hidden border border-white/15">
            <div ref={ref} className="w-full h-[380px] bg-[url('/map-placeholder.jpg')] bg-cover bg-center" aria-label="Mapa" />
          </div>
        </div>
        <p className="mt-8 text-center text-white/50 text-xs">© {new Date().getFullYear()} MAIN S.R.L. Tutti i diritti riservati.</p>
      </div>
    </section>
  );
}

function WhatsAppFAB(){
  return (
    <a href="https://wa.me/393491234567?text=Ciao%20Ma.In!%20Vorrei%20ricevere%20informazioni%20sui%20vostri%20servizi." target="_blank" rel="noopener noreferrer" aria-label="Chatta su WhatsApp" className="group fixed right-5 bottom-6 z-[60]">
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
  useEffect(()=>{ document.body.classList.add('bg-slate-950'); },[]);
  return (
    <main className="min-h-screen text-white selection:bg-amber-300 selection:text-slate-900">
      <Meta/>
      <SplashMAIN/>
      <Nav/>
      <Hero/>
      <Progetti/>
      <Servizi/>
      <About/>
      <Contatti/>
      <WhatsAppFAB/>
    </main>
  );
}
