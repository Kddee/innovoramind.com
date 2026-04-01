import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Calendar, MapPin, Video, Users, Cpu, Mail } from 'lucide-react';

const GASS = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] bg-secondary/20 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[100px] mix-blend-screen" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary mb-6 backdrop-blur-sm">
              <Cpu className="w-4 h-4 mr-2" />
              AI, IT & Software Engineering
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Global AI & Software Summit <span className="text-secondary">(GASS)</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 font-medium mb-10 max-w-3xl mx-auto">
              Convergence of intelligent systems, modern infrastructure, and the future of coding.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              <div className="flex items-center px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <Calendar className="w-5 h-5 text-secondary mr-3" />
                <span className="text-white font-medium">June 7</span>
              </div>
              <div className="flex items-center px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <Video className="w-5 h-5 text-accent mr-3" />
                <span className="text-white font-medium">Hybrid Mode</span>
              </div>
              <div className="flex items-center px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <MapPin className="w-5 h-5 text-primary mr-3" />
                <span className="text-white font-medium">Location: TBA</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conference Details */}
      <section className="section-padding bg-background relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Column: Main Info */}
            <div className="lg:col-span-2 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">About The Conference</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                  <p>
                    The Global AI & Software Summit (GASS) is a premier event bringing together industry 
                    leaders, software architects, AI researchers, and IT professionals. As technology 
                    rapidly evolves, the intersection of artificial intelligence and software engineering 
                    presents both unprecedented opportunities and complex challenges.
                  </p>
                  <p>
                    This full-day, hybrid event will explore emerging paradigms in AI-assisted development, 
                    scalable IT infrastructure, machine learning operations (MLOps), and intelligent enterprise solutions.
                  </p>
                  <h3>Key Themes</h3>
                  <ul>
                    <li>Next-Generation Artificial Intelligence Models</li>
                    <li>Software Engineering in the Age of Generative AI</li>
                    <li>Scalable Cloud & IT Infrastructure</li>
                    <li>Ethical AI and Governance</li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-8">
              {/* Registration Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-3xl border border-border shadow-xl sticky top-32"
              >
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">Registration Status</h3>
                <p className="text-sm text-muted-foreground mb-6">Join us virtually or in person</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between py-3 border-b border-border/50">
                    <span className="text-foreground">Early Bird</span>
                    <span className="font-semibold text-secondary">Coming Soon</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border/50">
                    <span className="text-foreground">General Admission</span>
                    <span className="font-semibold text-muted-foreground">TBA</span>
                  </div>
                </div>

                <button className="w-full rounded-xl bg-secondary/50 px-4 py-3 text-sm font-bold text-secondary-foreground shadow-sm cursor-not-allowed mb-4">
                  Registration Opening Soon
                </button>
                <p className="text-xs text-center text-muted-foreground flex items-center justify-center">
                  <Mail className="w-3 h-3 mr-1" /> Subscribe to newsletter for updates
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GASS;
