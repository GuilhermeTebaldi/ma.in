import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { useTranslation } from 'react-i18next'

export default function Services() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      <SectionTitle
        title={t('services.title')}
        subtitle={t('services.subtitle', 'Clareza, performance e foco no resultado.')}
      />

      <div className="card p-6 space-y-3">
        <h3 id="sites" className="text-white font-semibold">
          {t('services.web')}
        </h3>
        <p className="text-white/80 text-sm">
          {t('services.webDesc', 'Institucionais, landing pages, SEO, blogs.')}
        </p>

        <h3 id="apps" className="text-white font-semibold mt-6">
          {t('services.app')}
        </h3>
        <p className="text-white/80 text-sm">
          {t('services.appDesc', 'Aplicações web/mobile com autenticação e integrações.')}
        </p>

        <h3 id="sistemas" className="text-white font-semibold mt-6">
          {t('services.custom')}
        </h3>
        <p className="text-white/80 text-sm">
          {t('services.customDesc', 'Portais, painéis admin, e-commerce e soluções sob medida.')}
        </p>
      </div>
    </div>
  )
}
