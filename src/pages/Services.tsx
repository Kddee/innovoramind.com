import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import {
    Bot, Brain, MessageSquare, FileText,
    Cloud, Workflow, Shield, Server,
    BarChart3, LineChart,
    Fingerprint, ClipboardCheck,
    Microscope, UserCheck,
    ArrowRight, CheckCircle2, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const serviceCategories = [
    {
        id: 'ai-ml',
        sectionIcon: Bot,
        sectionTitle: 'AI & Machine Learning Solutions',
        sectionColor: 'from-blue-600 to-cyan-500',
        sectionBg: 'bg-blue-500/10',
        sectionText: 'text-blue-500',
        services: [
            {
                icon: Brain,
                title: 'AI‑Driven Fraud Detection Platform',
                description: 'We build intelligent fraud‑detection systems that analyze millions of pension and financial transactions in real time. Our models identify anomalies, suspicious behavior, and high‑risk patterns with exceptional accuracy, helping organizations reduce fraud and protect beneficiaries.',
                features: [
                    'Machine learning–based anomaly detection',
                    'Real‑time scoring and alerts',
                    'Risk dashboards for investigators',
                    'Seamless integration with existing systems'
                ],
            },
            {
                icon: LineChart,
                title: 'Predictive Analytics for Pension & Finance',
                description: 'Our predictive engines use advanced statistical and AI models to forecast payouts, contributions, and fund performance. Organizations gain the ability to plan proactively, reduce uncertainty, and make data‑driven decisions.',
                features: [
                    'Time‑series forecasting',
                    'Scenario modeling',
                    'Automated insights and reporting'
                ],
            },
            {
                icon: MessageSquare,
                title: 'NLP‑Powered Virtual Assistants',
                description: 'We develop conversational AI chatbots that simplify customer service for pensioners, employees, and citizens. These assistants understand natural language, answer queries instantly, and reduce support workload.',
                features: [
                    'GPT‑based conversational intelligence',
                    'Eligibility checks and account queries',
                    'Multilingual support',
                    '24×7 availability'
                ],
            },
            {
                icon: FileText,
                title: 'Generative AI for Document Automation',
                description: 'Our generative AI solutions automate the creation, classification, and summarization of documents. This dramatically reduces manual effort and speeds up communication.',
                features: [
                    'Benefit letters',
                    'Statements and notices',
                    'Document classification',
                    'Automated summaries'
                ],
            }
        ]
    },
    {
        id: 'cloud',
        sectionIcon: Cloud,
        sectionTitle: 'Cloud & Modernization Services',
        sectionColor: 'from-emerald-600 to-teal-500',
        sectionBg: 'bg-emerald-500/10',
        sectionText: 'text-emerald-500',
        services: [
            {
                icon: Server,
                title: 'Legacy System Modernization',
                description: 'We help organizations transition from outdated legacy systems to modern, cloud‑native platforms. Our modernization approach improves scalability, performance, and long‑term maintainability.',
                features: [
                    'Microservices architecture',
                    'API‑driven design',
                    'Azure cloud migration',
                    'Performance optimization'
                ],
            },
            {
                icon: Workflow,
                title: 'Enterprise Workflow Automation',
                description: 'We design low‑code automation platforms that streamline manual processes and reduce operational delays.',
                features: [
                    'Automated approvals',
                    'Intelligent routing',
                    'Notifications and audit trails',
                    'Integration with legacy systems'
                ],
            },
            {
                icon: Shield,
                title: 'Secure API Gateway Development',
                description: 'We build secure, scalable API gateways that enable smooth data exchange across agencies, banks, and enterprise systems.',
                features: [
                    'OAuth2.0 / JWT authentication',
                    'API throttling and monitoring',
                    'High‑availability deployment',
                    'Centralized governance'
                ],
            }
        ]
    },
    {
        id: 'data',
        sectionIcon: BarChart3,
        sectionTitle: 'Data Engineering & Analytics',
        sectionColor: 'from-violet-600 to-purple-500',
        sectionBg: 'bg-violet-500/10',
        sectionText: 'text-violet-500',
        services: [
            {
                icon: BarChart3,
                title: 'Enterprise Data Lake & Analytics Platform',
                description: 'We design centralized data lakes that unify structured and unstructured data for advanced analytics.',
                features: [
                    'Azure Data Lake',
                    'ETL pipelines',
                    'Synapse Analytics',
                    'Power BI dashboards'
                ],
            },
            {
                icon: LineChart,
                title: 'Real‑Time Insights & Dashboards',
                description: 'We create interactive dashboards that provide real‑time visibility into contributions, payouts, demographics, and fund performance.',
                features: [
                    'Executive‑level insights',
                    'Predictive analytics',
                    'Automated reporting'
                ],
            }
        ]
    },
    {
        id: 'security',
        sectionIcon: Fingerprint,
        sectionTitle: 'Cybersecurity & Compliance',
        sectionColor: 'from-rose-600 to-pink-500',
        sectionBg: 'bg-rose-500/10',
        sectionText: 'text-rose-500',
        services: [
            {
                icon: Fingerprint,
                title: 'Identity Verification & Fraud Prevention',
                description: 'We implement multi‑layer identity verification systems to ensure secure access and prevent fraudulent activities.',
                features: [
                    'Biometric verification',
                    'Device fingerprinting',
                    'Risk‑based authentication'
                ],
            },
            {
                icon: Shield,
                title: 'Autonomous Cybersecurity Assistance',
                description: 'Deploy AI-driven autonomous cybersecurity agents that actively monitor, detect, and neutralize threats 24/7 without manual intervention.',
                features: [
                    '24/7 autonomous threat monitoring',
                    'Real-time automated incident response',
                    'Proactive vulnerability management'
                ],
            },
            {
                icon: ClipboardCheck,
                title: 'Compliance Automation',
                description: 'We help organizations meet regulatory requirements through automated compliance workflows.',
                features: [
                    'GDPR',
                    'SOC2',
                    'Government pension regulations'
                ],
            }
        ]
    },
    {
        id: 'research',
        sectionIcon: Microscope,
        sectionTitle: 'Research & Innovation Projects',
        sectionColor: 'from-amber-600 to-orange-500',
        sectionBg: 'bg-amber-500/10',
        sectionText: 'text-amber-500',
        services: [
            {
                icon: Microscope,
                title: 'Longevity & Mortality Prediction Models',
                description: 'We develop deep learning models that predict life expectancy trends to support actuarial planning and pension sustainability.',
                features: [],
            },
            {
                icon: UserCheck,
                title: 'AI‑Enhanced Eligibility Determination',
                description: 'Our hybrid rule‑based + ML systems automate eligibility checks with transparency and accuracy.',
                features: [],
            }
        ]
    }
];

const Services = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-950 text-white pt-32 pb-20">
                {/* Background Accents */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-secondary text-sm font-bold uppercase tracking-widest mb-6"
                        >
                            Website‑Ready IT & AI Projects
                        </motion.span>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
                            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary via-accent to-primary">Services</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
                            Comprehensive IT solutions powered by AI, cloud modernization, data engineering, and cybersecurity — designed to transform enterprise operations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Service Categories */}
            {serviceCategories.map((category, catIndex) => (
                <section
                    key={category.id}
                    className={`section-padding ${catIndex % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}
                >
                    <div className="container-custom">
                        {/* Category Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-12"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.sectionColor} flex items-center justify-center shadow-lg`}>
                                <category.sectionIcon className="w-7 h-7 text-white" />
                            </div>
                            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                                {category.sectionTitle}
                            </h2>
                        </motion.div>

                        {/* Service Cards */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {category.services.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-card rounded-3xl border border-border p-8 md:p-10 hover:shadow-xl hover:border-border/80 transition-all duration-500 flex flex-col h-full"
                                >
                                    {/* Icon & Title */}
                                    <div className="flex items-start gap-4 mb-5">
                                        <div className={`w-12 h-12 rounded-xl ${category.sectionBg} ${category.sectionText} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                            <service.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-display text-xl font-bold text-foreground pt-2">
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    {service.features.length > 0 && (
                                        <ul className="space-y-2.5 mt-auto">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-foreground/75">
                                                    <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${category.sectionText}`} />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA Section */}
            <section className="section-padding bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
                </div>

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-[3rem] bg-gradient-to-br from-indigo-900/40 to-slate-900/40 border border-white/10 p-12 md:p-20 text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] to-transparent pointer-events-none" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Have a specific project in mind?
                            </h2>
                            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Connect with our team of experts for a custom strategy and technical consultation tailored to your business needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Button asChild size="lg" className="h-14 px-10 bg-secondary hover:bg-secondary/90 text-white font-bold text-lg rounded-xl shadow-lg transition-all group">
                                    <Link to="/contact">
                                        Start Your Project
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                                <Button asChild size="lg" className="h-14 px-10 border border-white/40 bg-white/10 text-white hover:bg-white/20 font-bold text-lg rounded-xl backdrop-blur-sm transition-all">
                                    <Link to="/solutions">
                                        View Solutions
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default Services;
