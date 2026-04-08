import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Shield, Database, CheckCircle2, Book, ChevronRight, FileJson, KeySquare } from 'lucide-react';

const endpoints = [
    {
        id: 'fraud-detection',
        icon: CheckCircle2,
        title: 'Fraud Detection API',
        method: 'POST',
        path: '/v1/fraud-detection',
        description: 'Submit transactional metadata and receive predictive fraud probability scores in milliseconds.',
        headers: [
            { key: 'Authorization', val: 'Bearer YOUR_API_KEY' },
            { key: 'Content-Type', val: 'application/json' }
        ],
        body: `{
  "transaction_id": "string",
  "amount": "number",
  "user_id": "string",
  "device_fingerprint": "string"
}`,
        response: `{
  "status": 200,
  "success": true,
  "data": {
    "analysis_id": "req_f8b29c9a11",
    "risk_score": 0.012,
    "risk_level": "low",
    "recommendation": "approve"
  }
}`
    },
    {
        id: 'data-lake',
        icon: Database,
        title: 'Data Lake Ingestion',
        method: 'POST',
        path: '/v1/data-lake/ingest',
        description: 'Securely pump high-throughput structured and unstructured data into your centralized analytical vaults.',
        headers: [
            { key: 'Authorization', val: 'Bearer YOUR_API_KEY' },
            { key: 'Content-Type', val: 'application/json' },
            { key: 'X-Vault-ID', val: 'YOUR_VAULT_IDENTIFIER' }
        ],
        body: `{
  "stream_source": "string",
  "payload": "object | array",
  "timestamp": "ISO-8601"
}`,
        response: `{
  "status": 202,
  "success": true,
  "message": "Payload queued for ingestion.",
  "ingest_id": "ing_7384999ab"
}`
    },
    {
        id: 'cybersecurity',
        icon: Shield,
        title: 'Cybersecurity Webhooks',
        method: 'POST',
        path: '/v1/security/threat-analysis',
        description: 'Stream logs to our AI engines for real-time threat detection and automated zero-day vulnerability mitigation.',
        headers: [
            { key: 'Authorization', val: 'Bearer YOUR_API_KEY' },
            { key: 'Content-Type', val: 'application/json' }
        ],
        body: `{
  "log_batch_id": "string",
  "source_ip": "string",
  "events": [
    { "type": "auth_failure", "count": 15 },
    { "type": "port_scan", "count": 42 }
  ]
}`,
        response: `{
  "status": 200,
  "success": true,
  "data": {
    "threat_detected": true,
    "severity": "CRITICAL",
    "automated_action_taken": "IP_BLOCKED"
  }
}`
    }
];

const Documentation = () => {
    const [activeId, setActiveId] = useState(endpoints[0].id);

    return (
        <Layout>
            <div className="bg-slate-950 min-h-screen text-slate-300 pt-24 pb-20">
                <div className="container-custom">

                    {/* Header */}
                    <div className="mb-12 border-b border-white/10 pb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                            <Book className="w-4 h-4 text-emerald-400" />
                            <span className="text-xs font-semibold tracking-wider uppercase text-emerald-400">Documentation</span>
                        </div>
                        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
                            API Reference
                        </h1>
                        <p className="text-lg text-slate-400 max-w-3xl">
                            Everything you need to integrate InnovoraMind's intelligent enterprise endpoints into your infrastructure.
                            Authenticate requests using standard Bearer tokens.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* Sidebar Navigation */}
                        <div className="w-full lg:w-1/4 flex-shrink-0 sticky top-28 bg-slate-900/50 p-4 rounded-2xl border border-white/5">
                            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 px-4">Endpoints</h3>
                            <nav className="flex flex-col gap-1">
                                {endpoints.map(ep => {
                                    const Icon = ep.icon;
                                    return (
                                        <button
                                            key={ep.id}
                                            onClick={() => setActiveId(ep.id)}
                                            className={
                                                "flex items-center justify-between w-full text-left px-4 py-3 rounded-xl transition-all " +
                                                (activeId === ep.id
                                                    ? "bg-emerald-500/10 text-emerald-400 font-semibold"
                                                    : "hover:bg-white/5 hover:text-white text-slate-400")
                                            }
                                        >
                                            <div className="flex items-center gap-3">
                                                <Icon className="w-4 h-4 flex-shrink-0" />
                                                <span className="text-sm">{ep.title}</span>
                                            </div>
                                            {activeId === ep.id && <ChevronRight className="w-4 h-4" />}
                                        </button>
                                    );
                                })}
                            </nav>

                            <div className="mt-8 px-4">
                                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Authentication</h3>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    All API requests require a valid API key sent in the HTTP Authorization header.
                                </p>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="w-full lg:w-3/4">
                            {endpoints.map(ep => {
                                const Icon = ep.icon;
                                return (
                                    <div
                                        key={ep.id}
                                        style={{ display: activeId === ep.id ? 'block' : 'none' }}
                                        className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                                    >
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h2 className="font-display text-3xl font-bold text-white">{ep.title}</h2>
                                                <p className="text-slate-400">{ep.description}</p>
                                            </div>
                                        </div>

                                        {/* Endpoint URL */}
                                        <div className="bg-black/50 border border-white/10 rounded-xl p-4 mb-10 flex items-center gap-4 font-mono text-sm">
                                            <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 font-bold">{ep.method}</span>
                                            <span className="text-white">https://api.innovoramind.com{ep.path}</span>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8">

                                            {/* Left Column: Rules & Headers */}
                                            <div className="space-y-8">
                                                {/* Headers Section */}
                                                <div>
                                                    <h4 className="flex items-center gap-2 text-white font-semibold mb-4 border-b border-white/10 pb-2">
                                                        <KeySquare className="w-4 h-4 text-emerald-400" /> Headers
                                                    </h4>
                                                    <div className="bg-slate-900 border border-white/10 rounded-xl overflow-hidden">
                                                        {ep.headers.map((h, i) => (
                                                            <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border-b border-white/5 last:border-0 font-mono text-xs">
                                                                <span className="text-emerald-400 font-bold">{h.key}</span>
                                                                <span className="text-slate-400">{h.val}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Request Body */}
                                                <div>
                                                    <h4 className="flex items-center gap-2 text-white font-semibold mb-4 border-b border-white/10 pb-2">
                                                        <FileJson className="w-4 h-4 text-emerald-400" /> Request Payload
                                                    </h4>
                                                    <div className="relative font-mono text-xs">
                                                        <div className="absolute right-3 top-3 px-2 py-1 bg-white/10 text-slate-400 rounded text-[10px] uppercase">JSON</div>
                                                        <pre className="bg-black/60 border border-white/10 p-4 rounded-xl overflow-x-auto text-sky-300">
                                                            <code>{ep.body}</code>
                                                        </pre>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right Column: Response */}
                                            <div>
                                                <h4 className="flex items-center gap-2 text-white font-semibold mb-4 border-b border-white/10 pb-2">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Example Response
                                                </h4>
                                                <div className="relative font-mono text-xs">
                                                    <div className="absolute right-3 top-3 px-2 py-1 bg-emerald-500/20 text-emerald-400 font-bold rounded text-[10px] uppercase">200 OK</div>
                                                    <pre className="bg-black border border-white/10 p-4 rounded-xl overflow-x-auto text-emerald-300/80">
                                                        <code>{ep.response}</code>
                                                    </pre>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Documentation;
