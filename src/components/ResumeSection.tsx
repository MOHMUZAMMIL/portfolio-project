import { motion } from 'framer-motion';
import { Icons } from './Icons';
import resumePdf from '/Mohamed_Muzammil_ Resume.pdf';

const MobileResumeUI = () => {
    return (
        <div className="w-full h-full bg-gradient-to-b from-white to-neutral-50 overflow-y-scroll text-left" style={{ WebkitOverflowScrolling: 'touch' }}>
            {/* Header with Gradient */}
            <div className="bg-gradient-to-br from-accent via-[#E65100] to-[#D84315] px-4 py-6 text-white">
                <h1 className="text-2xl font-bold mb-1">Mohamed Muzammil</h1>
                <p className="text-sm font-medium mb-2 opacity-95">React & React Native Developer</p>
                <div className="text-[10px] space-y-0.5 opacity-90">
                    <p>📧 contactmuzammil275@gmail.com</p>
                    <p>💼 LinkedIn | 📍 India</p>
                </div>
            </div>

            {/* Content Sections */}
            <div className="px-4 py-3 space-y-4 text-[10px] leading-relaxed">
                {/* Professional Summary */}
                <section>
                    <h2 className="text-accent font-bold text-[11px] mb-1.5 uppercase tracking-wide">Professional Summary</h2>
                    <p className="text-neutral-700">
                        Result-driven React & React Native Developer with 3+ years of experience building, optimizing, and deploying high-performance web and mobile applications. Strong expertise in React and React Native with a focus on performance optimization, clean architecture, and scalable, API-driven systems.
                    </p>
                </section>

                {/* Education */}
                <section className="bg-white rounded-lg p-3 shadow-sm border border-neutral-100">
                    <h2 className="text-accent font-bold text-[11px] mb-2 uppercase tracking-wide">Education</h2>
                    <div className="space-y-1.5">
                        <div>
                            <p className="font-semibold text-neutral-800">Master of Computer Application</p>
                            <p className="text-neutral-600">MEASI Institute of Information Technology</p>
                        </div>
                        <div>
                            <p className="font-semibold text-neutral-800">Bachelor of Computer Application</p>
                            <p className="text-neutral-600">The New College (Autonomous)</p>
                        </div>
                    </div>
                </section>

                {/* Skills */}
                <section>
                    <h2 className="text-accent font-bold text-[11px] mb-2 uppercase tracking-wide">Skills</h2>
                    <div className="space-y-2">
                        <div>
                            <p className="font-semibold text-neutral-800 mb-1">Technical Skills</p>
                            <p className="text-neutral-700">React.js, Next.js, React Native, JavaScript (ES6+), TypeScript, HTML5, CSS3</p>
                        </div>
                        <div>
                            <p className="font-semibold text-neutral-800 mb-1">State Management</p>
                            <p className="text-neutral-700">Redux, React Hooks, React Query</p>
                        </div>
                        <div>
                            <p className="font-semibold text-neutral-800 mb-1">UI/Styling</p>
                            <p className="text-neutral-700">Tailwind CSS, Bootstrap, Shadcn UI, Material UI, Design-driven UI development</p>
                        </div>
                        <div>
                            <p className="font-semibold text-neutral-800 mb-1">Tools & Build Systems</p>
                            <p className="text-neutral-700">Webpack, Babel, Vite, Expo CLI, Android Studio</p>
                        </div>
                    </div>
                </section>

                {/* Experience */}
                <section className="bg-white rounded-lg p-3 shadow-sm border border-neutral-100">
                    <h2 className="text-accent font-bold text-[11px] mb-2 uppercase tracking-wide">Experience</h2>
                    <div>
                        <p className="font-bold text-neutral-800 mb-0.5">Digital Transformation Engineer</p>
                        <p className="text-neutral-600 mb-1.5 text-[9px]">Ideasion Technology Solutions | Chennai, India | Dec 2022 – Present</p>
                        <ul className="space-y-1 text-neutral-700 list-disc list-inside">
                            <li>Led end-to-end feature development for web and mobile applications</li>
                            <li>Integrated and optimized RESTful APIs with secure authentication flows</li>
                            <li>Enhanced app performance by optimizing code and debugging complex issues</li>
                            <li>Created reusable component libraries with clean frontend architecture</li>
                            <li>Enabled location-based features using Google Maps API</li>
                            <li>Designed billing, invoicing, and reporting interfaces for ERP systems</li>
                        </ul>
                    </div>
                </section>

                {/* Projects */}
                <section>
                    <h2 className="text-accent font-bold text-[11px] mb-2 uppercase tracking-wide">Projects</h2>
                    <div className="space-y-2">
                        <div className="bg-gradient-to-r from-neutral-50 to-white p-2.5 rounded border-l-2 border-accent">
                            <p className="font-semibold text-neutral-800 mb-0.5">Chemical Manufacturing Company</p>
                            <p className="text-neutral-700">Built React & React Native modules for managing role-based data breakdown with streamlined inventory records.</p>
                        </div>
                        <div className="bg-gradient-to-r from-neutral-50 to-white p-2.5 rounded border-l-2 border-accent">
                            <p className="font-semibold text-neutral-800 mb-0.5">Global Paint Manufacturer</p>
                            <p className="text-neutral-700">Implemented React-based wall paint selection and invoice generation system with finalized invoice documents.</p>
                        </div>
                        <div className="bg-gradient-to-r from-neutral-50 to-white p-2.5 rounded border-l-2 border-accent">
                            <p className="font-semibold text-neutral-800 mb-0.5">Street Vendor Platform</p>
                            <p className="text-neutral-700">Established innovative platform connecting street vendors with customers, enhancing local accessibility.</p>
                        </div>
                    </div>
                </section>

                {/* Bottom Padding */}
                <div className="h-4"></div>
            </div>
        </div>
    );
};

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

                            {/* Mobile Phone Mockup (Mobile) / PDF Preview (Desktop) */}
                            <div className="relative h-[700px] lg:h-[900px] bg-[#1A1412] overflow-hidden flex items-center justify-center">
                                <div className="absolute inset-0 bg-neutral-900 animate-pulse"></div>

                                {/* Mobile: Premium Phone Mockup with Custom Resume UI */}
                                <div className="lg:hidden relative z-10 w-[320px] h-[650px]">
                                    {/* Phone Frame */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black rounded-[45px] shadow-2xl border-[10px] border-neutral-900">
                                        {/* Notch */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[28px] bg-neutral-900 rounded-b-3xl z-20 flex items-center justify-center">
                                            <div className="w-14 h-1 bg-neutral-800 rounded-full mt-2"></div>
                                        </div>

                                        {/* Screen */}
                                        <div className="absolute inset-[5px] bg-white rounded-[37px] overflow-hidden">
                                            {/* Status Bar */}
                                            <div className="absolute top-0 left-0 right-0 h-[35px] bg-white z-10 flex items-center justify-between px-7 pt-2">
                                                <span className="text-[11px] font-semibold text-neutral-900">9:41</span>
                                                <div className="flex items-center gap-1.5">
                                                    <svg className="w-4 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                                                    </svg>
                                                    <div className="w-4 h-2.5 border-2 border-neutral-900 rounded-sm relative">
                                                        <div className="absolute inset-[1px] bg-neutral-900 rounded-[1px]"></div>
                                                        <div className="absolute -right-[2px] top-1/2 -translate-y-1/2 w-[2px] h-[6px] bg-neutral-900 rounded-r"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Resume Content */}
                                            <div className="absolute top-[35px] left-0 right-0 bottom-0">
                                                <MobileResumeUI />
                                            </div>
                                        </div>

                                        {/* Home Indicator */}
                                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[5px] bg-neutral-700 rounded-full"></div>
                                    </div>

                                    {/* Phone Shadow */}
                                    <div className="absolute inset-0 rounded-[45px] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9)] pointer-events-none"></div>

                                    {/* Floating Download Button */}
                                    <motion.a
                                        href={resumePdf}
                                        download
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="absolute bottom-16 right-4 w-14 h-14 bg-accent rounded-full shadow-lg flex items-center justify-center z-30 hover:shadow-[0_0_25px_rgba(255,107,53,0.6)] transition-all"
                                    >
                                        <Icons.Download className="text-white" />
                                    </motion.a>
                                </div>

                                {/* Desktop: iframe */}
                                <iframe
                                    src={resumePdf}
                                    className="hidden lg:block w-full h-full relative z-10 opacity-95 group-hover:opacity-100 transition-opacity"
                                    title="Resume Preview"
                                />

                                {/* Overlay Gradient for Premium Feel */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-surface/20 pointer-events-none z-20"></div>
                            </div>

                            {/* Info Panel (Right) */}
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
                                        href={resumePdf}
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
