import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icons } from './Icons';

interface ConsoleLine {
    type: 'info' | 'success' | 'accent';
    text: string;
}

interface Tab {
    id: string;
    icon: keyof typeof Icons;
    title: string;
    subtitle: string;
    logs: ConsoleLine[];
}

const tabs: Tab[] = [
    {
        id: 'frontend',
        icon: 'Code',
        title: 'Frontend Architecture',
        subtitle: 'REACT ECOSYSTEM',
        logs: [
            { type: 'info', text: '→ Initializing React 18 architecture...' },
            { type: 'success', text: '✓ Component tree optimized' },
            { type: 'info', text: '→ Configuring state management (Redux/Zustand)...' },
            { type: 'success', text: '✓ Global state synchronized' },
            { type: 'accent', text: '→ Optimizing render cycles with React.memo' },
            { type: 'success', text: '✓ Virtual DOM diffing enhanced' },
            { type: 'info', text: '→ Code-splitting routes with lazy loading...' },
            { type: 'success', text: '✓ Bundle size reduced by 45%' },
            { type: 'accent', text: '→ TypeScript strict mode enabled' },
            { type: 'success', text: '✓ Type safety enforced across 127 components' },
        ],
    },
    {
        id: 'api',
        icon: 'Database',
        title: 'API & Data Systems',
        subtitle: 'BACKEND INTEGRATION',
        logs: [
            { type: 'info', text: '→ Establishing RESTful API connections...' },
            { type: 'success', text: '✓ Axios interceptors configured' },
            { type: 'accent', text: '→ Implementing GraphQL client (Apollo)...' },
            { type: 'success', text: '✓ Query optimization enabled' },
            { type: 'info', text: '→ Secure authentication flow established' },
            { type: 'success', text: '✓ JWT token refresh mechanism active' },
            { type: 'accent', text: '→ Role-based access control implemented' },
            { type: 'success', text: '✓ Permission guards deployed' },
            { type: 'info', text: '→ Real-time WebSocket connection initialized' },
            { type: 'success', text: '✓ Live data synchronization active' },
        ],
    },
    {
        id: 'performance',
        icon: 'Zap',
        title: 'Performance Engineering',
        subtitle: 'OPTIMIZATION',
        logs: [
            { type: 'info', text: '→ Running Lighthouse performance audit...' },
            { type: 'success', text: '✓ Score: 98/100' },
            { type: 'accent', text: '→ Implementing service worker caching...' },
            { type: 'success', text: '✓ Offline-first strategy enabled' },
            { type: 'info', text: '→ Image optimization pipeline active' },
            { type: 'success', text: '✓ WebP conversion + lazy loading applied' },
            { type: 'accent', text: '→ Critical CSS extraction complete' },
            { type: 'success', text: '✓ First Contentful Paint: 0.8s' },
            { type: 'info', text: '→ Tree-shaking unused dependencies...' },
            { type: 'success', text: '✓ Production bundle: 142KB gzipped' },
        ],
    },
    {
        id: 'enterprise',
        icon: 'Briefcase',
        title: 'Enterprise Applications',
        subtitle: 'PRODUCTION SYSTEMS',
        logs: [
            { type: 'info', text: '→ Deploying e-commerce platform (React + Node)...' },
            { type: 'success', text: '✓ Payment gateway integrated (Stripe/Razorpay)' },
            { type: 'accent', text: '→ ERP system modules initializing...' },
            { type: 'success', text: '✓ Inventory, CRM, Analytics modules live' },
            { type: 'info', text: '→ Multi-tenant architecture configured' },
            { type: 'success', text: '✓ Data isolation verified' },
            { type: 'accent', text: '→ CI/CD pipeline established (GitHub Actions)' },
            { type: 'success', text: '✓ Automated testing + deployment active' },
            { type: 'info', text: '→ Monitoring & logging systems online' },
            { type: 'success', text: '✓ Sentry error tracking + analytics enabled' },
        ],
    },
];

export const DeveloperCenter = () => {
    const [activeTab, setActiveTab] = useState('frontend');
    const [displayedLines, setDisplayedLines] = useState<ConsoleLine[]>([]);
    const [isAnimating, setIsAnimating] = useState(false);

    const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

    useEffect(() => {
        setIsAnimating(true);
        setDisplayedLines([]);

        const timer = setTimeout(() => {
            currentTab.logs.forEach((line, index) => {
                setTimeout(() => {
                    setDisplayedLines((prev) => [...prev, line]);
                    if (index === currentTab.logs.length - 1) {
                        setIsAnimating(false);
                    }
                }, index * 150);
            });
        }, 100);

        return () => clearTimeout(timer);
    }, [activeTab]);

    return (
        <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-4">
                        Developer Center
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Engineering Control Panel
                    </h2>
                    <p className="text-lg text-neutral-400 max-w-2xl">
                        Production-grade architecture, performance optimization, and enterprise-level
                        frontend engineering systems.
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
                    {/* Tab Navigation */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0"
                    >
                        {tabs.map((tab) => {
                            const Icon = Icons[tab.icon];
                            const isActive = activeTab === tab.id;

                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`
                                        flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                                        border-l-2 min-w-[200px] lg:min-w-0
                                        ${isActive
                                            ? 'border-accent bg-surface/50 text-white'
                                            : 'border-transparent hover:bg-surface/30 text-neutral-400'
                                        }
                                    `}
                                >
                                    <Icon className="w-5 h-5 flex-shrink-0" />
                                    <div className="flex flex-col items-start">
                                        <span className="font-medium text-sm">{tab.title}</span>
                                        <span className="text-[10px] uppercase tracking-wider text-neutral-500">
                                            {tab.subtitle}
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </motion.div>

                    {/* Console Panel */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="rounded-2xl bg-surface shadow-lg overflow-hidden border border-white/10"
                    >
                        {/* macOS Window Chrome */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-[#1C1613] border-b border-white/5">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="ml-4 text-xs font-mono text-neutral-500">
                                {currentTab.title.toLowerCase().replace(/\s+/g, '-')}.log
                            </span>
                        </div>

                        {/* Console Content */}
                        <div className="p-6 font-mono text-sm min-h-[400px] bg-background">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {displayedLines.map((line, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className={`mb-2 ${line.type === 'success'
                                                    ? 'text-accent-light'
                                                    : line.type === 'accent'
                                                        ? 'text-accent'
                                                        : 'text-neutral-400'
                                                }`}
                                        >
                                            {line.text}
                                        </motion.div>
                                    ))}

                                    {/* Blinking Cursor */}
                                    {!isAnimating && (
                                        <motion.span
                                            animate={{ opacity: [1, 0, 1] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                            className="inline-block w-2 h-4 bg-white ml-1"
                                        />
                                    )}
                                </motion.div>
                            </AnimatePresence>

                            {/* Status Bar */}
                            {!isAnimating && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-8 pt-4 border-t border-white/5 text-right"
                                >
                                    <span className="text-xs uppercase tracking-wider text-accent-light">
                                        ● SYSTEM READY
                                    </span>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
