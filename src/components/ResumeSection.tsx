import { motion } from 'framer-motion';
import { Icons } from './Icons';

export const ResumeSection = () => {
    return (
        <section id="resume" className="py-32 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.2em] text-accent-light uppercase mb-4">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        02. Professional CV
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight group w-fit">
                        Professional CV
                        <span className="block h-1 w-0 group-hover:w-full bg-accent mt-2 transition-all duration-500 ease-out"></span>
                    </h2>
                </motion.div>

                {/* Content Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative max-w-[1100px] mx-auto group"
                >
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"></div>

                    <div className="relative bg-surface rounded-2xl border border-neutral-800 overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-accent/40 group-hover:translate-y-[-4px] group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                        <div className="grid grid-cols-1 lg:grid-cols-2">

                            {/* PDF Preview (Left) */}
                            <div className="relative h-[650px] lg:h-[900px] bg-[#1A1412] overflow-hidden">
                                <div className="absolute inset-0 bg-neutral-900 animate-pulse"></div>
                                <iframe
                                    src="/Mohamed_Muzammil_%20Resume.pdf"
                                    className="w-full h-full relative z-10 opacity-95 group-hover:opacity-100 transition-opacity"
                                    title="Resume Preview"
                                />
                                {/* Overlay Gradient for Premium Feel */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-surface/20 pointer-events-none z-20"></div>
                            </div>

                            {/* Info Panel (Right) - Desktop Only or Stacked Mobile */}
                            <div className="p-8 lg:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-neutral-800 bg-surface/50 backdrop-blur-sm">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Mohamed Muzammil</h3>
                                    <p className="text-accent font-mono text-sm tracking-wide mb-6">React & React Native Developer</p>

                                    <div className="space-y-6">
                                        <div>
                                            <p className="text-neutral-500 text-xs uppercase tracking-wider font-semibold mb-3">Experience</p>
                                            <p className="text-white text-lg font-medium">3+ Years ProductionExp</p>
                                        </div>

                                        <div>
                                            <p className="text-neutral-500 text-xs uppercase tracking-wider font-semibold mb-3">Core Stack</p>
                                            <div className="flex flex-wrap gap-2">
                                                {['React', 'TypeScript', 'Redux', 'Maps API', 'D3.js', 'Tailwind'].map((skill, index) => (
                                                    <motion.span
                                                        key={skill}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.1 * index }}
                                                        className="px-3 py-1 bg-neutral-800/50 border border-neutral-700 rounded text-xs text-neutral-300 group-hover/skill:border-accent/30 transition-colors"
                                                    >
                                                        {skill}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10 lg:mt-0">
                                    <motion.a
                                        href="/Mohamed_Muzammil_%20Resume.pdf"
                                        download
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="block w-full py-4 bg-accent text-background font-bold text-center rounded-lg hover:shadow-[0_0_30px_-5px_rgba(255,107,53,0.5)] transition-all relative overflow-hidden group/btn"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            <Icons.Download />
                                            Download Resume
                                        </span>
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
                                    </motion.a>
                                    <p className="text-center text-neutral-500 text-xs mt-4">
                                        PDF Format • Latest Version
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
