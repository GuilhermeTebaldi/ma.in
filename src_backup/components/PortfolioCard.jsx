// src/components/PortfolioCard.jsx
import React from 'react'
import { ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'

// Gera um SVG de fallback com o texto traduzido
function makeFallbackCover(text = 'Sem capa') {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900">
  <defs>
    <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
      <stop stop-color="#141b2d" offset="0"/>
      <stop stop-color="#102842" offset="1"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
    font-family="system-ui, sans-serif" font-size="36" fill="rgba(255,255,255,.6)">${text}</text>
</svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

export default function PortfolioCard({ project }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'pt'

  // title/description/tags podem vir como string (modelo antigo) ou objeto {pt,en,it} (modelo novo)
  const pick = (value) => {
    if (value == null) return ''
    if (typeof value === 'string') return value
    return value[lang] ?? value.pt ?? Object.values(value)[0] ?? ''
  }

  const title        = pick(project.title)
  const description  = pick(project.description)
  const tags         = Array.isArray(project.tags) ? project.tags : (project.tags?.[lang] ?? project.tags?.pt ?? [])
  const cover        = project.cover
  const url          = project.url
  const type         = String(project.type || '').toLowerCase()

  // Label traduzido do tipo (usa as mesmas chaves dos filtros)
  const typeLabel = {
    site:      t('filters.site', 'Site'),
    ecommerce: t('filters.ecommerce', 'E-commerce'),
    sistema:   t('filters.sistema', 'Sistema'),
    jogo:      t('filters.jogo', 'Jogo'),
  }[type] ?? type

  const fallbackCover = makeFallbackCover(t('portfolio.noCover', 'Sem capa'))

  function onImgError(e) {
    e.currentTarget.src = fallbackCover
  }

  return (
    <div className="card overflow-hidden group">
      {/* capa */}
      <div className="aspect-video border-b border-white/10 relative">
        {cover ? (
          <img
            src={cover}
            alt={title}
            loading="lazy"
            onError={onImgError}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            referrerPolicy="no-referrer"
          />
        ) : (
          <img
            src={fallbackCover}
            alt={t('portfolio.noCover', 'Sem capa')}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full bg-black/40 border border-white/10 text-white/80 capitalize">
          {typeLabel}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-white font-semibold">{title}</h3>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost px-3 py-2 text-xs"
              title={t('portfolio.openProject', 'Abrir projeto')}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        {description && (
          <p className="text-white/70 text-sm mt-1">{description}</p>
        )}

        {Array.isArray(tags) && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full border border-white/10 text-white/70 bg-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {!url && (
          <div className="mt-3 text-xs text-white/60">
            {t('portfolio.linkSoon', 'Link em breve.')}
          </div>
        )}
      </div>
    </div>
  )
}
