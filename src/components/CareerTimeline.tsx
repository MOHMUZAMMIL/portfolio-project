import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const timelineData = [
    {
        title: 'Bachelor of Computer Application',
        institute: 'The New College (Autonomous)',
        location: 'Chennai, India',
        duration: '2017 – 2020',
        color: '#3B82F6', // Blue
        type: 'education',
    },
    {
        title: 'Master of Computer Application',
        institute: 'MEASI Institute of Information Technology',
        location: 'Chennai, India',
        duration: '2020 – 2022',
        color: '#8B5CF6', // Purple
        type: 'education',
    },
    {
        title: 'Digital Transformation Engineer',
        institute: 'Ideassion Technology Solutions',
        location: 'Chennai, India',
        duration: 'Dec 2022 – Present',
        color: '#FF6B35', // Orange
        type: 'work',
        highlights: [
            'Built scalable frontend and backend modules using React, Node.js, Next.js',
            'Implemented secure RESTful APIs and real-time rendering systems',
            'Integrated Google Maps API and D3.js data visualizations',
            'Improved performance and reusable component architecture',
        ],
    },
];

const TimelineItem = ({ data, index }: { data: typeof timelineData[0]; index: number }) => {
    const isLeft = index % 2 === 0;

    return (
        <>
            {/* Mobile Layout */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.2 }}
                className="md:hidden relative pl-14 mb-16 last:mb-0"
            >
                {/* Mobile Dot */}
                <div className="absolute left-6 top-0 -translate-x-1/2 z-10">
                    <motion.div
                        whileInView={{
                            boxShadow: `0 0 20px ${data.color}80, 0 0 40px ${data.color}40`,
                            scale: 1.2,
                        }}
                        viewport={{ margin: "-15%" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="relative w-4 h-4 rounded-full bg-background border-[3px] flex items-center justify-center"
                        style={{ borderColor: data.color }}
                    >
                        <div
                            className="absolute inset-0 rounded-full animate-ping opacity-30"
                            style={{ backgroundColor: data.color }}
                        />
                        <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: data.color }}
                        />
                    </motion.div>
                </div>

                {/* Mobile Card */}
                <TimelineCard data={data} align="left" mobile />
            </motion.div>

            {/* Desktop Layout */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.2 }}
                className="hidden md:grid md:grid-cols-[1fr_80px_1fr] items-center mb-28 last:mb-0"
            >
                {/* Left Content (Desktop) */}
                <div className="flex justify-end">
                    {isLeft && <TimelineCard data={data} align="right" />}
                </div>

                {/* Center Dot (Desktop) */}
                <div className="flex justify-center z-10">
                    <motion.div
                        whileInView={{
                            boxShadow: `0 0 20px ${data.color}80, 0 0 40px ${data.color}40`,
                            scale: 1.2,
                        }}
                        viewport={{ margin: "-15%" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="relative w-[18px] h-[18px] rounded-full bg-background border-[3px] flex items-center justify-center"
                        style={{ borderColor: data.color }}
                    >
                        <div
                            className="absolute inset-0 rounded-full animate-ping opacity-30"
                            style={{ backgroundColor: data.color }}
                        />
                        <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: data.color }}
                        />
                    </motion.div>
                </div>

                {/* Right Content (Desktop) */}
                <div className="flex justify-start">
                    {!isLeft && <TimelineCard data={data} align="left" />}
                </div>
            </motion.div>
        </>
    );
};

const TimelineCard = ({ data, align, mobile }: { data: typeof timelineData[0]; align: 'left' | 'right'; mobile?: boolean }) => {
    return (
        <motion.div
            whileHover={{
                y: -8,
                boxShadow: `0 20px 40px -15px ${data.color}40, 0 0 0 1px ${data.color}30`
            }}
            whileInView={{
                borderColor: `${data.color}40`,
                backgroundColor: "rgba(255,255,255,0.03)"
            }}
            viewport={{ margin: "-15%" }}
            initial={{
                borderColor: "rgba(255,255,255,0.08)",
                backgroundColor: "rgba(255,255,255,0.02)"
            }}
            transition={{
                duration: 0.4,
                ease: "easeOut"
            }}
            className={`relative w-full p-8 rounded-2xl border backdrop-blur-sm overflow-hidden ${mobile ? 'max-w-none' : 'max-w-[480px]'
                } ${align === 'right' ? 'text-right' : 'text-left'}`}
        >
            {/* Accent Border Glow */}
            <motion.div
                className={`absolute ${align === 'right' ? 'right-0' : 'left-0'} top-0 bottom-0 w-1 rounded-full`}
                initial={{ opacity: 0.4 }}
                whileInView={{
                    opacity: 1,
                    boxShadow: `0 0 15px ${data.color}, 0 0 30px ${data.color}60`
                }}
                style={{ backgroundColor: data.color }}
            />

            {/* Duration Badge */}
            <span
                className="inline-block text-xs font-mono font-semibold tracking-wider mb-3 px-3 py-1 rounded-full border"
                style={{
                    color: data.color,
                    borderColor: `${data.color}40`,
                    backgroundColor: `${data.color}10`
                }}
            >
                {data.duration}
            </span>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                {data.title}
            </h3>

            {/* Institute & Location */}
            <div className={`flex flex-wrap items-center gap-2 mb-4 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
                <span className="text-sm font-semibold" style={{ color: data.color }}>
                    {data.institute}
                </span>
                <span className="text-neutral-600 text-xs">•</span>
                <span className="text-neutral-500 text-sm">{data.location}</span>
            </div>

            {/* Highlights */}
            {data.highlights && (
                <ul className={`space-y-2.5 mt-5 ${align === 'right' ? 'text-right' : 'text-left'}`}>
                    {data.highlights.map((highlight, i) => (
                        <li
                            key={i}
                            className={`flex items-start text-sm text-neutral-400 leading-relaxed ${align === 'right' ? 'flex-row-reverse' : ''
                                }`}
                        >
                            <span
                                className={`${align === 'right' ? 'ml-2' : 'mr-2'} mt-1.5 w-1.5 h-1.5 rounded-full shrink-0`}
                                style={{ backgroundColor: `${data.color}80` }}
                            />
                            {highlight}
                        </li>
                    ))}
                </ul>
            )}
        </motion.div>
    );
};

export const CareerTimeline = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#0F0B09] to-[#140E0C] border-t border-white/5 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-[1100px] mx-auto relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-24 text-center"
                >
                    <span className="text-accent font-mono text-sm tracking-wider uppercase opacity-80 mb-3 block">
                        04. CAREER_TIMELINE
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
                        Professional Journey
                    </h2>
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                        From academic foundation to enterprise-scale engineering leadership.
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div ref={containerRef} className="relative pt-12 pb-12">
                    {/* Vertical Center Line Background (Static) */}
                    <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                    {/* Vertical Center Line Fill (Animated) */}
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                    />

                    {/* Timeline Items */}
                    <div className="relative z-10">
                        {timelineData.map((item, index) => (
                            <TimelineItem key={index} data={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
