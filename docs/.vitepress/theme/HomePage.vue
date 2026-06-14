<script setup lang="ts">
import { withBase } from 'vitepress'
import AiSearch from './AiSearch.vue'
import SupportTicketForm from './SupportTicketForm.vue'

const guideLinks = [
  { title: 'SyntheticFi Overview', desc: 'What it is, who uses it, and key concepts', path: '/core/overview' },
  { title: 'Getting started', desc: 'Onboarding for advisors and investors', path: '/core/getting-started' },
  { title: 'FAQ', desc: 'Quick answers to common questions', path: '/core/faq' },
  { title: 'Admin guide', desc: 'Firm settings, roles, and compliance', path: '/core/admin-guide' },
  { title: "What's new", desc: 'Release notes and product updates', path: '/core/whats-new' },
  { title: 'Troubleshooting', desc: 'Resolve linking, margin, and dashboard issues', path: '/core/troubleshooting' },
]

const apiLinks = [
  { title: 'API overview', desc: 'REST concepts, webhooks, and quick start', path: '/platform/api-overview' },
  { title: 'Authentication', desc: 'OAuth, API keys, and scopes', path: '/platform/authentication' },
  { title: 'API reference', desc: 'Endpoints, payloads, and error codes', path: '/platform/api-reference' },
]

const integrationLinks = [
  { title: 'Integrations overview', desc: 'Data flow and connection methods', path: '/integrations/overview' },
  { title: 'Brokerages', desc: 'IBKR, Schwab, Fidelity, and more', path: '/integrations/brokerages' },
  { title: 'Custodians', desc: 'Institutional setup and rep codes', path: '/integrations/custodians' },
]

function href(path: string) {
  return withBase(path)
}
</script>

<template>
  <div class="sf-home">
    <!-- Hero -->
    <header class="sf-hero">
      <div class="sf-hero-glow" />
      <div class="sf-hero-inner">
        <p class="sf-hero-eyebrow">Documentation</p>
        <h1>
          Access portfolio liquidity
          <span>without selling your investments</span>
        </h1>
        <p class="sf-hero-sub">
          Guides, API references, and integrations for advisors, investors, and partners
          building on SyntheticFi.
        </p>
        <AiSearch />
        <div class="sf-hero-actions">
          <a :href="href('/core/getting-started')" class="sf-btn-primary">Get started</a>
          <a :href="href('/core/overview')" class="sf-btn-secondary">Read overview</a>
        </div>
      </div>
    </header>

    <!-- Doc sections -->
    <section class="sf-sections">
      <div class="sf-sections-inner">
        <div class="sf-section-col">
          <div class="sf-section-head">
            <span class="sf-section-icon guides">📘</span>
            <div>
              <h2>Guides</h2>
              <p>Product concepts, onboarding, and day-to-day operations</p>
            </div>
          </div>
          <ul class="sf-link-cards">
            <li v-for="link in guideLinks" :key="link.path">
              <a :href="href(link.path)">
                <strong>{{ link.title }}</strong>
                <span>{{ link.desc }}</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="sf-section-col">
          <div class="sf-section-head">
            <span class="sf-section-icon api">⚡</span>
            <div>
              <h2>API reference</h2>
              <p>Build integrations with our REST API and webhooks</p>
            </div>
          </div>
          <ul class="sf-link-cards">
            <li v-for="link in apiLinks" :key="link.path">
              <a :href="href(link.path)">
                <strong>{{ link.title }}</strong>
                <span>{{ link.desc }}</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="sf-section-col">
          <div class="sf-section-head">
            <span class="sf-section-icon integrations">🔗</span>
            <div>
              <h2>Integrations</h2>
              <p>Connect brokerages, custodians, and partner systems</p>
            </div>
          </div>
          <ul class="sf-link-cards">
            <li v-for="link in integrationLinks" :key="link.path">
              <a :href="href(link.path)">
                <strong>{{ link.title }}</strong>
                <span>{{ link.desc }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Support -->
    <section class="sf-support">
      <div class="sf-support-inner">
        <div class="sf-support-copy">
          <h2>Need help?</h2>
          <p>
            Submit a support ticket and our team will respond within one business day.
            Every documentation page also includes a floating feedback widget — your
            👍 👎 ratings help us improve content.
          </p>
          <div class="sf-support-links">
            <a :href="href('/support/feature-requests')" class="sf-btn-secondary">
              Request a feature
            </a>
            <a :href="href('/support/contact-support')" class="sf-text-link">Contact support →</a>
          </div>
        </div>
        <div class="sf-support-form">
          <h3>Create a support ticket</h3>
          <SupportTicketForm compact />
        </div>
      </div>
    </section>

    <!-- Analytics note -->
    <section class="sf-analytics-banner">
      <div class="sf-analytics-banner-inner">
        <div>
          <h3>Documentation analytics</h3>
          <p>
            Track page views, feedback sentiment, and support trends from the
            <a :href="href('/admin/analytics')">analytics dashboard</a>.
          </p>
        </div>
        <a :href="href('/admin/analytics')" class="sf-btn-secondary">View analytics</a>
      </div>
    </section>
  </div>
</template>
