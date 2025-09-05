import React from 'react'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import { MonitorSmartphone, AppWindow, Settings2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className="space-y-12">
      <Hero />

      <section className="mt-6">
        <SectionTitle
          title={t('home.services.title', 'Serviços que aceleram seu negócio')}
          subtitle={t(
            'home.services.subtitle',
            'Do site institucional a aplicações web/mobile completas, com foco em performance e escalabilidade.'
          )}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={MonitorSmartphone}
            title={t('home.cards.web.title', 'Sites Modernos')}
            desc={t(
              'home.cards.web.desc',
              'Landing pages e sites institucionais rápidos, acessíveis e com SEO sólido.'
            )}
            href="/servicos#sites"
          />
          <ServiceCard
            icon={AppWindow}
            title={t('home.cards.apps.title', 'Aplicativos')}
            desc={t(
              'home.cards.apps.desc',
              'Apps web e mobile com UX afiada, integrações e autenticação.'
            )}
            href="/servicos#apps"
          />
          <ServiceCard
            icon={Settings2}
            title={t('home.cards.systems.title', 'Sistemas Personalizados')}
            desc={t(
              'home.cards.systems.desc',
              'Painéis, dashboards e backends sob medida para o seu processo.'
            )}
            href="/servicos#sistemas"
          />
        </div>
      </section>

      <section>
        <div className="card p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-semibold text-lg">
              {t('home.cta.title', 'Pronto para começar?')}
            </h3>
            <p className="text-white/70 text-sm">
              {t(
                'home.cta.subtitle',
                'Conte sua ideia e receba um plano com prazos e orçamento.'
              )}
            </p>
          </div>
          <Link to="/contato" className="btn btn-primary">
            {t('home.cta.button', 'Falar com a EISTALT')}
          </Link>
        </div>
      </section>
    </div>
  )
}
