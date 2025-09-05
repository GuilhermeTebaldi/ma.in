// src/components/Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="mt-16 border-t border-e-stroke/60 bg-e-panel/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3 text-white/80">
        {/* Sobre */}
        <div>
          <h4 className="text-white font-semibold mb-3">EISTALT</h4>
          <p className="text-sm leading-relaxed">
            {t('footer.description', 'Sistemas digitais sob demanda: sites, apps e soluções completas para potencializar o seu negócio.')}
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">{t('footer.links', 'Links')}</h4>
          <nav className="flex flex-col gap-2">
            <Link to="/portfolio" className="hover:text-white">{t('nav.portfolio')}</Link>
            <Link to="/servicos" className="hover:text-white">{t('nav.services')}</Link>
            <Link to="/sobre" className="hover:text-white">{t('nav.about')}</Link>
            <Link to="/contato" className="hover:text-white">{t('nav.contact')}</Link>
          </nav>
        </div>

        {/* Contato */}
        <div>
          <h4 className="text-white font-semibold mb-3">{t('footer.contact', 'Contato')}</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="https://wa.me/5549991259242" target="_blank" rel="noreferrer">
                {t('footer.whatsappBR', 'WhatsApp Brasil')}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="https://wa.me/393513055041" target="_blank" rel="noreferrer">
                {t('footer.whatsappIT', 'WhatsApp Itália')}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:eistalttecnologia@gmail.com">
                eistalttecnologia@gmail.com
              </a>
            </li>
            <li className="text-xs text-white/60">{t('footer.talkTo', 'Falar com Guilherme Tebaldi')}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-e-stroke/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-xs text-white/60">
          © {new Date().getFullYear()} EISTALT. {t('footer.rights')}
        </div>
      </div>
    </footer>
  )
}
