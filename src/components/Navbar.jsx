// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  // ===== i18n =====
  const { t, i18n } = useTranslation()
  const [langOpen, setLangOpen] = useState(false)
  const [lang, setLang] = useState(i18n.language || 'pt')

  function changeLang(code) {
    i18n.changeLanguage(code)
    setLang(code)
    setLangOpen(false)
    try {
      localStorage.setItem('lang', code)
      document.documentElement.lang = code
    } catch { /* empty */ }
  }

  // ===== tema (mantido para classe .dark; sem botão) =====
  // persiste tema e respeita prefers-color-scheme
  // eslint-disable-next-line no-unused-vars
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return true
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true
  })

  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Fecha o menu ao trocar de rota
  useEffect(() => {
    setOpen(false)
    setLangOpen(false)
  }, [location.pathname])

  // Aplica/remover classe dark + persistência
  useEffect(() => {
    const html = document.documentElement
    html.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition ${
      isActive
        ? 'bg-e-panel/20 text-e-text border border-e-stroke/60'
        : 'text-e-text/80 hover:text-e-text hover:bg-e-panel/10'
    }`

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-e-stroke/60 bg-e-panel/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          {/* Logo */}
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-e-primary to-e-accent flex items-center justify-center shadow-e-md overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 384"
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-full p-1.5"
              aria-label="Logo EISTALT"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384">
                <circle cx="198" cy="222" r="82" fill="#ffffff" stroke="#222" strokeWidth="0" data-z="0" />
                <circle cx="256" cy="154" r="82" fill="#ffffff" stroke="#222" strokeWidth="0" data-z="1" />
                <path d="M 226 62 L 258 62 L 306 84 L 328 110 L 342 146 L 314 138 L 300 106 L 282 90 L 250 86 L 226 96 L 212 110 L 202 142 L 180.65 150.48 L 180.65 150.48 L 162 160 L 142.72 186.35 L 142.72 186.35 L 126 210 L 124.79 227.89 L 126.79 243.89 L 146 272 L 178 296 L 162 298 L 122 278 L 106 246 L 98.38 227.89 L 100.38 219.89 L 102 196 L 126 142 L 112 124 L 84 120 L 114 88 L 134 82 L 160 100 L 164 94 L 186 76 L 222 62 Z" fill="#013a7b" data-z="2" />
                <path d="M 254 108 L 276 104 L 288 110 L 278 124 L 296 128 L 294 144 L 284 152 L 256 146 L 248 132 L 252 112 Z" fill="#013a7b" data-z="3" />
                <path d="M 304 152 L 320 148 L 328 152 L 322 168 L 340 168 L 332 190 L 306 180 L 302 156 Z" fill="#013a7b" data-z="4" />
                <path d="M 324 202 L 304 234 L 304 252 L 334 226 L 346 228 L 342 248 L 308 268 L 254 284 L 294 228 L 318 208 Z" fill="#013a7b" data-z="5" />
                <path d="M 184 296 L 196 296 L 188 298 Z" fill="#013a7b" data-z="6" />
                <path d="M 84 120 L 108 116 L 128 136 L 128 156 L 111.21 175.91 L 111.21 175.91 L 104 200 L 104 236 L 114 260 L 133.86 277.78 L 133.86 277.78 L 152 292 L 222 304 L 148 304 L 94 268 L 80 232 L 76 188 L 110 136 L 86 124 Z" fill="#042959" data-z="7" />
                <path d="M 244 140 L 248 136 L 264 152 L 260 156 L 246 144 Z" fill="#042959" data-z="8" />
                <path d="M 304 182 L 320 190 L 304 186 Z" fill="#042959" data-z="9" />
                <path d="M 340 246 L 334 264 L 288 288 L 258 284 L 278 268 L 320 258 Z" fill="#042959" data-z="10" />
                <path d="M 176 298 L 262 282 L 224 304 Z" fill="#042959" data-z="11" />
                <path d="M 220 300 L 232 300 L 224 304 Z" fill="#042959" data-z="12" />
                <path d="M 332 164 L 336 160 L 336 166 Z" fill="#3e597d" data-z="13" />
                <path d="M 244 92 L 272 88 L 292 98 L 304 116 L 300 120 L 280 100 L 260 100 L 244 112 L 240 140 L 246 152 L 260 160 L 292 160 L 288 170 L 254 172 L 256 204 L 292 208 L 304 196 L 336 196 L 292 224 L 264 270 L 244 280 L 200 280 L 154 252 L 140 220 L 140 200 L 164 162 L 212 144 L 222 104 L 240 92 Z" fill="#fffbf0" data-z="14" />
                <path d="M 300 124 L 304 120 L 312 140 L 300 150 L 300 128 Z" fill="#fffbf0" data-z="15" />
                <path d="M 320 144 L 324 140 L 340 152 L 324 146 Z" fill="#fffbf0" data-z="16" />
                <path d="M 324 164 L 328 160 L 328 168 Z" fill="#fffbf0" data-z="17" />
                <path d="M 336 162 L 340 158 L 340 166 Z" fill="#e1d9d2" data-z="18" />
                <path d="M 260 200 L 280 200 L 260 204 Z" fill="#e6ccb3" data-z="19" />
                <path d="M 130 216 L 136 212 L 146 244 L 164 266 L 224 288 L 188 292 L 156 278 L 132 248 L 128 220 Z" fill="#e6ccb3" data-z="20" />
                <path d="M 260 172 L 288 172 L 296 200 L 292 204 L 258 176 Z" fill="#fba903" data-z="21" />
                <path d="M 52 244 L 60 240 L 68 248 L 60 262 L 40 252 L 46 248 Z" fill="#fba903" data-z="22" />
                <path d="M 64 258 L 80 258 L 84 272 L 64 276 L 60 260 Z" fill="#fba903" data-z="23" />
                <path d="M 90 290 L 104 288 L 106 300 L 122 298 L 124 316 L 104 320 L 100 308 L 86 304 L 82 292 Z" fill="#fba903" data-z="24" />
                <path d="M 260 184 L 264 180 L 286 196 L 264 196 L 260 188 Z" fill="#cc7803" data-z="25" />
                <path d="M 70 200 L 78 200 L 82 236 L 92 260 L 84 272 L 80 258 L 60 260 L 68 248 L 60 240 L 40 252 L 54 216 L 68 202 Z" fill="#cc7803" data-z="26" />
                <path d="M 94 276 L 104 274 L 146 302 L 124 316 L 122 300 L 104 300 L 104 288 L 84 292 L 92 278 Z" fill="#cc7803" data-z="27" />
                <path d="M 294 126 L 294 120 L 288 122 Z" fill="#e1d9d2" data-z="28" />
                <path d="M 287 123 L 291 119 L 291 125 Z" fill="#3e597d" data-z="29" />
              </svg>
            </svg>
          </div>
          <span className="font-semibold text-e-text tracking-tight text-lg">
            EISTALT
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={navLinkClass}>{t('nav.home')}</NavLink>
          <NavLink to="/portfolio" className={navLinkClass}>{t('nav.portfolio')}</NavLink>
          <NavLink to="/servicos" className={navLinkClass}>{t('nav.services')}</NavLink>
          <NavLink to="/sobre" className={navLinkClass}>{t('nav.about')}</NavLink>
          <NavLink to="/contato" className="btn btn-primary ml-2">{t('nav.contact')}</NavLink>
        </nav>

        {/* Ações (Idioma + Hamburger) */}
        <div className="flex items-center gap-2 relative">
          {/* Idioma */}
          <button
            onClick={() => setLangOpen(o => !o)}
            className="btn btn-ghost rounded-xl flex items-center gap-2"
            aria-label={t('aria.changeLanguage') || 'Trocar idioma'}
            title={t('aria.changeLanguage') || 'Trocar idioma'}
          >
            <Globe className="w-5 h-5" />
            <span className="hidden sm:inline">{(lang || 'pt').toUpperCase()}</span>
          </button>

          {langOpen && (
            <div className="absolute right-12 top-10 w-32 rounded-xl border border-e-stroke/60 bg-e-panel/95 backdrop-blur p-1 shadow-lg z-50">
              {[
                { code: 'pt', label: 'PT' },
                { code: 'en', label: 'EN' },
                { code: 'it', label: 'IT' },
              ].map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => changeLang(code)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-e-text hover:bg-e-panel/10 ${lang === code ? 'bg-e-panel/10' : ''}`}
                >
                  {label}
                </button>
              ))}
            </div>
          )}

          {/* Mobile menu */}
          <button onClick={() => setOpen(o => !o)} className="md:hidden btn btn-ghost">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      {open && (
        <div className="md:hidden border-t border-e-stroke/60 bg-e-panel/80 backdrop-blur">
          <div className="px-4 py-3 flex flex-col gap-2">
            <NavLink to="/" className={navLinkClass}>{t('nav.home')}</NavLink>
            <NavLink to="/portfolio" className={navLinkClass}>{t('nav.portfolio')}</NavLink>
            <NavLink to="/servicos" className={navLinkClass}>{t('nav.services')}</NavLink>
            <NavLink to="/sobre" className={navLinkClass}>{t('nav.about')}</NavLink>
            <NavLink to="/contato" className="btn btn-primary mt-2">{t('nav.contact')}</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
