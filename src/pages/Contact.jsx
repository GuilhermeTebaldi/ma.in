// src/pages/Contact.jsx
import React, { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { Mail, Phone } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)

    try {
      await emailjs.send(
        'service_i3gebhb',     // ✅ Service ID
        'template_78s66kc',    // ✅ Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        'S6ka1uKfI1x50ci7y'    // ✅ Public Key
      )
      alert(t('contact.success', 'Mensagem enviada com sucesso!'))
      setForm({ name: '', email: '', message: '' })
    } catch (error) {
      console.error(error)
      alert(t('contact.error', 'Erro ao enviar mensagem. Tente novamente.'))
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="space-y-6">
      <SectionTitle
        title={t('contact.title')}
        subtitle={t('contact.subtitle', 'Escolha um canal direto ou envie uma mensagem.')}
      />

      <div className="grid gap-6 md:grid-cols-3">
        {/* AÇÃO RÁPIDA */}
        <div className="card p-5 space-y-3">
          <div className="text-white font-semibold">{t('contact.talkNow', 'Fale agora')}</div>
          <div className="grid grid-cols-2 gap-2">
            <a
              className="btn btn-ghost"
              href="https://wa.me/5549991259242"
              target="_blank" rel="noreferrer"
              title={t('contact.whatsappBR.title', 'WhatsApp Brasil')}
            >
              <Phone className="w-4 h-4" />
              <span className="truncate">{t('contact.whatsappBR.short', 'WhatsApp BR')}</span>
            </a>
            <a
              className="btn btn-ghost"
              href="https://wa.me/393513055041"
              target="_blank" rel="noreferrer"
              title={t('contact.whatsappIT.title', 'WhatsApp Itália')}
            >
              <Phone className="w-4 h-4" />
              <span className="truncate">{t('contact.whatsappIT.short', 'WhatsApp IT')}</span>
            </a>
          </div>

          <a
            className="btn btn-ghost w-full justify-start"
            href="mailto:eistalttecnologia@gmail.com"
            title={t('contact.emailTitle', 'Enviar e-mail')}
          >
            <Mail className="w-4 h-4" />
            eistalttecnologia@gmail.com
          </a>

          <div className="text-white/70 text-xs">
            {t('contact.personNote', 'Contato: Guilherme Tebaldi')}
          </div>
        </div>

        {/* FORMULÁRIO ENXUTO */}
        <form
          className="card p-5 space-y-3 md:col-span-2"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="text-xs text-white/70">{t('contact.name')}</label>
              <input
                className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-e-accent/60"
                name="name" value={form.name} onChange={update} placeholder={t('contact.placeholders.name', 'Seu nome')}
                required
              />
            </div>
            <div>
              <label className="text-xs text-white/70">{t('contact.email')}</label>
              <input
                className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-e-accent/60"
                name="email" type="email" value={form.email} onChange={update} placeholder={t('contact.placeholders.email', 'voce@email.com')}
                required
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-white/70">{t('contact.message')}</label>
            <textarea
              className="mt-1 min-h-[110px] w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-e-accent/60"
              name="message" value={form.message} onChange={update} placeholder={t('contact.placeholders.message', 'Conte sua ideia em poucas linhas...')}
              required
            />
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="text-white/50 text-xs">
              {t('contact.sla', 'Respondemos rápido em horário comercial.')}
            </div>
            <button className="btn btn-primary" disabled={sending}>
              {sending ? t('contact.sending', 'Enviando...') : t('contact.send')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
