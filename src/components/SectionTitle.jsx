import React from 'react'

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="max-w-3xl mb-8">
      <h2 className="text-2xl sm:text-3xl font-semibold text-white">{title}</h2>
      {subtitle && <p className="text-white/70 mt-2">{subtitle}</p>}
    </div>
  )
}
