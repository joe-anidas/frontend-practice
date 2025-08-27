import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, Shield, Zap, Github, Twitter, Mail } from "lucide-react";

// A single-file, production-ready React landing page using Tailwind CSS + Framer Motion
// Drop this component into a Vite/CRA/Next.js project with Tailwind configured.
// Tailwind: https://tailwindcss.com/docs/guides/vite
// Framer Motion: npm i framer-motion lucide-react

const features = [
  {
    icon: Sparkles,
    title: "Delightful UI",
    desc: "Crisp typography, buttery animations, and a11y-first components.",
  },
  {
    icon: Zap,
    title: "Blazing Fast",
    desc: "Optimized for performance with small bundle size and smart loading.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    desc: "Best practices baked in: CSP-ready, sanitization hooks, and more.",
  },
];

const tiers = [
  {
    name: "Starter",
    price: "$0",
    blurb: "For trying things out",
    perks: ["Basic components", "Community support", "MIT license"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19/mo",
    blurb: "Everything you need",
    perks: ["All components", "Email support", "Advanced examples"],
    highlighted: true,
  },
  {
    name: "Team",
    price: "$49/mo",
    blurb: "For serious builders",
    perks: ["Priority support", "Design tokens", "Team seats"],
    highlighted: false,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100 selection:bg-indigo-500/30">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/40 border-b border-white/5">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400" />
            <span className="text-lg font-bold tracking-tight">NovaKit</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a className="hover:text-white transition" href="#features">Features</a>
            <a className="hover:text-white transition" href="#pricing">Pricing</a>
            <a className="hover:text-white transition" href="#faq">FAQ</a>
          </div>
          <button className="inline-flex items-center gap-1 rounded-2xl bg-white/10 px-3 py-1.5 text-sm font-medium text-white ring-1 ring-inset ring-white/10 hover:bg-white/15">
            Get Started <ArrowRight className="h-4 w-4" />
          </button>
        </nav>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="relative grid place-items-center pt-16 pb-12 sm:pt-24 sm:pb-16">
          <motion.div
            className="text-center max-w-3xl"
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={fadeUp.transition}
          >
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              Now in v2.1 — new components & hooks
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
              Build beautiful apps
              <span className="block bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                faster than ever
              </span>
            </h1>
            <p className="mt-5 text-slate-300">
              NovaKit is a lightweight React starter with headless components, elegant
              defaults, and delightful motion. Ship polished UIs in hours, not weeks.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-slate-900 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 focus:ring-offset-slate-900"
              >
                Start Free <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold ring-1 ring-white/10 hover:bg-white/10"
              >
                View on GitHub <Github className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Decorative gradient */}
          <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-24 -z-10 overflow-hidden">
            <div className="mx-auto h-[28rem] w-[56rem] bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-cyan-400/20 blur-3xl" />
          </div>
        </section>

        {/* Logos */}
        <section className="py-6">
          <p className="text-center text-xs uppercase tracking-wider text-slate-400">
            Loved by teams at
          </p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center gap-6 opacity-70">
            {["Orbit","Nebula","Pulse","Glide","Lumen","Sierra"].map((brand)=> (
              <div key={brand} className="flex items-center justify-center text-sm font-medium rounded-xl border border-white/5 bg-white/5 py-3">
                {brand}
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-16 sm:py-20">
          <motion.h2
            className="text-center text-3xl sm:text-4xl font-bold"
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            viewport={{ once: true, margin: "-100px" }}
          >
            Everything you need to ship
          </motion.h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:shadow-lg hover:shadow-indigo-500/10"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-cyan-400/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{desc}</p>
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-tr from-indigo-500/10 via-fuchsia-500/10 to-cyan-400/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-16 sm:py-20">
          <motion.h2
            className="text-center text-3xl sm:text-4xl font-bold"
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            viewport={{ once: true, margin: "-100px" }}
          >
            Simple pricing
          </motion.h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {tiers.map((tier) => (
              <motion.div
                key={tier.name}
                className={
                  "relative rounded-2xl border p-6 bg-white/5 border-white/5 " +
                  (tier.highlighted ? "ring-2 ring-indigo-400" : "")
                }
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold">{tier.name}</h3>
                  <span className="text-sm text-slate-300">{tier.blurb}</span>
                </div>
                <div className="mt-4">
                  <span className="text-4xl font-extrabold">{tier.price}</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" /> {perk}
                    </li>
                  ))}
                </ul>
                <button
                  className={
                    "mt-6 w-full rounded-xl px-4 py-2 text-sm font-semibold ring-1 ring-white/10 " +
                    (tier.highlighted
                      ? "bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 text-slate-900"
                      : "hover:bg-white/10")
                  }
                >
                  Choose {tier.name}
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/10 to-cyan-400/10 p-8 sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-bold">Ready to craft something exceptional?</h3>
            <p className="mt-2 text-slate-300">
              Install NovaKit, connect your data, and publish your next big idea today.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-slate-900 bg-white hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                Get NovaKit <ArrowRight className="h-4 w-4" />
              </button>
              <a href="#mail" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold ring-1 ring-white/10 hover:bg-white/10">
                Contact sales <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 sm:py-20">
          <h2 className="text-center text-3xl sm:text-4xl font-bold">Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/5 bg-white/5">
            {[
              {
                q: "Is this really production-ready?",
                a: "Yes. It follows accessible patterns, uses semantic markup, and embraces progressive enhancement.",
              },
              {
                q: "What do I need to use it?",
                a: "A React project with Tailwind set up. The component itself is framework-agnostic (Vite, CRA, Next.js).",
              },
              {
                q: "Can I customize the styles?",
                a: "Absolutely. Swap the gradients, fonts, and spacing in Tailwind to match your brand.",
              },
            ].map((item, i) => (
              <details key={i} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-left text-base font-medium">
                  {item.q}
                  <span className="transition-transform group-open:rotate-180">▾</span>
                </summary>
                <p className="mt-2 text-sm text-slate-300">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-400 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} NovaKit. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="#">Docs</a>
            <a className="hover:text-white" href="#">Changelog</a>
            <a className="hover:text-white" href="#"><Twitter className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
