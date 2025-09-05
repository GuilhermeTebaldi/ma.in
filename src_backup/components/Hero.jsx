// src/components/Hero.jsx
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import MiniPortfolioPreview from './MiniPortfolioPreview'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden rounded-2xl border border-e-stroke/60 bg-gradient-to-b from-e-panel/80 to-e-panel/40 shadow-e-md">
      <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-e-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-e-primary/20 blur-3xl" />

      <div className="px-6 sm:px-10 py-12 sm:py-16 grid gap-6 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight text-e-text">
            {t('hero.title')}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-e-accent to-e-primary">
              {t('hero.highlight', 'Sites, Apps & Sistemas Sob Medida')}
            </span>
          </h1>

          <p className="text-e-text/80 mt-4">
            {t('hero.subtitle')}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link to="/contato" className="btn btn-primary">
              {t('hero.primaryCta')} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/portfolio" className="btn btn-ghost">{t('hero.secondaryCta')}</Link>
          </div>

          <ul className="mt-6 grid gap-2 text-e-text/70 text-sm">
            <li>✅ {t('hero.bullets.performance', 'Performance & SEO')}</li>
            <li>✅ {t('hero.bullets.support', 'Suporte dedicado')}</li>
            <li>✅ {t('hero.bullets.tech', 'Tecnologias modernas')}</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card p-4"
        >
          <MiniPortfolioPreview />
          <p className="text-e-text/70 text-sm mt-3">
            {t('hero.previewNote', 'Veja nossos trabalhos com filtros por tipo (site, app, sistema) e detalhes de cada projeto.')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
