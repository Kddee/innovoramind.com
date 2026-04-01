import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { 
  Calendar, MapPin, Video, Cpu, Mail, CheckCircle2, Users, ArrowRight, ExternalLink, 
  Globe, LayoutList, Cloud, Shield, Server, Activity, BookOpen, Mic, FileText, Image as ImageIcon, Map 
} from 'lucide-react';

const WCCC = () => {
  return (
    <Layout>
      {/* Hero Section with Image Background */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[80vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2070" 
            alt="Cloud Computing" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/80 bg-gradient-to-t from-slate-950 via-slate-950/60 flex items-center"></div>
        </div>

        <div className="container-custom relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="inline-flex items-center rounded-full border border-secondary/50 bg-secondary/20 px-4 py-1.5 text-sm font-semibold text-secondary backdrop-blur-md">
                  <Cloud className="w-4 h-4 mr-2" />
                  Cloud Infrastructure Domain
                </div>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} className="w-8 h-8 rounded-full border-2 border-slate-900" src={`https://i.pravatar.cc/100?img=${i+30}`} alt="Attendee" />
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-secondary flex items-center justify-center text-[10px] font-bold text-white">+1.2k</div>
                </div>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                World Conf. on Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Computing</span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 font-medium mb-10 max-w-2xl leading-relaxed">
                Empowering Scalability: Architecting resilient cloud ecosystems and serverless paradigms. Join leading engineers and cloud architects.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center px-5 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md">
                  <Calendar className="w-5 h-5 text-secondary mr-3" />
                  <span className="text-white font-medium">June 21 - 23, 2026</span>
                </div>
                <div className="flex items-center px-5 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md">
                  <MapPin className="w-5 h-5 text-primary mr-3" />
                  <span className="text-white font-medium">Location TBA & Virtual</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex justify-end relative"
            >
              <div className="relative w-full max-w-lg aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 to-accent/40 rounded-full blur-[100px] animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
                  alt="Server Farm" 
                  className="rounded-3xl shadow-2xl border border-white/10 relative z-10 w-full h-full object-cover"
                />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-card border border-border p-4 rounded-2xl shadow-xl z-20 flex items-center space-x-4">
                  <div className="bg-secondary/20 p-3 rounded-full">
                    <Activity className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Scopus Indexed</h4>
                    <p className="text-sm text-muted-foreground">Publication Opportunities</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sponsoring/Organized By Bar */}
      <div className="bg-card border-b border-border/50">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 py-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center space-x-2 text-xl font-bold font-display"><Cloud className="w-8 h-8 text-primary"/><span>CloudTech Inc</span></div>
             <div className="flex items-center space-x-2 text-xl font-bold font-display"><Globe className="w-8 h-8 text-secondary"/><span>Global Server Org</span></div>
             <div className="flex items-center space-x-2 text-xl font-bold font-display"><Server className="w-8 h-8 text-accent"/><span>InfraNet Network</span></div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="section-padding bg-background relative">
        <div className="container-custom space-y-24">
          
          {/* SPLIT: About & Registration */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-1 bg-secondary rounded-full"></div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">About The Conference</h2>
                </div>
                
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mt-8 text-justify">
                  <p className="text-xl leading-relaxed mb-6 font-medium text-foreground/80">
                    The World Conference on Cloud Computing (WCCC) brings together cloud architects, developers, and DevOps professionals to discuss the future of decentralized and scalable infrastructure.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 my-10">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=700" className="rounded-2xl shadow-lg border border-border" alt="Data Science" />
                    <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=700" className="rounded-2xl shadow-lg border border-border" alt="IT Team" />
                  </div>

                  <p className="mb-6">
                    Held physically at our premier venue and broadcasted virtually. Explore containerization, edge computing, multi-cloud strategy, and Kubernetes deployments.
                  </p>
                  <p>
                    This highly technical conference is designed specifically for cloud engineers looking to optimize latency, security, and computational workloads at scale. Submit your research papers on serverless and microservices architectures.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-3xl border border-border shadow-2xl relative overflow-hidden"
              >
                {/* Decorative blob */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-0"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-display text-2xl font-bold text-foreground">Registration</h3>
                    <div className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                      Open Now
                    </div>
                  </div>
                  
                  <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=500" className="w-full h-40 object-cover rounded-xl mb-6 shadow-md" alt="Register" />

                  <p className="text-sm text-muted-foreground mb-6">
                    Secure your spot at WCCC 2026. Choose the participation format that best suits your needs, whether you are presenting research or joining as a listener.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between py-3 border-b border-border/50">
                      <span className="text-foreground font-medium">Author / Presenter Pass</span>
                      <span className="font-bold text-secondary text-xs uppercase tracking-wider bg-secondary/10 px-2 py-1 rounded">Available</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border/50">
                      <span className="text-foreground font-medium">Listener / Delegate Pass</span>
                      <span className="font-bold text-muted-foreground text-xs uppercase tracking-wider bg-muted px-2 py-1 rounded">Available</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border/50">
                      <span className="text-foreground font-medium">Virtual Only Pass</span>
                      <span className="font-bold text-muted-foreground text-xs uppercase tracking-wider bg-muted px-2 py-1 rounded">Available</span>
                    </div>
                  </div>

                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdaWOjB2Xue8atHkWE_aqYqSy-AlRxYW6XtsM_EW1dfeQJzHg/viewform?usp=publish-editor" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-secondary to-accent px-4 py-4 text-sm font-bold text-white shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all mb-4 mt-2"
                  >
                    Complete Registration Form
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>

                  <p className="text-xs text-center text-muted-foreground">
                    By registering, you agree to our Terms of Service & Privacy Policy.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* NEW SECTION: Key Dates & Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-3xl p-8 lg:p-12 shadow-sm"
          >
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-1 bg-primary rounded-full"></div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Important Key Dates</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-border/50 -z-10"></div>
              
              <div className="relative text-center group">
                <div className="w-20 h-20 mx-auto bg-background border-4 border-secondary text-secondary rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <FileText className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold mb-2">Paper Submission</h4>
                <p className="text-secondary font-semibold text-sm mb-2">March 20, 2026</p>
                <p className="text-sm text-muted-foreground">Deadline to submit your full research papers and abstracts.</p>
              </div>

              <div className="relative text-center group">
                <div className="w-20 h-20 mx-auto bg-background border-4 border-accent text-accent rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold mb-2">Notification of Acceptance</h4>
                <p className="text-accent font-semibold text-sm mb-2">April 15, 2026</p>
                <p className="text-sm text-muted-foreground">Authors will be notified of the review committee's decision.</p>
              </div>

              <div className="relative text-center group">
                <div className="w-20 h-20 mx-auto bg-background border-4 border-primary text-primary rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold mb-2">Registration Deadline</h4>
                <p className="text-primary font-semibold text-sm mb-2">May 15, 2026</p>
                <p className="text-sm text-muted-foreground">Final date for authors and listeners to complete registration.</p>
              </div>

              <div className="relative text-center group">
                <div className="w-20 h-20 mx-auto bg-background border-4 border-emerald-500 text-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Calendar className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold mb-2">Conference Dates</h4>
                <p className="text-emerald-500 font-semibold text-sm mb-2">June 21 - 23, 2026</p>
                <p className="text-sm text-muted-foreground">Join us for the three-day technical program.</p>
              </div>
            </div>
          </motion.div>

          {/* NEW SECTION: Publication & Participation */}
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border p-8 rounded-3xl flex flex-col justify-center"
            >
              <BookOpen className="w-12 h-12 text-secondary mb-6" />
              <h3 className="font-display text-2xl font-bold mb-4">Publication Opportunities</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                All accepted and registered papers will be published in the official WCCC Conference Proceedings. Extensively reviewed papers demonstrating exceptional methodology will be submitted for indexing in major academic databases including <strong>Scopus, Web of Science, and Google Scholar</strong>.
              </p>
              <ul className="space-y-3 mt-auto">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Double-blind peer review process</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">ISBN assigned proceedings book</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Opportunity for journal special issues</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border p-8 rounded-3xl"
            >
              <LayoutList className="w-12 h-12 text-accent mb-6" />
              <h3 className="font-display text-2xl font-bold mb-4">Flexible Participation</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                WCCC 2026 accommodates various modes of participation to ensure global accessibility. Engage with the community in a format that suits your availability and preference.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-background p-4 rounded-xl border border-border/50">
                  <Mic className="w-6 h-6 text-primary mb-2" />
                  <h4 className="font-bold text-sm mb-1">Oral Presentation</h4>
                  <p className="text-xs text-muted-foreground">Present your research live in front of international delegates.</p>
                </div>
                <div className="bg-background p-4 rounded-xl border border-border/50">
                  <ImageIcon className="w-6 h-6 text-emerald-500 mb-2" />
                  <h4 className="font-bold text-sm mb-1">Poster Presentation</h4>
                  <p className="text-xs text-muted-foreground">Display your visual research and engage in 1-on-1 networking.</p>
                </div>
                <div className="bg-background p-4 rounded-xl border border-border/50">
                  <Video className="w-6 h-6 text-secondary mb-2" />
                  <h4 className="font-bold text-sm mb-1">Virtual Presentation</h4>
                  <p className="text-xs text-muted-foreground">Present your work online via our dedicated hybrid platform.</p>
                </div>
                <div className="bg-background p-4 rounded-xl border border-border/50">
                  <Users className="w-6 h-6 text-blue-500 mb-2" />
                  <h4 className="font-bold text-sm mb-1">Listener / Delegate</h4>
                  <p className="text-xs text-muted-foreground">Attend sessions, workshops, and build your professional network.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call for Contributions & Tracks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-1 bg-secondary rounded-full"></div>
              <h2 className="font-display text-3xl font-bold text-foreground">Call for Contributions & Tracks</h2>
            </div>
            <p className="text-muted-foreground mb-8 text-lg max-w-3xl">
              Researchers, academicians, and enterprise professionals are invited to submit their abstracts and full papers. Topics of interest cover all aspects of Cloud Computing, but are not limited to the following tracks:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Track 1 */}
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-secondary/50 transition-all group">
                <Cloud className="w-10 h-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Cloud Native Architectures</h3>
                <p className="text-sm text-muted-foreground">Building applications on microservices architectures for ultimate scalability.</p>
              </div>
              {/* Track 2 */}
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-accent/50 transition-all group">
                <Server className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Kubernetes & Orchestration</h3>
                <p className="text-sm text-muted-foreground">Container management, service meshes, and automating highly available clusters.</p>
              </div>
              {/* Track 3 */}
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-primary/50 transition-all group">
                <Globe className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Multi-Cloud Strategies</h3>
                <p className="text-sm text-muted-foreground">Preventing vendor lock-in by utilizing distributed environments efficiently.</p>
              </div>
              {/* Track 4 */}
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all group">
                <Activity className="w-10 h-10 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Edge Computing</h3>
                <p className="text-sm text-muted-foreground">Bringing computational processes closer to users to reduce latency drastically.</p>
              </div>
            </div>
          </motion.div>

          {/* NEW SECTION: Experience The Venue */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl grid lg:grid-cols-2 bg-card border border-border"
          >
            <div className="h-64 lg:h-auto overflow-hidden relative bg-muted flex items-center justify-center">
              <MapPin className="w-32 h-32 text-muted-foreground/20" />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center relative">
              <div className="inline-flex items-center space-x-2 text-secondary font-bold mb-4">
                <Map className="w-5 h-5" />
                <span>Host Venue</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Venue To Be Announced</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The exact geographic venue for this year's summit is currently being finalized to ensure the best possible experience for our international delegates. Expect world-class facilities, seamless transit access, and a vibrant networking environment.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-semibold text-muted-foreground">Location Finalizing</span>
              </div>
            </div>
          </motion.div>

          {/* Why Attend Section with Images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-secondary/5 rounded-3xl p-8 lg:p-12 border border-secondary/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]"></div>
            
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 relative z-10">Why You Should Attend</h2>
            <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
              <div className="space-y-4">
                {[
                  "Exclusive Industry Insights", 
                  "Networking with Global Cloud Engineers", 
                  "Access to Premium Research Papers", 
                  "E-Certificates for Attendees", 
                  "Hybrid Attendance Flexibility", 
                  "Opportunity to Present Your Work"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center bg-background/50 backdrop-blur-sm p-3 rounded-lg border border-border/50">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=700" alt="Networking" className="rounded-2xl shadow-2xl" />
                <div className="absolute -bottom-6 -left-6 bg-accent border-4 border-background text-accent-foreground p-4 rounded-xl shadow-lg">
                  <p className="text-3xl font-black">700+</p>
                  <p className="text-sm font-semibold">Attendees Expected</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Speakers Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Featured Speakers & Committee</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Empty Placeholders */}
              {[1, 2].map((i) => (
                <div key={i} className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col items-center justify-center min-h-[300px] text-center p-6">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-muted-foreground/50" />
                  </div>
                  <h4 className="font-bold text-lg mb-1">To Be Announced</h4>
                  <p className="text-sm text-muted-foreground">Speaker details coming soon.</p>
                </div>
              ))}
              
              {/* Become a speaker card */}
              <div className="bg-background border-2 border-dashed border-border rounded-3xl p-6 flex flex-col items-center justify-center text-center min-h-[300px] hover:bg-muted/50 transition-colors">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-bold text-lg mb-2">Apply to Speak</h4>
                <p className="text-sm text-muted-foreground mb-6">Join our prestigious lineup of industry leaders.</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdaWOjB2Xue8atHkWE_aqYqSy-AlRxYW6XtsM_EW1dfeQJzHg/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-secondary text-secondary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-secondary/90 transition-colors w-full">
                  Submit Abstract
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
};
export default WCCC;
