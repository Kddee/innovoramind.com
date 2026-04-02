import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { ShieldCheck, Compass, Scale, Globe } from 'lucide-react';

import walidaImg   from '@/assets/advisors/advisor-1.png';
import joeImg      from '@/assets/advisors/advisor-2.png';
import ezinneImg   from '@/assets/advisors/advisor-6.jpeg';
import firasImg    from '@/assets/advisors/Dr firas.jpeg';
import tianshengImg from '@/assets/advisors/tiansheng.png';
import katarzynaImg from '@/assets/advisors/katarzyna.png';

/* ─────────────────────────── Board mandate pillars ─────────────────────────── */
const mandatePillars = [
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    body: 'Monitoring the sanctity of the peer-review process through rigorous double-blind evaluation protocols and continuous methodological scrutiny.',
  },
  {
    icon: Compass,
    title: 'Strategic Direction',
    body: 'Curating high-impact, interdisciplinary conference themes for 2026 that reflect the evolving frontiers of global scientific inquiry.',
  },
  {
    icon: Scale,
    title: 'Ethical Oversight',
    body: 'Ensuring 100 % compliance with the Committee on Publication Ethics (COPE) guidelines across all Innovora Mind research proceedings.',
  },
  {
    icon: Globe,
    title: 'Global Liaison',
    body: 'Bridging the gap between industry requirements and academic research by fostering dialogue between institutional partners worldwide.',
  },
];

/* ─────────────────────────── Board members ─────────────────────────── */
const boardMembers = [
  {
    name: 'Dr. Walida Ounruean',
    designation: 'Director & Senior Research Fellow',
    affiliation: 'Innovora Mind LLC, New Mexico, USA',
    expertise: 'AI-Driven Digital Transformation, Academic Governance',
    image: walidaImg,
  },
  {
    name: 'Dr. Joe Perez',
    designation: 'Head of Data Strategy',
    affiliation: 'International Research & Innovation Institute',
    expertise: 'Data Science, Enterprise Architecture, Knowledge Management',
    image: joeImg,
  },
  {
    name: 'Ezinne Esther Arisa',
    designation: 'Independent Director',
    affiliation: 'Global Centre for Responsible Technology',
    expertise: 'Digital Governance, Ethical Leadership, Inclusive Innovation',
    image: ezinneImg,
  },
  {
    name: 'Dr. Firas Zeidan',
    designation: 'Advisory Board Member',
    affiliation: 'Institute for Technology & Human Progress',
    expertise: 'Technology Leadership, Research Policy, AI Ethics',
    image: firasImg,
  },
  {
    name: 'Dr. Tiansheng Yang',
    designation: 'Faculty Member & Research Director',
    affiliation: 'University of South Wales, United Kingdom',
    expertise: 'Digital Transformation, Educational Innovation',
    image: tianshengImg,
  },
  {
    name: 'Dr. Katarzyna Antosz',
    designation: 'Board Member & Research Strategist',
    affiliation: 'European Academy of Engineering Sciences',
    expertise: 'Industrial Engineering, Sustainable Development, Systems Design',
    image: katarzynaImg,
  },
];

/* ─────────────────────────── Component ─────────────────────────── */
const AdvisoryBoard = () => {
  return (
    <Layout>
      {/* ── Hero / Header ──────────────────────────────────────────────────── */}
      <section
        className="relative py-24 lg:py-36 overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #0d1b3e 0%, #1a2f5e 45%, #243b6b 100%)',
        }}
      >
        {/* Subtle geometric ornament */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-[0.06]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="ab-grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.8"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ab-grid)" />
          </svg>
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            className="max-w-4xl mx-auto"
          >
            {/* Eyebrow tag */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-cyan-200">
                Innovora Mind · Academic Governance
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.12] mb-6">
              Scientific Governance &amp;{' '}
              <span
                style={{
                  background:
                    'linear-gradient(90deg, #7dd3fc 0%, #a5f3fc 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Global Advisory Board
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-light italic mb-10 max-w-2xl mx-auto leading-relaxed">
              Upholding the integrity of global research through rigorous
              peer-review oversight and ethical leadership.
            </p>

            {/* Scholarly commitment statement */}
            <div
              className="max-w-3xl mx-auto rounded-2xl border border-white/15 backdrop-blur-sm px-8 py-7 text-left"
              style={{ background: 'rgba(255,255,255,0.06)' }}
            >
              <p className="text-slate-200 text-base leading-[1.85] font-light">
                Innovora Mind's Global Advisory &amp; Scientific Board embodies
                an unwavering commitment to scholarly excellence, maintaining the
                highest standards of academic integrity across every research
                endeavour we facilitate. Through a strictly enforced
                double-blind review framework, the Board safeguards impartiality
                and objectivity in all scholarship it oversees. Concurrently, it
                champions the advancement of multidisciplinary innovation —
                cultivating synergies between the natural sciences, engineering,
                social sciences, and the humanities — to produce research whose
                impact transcends disciplinary boundaries and generates
                enduring societal value.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Board Mandate ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Pale navy accent wash */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(13,27,62,0.07) 0%, transparent 70%)',
          }}
        />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="text-xs font-bold tracking-[0.28em] uppercase text-slate-500 mb-3">
              Charter & Responsibilities
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              The Board{' '}
              <span
                style={{
                  background:
                    'linear-gradient(90deg, #0d1b3e 0%, #2563eb 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Mandate
              </span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base">
              Four core pillars define the governance framework within which the
              Advisory Board operates.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mandatePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group bg-card border border-border rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: 'rgba(13,27,62,0.08)' }}
                  >
                    <Icon className="w-6 h-6" style={{ color: '#1a2f5e' }} />
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground mb-3 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Board Members Grid ──────────────────────────────────────────────── */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: '#f5f7fa' }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          aria-hidden
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="dot-pattern"
                width="28"
                height="28"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.5" fill="#0d1b3e" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dot-pattern)" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="text-xs font-bold tracking-[0.28em] uppercase text-slate-500 mb-3">
              Appointed Members · 2025–2026 Term
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Board{' '}
              <span
                style={{
                  background:
                    'linear-gradient(90deg, #0d1b3e 0%, #2563eb 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Composition
              </span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base">
              Distinguished scholars and practitioners appointed to provide
              independent academic governance and strategic oversight.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, idx) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: idx * 0.08 }}
                className="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400 overflow-hidden flex flex-col"
              >
                {/* Navy accent bar */}
                <div
                  className="h-1.5 w-full"
                  style={{
                    background:
                      'linear-gradient(90deg, #0d1b3e 0%, #2563eb 60%, #7dd3fc 100%)',
                  }}
                />

                <div className="p-7 flex flex-col items-center text-center flex-1">
                  {/* Circular photo */}
                  <div className="relative mb-5">
                    <div
                      className="absolute -inset-1 rounded-full opacity-30 blur-md"
                      style={{
                        background:
                          'linear-gradient(135deg, #0d1b3e, #2563eb)',
                      }}
                    />
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-slate-200 shadow-md">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="font-display text-lg font-bold text-slate-800 leading-snug mb-1">
                    {member.name}
                  </h3>

                  {/* Designation badge */}
                  <span
                    className="inline-block px-3 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-3"
                    style={{
                      background: 'rgba(13,27,62,0.07)',
                      color: '#1a2f5e',
                    }}
                  >
                    {member.designation}
                  </span>

                  <div className="h-px w-10 bg-slate-200 mx-auto mb-4" />

                  {/* Affiliation */}
                  <p className="text-xs text-slate-500 font-medium mb-1">
                    <span className="font-semibold text-slate-700">
                      Affiliation:
                    </span>{' '}
                    {member.affiliation}
                  </p>

                  {/* Expertise */}
                  <p className="text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">
                      Expertise:
                    </span>{' '}
                    {member.expertise}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer Disclaimer ──────────────────────────────────────────────── */}
      <section
        className="py-10 border-t border-slate-200"
        style={{ background: '#f0f2f5' }}
      >
        <div className="container-custom text-center max-w-3xl mx-auto">
          <p className="text-xs text-slate-500 leading-relaxed">
            <span className="font-semibold text-slate-600">
              Independence Notice:
            </span>{' '}
            The Advisory Board operates as an independent body to ensure the
            academic merit of all Innovora Mind proceedings. Board members serve
            in a voluntary advisory capacity and do not hold executive or
            operational authority within the organisation. All governance
            decisions adhere to the ethical standards set forth by the Committee
            on Publication Ethics (COPE).
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default AdvisoryBoard;
