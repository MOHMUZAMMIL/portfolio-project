import { motion } from 'framer-motion';
import { Icons } from './Icons';
import bgMuzu from '/bg_muzu.png';
import resumePdf from '/Mohamed_Muzammil_ Resume.pdf';

export const Hero = () => {
    return (
        <section
            className="relative overflow-hidden"
            style={{ minHeight: '100vh' }}
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-glow-radial pointer-events-none opacity-40" />

            {/* ── DESKTOP: side-by-side row ── */}
            <div
                className="hidden md:flex relative z-10 max-w-[1400px] mx-auto"
                style={{
                    minHeight: '100vh',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    paddingLeft: '8rem',
                    paddingRight: '0',
                }}
            >
                {/* LEFT – Text (45%) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                    }}
                    style={{ flex: '0 0 45%', maxWidth: '45%' }}
                    className="flex flex-col justify-center"
                >
                    {/* Status */}
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                        className="flex flex-col gap-1 mb-7"
                    >
                        <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.2em] text-accent-light uppercase">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0" />
                            Status: Available
                        </div>
                        <div className="text-[11px] font-mono tracking-[0.2em] text-neutral-500 uppercase">
                            Experience: 3+ Years • Location: India
                        </div>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="font-bold text-white tracking-tight leading-[1.1] mb-6"
                        style={{ fontSize: 'clamp(2.8rem, 4.5vw, 5.5rem)' }}
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-accent-light to-amber-300">
                            React
                        </span>{' '}
                        & React Native Developer.
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="text-neutral-400 leading-relaxed mb-10"
                        style={{ fontSize: 'clamp(1rem, 1.4vw, 1.25rem)', maxWidth: '500px' }}
                    >
                        Building performance-driven e-commerce, ERP, and scalable API-driven
                        platforms with 3+ years of production experience.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="flex flex-wrap gap-4"
                    >
                        <a
                            href="#projects"
                            className="group px-8 py-4 bg-accent text-background font-semibold rounded-lg hover:bg-accent-light transition-all flex items-center gap-2 text-base"
                        >
                            View Projects
                            <span className="group-hover:translate-x-1 transition-transform">
                                <Icons.ArrowRight />
                            </span>
                        </a>
                        <a
                            href={resumePdf}
                            download="Mohamed_Muzammil_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group px-8 py-4 bg-surface border border-neutral-800 text-white font-medium rounded-lg hover:border-accent/50 hover:shadow-[0_0_20px_-5px_rgba(255,107,53,0.3)] hover:-translate-y-0.5 transition-all flex items-center gap-2 text-base"
                        >
                            <Icons.Download />
                            Download Resume
                        </a>
                    </motion.div>
                </motion.div>

                {/* RIGHT – Image (55%) — wrapper is the positioning context */}
                <div style={{ flex: '0 0 55%', maxWidth: '55%', position: 'relative' }}>
                    <motion.img
                        src={bgMuzu}
                        alt="Mohamed Muzammil"
                        initial={{ opacity: 0, x: 40, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        style={{
                            height: '72vh',
                            width: '100%',
                            objectFit: 'contain',
                            objectPosition: 'bottom center',
                            display: 'block',
                        }}
                        className="grayscale contrast-125 hover:grayscale-0 transition-all duration-700 ease-out"
                    />
                    {/* Badge — absolutely positioned to the wrapper div, not affected by image marginTop */}
                    <div
                        style={{ position: 'absolute', bottom: '2rem', left: '12rem', zIndex: 10 }}
                        className="px-4 py-2 bg-accent/80 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2"
                    >
                        <span className="text-xs font-mono text-white font-bold tracking-wider">
                            ENTERPRISE FRONTEND
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse flex-shrink-0" />
                    </div>
                </div>
            </div>

            {/* ── MOBILE: stacked column ── */}
            <div className="flex md:hidden flex-col relative z-10 px-6 pt-24 pb-16 gap-10">
                {/* Text */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                    }}
                    className="flex flex-col"
                >
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                        className="flex flex-col gap-1 mb-6"
                    >
                        <div className="flex items-center gap-3 text-[10px] font-mono tracking-[0.15em] text-accent-light uppercase">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0" />
                            Status: Available
                        </div>
                        <div className="text-[10px] font-mono tracking-[0.15em] text-neutral-500 uppercase">
                            Experience: 3+ Years • Location: India
                        </div>
                    </motion.div>

                    <motion.h1
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="text-4xl font-bold text-white tracking-tight leading-[1.1] mb-5"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-accent-light to-amber-300">
                            React
                        </span>{' '}
                        & React Native Developer.
                    </motion.h1>

                    <motion.p
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="text-base text-neutral-400 leading-relaxed mb-8"
                    >
                        Building performance-driven e-commerce, ERP, and scalable API-driven
                        platforms with 3+ years of production experience.
                    </motion.p>

                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="flex flex-wrap gap-3"
                    >
                        <a
                            href="#projects"
                            className="group w-full px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent-light transition-all flex items-center justify-center gap-2"
                        >
                            View Projects
                            <span className="group-hover:translate-x-1 transition-transform">
                                <Icons.ArrowRight />
                            </span>
                        </a>
                        <a
                            href={resumePdf}
                            download="Mohamed_Muzammil_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-full px-6 py-3 bg-surface border border-neutral-800 text-white font-medium rounded-lg hover:border-accent/50 transition-all flex items-center justify-center gap-2"
                        >
                            <Icons.Download />
                            Download Resume
                        </a>
                    </motion.div>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    style={{ position: 'relative' }}
                    className="flex justify-center"
                >
                    <img
                        src={bgMuzu}
                        alt="Mohamed Muzammil"
                        className="w-[85%] h-auto object-contain grayscale contrast-125 hover:grayscale-0 transition-all duration-700 ease-out"
                    />
                    <div
                        style={{ position: 'absolute', bottom: '1rem', right: '0.75rem', zIndex: 10 }}
                        className="px-3 py-1.5 bg-accent/80 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse flex-shrink-0" />
                        <span className="text-[10px] font-mono text-white font-bold tracking-wider">
                            ENTERPRISE FRONTEND
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};