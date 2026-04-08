import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Terminal,
    Code2,
    Database,
    Shield,
    Key,
    Play,
    CheckCircle2,
    Loader2,
    Server,
    Wifi
} from 'lucide-react';

const codeSnippets = {
    curl: `curl -X POST https://api.innovoramind.com/v1/fraud-detection \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "transaction_id": "tx_987654321",
    "amount": 45000.00,
    "user_id": "usr_12345",
    "device_fingerprint": "xyz123abc"
  }'`,
    node: `const axios = require('axios');

const detectFraud = async () => {
  const response = await axios.post(
    'https://api.innovoramind.com/v1/fraud-detection',
    {
      transaction_id: "tx_987654321",
      amount: 45000.00,
      user_id: "usr_12345",
      device_fingerprint: "xyz123abc"
    },
    {
      headers: {
        'Authorization': \`Bearer \${process.env.API_KEY}\`,
        'Content-Type': 'application/json'
      }
    }
  );
  console.log(response.data);
};

detectFraud();`,
    python: `import requests
import json

url = "https://api.innovoramind.com/v1/fraud-detection"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
payload = {
    "transaction_id": "tx_987654321",
    "amount": 45000.00,
    "user_id": "usr_12345",
    "device_fingerprint": "xyz123abc"
}

response = requests.post(url, headers=headers, data=json.dumps(payload))
print(response.json())`
};

const apis = [
    {
        icon: Shield,
        name: 'Autonomous Cybersecurity',
        endpoint: '/v1/security/threat-analysis',
        description: 'Stream logs to our AI engines for real-time threat detection and automated zero-day vulnerability mitigation.'
    },
    {
        icon: Database,
        name: 'Enterprise Data Lake Ingestion',
        endpoint: '/v1/data-lake/ingest',
        description: 'Securely pump high-throughput structured and unstructured data into your centralized analytical vaults.'
    },
    {
        icon: CheckCircle2,
        name: 'Fraud Detection Engine',
        endpoint: '/v1/fraud-detection',
        description: 'Submit transactional metadata and receive predictive fraud probability scores in milliseconds.'
    }
];

const Developers = () => {
    const [isSimulating, setIsSimulating] = useState(false);
    const [apiResponse, setApiResponse] = useState<string | null>(null);

    const handleRunSimulation = () => {
        setIsSimulating(true);
        setApiResponse(null);
        
        // Simulate network latency and AI processing
        setTimeout(() => {
            setApiResponse(JSON.stringify({
                status: 200,
                success: true,
                data: {
                    analysis_id: "req_f8b29c9a11",
                    risk_score: 0.012,
                    risk_level: "low",
                    recommendation: "approve",
                    flags: [],
                    processing_time_ms: 42
                }
            }, null, 2));
            setIsSimulating(false);
        }, 1500);
    };

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
                </div>

                <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                            <Terminal className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm font-semibold tracking-wider uppercase text-emerald-400">Developer Portal</span>
                        </div>
                        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                            Build with <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">InnovoraMind API</span>
                        </h1>
                        <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                            Integrate our robust AI models, cybersecurity webhooks, and enterprise data engines directly into your applications in minutes.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl px-8 font-bold">
                                <Link to="/contact">Get API Keys</Link>
                            </Button>
                            <Button asChild size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl px-8 font-bold backdrop-blur-sm">
                                <Link to="/documentation">Read Documentation</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Sandbox Section */}
            <section className="section-padding bg-slate-900 border-t border-white/5 text-white relative">
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text and Endpoints */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                                Test the <span className="text-emerald-400">Fraud Detection Engine</span>
                            </h2>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                Our REST APIs are designed for enterprise scalability. Try a mock request in our sandbox to see how fast our predictive AI analyzes transaction payloads.
                            </p>

                            <div className="space-y-6">
                                {apis.map((api, index) => (
                                    <div key={index} className="flex gap-4 items-start p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                                            <api.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white flex items-center gap-2">
                                                {api.name}
                                            </h4>
                                            <code className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded inline-block mt-1 mb-2">
                                                POST {api.endpoint}
                                            </code>
                                            <p className="text-sm text-slate-400">{api.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Interactive Sandbox UI */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-950 rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col"
                        >
                            {/* Window Header */}
                            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                                </div>
                                <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                                    <Server className="w-3 h-3" /> api.innovoramind.com
                                </div>
                            </div>

                            {/* Tabs & Code Area */}
                            <div className="p-4 flex-grow">
                                <Tabs defaultValue="curl" className="w-full">
                                    <TabsList className="bg-white/5 border border-white/10 mb-4">
                                        <TabsTrigger value="curl" className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-400">cURL</TabsTrigger>
                                        <TabsTrigger value="node" className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-400">Node.js</TabsTrigger>
                                        <TabsTrigger value="python" className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-400">Python</TabsTrigger>
                                    </TabsList>
                                    
                                    <div className="relative">
                                        <TabsContent value="curl">
                                            <pre className="text-sm font-mono text-slate-300 bg-black/50 p-4 rounded-xl border border-white/5 overflow-x-auto">
                                                <code>{codeSnippets.curl}</code>
                                            </pre>
                                        </TabsContent>
                                        <TabsContent value="node">
                                            <pre className="text-sm font-mono text-slate-300 bg-black/50 p-4 rounded-xl border border-white/5 overflow-x-auto">
                                                <code>{codeSnippets.node}</code>
                                            </pre>
                                        </TabsContent>
                                        <TabsContent value="python">
                                            <pre className="text-sm font-mono text-slate-300 bg-black/50 p-4 rounded-xl border border-white/5 overflow-x-auto">
                                                <code>{codeSnippets.python}</code>
                                            </pre>
                                        </TabsContent>
                                    </div>
                                </Tabs>

                                {/* Action Button */}
                                <div className="mt-6 flex justify-end">
                                    <Button 
                                        onClick={handleRunSimulation} 
                                        disabled={isSimulating}
                                        className="bg-emerald-500 hover:bg-emerald-600 text-white w-full sm:w-auto flex items-center gap-2"
                                    >
                                        {isSimulating ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                Processing with AI Engine...
                                            </>
                                        ) : (
                                            <>
                                                <Play className="w-4 h-4 fill-current" />
                                                Send Request to Sandbox
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </div>

                            {/* Response Terminal Area */}
                            <div className="bg-black/80 border-t border-white/10 p-4 h-[250px] overflow-y-auto font-mono text-sm relative">
                                <AnimatePresence mode="wait">
                                    {!apiResponse && !isSimulating && (
                                        <motion.div 
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="h-full flex flex-col items-center justify-center text-slate-500"
                                        >
                                            <Wifi className="w-8 h-8 mb-2 opacity-20" />
                                            <span>Awaiting network request...</span>
                                        </motion.div>
                                    )}
                                    {isSimulating && (
                                        <motion.div 
                                            key="simulating"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="text-emerald-400/70"
                                        >
                                            <p>[System] Connecting to secure endpoint wss://api.innovoramind.com...</p>
                                            <p className="animate-pulse">[System] Authorizing Bearer Token...</p>
                                            <p className="animate-pulse delay-75">[System] Instantiating AI inference models...</p>
                                        </motion.div>
                                    )}
                                    {apiResponse && (
                                        <motion.div 
                                            key="response"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-emerald-400"
                                        >
                                            <p className="text-slate-400 mb-2">HTTP/1.1 200 OK</p>
                                            <pre><code>{apiResponse}</code></pre>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Developers;
