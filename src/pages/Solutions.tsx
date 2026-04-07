import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
    Cpu,
    Code2,
    Database,
    Cloud,
    Shield,
    Smartphone,
    Layers,
    Bot,
    LineChart,
    ArrowRight,
    Search,
    Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
    {
        icon: Bot,
        title: 'Artificial Intelligence & ML',
        description: 'Advanced AI solutions including Generative AI, Predictive Analytics, Natural Language Processing, and Computer Vision to automate and optimize your business processes.',
        features: ['Generative AI Integration', 'Custom ML Models', 'Predictive Business Intelligence', 'AI-Powered Automation'],
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop',
        gradient: 'from-blue-600 to-cyan-500'
    },
    {
        icon: Code2,
        title: 'Enterprise Software Development',
        description: 'Full-cycle software development services from ideation to deployment. We build scalable, secure, and robust enterprise applications tailored to your needs.',
        features: ['Custom ERP/CRM Systems', 'SaaS Platform Development', 'Legacy System Modernization', 'API Design & Integration'],
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop',
        gradient: 'from-indigo-600 to-purple-500'
    },
    {
        icon: Cloud,
        title: 'Cloud & Infrastructure',
        description: 'Secure cloud migration, infrastructure management, and DevOps services to ensure your digital assets are always available and performing at their peak.',
        features: ['AWS/Azure/GCP Migration', 'DevOps & CI/CD Pipelines', 'Cloud Native Architecture', 'Serverless Computing'],
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop',
        gradient: 'from-emerald-600 to-teal-500'
    },
    {
        icon: Shield,
        title: 'Cybersecurity Solutions',
        description: 'Comprehensive security audits, threat detection, and mitigation strategies to protect your intellectual property. We also offer entirely autonomous cybersecurity assistance.',
        features: ['Network Security Audits', 'Cloud Security Posture', 'Autonomous Security Assistance', 'IAM & Compliance'],
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop',
        gradient: 'from-rose-600 to-pink-500'
    },
    {
        icon: Smartphone,
        title: 'Digital Transformation',
        description: 'Guided transformation journeys to help traditional enterprises leap into the digital age with modern technologies and agile processes.',
        features: ['Mobile-First Strategies', 'Omnichannel Experiences', 'Data-Driven Decision Making', 'Operational Efficiency'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
        gradient: 'from-orange-600 to-amber-500'
    },
    {
        icon: LineChart,
        title: 'Research & Data Analytics',
        description: 'Turning raw data into actionable insights through advanced statistical modeling and Al-driven analytics platforms.',
        features: ['Big Data Processing', 'Real-time Analytics', 'Statistical Research', 'Business Visualization'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKxxQTd2U2c7cpDs5TW3vHsjFrUBDMloMkiA&s',
        gradient: 'from-cyan-600 to-blue-500'
    }
];

const Solutions = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative overflow-hidden hero-gradient py-24 lg:py-32">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
                </div>

                <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-6 backdrop-blur-md">
                            Enterprise IT & AI Solutions
                        </span>
                        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8">
                            Transforming Ideas into <span className="text-secondary">Digital Reality</span>
                        </h1>
                        <p className="text-xl text-white/80 mb-10 leading-relaxed">
                            InnovoraMind LLC provides specialized IT, Software, and AI-driven solutions tailored for modern enterprises. We bridge the gap between complex technology and business success.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold rounded-full px-8 h-14 text-lg">
                                <Link to="/contact">
                                    Schedule a Consultation
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" className="border border-white/40 bg-white/10 text-white hover:bg-white/20 rounded-full px-8 h-14 backdrop-blur-sm transition-all text-lg font-bold">
                                <Link to="/about">Our Expertise</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Solutions Grid */}
            <section className="section-padding bg-background relative">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                            Our <span className="text-gradient">Core Solutions</span>
                        </h2>
                        <p className="text-muted-foreground text-lg italic">
                            Delivering excellence across the technological spectrum.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={solution.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative rounded-3xl bg-card border border-border overflow-hidden hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={solution.image}
                                        alt={solution.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-tr ${solution.gradient} opacity-20`} />
                                    <div className="absolute bottom-4 left-6">
                                        <div className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg">
                                            <solution.icon className="w-6 h-6 text-foreground" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="font-display text-2xl font-bold text-foreground mb-4">{solution.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed mb-6 h-20 overflow-hidden">
                                        {solution.description}
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {solution.features.map(feature => (
                                            <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                                                <Layers className="w-4 h-4 text-secondary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button asChild variant="ghost" className="w-full group/btn hover:bg-secondary/10 text-secondary">
                                        <Link to="/contact" className="flex items-center justify-center gap-2">
                                            Learn More
                                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-muted/30">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-center lg:text-left">
                                Why Choose <span className="text-gradient">InnovoraMind?</span>
                            </h2>
                            <div className="space-y-8">
                                {[
                                    { icon: Globe, title: 'Global Expertise', desc: 'Our team consists of researchers and engineers from around the world.' },
                                    { icon: Search, title: 'Research-First Approach', desc: 'We don\'t just build; we innovate based on deep industry and market research.' },
                                    { icon: Shield, title: 'ISO Certified Standards', desc: 'Operating with ISO 9001:2015 and ISO/IEC 27001:2022 certifications for quality and security.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start">
                                        <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center flex-shrink-0">
                                            <item.icon className="w-6 h-6 text-secondary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                                            <p className="text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
                                    alt="Our Team"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-secondary/20 backdrop-blur-[2px]" />
                            </div>
                            <div className="absolute -bottom-8 -left-8 glass p-8 rounded-3xl shadow-xl hidden md:block">
                                <div className="text-4xl font-bold text-secondary mb-1">10+</div>
                                <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Business Domains</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-background relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="max-w-5xl mx-auto hero-gradient rounded-[40px] p-12 md:p-20 text-center border border-white/20 shadow-2xl relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-8">
                                Ready to Elevate Your <span className="text-secondary">Digital Strategy?</span>
                            </h2>
                            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                                Let's discuss how our AI and IT solutions can drive your business forward.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold rounded-full px-10 h-16 shadow-xl transform hover:scale-105 transition-all text-lg">
                                    <Link to="/contact">Get in Touch</Link>
                                </Button>
                                <Button asChild size="lg" className="border border-white/40 bg-white/10 text-white hover:bg-white/20 rounded-full px-10 h-16 backdrop-blur-sm transition-all text-lg font-bold">
                                    <Link to="/about">Our Story</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Solutions;
