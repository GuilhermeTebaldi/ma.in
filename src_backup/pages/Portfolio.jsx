import React, { useMemo, useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import PortfolioCard from '../components/PortfolioCard'
import PortfolioFilters from '../components/PortfolioFilters'
import { useTranslation } from 'react-i18next'

// ⚠️ IMPORT COM EXTENSÃO .js GARANTE RESOLUÇÃO EM ESM
import { projects as ALL } from '../data/projects.js'

export default function Portfolio() {
  const { t } = useTranslation()
  const [active, setActive] = useState('all')
  const [query, setQuery] = useState('')

  // DEBUG: exibe no console e na tela a contagem
  console.log('Portfolio > projects length =', ALL?.length, ALL)

  const list = useMemo(() => {
    let arr = Array.isArray(ALL) ? ALL : []
    if (active !== 'all') arr = arr.filter(p => p.type === active)
    if (query.trim()) {
      const q = query.toLowerCase()
      arr = arr.filter(p =>
        p.title?.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q) ||
        (p.tags || []).some(t => t.toLowerCase().includes(q))
      )
    }
    return arr
  }, [active, query])

  return (
    <div className="space-y-6">
      <SectionTitle
        title={t('portfolio.title', 'Portfólio')}
        subtitle={t('portfolio.diag', 'Diagnóstico: recebi {{count}} projetos do data.', { count: ALL?.length ?? 0 })}
      />

      <PortfolioFilters
        active={active}
        onChange={setActive}
        query={query}
        onQuery={setQuery}
      />

      {/* se por algum motivo vier vazio, mostramos uma pista visual */}
      {(!ALL || ALL.length === 0) && (
        <div className="card p-4 text-sm text-white/80">
          <div><strong>{t('portfolio.empty.title', 'Nada carregado do data.')}</strong></div>
          <div>
            {t('portfolio.empty.hint', 'Verifique se existe {{path}} e exporta {{exportName}} nomeado.', {
              path: 'src/data/projects.js',
              exportName: 'projects'
            })}
          </div>
          <div className="mt-2">
            {t('portfolio.empty.importPath', 'Caminho importado em {{file}}: {{importPath}}', {
              file: 'Portfolio.jsx',
              importPath: '../data/projects.js'
            })}
          </div>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(p => <PortfolioCard key={p.id} project={p} />)}
      </div>

      {list.length === 0 && ALL?.length > 0 && (
        <div className="text-white/60 text-sm">
          {t('portfolio.noMatches', 'Nenhum projeto bate com os filtros/busca atuais.')}
        </div>
      )}
    </div>
  )
}
