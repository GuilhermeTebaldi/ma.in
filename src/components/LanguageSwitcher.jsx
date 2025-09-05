import React, { useState, useEffect } from 'react'
import { Globe } from 'lucide-react'
import i18n, { setLanguage } from '../i18n'

const LANGS = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'it', label: 'IT' }
]

export default function LanguageSwitcher({ compact = false }) {
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState(i18n.language || 'pt')

  useEffect(() => {
    const handler = (lng) => setLang(lng)
    i18n.on('languageChanged', handler)
    return () => i18n.off('languageChanged', handler)
  }, [])

  function choose(code) {
    setLanguage(code)
    setOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="btn btn-ghost rounded-xl flex items-center gap-2"
        aria-label="Trocar idioma"
        title="Trocar idioma"
      >
        <Globe className="w-5 h-5" />
        {!compact && <span className="hidden sm:inline">{lang.toUpperCase()}</span>}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-32 rounded-xl border border-e-stroke/60 bg-e-panel/95 backdrop-blur p-1 shadow-lg z-50">
          {LANGS.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => choose(code)}
              className={`w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 ${lang === code ? 'bg-white/5' : ''}`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
