// src/components/ServiceCard.jsx
import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ icon: Icon, title, desc, href }) {
  return (
    <a href={href} className="card p-5 hover:bg-white/5 transition block group">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 grid place-items-center flex-shrink-0">
          {Icon ? <Icon className="w-6 h-6 text-white" /> : <span className="w-6 h-6" />}
        </div>
        <div className="min-w-0">
          <h3 className="text-white font-semibold">{title}</h3>
          <p className="text-white/70 text-sm mt-1">{desc}</p>
          <div className="text-e-accent/90 inline-flex items-center gap-2 text-sm mt-3">
            Saiba mais <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </a>
  )
}
