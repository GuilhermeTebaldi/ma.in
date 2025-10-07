import { useEffect, useState } from "react";

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

  const services = [
    {
      title: "Manutenzione impianti",
      points: ["Meccanica, piping, valvole", "Revamping e adeguamenti", "Fermi impianto pianificati"],
    },
    {
      title: "Carpenteria metallica",
      points: ["Scale, passerelle, strutture", "Saldature MIG/TIG qualificate", "Trattamenti e verniciature"],
    },
    {
      title: "Automazione e CNC",
      points: ["Manutenzione e calibrazione", "Componenti e retrofitting", "Diagnostica e ottimizzazione"],
    },
    {
      title: "Piping e saldatura",
      points: ["Isometrie e tracciabilità", "Materiali certificati", "NDT su richiesta"],
    },
    {
      title: "Pronto intervento",
      points: ["Reperibilità su accordo", "Mezzi e attrezzature", "Procedure HSE"],
    },
    {
      title: "Qualità e sicurezza",
      points: ["Piani di sicurezza", "Procedure e permessi", "Report digitali"],
    },
  ];

  const projects = [
    {
      title: "Revamping linea imbottigliamento",
      image: "/engrenagem.jpg",
    },
    {
      title: "ingranaggi",
      image: "/engrenagem2.jpg",
    },
    {
      title: "lavorazione di parti in acciaio inossidabile",
      image: "/engrenagem3.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      <style>{`
        html { scroll-behavior: smooth; }
        .btn-primary {
          background: linear-gradient(to right, #3b82f6, #2563eb);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          transition: all 0.3s ease-in-out;
        }
        .btn-primary:hover {
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.3);
          transform: translateY(-2px);
        }
        .card {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 12px 24px rgba(0,0,0,0.06);
          transition: transform 0.3s ease;
        }
        .card:hover {
          transform: translateY(-6px);
        }
        .section-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 2rem;
          text-align: center;
          color: #1f2937;
        }
      `}</style>

      <header className="fixed top-0 inset-x-0 bg-white shadow z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Logo Ma.In" className="h-10 w-auto" />
            <div>
              <p className="text-sm text-gray-500">Manutenzione Industriale - S.r.l.</p>
              <p className="text-lg font-bold text-gray-900">Ma.In</p>
            </div>
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            {navItems.map((i) => (
              <a key={i.href} href={i.href} className="hover:text-gray-900">
                {i.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="max-w-xl">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Tecnologia & Precisione</h1>
            <p className="text-lg text-gray-600 mb-6">
              Soluzioni affidabili di manutenzione industriale, carpenteria e automazione.
            </p>
            <div className="flex gap-4">
              <a href="#servizi" className="btn-primary">Scopri di più</a>
              <a href="#progetti" className="btn-primary bg-gray-100 text-blue-600 hover:bg-gray-200">Progetti</a>
            </div>
          </div>
          <img src="/ma.in.png" alt="Hero" className="w-full max-w-md rounded-xl shadow-lg" />
        </div>
      </section>

      <section id="chi-siamo" className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Chi Siamo</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <p className="text-gray-600">
              Ma.In è una realtà italiana nel settore della manutenzione industriale. Operiamo con team qualificati e tecnologie all’avanguardia per garantire sicurezza e affidabilità negli impianti produttivi.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-blue-600">24+</p>
                <p className="text-sm text-gray-500">Anni di esperienza</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">35</p>
                <p className="text-sm text-gray-500">Dipendenti</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">120+</p>
                <p className="text-sm text-gray-500">Progetti/anno</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servizi" className="py-20 bg-blue-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Servizi</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div key={i} className="card">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">{s.title}</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {s.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="progetti" className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Progetti</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-lg">
                <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contatti" className="py-20 bg-blue-50 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contatti</h2>
            <p className="text-gray-600 mb-2">Indirizzo: Via Pantanelle, km 0/200, 00048 Nettuno RM</p>
            <p className="text-gray-600 mb-2">Telefono: <a href="tel:+39069819415" className="text-blue-600">06 981 9415</a></p>
            <p className="text-gray-600 mb-2">Email: <a href="mailto:main.srl@pec.main-cmc.it" className="text-blue-600">main.srl@pec.main-cmc.it</a></p>
            <p className="text-gray-600 mb-6">Plus Code: GJPP+4P Nettuno, Roma</p>
            <form className="space-y-4">
              <input type="text" placeholder="Nome" className="w-full p-3 border border-gray-300 rounded" />
              <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded" />
              <textarea placeholder="Messaggio" rows="4" className="w-full p-3 border border-gray-300 rounded"></textarea>
              <button className="btn-primary">Invia</button>
            </form>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1728291000000!6m8!1m7!1srHunZFejEIYGujupt66JOw!2m2!1d41.5353065!2d12.6367095!3f130.24!4f-2.49!5f0.7820865974627469"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <footer className="bg-white text-center py-10 text-sm text-gray-500 border-t">
        <nav className="space-x-4 mb-4">
          {navItems.map((i) => (
            <a key={i.href} href={i.href} className="hover:text-gray-800">
              {i.label}
            </a>
          ))}
        </nav>
        <p>&copy; {new Date().getFullYear()} MAIN S.R.L. Tutti i diritti riservati.</p>
      </footer>
    </main>
  );
}
