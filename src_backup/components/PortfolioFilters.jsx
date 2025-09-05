// src/components/PortfolioFilters.jsx
import React from 'react'
import { useTranslation } from 'react-i18next'

const FILTERS = (t) => [
  { key: 'all',       label: t('filters.all', 'Todos') },
  { key: 'site',      label: t('filters.site', 'Site') },
  { key: 'ecommerce', label: t('filters.ecommerce', 'E-commerce') },
  { key: 'sistema',   label: t('filters.sistema', 'Sistema') },
  { key: 'jogo',      label: t('filters.jogo', 'Jogo') },
]

export default function PortfolioFilters({ active, onChange, query, onQuery }) {
  const { t } = useTranslation()
  const filters = FILTERS(t)

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2">
        {filters.map(f => (
          <button
            key={f.key}
            onClick={() => onChange(f.key)}
            className={`px-3 py-2 rounded-xl text-sm border transition ${
              active === f.key
                ? 'bg-white/10 text-white border-white/20'
                : 'bg-white/5 text-white/80 hover:bg-white/10 border-white/10'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="relative">
        <input
          value={query}
          onChange={e => onQuery(e.target.value)}
          placeholder={t('filters.searchPlaceholder', 'Buscar projeto...')}
          className="w-full sm:w-72 rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:border-e-accent/60"
        />
      </div>
    </div>
  )
}
