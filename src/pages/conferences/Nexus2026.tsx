import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import {
  Calendar, MapPin, Video, Code, Shield, Cloud, Component, CheckCircle2, Trophy, Crosshair, ClipboardList, Target, Award, ExternalLink, Users, User
} from 'lucide-react';

const expertsData = [
  {
    "name": "Andreza Malena Guedes da Costa Silva",
    "designation": "IPM / International Research Delegate / Data Science & Applied Research",
    "country": "Brazil"
  },
  {
    "name": "Fatimah Alneel",
    "designation": "The University of Arizona / Academic Delegate",
    "country": "United States"
  },
  {
    "name": "Samsar Naouel",
    "designation": "Faculty of Medicine, Oran / Medical Research & Healthcare Innovation",
    "country": "Algeria"
  },
  {
    "name": "PEYELINGA NDANGIATO JOMPLIN",
    "designation": "Privé",
    "country": "Algérie"
  },
  {
    "name": "Marghescu Cristina-Florentina",
    "designation": "University Politehnica of Bucharest (UPB) / Research Delegate / Engineering & Technical Research",
    "country": "Romania"
  },
  {
    "name": "DIAKITE SAMBA KANI",
    "designation": "Ministère de l'Environnement et du Développement Durable",
    "country": "Guinée"
  },
  {
    "name": "Pauline Efeti Luma",
    "designation": "Hasselt university",
    "country": "Belgium"
  },
  {
    "name": "Gail Narinesingh",
    "designation": "The University of the West Indies",
    "country": "Trinidad"
  },
  {
    "name": "Fatemeh Doostgharin",
    "designation": "Quranic reaserch",
    "country": "Iran"
  },
  {
    "name": "KHADRAN MOHAMMED A ALSAHAIMI",
    "designation": "Jamia Hamdard / Conference Delegate / Research Scholar in Applied Sciences",
    "country": "Saudi Arabia"
  },
  {
    "name": "James Abdul Malik",
    "designation": "Academy for Cultural Diplomacy / International Delegate / International Relations & Cultural Studies",
    "country": "Germany"
  },
  {
    "name": "TRAORE Parfait Doubassi",
    "designation": "Université Norbert Zongo, Laboratoire de Mathématiques Informatique et Applications",
    "country": "Burkina Faso"
  },
  {
    "name": "Halima ALMaktoumi",
    "designation": "Sohar University, Academic Research & Higher Education",
    "country": "Oman"
  }
];

const judgesData = [
  {
    name: "Taleb Hammad",
    organisation: "EyesNY",
    designation: "DBA / executive director",
    country: "USA",
    image: "/images/judges/taleb.png"
  },
  {
    name: "Tamar Makharoblidze",
    organisation: "School Of Arts and Sciences Ilai State University.",
    designation: "Professor",
    country: "Georgia",
    image: "/images/judges/tamar.png"
  },
  {
    name: "Marghescu Cristina-Florentina",
    organisation: "University Politehnica of Bucharest (UPB)",
    designation: "PhD Researcher in Mathematics",
    country: "Romania",
    image: "/images/judges/cristina.jpeg"
  }
];

const Nexus2026 = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[70vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=2070"
            alt="Hackathon Background"
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
              <Code className="w-4 h-4 mr-2" />
              Global Virtual Hackathon
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Nexus <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">2026</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 font-medium mb-10 leading-relaxed">
              Join the ultimate convergence of AI, Data Science, Cloud, Cybersecurity, and Machine Learning.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center px-5 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md">
                <Calendar className="w-5 h-5 text-secondary mr-3" />
                <span className="text-white font-medium">June 7, 2026</span>
              </div>
              <div className="flex items-center px-5 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md">
                <Video className="w-5 h-5 text-primary mr-3" />
                <span className="text-white font-medium">Virtual Event</span>
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
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">About the Hackathon</h2>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mt-8 text-justify">
                  <p className="text-xl leading-relaxed mb-6 font-medium text-foreground/80">
                    Nexus 2026 is a premier virtual hackathon designed to push the limits of technology across various high-impact domains.
                  </p>
                  <p>
                    We are bringing together the brightest minds, from enthusiastic students to seasoned professionals, to develop innovative solutions that bridge Artificial Intelligence, Data Science, Cloud Computing, Cybersecurity, and Machine Learning. Participants will have the opportunity to collaborate, mentored by industry experts, and showcase their groundbreaking projects to a global audience.
                  </p>
                </div>
              </motion.div>

              {/* Objective Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-1 bg-primary rounded-full"></div>
                  <h2 className="font-display text-3xl font-bold text-foreground">Objective</h2>
                </div>
                <div className="bg-card border border-border p-8 rounded-3xl mt-8">
                  <Target className="w-12 h-12 text-primary mb-6" />
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Our objective is to foster a collaborative and competitive environment that sparks innovation. By challenging participants to integrate multiple disciplines such as applying AI to cybersecurity models or scaling data science algorithms on the cloud;we aim to generate practical, forward-thinking solutions that address real-world technological challenges.
                  </p>
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
                    { time: "09:00 AM", title: "Opening Ceremony & Keynote", desc: "Welcome address and unveiling of problem statements." },
                    { time: "10:00 AM", title: "Hacking Begins", desc: "Teams commence brainstorming and initial coding." },
                    { time: "02:00 PM", title: "Mentor Check-in Round 1", desc: "Feedback sessions with domain experts." },
                    { time: "06:00 PM", title: "Mid-way Progress Evaluation", desc: "Quick demonstrations of conceptual prototypes." },
                    { time: "11:59 PM", title: "Final Project Submission", desc: "Code freeze and submission of presentation materials." },
                    { time: "Next Day", title: "Judging & Closing Ceremony", desc: "Live project pitches and announcement of award winners." },
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
                    { icon: Component, title: "Innovation", desc: "Originality of the idea and creative approach to solving the problem." },
                    { icon: Code, title: "Technical Complexity", desc: "Depth of technical execution and proper use of multi-domain technologies." },
                    { icon: Shield, title: "Real-world Applicability", desc: "How well the solution addresses practical, real-world industry challenges." },
                    { icon: ClipboardList, title: "Presentation & UI", desc: "Clarity of the pitch, UI design, and user experience of the final prototype." }
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
                  Ready to innovate? Join Nexus 2026. Choose your role below to complete your registration.
                </p>

                <div className="space-y-4 mb-8">
                  <a
                    href="https://forms.gle/ZYx7Hvx5dirdZqa16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center rounded-xl bg-gradient-to-r from-secondary to-accent px-4 py-4 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                  >
                    Participant Registration
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>

                  <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-border"></div>
                    <span className="flex-shrink-0 mx-4 text-muted-foreground text-xs uppercase font-medium">Or</span>
                    <div className="flex-grow border-t border-border"></div>
                  </div>

                  <a
                    href="https://forms.gle/A7HTtihp7mNXRG9y8"
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
                  <p className="text-xs text-muted-foreground">Registration closes on June 6, 2026.</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Judges Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-1 bg-pink-500 rounded-full"></div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Panel of Judges</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {judgesData.map((judge, index) => (
                <div key={index} className="bg-card border border-border p-6 rounded-2xl hover:border-pink-500/50 hover:shadow-lg transition-all flex flex-col items-center text-center h-full">
                  <div className="w-24 h-24 rounded-full bg-muted border border-border flex items-center justify-center mb-4 overflow-hidden shadow-sm">
                    {judge.image ? (
                      <img src={judge.image} alt={judge.name} className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-8 h-8 text-muted-foreground/50" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{judge.name}</h3>
                  {judge.designation && (
                    <p className="text-sm font-medium text-pink-500 mb-1">{judge.designation}</p>
                  )}
                  {judge.organisation && (
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed flex-grow">{judge.organisation}</p>
                  )}
                  {judge.country && (
                    <div className="flex items-center justify-center text-sm font-medium text-pink-500/80 mt-auto w-full pt-3 border-t border-border/50">
                      <MapPin className="w-4 h-4 mr-1" />
                      {judge.country}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experts Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-1 bg-purple-500 rounded-full"></div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Meet our distinguished experts</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {expertsData.map((expert, index) => (
                <div key={index} className="bg-card border border-border p-6 rounded-2xl hover:border-purple-500/50 hover:shadow-lg transition-all flex flex-col h-full">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{expert.name}</h3>
                  {expert.country !== "N/A" && (
                    <div className="flex items-center text-sm font-medium text-purple-500/80 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {expert.country}
                    </div>
                  )}
                  {expert.designation !== "N/A" && (
                    <p className="text-sm text-muted-foreground flex-grow leading-relaxed">{expert.designation}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Awards and Recognition Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-3xl p-8 lg:p-12 shadow-sm"
          >
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-1 bg-yellow-500 rounded-full"></div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Awards and Recognition</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Global Research Excellence Award", desc: "Awarded to the team showcasing the most profound research-driven project integrating multiple cutting-edge domains." },
                { title: "Innovation Leadership Award", desc: "Recognizes the solution with the highest potential for commercial scalability and industry impact." },
                { title: "Young Researcher Award", desc: "A special prize dedicated to outstanding students and early-career professionals exhibiting exceptional talent." },
                { title: "People’s Choice Award", desc: "Selected entirely through live audience voting during the final demonstration and pitch session." }
              ].map((award, index) => (
                <div key={index} className="bg-gradient-to-br from-background to-muted border border-border/50 p-6 rounded-2xl hover:border-yellow-500/30 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4">
                    <Trophy className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{award.title}</h3>
                  <p className="text-sm text-muted-foreground">{award.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
};

export default Nexus2026;
