import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Video, ArrowRight, Code } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Conference {
  id: string;
  title: string;
  shortDesc: string;
  tag: string;
  date: string;
  location: string;
  mode: string;
  icon: LucideIcon;
  registrationLink?: string;
}

const conferences: Conference[] = [
  {
    id: "hackathon-2026",
    title: "Nexus 2026",
    shortDesc: "A Hackathon focusing on exciting projects on the combination of various domains like AI, Data Science, Cloud, Cybersecurity, and Machine Learning.",
    tag: "Hackathon",
    date: "April 26, 2026",
    location: "Online",
    mode: "Virtual",
    icon: Code
  }
];

const Events = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative hero-gradient py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Our <span className="text-gradient">Events</span>
            </h1>
            <p className="text-xl sm:text-2xl text-primary-foreground/80 font-medium">
              Join us for industry-leading conferences, summits, and technical workshops
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events List Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Featured Events
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover our upcoming events focused on pushing the boundaries of technology, artificial intelligence, cyber security, and more.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conferences.map((conf, index) => {
              const Icon = conf.icon;
              return (
                <motion.div
                  key={conf.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-card rounded-3xl border border-border/50 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div className="relative h-48 bg-gradient-to-br from-secondary/20 via-accent/10 to-primary/20 overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]" />
                    <Icon className="w-20 h-20 text-secondary/40 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-2.5 py-0.5 text-xs font-semibold text-secondary backdrop-blur-md">
                        {conf.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-display text-xl font-bold text-foreground group-hover:text-secondary transition-colors">
                          {conf.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {conf.shortDesc}
                      </p>
                    </div>

                    <div className="space-y-3 mb-6 mt-auto">
                      <div className="flex items-center text-sm text-foreground/80">
                        <Calendar className="w-4 h-4 mr-3 text-secondary" />
                        {conf.date}
                      </div>
                      <div className="flex items-center text-sm text-foreground/80">
                        <MapPin className="w-4 h-4 mr-3 text-accent" />
                        Location: {conf.location}
                      </div>
                      <div className="flex items-center text-sm text-foreground/80">
                        <Video className="w-4 h-4 mr-3 text-primary" />
                        {conf.mode}
                      </div>
                    </div>

                    {conf.registrationLink ? (
                      <a
                        href={conf.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
                      >
                        Register Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    ) : (
                      <Link
                        to={`/events/${conf.id}`}
                        className="inline-flex items-center justify-center w-full rounded-xl bg-secondary px-4 py-2.5 text-sm font-semibold text-secondary-foreground shadow-sm hover:bg-secondary/90 transition-colors"
                      >
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
