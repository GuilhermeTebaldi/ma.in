import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      <SectionTitle
        title={t('about.title', 'Sobre a EISTALT')}
        subtitle={t('about.subtitle', 'Missão, visão e valores voltados à inovação e confiança.')}
      />
      <div className="card p-6 space-y-3">
        <p className="text-white/80">{t('about.mission', 'Missão: criar soluções digitais que geram valor real.')}</p>
        <p className="text-white/80">{t('about.vision', 'Visão: ser referência em produtos sob medida e experiência do usuário.')}</p>
        <p className="text-white/80">{t('about.values', 'Valores: performance, transparência, suporte e resultado.')}</p>
      </div>
    </div>
  )
}
