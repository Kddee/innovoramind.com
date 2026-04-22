import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import {
  Calendar, MapPin, Video, Layers, Glasses, PenTool, Accessibility, Box, CheckCircle2, ClipboardList, Target, ExternalLink, Smartphone
} from 'lucide-react';

const SpatialComputingUX = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[70vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80&w=2070"
            alt="Spatial Computing Background"
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
              <Layers className="w-4 h-4 mr-2" />
              Design Sprint &middot; Rapid Prototyping
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              UX for <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Spatial Computing</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 font-medium mb-10 leading-relaxed">
              Step away from the code. Design the next generation of AR/VR user experiences.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center px-5 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md">
                <Calendar className="w-5 h-5 text-secondary mr-3" />
                <span className="text-white font-medium">June 28, 2026</span>
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
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">About the Sprint</h2>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mt-8 text-justify">
                  <p className="text-xl leading-relaxed mb-6 font-medium text-foreground/80">
                    This isn't a coding event — it's a design-first, rapid-prototyping sprint focused entirely on user experience for spatial computing.
                  </p>
                  <p>
                    As AR and VR move from novelty to necessity, the biggest gap isn't in the technology — it's in the experience design. This sprint challenges designers, product thinkers, and UX researchers to prototype 3D interfaces, spatial navigation patterns, and accessible interactions for the next generation of immersive applications. Whether you're designing for Apple Vision Pro, Meta Quest, or the open web, this sprint is your playground.
                  </p>
                </div>
              </motion.div>

              {/* Focus Areas Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-1 bg-primary rounded-full"></div>
                  <h2 className="font-display text-3xl font-bold text-foreground">Focus Areas</h2>
                </div>
                <div className="bg-card border border-border p-8 rounded-3xl mt-8">
                  <Target className="w-12 h-12 text-primary mb-6" />
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Teams will explore and prototype solutions across these critical areas of spatial UX:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "3D spatial navigation and wayfinding patterns",
                      "Hand tracking and gesture-based interaction design",
                      "Accessibility in immersive environments (visual, auditory, motor)",
                      "Multi-modal input design — gaze, voice, gesture, and controller",
                      "Information architecture for volumetric content",
                      "Social presence and collaborative spaces in VR"
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
                    { time: "09:00 AM", title: "Kickoff & Design Brief", desc: "Introduction to the sprint format, challenge themes, and team formation." },
                    { time: "09:45 AM", title: "Inspiration Talks", desc: "Lightning talks from spatial computing designers at leading XR companies." },
                    { time: "10:30 AM", title: "Sprint Phase 1: Research & Ideation", desc: "User research synthesis, persona development, and concept sketching." },
                    { time: "12:30 PM", title: "Lunch & Networking Break", desc: "Connect with fellow designers and mentors in breakout rooms." },
                    { time: "01:30 PM", title: "Sprint Phase 2: Prototyping", desc: "Build interactive prototypes using Figma, ShapesXR, or any spatial design tool." },
                    { time: "04:00 PM", title: "Mentor Review Sessions", desc: "One-on-one feedback from XR design mentors on your prototypes." },
                    { time: "05:00 PM", title: "Final Presentations & Critique", desc: "Teams present their spatial UX prototypes to judges and peers." },
                    { time: "06:00 PM", title: "Awards & Closing", desc: "Recognition of standout designs and closing remarks." },
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

              {/* Evaluation Criteria Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-1 bg-emerald-500 rounded-full"></div>
                  <h2 className="font-display text-3xl font-bold text-foreground">Evaluation Criteria</h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                  {[
                    { icon: PenTool, title: "Design Quality", desc: "Visual coherence, spatial layout, and overall aesthetics of the 3D interface." },
                    { icon: Accessibility, title: "Accessibility", desc: "How well the design accommodates users with different abilities in immersive environments." },
                    { icon: Box, title: "Spatial Innovation", desc: "Creative use of 3D space, depth, and volumetric interaction patterns." },
                    { icon: Smartphone, title: "Usability & Flow", desc: "Intuitiveness of navigation, discoverability, and overall user journey in the prototype." }
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
                  Ready to design the future? Join this hands-on sprint and push the boundaries of spatial UX. No coding required.
                </p>

                <div className="space-y-4 mb-8">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center rounded-xl bg-gradient-to-r from-secondary to-accent px-4 py-4 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                  >
                    Register as Participant
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
                    Judge Registration
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>

                <div className="bg-background/50 rounded-xl p-4 border border-border/50">
                  <div className="flex items-center text-sm font-medium mb-2">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    Deadline
                  </div>
                  <p className="text-xs text-muted-foreground">Registration closes on June 25, 2026.</p>
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
                { title: "Spatial Design Skills", desc: "Hands-on experience designing 3D interfaces, spatial navigation, and immersive interactions." },
                { title: "Portfolio Piece", desc: "Walk away with a polished spatial UX prototype you can showcase in your design portfolio." },
                { title: "Industry Mentorship", desc: "Get direct feedback from XR designers working at companies shaping the future of spatial computing." },
                { title: "Community Access", desc: "Join an exclusive community of spatial computing designers for ongoing collaboration and opportunities." }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-background to-muted border border-border/50 p-6 rounded-2xl hover:border-yellow-500/30 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4">
                    <Glasses className="w-6 h-6 text-yellow-500" />
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

export default SpatialComputingUX;
