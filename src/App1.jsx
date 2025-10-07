export default function App() {
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
    <main className="bg-white text-gray-800 scroll-smooth font-sans">
      <style>
        {`
          .btn {
            padding: 0.75rem 1.5rem;
            border-radius: 9999px;
            background-color: #1f2937;
            color: #fff;
            font-weight: 600;
            transition: all 0.3s ease;
          }
          .btn:hover {
            background-color: #111827;
            transform: scale(1.05);
          }
          .highlight {
            color: #2563eb;
            font-weight: bold;
          }
          .card-shadow {
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
          }
        `}
      </style>

      {/* Navbar */}
      <header className="sticky top-0 bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <img src="/logo.jpg" alt="Logo" className="h-10" />
          <nav className="hidden md:flex space-x-6 text-sm font-semibold">
            <a href="#home">Home</a>
            <a href="#chi-siamo">Chi Siamo</a>
            <a href="#servizi">Servizi</a>
            <a href="#progetti">Progetti</a>
            <a href="#contatti">Contatti</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-white to-blue-50">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto py-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Esperienza & Qualità per l’<span className="highlight">Industria</span>
            </h1>
            <p className="text-lg mb-6">Servizi industriali su misura: manutenzione, automazione, carpenteria e molto altro.</p>
            <div className="space-x-4">
              <a href="#servizi" className="btn">I Nostri Servizi</a>
              <a href="#progetti" className="btn bg-gray-200 text-gray-800 hover:bg-gray-300">Portfolio</a>
            </div>
          </div>
          <img src="/ma.in.png" alt="Impianto" className="rounded-xl shadow-lg max-h-[400px] mx-auto" />
        </div>
      </section>

      {/* Chi Siamo */}
      <section id="chi-siamo" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Chi Siamo</h2>
          <p className="max-w-2xl mx-auto text-lg mb-12">MAIN S.R.L. è una realtà industriale specializzata nella manutenzione, costruzione e ottimizzazione di impianti complessi.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl card-shadow">
              <h3 className="text-2xl font-bold">20+</h3>
              <p>Anni di esperienza</p>
            </div>
            <div className="p-6 bg-white rounded-xl card-shadow">
              <h3 className="text-2xl font-bold">50+</h3>
              <p>Dipendenti</p>
            </div>
            <div className="p-6 bg-white rounded-xl card-shadow">
              <h3 className="text-2xl font-bold">100+</h3>
              <p>Progetti all’anno</p>
            </div>
          </div>
        </div>
      </section>

      {/* Servizi */}
      <section id="servizi" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Servizi Industriali</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div key={i} className="p-6 bg-white rounded-xl card-shadow border-t-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-4">{s.title}</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {s.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progetti */}
      <section id="progetti" className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Progetti</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <div key={i} className="overflow-hidden rounded-xl bg-white shadow-lg">
                <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contatti */}
      <section id="contatti" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contattaci</h2>
            <p className="mb-2"><strong>Indirizzo:</strong> Via Pantanelle, km 0/200, 00048 Nettuno RM</p>
            <p className="mb-2"><strong>Telefono:</strong> <a href="tel:+39069819415">06 981 9415</a></p>
            <p className="mb-2"><strong>Email:</strong> <a href="mailto:main.srl@pec.main-cmc.it">main.srl@pec.main-cmc.it</a></p>
            <p className="mb-6"><strong>Plus Code:</strong> GJPP+4P Nettuno, Roma</p>
            <form className="space-y-4">
              <input type="text" placeholder="Nome" className="w-full border rounded p-3" />
              <input type="email" placeholder="Email" className="w-full border rounded p-3" />
              <textarea placeholder="Messaggio" className="w-full border rounded p-3" rows="4"></textarea>
              <button className="btn">Invia</button>
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

      {/* Footer */}
      <footer className="bg-gray-100 py-8 text-center text-sm text-gray-500">
        <nav className="space-x-4 mb-2">
          <a href="#home">Home</a>
          <a href="#chi-siamo">Chi Siamo</a>
          <a href="#servizi">Servizi</a>
          <a href="#progetti">Progetti</a>
          <a href="#contatti">Contatti</a>
        </nav>
        <p>&copy; {new Date().getFullYear()} MAIN S.R.L. Tutti i diritti riservati.</p>
      </footer>
    </main>
  );
}
