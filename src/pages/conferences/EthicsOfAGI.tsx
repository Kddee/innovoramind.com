import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import {
  Calendar, MapPin, Video, MessageCircle, Shield, Brain, Scale, Users, CheckCircle2, Lightbulb, ClipboardList, Target, ExternalLink
} from 'lucide-react';

const EthicsOfAGI = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[70vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2070"
            alt="AI Ethics Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/85 bg-gradient-to-t from-slate-950 via-slate-950/70 flex items-center"></div>
        </div>

        <div className="container-custom relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center rounded-full border border-secondary/50 bg-secondary/20 px-4 py-1.5 text-sm font-semibold text-secondary backdrop-blur-md mb-6">
              <MessageCircle className="w-4 h-4 mr-2" />
              Fireside Chat &middot; AMA Session
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              The Ethics of <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">AGI</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 font-medium mb-10 leading-relaxed">
              An exclusive, unstructured Ask-Me-Anything session with leading AI safety researchers.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center px-5 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md">
                <Calendar className="w-5 h-5 text-secondary mr-3" />
                <span className="text-white font-medium">June 14, 2026</span>
              </div>
              <div className="flex items-center px-5 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md">
                <Video className="w-5 h-5 text-primary mr-3" />
                <span className="text-white font-medium">Hybrid Event</span>
              </div>
              <div className="flex items-center px-5 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md">
                <MapPin className="w-5 h-5 text-accent mr-3" />
                <span className="text-white font-medium">Online</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding bg-background relative">
        <div className="container-custom space-y-24">

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-16">

              {/* About Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-1 bg-secondary rounded-full"></div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">About the Session</h2>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mt-8 text-justify">
                  <p className="text-xl leading-relaxed mb-6 font-medium text-foreground/80">
                    As we inch closer to Artificial General Intelligence, the questions we need to answer aren't just technical — they are deeply philosophical and ethical.
                  </p>
                  <p>
                    This fireside chat brings together leading AI safety researchers, ethicists, and policy experts for an open, unstructured conversation. There are no prepared slides — just honest dialogue about the guardrails, governance frameworks, and moral responsibilities required as we build systems that could surpass human intelligence. This is your chance to ask the hard questions directly to the people working on the answers.
                  </p>
                </div>
              </motion.div>

              {/* Key Topics Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-1 bg-primary rounded-full"></div>
                  <h2 className="font-display text-3xl font-bold text-foreground">Key Topics</h2>
                </div>
                <div className="bg-card border border-border p-8 rounded-3xl mt-8">
                  <Target className="w-12 h-12 text-primary mb-6" />
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    The conversation will organically cover a wide range of critical themes, including but not limited to:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Alignment problem — ensuring AGI acts in humanity's best interest",
                      "Existential risk assessment and mitigation strategies",
                      "Global governance and regulatory frameworks for advanced AI",
                      "The role of open-source vs. closed-source in AGI development",
                      "Bias, fairness, and equitable access to AGI technologies",
                      "Human-AI collaboration and augmentation vs. replacement"
                    ].map((topic, idx) => (
                      <li key={idx} className="flex items-start text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-0.5 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Agenda Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-1 bg-accent rounded-full"></div>
                  <h2 className="font-display text-3xl font-bold text-foreground">Agenda</h2>
                </div>

                <div className="space-y-6 mt-8">
                  {[
                    { time: "06:00 PM", title: "Welcome & Introductions", desc: "Meet the panelists and set the context for the evening's conversation." },
                    { time: "06:20 PM", title: "Opening Reflections", desc: "Each panelist shares their most pressing concern about AGI development today." },
                    { time: "06:45 PM", title: "Open AMA — Round 1", desc: "Audience submits and upvotes questions. The most voted topics are discussed first." },
                    { time: "07:30 PM", title: "Deep Dive: The Alignment Problem", desc: "A focused 20-minute discussion on the single hardest technical challenge in AI safety." },
                    { time: "08:00 PM", title: "Open AMA — Round 2", desc: "Free-form questions from the live audience, no topic off-limits." },
                    { time: "08:30 PM", title: "Closing Thoughts & Takeaways", desc: "Each panelist shares one actionable insight for the audience to carry forward." },
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:items-center bg-card p-4 rounded-2xl border border-border/50 shadow-sm hover:border-accent/50 transition-colors">
                      <div className="bg-accent/10 text-accent font-bold px-4 py-2 rounded-xl sm:w-40 text-center mb-4 sm:mb-0 sm:mr-6">
                        {item.time}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Format Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-1 bg-emerald-500 rounded-full"></div>
                  <h2 className="font-display text-3xl font-bold text-foreground">Discussion Format</h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                  {[
                    { icon: MessageCircle, title: "Open AMA", desc: "No pre-curated questions. The audience drives the conversation with real-time upvoting." },
                    { icon: Users, title: "Panel of Experts", desc: "4–5 leading researchers from AI safety labs, academia, and policy organizations." },
                    { icon: Scale, title: "Balanced Perspectives", desc: "Deliberately diverse viewpoints — optimists, cautious voices, and pragmatists." },
                    { icon: Lightbulb, title: "Actionable Takeaways", desc: "Every session ends with concrete recommendations attendees can act on." }
                  ].map((crit, idx) => (
                    <div key={idx} className="bg-background border border-border p-6 rounded-2xl">
                      <crit.icon className="w-8 h-8 text-emerald-500 mb-4" />
                      <h4 className="font-bold text-lg mb-2">{crit.title}</h4>
                      <p className="text-sm text-muted-foreground">{crit.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* Sidebar Registration */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-3xl border border-border shadow-2xl sticky top-32"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-2xl font-bold text-foreground">Registration</h3>
                  <div className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                    Open Now
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  Reserve your seat for this thought-provoking fireside chat. Space is limited — register now to secure your spot.
                </p>

                <div className="space-y-4 mb-8">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center rounded-xl bg-gradient-to-r from-secondary to-accent px-4 py-4 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                  >
                    Register as Attendee
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>

                  <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-border"></div>
                    <span className="flex-shrink-0 mx-4 text-muted-foreground text-xs uppercase font-medium">Or</span>
                    <div className="flex-grow border-t border-border"></div>
                  </div>

                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center rounded-xl bg-muted border border-border px-4 py-4 text-sm font-bold text-foreground hover:bg-muted/80 transition-all"
                  >
                    Speaker Registration
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>

                <div className="bg-background/50 rounded-xl p-4 border border-border/50">
                  <div className="flex items-center text-sm font-medium mb-2">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    Deadline
                  </div>
                  <p className="text-xs text-muted-foreground">Registration closes on June 11, 2026.</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* What You'll Gain Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-3xl p-8 lg:p-12 shadow-sm"
          >
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-1 bg-yellow-500 rounded-full"></div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">What You'll Gain</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Clarity on AGI Risks", desc: "Understand the real risks — and the hype — surrounding Artificial General Intelligence from those closest to the research." },
                { title: "Policy Insights", desc: "Learn about the latest global regulatory efforts and what they mean for developers and organizations building AI." },
                { title: "Networking", desc: "Connect with like-minded professionals, researchers, and policymakers passionate about responsible AI development." },
                { title: "Actionable Framework", desc: "Walk away with a practical ethical checklist you can apply to your own AI projects immediately." }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-background to-muted border border-border/50 p-6 rounded-2xl hover:border-yellow-500/30 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
};

export default EthicsOfAGI;
