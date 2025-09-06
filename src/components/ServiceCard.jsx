import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function isExternal(href) {
  return /^https?:\/\//i.test(href)
}

export default function ServiceCard({ icon: Icon, title, desc, href = '#' }) {
  const Content = (
    <div className="card p-5 hover:bg-e-panel/10 transition block group">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-xl bg-e-panel/10 border border-e-stroke/60 grid place-items-center flex-shrink-0">
          {Icon ? <Icon className="w-6 h-6 text-white" /> : <span className="w-6 h-6" />}
        </div>
        <div className="min-w-0">
          <h3 className="text-white font-semibold">{title}</h3>
          <p className="text-e-text/70 text-sm mt-1">{desc}</p>
          <div className="text-e-accent/90 inline-flex items-center gap-2 text-sm mt-3">
            Saiba mais <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  )

  // Link interno (SPA) vs externo
  if (!isExternal(href)) {
    return (
      <Link to={href} className="block">
        {Content}
      </Link>
    )
  }

  return (
    <a href={href} target="_blank" rel="noopener" className="block">
      {Content}
    </a>
  )
}
