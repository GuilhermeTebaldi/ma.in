// src/pages/About.jsx
import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { useTranslation } from 'react-i18next'
import RotatingText from '../components/RotatingText'

export default function About() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      <SectionTitle
        title={t('about.title', 'Sobre a EISTALT')}
        subtitle={t('about.subtitle', 'Missão, visão e valores voltados à inovação e confiança.')}
      />

      <div className="card p-6 space-y-4">
        <p className="text-e-text/80">
          {t('about.mission', 'Missão: criar soluções digitais que geram valor real.')}
        </p>
        <p className="text-e-text/80">
          {t('about.vision', 'Visão: ser referência em produtos sob medida e experiência do usuário.')}
        </p>
        <p className="text-e-text/80">
          {t('about.values', 'Valores: performance, transparência, suporte e resultado.')}
        </p>

        {/* 🌟 Efeito RotatingText */}
       
<div className="mb-8">
  <h2 className="text-[clamp(32px,6vw,72px)] font-extrabold tracking-tight leading-tight">
    <span className="text-white/80">Forma</span>{' '}
    <span className="inline-flex align-middle">
      <span className="
        inline-flex items-center
        rounded-2xl
        px-4 sm:px-6 py-1.5 sm:py-2
        bg-[#4f2bff]  /* roxo vívido */
        shadow-[0_10px_30px_rgba(79,43,255,0.35)]
      ">
        <RotatingText
          texts={['Next.js','React','CSS','Tailwind','C# .NET']}
          mainClassName="text-white font-extrabold tracking-tight"
          staggerFrom="last"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-120%', opacity: 0 }}
          staggerDuration={0.028}
          splitLevelClassName="overflow-hidden pb-0.5"
          transition={{ type: 'spring', damping: 30, stiffness: 420 }}
          rotationInterval={1900}
        />
      </span>
    </span>
  </h2>

  <p className="text-white/70 mt-3 text-base sm:text-lg max-w-2xl">
    valores voltados à inovação e confiança.
  </p>
</div>

      </div>
    </div>
  )
}
