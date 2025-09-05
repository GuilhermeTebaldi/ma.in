// src/components/MiniPortfolioPreview.jsx
import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'

const fallback =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop stop-color="%23141b2d" offset="0"/><stop stop-color="%23102842" offset="1"/></linearGradient></defs><rect width="100%" height="100%" fill="url(%23g)"/></svg>'

export default function MiniPortfolioPreview() {
  // usa os 5 projetos, mas mostra 1 por vez no slide
  const items = useMemo(() => projects.slice(0, 5), [])
  const [idx, setIdx] = useState(0)
  const [open, setOpen] = useState(false)

  // autoplay suave
  useEffect(() => {
    const id = setInterval(() => setIdx((p) => (p + 1) % items.length), 3500)
    return () => clearInterval(id)
  }, [items.length])

  const current = items[idx]

  // handlers
  const onImgError = (e) => (e.currentTarget.src = fallback)
  const next = () => setIdx((p) => (p + 1) % items.length)
  const prev = () => setIdx((p) => (p - 1 + items.length) % items.length)

  return (
    <>
      {/* CARD */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
        {/* área do slide */}
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={current?.id || 'ph'}
              src={current?.cover || fallback}
              onError={onImgError}
              alt={current?.title || 'Projeto'}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.03, opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>

          {/* gradiente + infos */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          <div className="absolute left-3 right-3 bottom-3 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <div className="text-[11px] text-white/70 leading-none">Preview</div>
              <div className="text-white font-medium truncate">{current?.title || 'Portfólio Interativo'}</div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="px-2 py-1 rounded-md bg-black/40 border border-white/10 text-white/80 text-xs hover:bg-black/60"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="px-2 py-1 rounded-md bg-black/40 border border-white/10 text-white/80 text-xs hover:bg-black/60"
              >
                ›
              </button>
              <button
                onClick={() => setOpen(true)}
                className="px-2 py-1 rounded-md bg-e-accent/20 text-white text-xs border border-white/10 hover:bg-e-accent/30"
                title="Ampliar"
              >
                Ampliar
              </button>
            </div>
          </div>

          {/* efeito parallax leve no hover */}
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* CTA */}
        <div className="text-center mt-3">
          <div className="text-white/70 text-sm leading-none">Portfólio Interativo</div>
          <Link to="/portfolio" className="btn btn-primary mt-3 inline-block">
            Ver Portfólio
          </Link>
        </div>
      </div>

      {/* LIGHTBOX / AMPLIAR */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 grid place-items-center p-4">
              <motion.div
                className="w-full max-w-5xl rounded-2xl overflow-hidden border border-white/10 bg-e-panel"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div className="relative aspect-video bg-black">
                  <img
                    src={current?.cover || fallback}
                    onError={onImgError}
                    alt={current?.title}
                    className="h-full w-full object-contain bg-black"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute top-3 right-3 h-9 w-9 grid place-items-center rounded-full bg-black/60 border border-white/10 text-white/80 hover:bg-black/80"
                    aria-label="Fechar"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <div className="text-white font-semibold">{current?.title}</div>
                    <div className="text-white/70 text-sm">{current?.description}</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={prev}
                      className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 text-sm"
                    >
                      Anterior
                    </button>
                    <button
                      onClick={next}
                      className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 text-sm"
                    >
                      Próximo
                    </button>

                    {current?.url && (
                      <a
                        href={current.url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary inline-flex items-center gap-2"
                      >
                        Abrir projeto <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
