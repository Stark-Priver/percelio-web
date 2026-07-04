'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code, Terminal, ArrowRight, Key, Webhook, Lock, BookOpen, Database, Globe, MessageCircle, Package, BarChart3 } from 'lucide-react';
import Link from 'next/link';

const endpoints = [
  {
    method: 'POST',
    path: '/api/v1/orders',
    desc: 'Create a new shipment order with pickup and delivery details.',
    auth: 'API Key',
  },
  {
    method: 'GET',
    path: '/api/v1/orders/:id',
    desc: 'Retrieve order details, status, and tracking information.',
    auth: 'API Key',
  },
  {
    method: 'GET',
    path: '/api/v1/orders/:id/track',
    desc: 'Get real-time tracking data and courier location.',
    auth: 'API Key',
  },
  {
    method: 'POST',
    path: '/api/v1/orders/:id/cancel',
    desc: 'Cancel a pending or confirmed order.',
    auth: 'API Key',
  },
  {
    method: 'GET',
    path: '/api/v1/carriers',
    desc: 'List all active carriers with coverage areas and rates.',
    auth: 'API Key',
  },
  {
    method: 'GET',
    path: '/api/v1/carriers/:id/rates',
    desc: 'Get rate card and pricing for a specific carrier.',
    auth: 'API Key',
  },
  {
    method: 'GET',
    path: '/api/v1/rates/quote',
    desc: 'Get instant quotes across carriers for a route.',
    auth: 'API Key',
  },
  {
    method: 'POST',
    path: '/api/v1/webhooks',
    desc: 'Register a webhook URL for order status events.',
    auth: 'Secret Key',
  },
];

const webhookEvents = [
  { event: 'order.created', desc: 'A new order has been placed' },
  { event: 'order.confirmed', desc: 'Order has been confirmed by the carrier' },
  { event: 'order.picked_up', desc: 'Parcel has been picked up by the courier' },
  { event: 'order.in_transit', desc: 'Parcel is in transit to destination' },
  { event: 'order.delivered', desc: 'Parcel has been delivered successfully' },
  { event: 'order.cancelled', desc: 'Order has been cancelled' },
  { event: 'order.cod_paid', desc: 'COD payment has been confirmed' },
  { event: 'courier.location', desc: 'Real-time courier location update' },
];

const integrations = [
  {
    icon: Globe,
    title: 'E-Commerce Platforms',
    desc: 'Integrate Pacelio with WooCommerce, Shopify, and custom online stores. Automate order creation and tracking updates directly from your checkout.',
  },
  {
    icon: Database,
    title: 'ERP & Accounting Systems',
    desc: 'Connect with SAP, Oracle, Odoo, and local ERP systems. Sync shipments, invoices, and financial data automatically.',
  },
  {
    icon: MessageCircle,
    title: 'Communication Tools',
    desc: 'Integrate with Slack, Telegram, and WhatsApp for real-time delivery alerts. Notify your team and customers automatically.',
  },
  {
    icon: Package,
    title: 'Warehouse Management',
    desc: 'Connect with WMS platforms to automate dispatch triggers. When inventory is picked, a Pacelio courier is dispatched automatically.',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    desc: 'Export delivery data to Power BI, Tableau, or Google Data Studio. Build custom dashboards with real-time logistics metrics.',
  },
  {
    icon: Code,
    title: 'Custom Integrations',
    desc: 'RESTful API with comprehensive documentation. SDK libraries for Python, JavaScript, PHP, and Dart available for rapid development.',
  },
];

export default function ApiDocsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)]">
        {/* Hero */}
      <section className="pt-32 pb-16 container-px max-content">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] text-xs font-bold uppercase tracking-wider mb-6">
            <Terminal className="w-3.5 h-3.5" />
            Developers
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--foreground)] mb-6 leading-tight">
            API & <span className="text-[var(--orange)]">Integrations</span>
          </h1>
          <p className="text-lg text-[var(--muted)] mb-10 max-w-2xl leading-relaxed">
            Connect your software with Pacelio's logistics network. Create shipments, track parcels, compare rates, and receive real-time updates — all through our RESTful API and webhooks.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#endpoints" className="btn btn-primary btn-lg">
              Explore API <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn btn-ghost btn-lg">
              Request API Key <Key className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* API Overview */}
      <section className="py-16 bg-[var(--bg-soft)]">
        <div className="max-content container-px">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Lock, title: 'Secure Authentication', desc: 'All API requests require an API key passed via the Authorization header. Keys are tied to your account with granular permissions.' },
              { icon: Webhook, title: 'Real-Time Webhooks', desc: 'Subscribe to order events and receive HTTP callbacks instantly. Never poll for status updates again — we push them to you.' },
              { icon: BookOpen, title: 'Comprehensive Docs', desc: 'Every endpoint is documented with request/response examples, error codes, and rate limits. SDK libraries for Python, JS, PHP, and Dart.' },
            ].map((item, i) => (
              <div key={i} className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">{item.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section id="endpoints" className="py-16 container-px max-content">
        <div className="max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">API <span className="text-[var(--orange)]">Endpoints</span></h2>
            <p className="text-[var(--muted)]">Base URL: <code className="bg-[var(--orange-light)] px-3 py-1 rounded-lg text-sm font-mono text-[var(--orange)]">https://api.pacelio.com</code></p>
          </div>

          <div className="space-y-3">
            {endpoints.map((ep, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white dark:bg-white/5 border border-[var(--border)] hover:border-[var(--orange)]/30 transition-all flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-3 md:w-72 flex-shrink-0">
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${
                    ep.method === 'GET' ? 'bg-green-500/10 text-green-600' : 'bg-[var(--orange)]/10 text-[var(--orange)]'
                  }`}>
                    {ep.method}
                  </span>
                  <code className="text-sm font-mono text-[var(--foreground)] break-all">{ep.path}</code>
                </div>
                <p className="text-sm text-[var(--muted)] flex-1">{ep.desc}</p>
                <span className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-wider whitespace-nowrap">{ep.auth}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webhooks */}
      <section className="py-16 bg-[var(--bg-soft)]">
        <div className="max-content container-px">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Webhook <span className="text-[var(--orange)]">Events</span></h2>
            <p className="text-[var(--muted)] mb-10">Subscribe to real-time events and receive HTTP POST callbacks to your endpoint. Automatic retry with exponential backoff for failed deliveries.</p>

            <div className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl overflow-hidden">
              <div className="grid grid-cols-2 gap-0">
                {webhookEvents.map((ev, i) => (
                  <div key={i} className={`p-5 flex items-start gap-3 ${i % 2 === 0 ? 'border-r border-[var(--border)]' : ''} ${i < 6 ? 'border-b border-[var(--border)]' : ''}`}>
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <div>
                      <code className="text-sm font-mono text-[var(--foreground)] font-bold">{ev.event}</code>
                      <p className="text-xs text-[var(--muted)] mt-1">{ev.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Code */}
      <section className="py-16 container-px max-content">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Quick <span className="text-[var(--orange)]">Start</span></h2>
          <p className="text-[var(--muted)] mb-10">Create a shipment and track it with just a few lines of code.</p>

          <div className="bg-[var(--bg-soft)] border border-[var(--border)] rounded-2xl overflow-hidden">
            <div className="flex border-b border-[var(--border)]">
              {['JavaScript', 'Python', 'PHP', 'Dart'].map((lang, i) => (
                <button key={i} className={`px-5 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${i === 0 ? 'bg-[var(--orange)] text-white' : 'text-[var(--muted)] hover:text-[var(--foreground)]'}`}>
                  {lang}
                </button>
              ))}
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm font-mono text-[var(--foreground)] leading-relaxed whitespace-pre">
{`const pacelio = new PacelioClient({
  apiKey: 'sk_live_your_api_key_here'
});

// Create a shipment
const order = await pacelio.orders.create({
  pickup: {
    city: 'Mbeya',
    street: '123 Mbalizi Road',
    contact: 'John Doe',
    phone: '+255712345678'
  },
  delivery: {
    city: 'Dar es Salaam',
    street: '45 Kariakoo Street',
    contact: 'Jane Smith',
    phone: '+255765432109'
  },
  package: {
    description: 'Documents',
    weight: 0.5,
    size: 'small'
  }
});

console.log('Tracking:', order.trackingNumber);

// Track in real-time
const live = await pacelio.orders.track(order.id);
console.log('Status:', live.status);
console.log('Courier Position:', live.courierLocation);`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 bg-[var(--bg-soft)]">
        <div className="max-content container-px">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Platform <span className="text-[var(--orange)]">Integrations</span></h2>
            <p className="text-[var(--muted)] max-w-xl mx-auto">Connect Pacelio with the tools you already use. Our API and webhooks make integration straightforward.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((item, i) => (
              <div key={i} className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">{item.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 container-px max-content">
        <div className="bg-gradient-to-br from-[var(--orange-tint)] to-[var(--bg-soft)] border border-[var(--orange)]/20 rounded-[3rem] p-12 md:p-16 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[var(--orange)]/10 text-[var(--orange)] flex items-center justify-center mx-auto mb-6">
            <Key className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Get Your API Key</h2>
          <p className="text-[var(--muted)] max-w-lg mx-auto mb-10">
            Ready to integrate? Request your API key today and get access to full documentation, sandbox environment, and developer support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Request API Key <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn btn-ghost btn-lg">
              Contact Developer Relations
            </Link>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </>
  );
}
