import { motion } from 'framer-motion';

interface TimelineItemProps {
    role: string;
    company: string;
    date: string;
    highlights: string[];
}

export const TimelineItem = ({ role, company, date, highlights }: TimelineItemProps) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative pl-8 md:pl-12 py-8 border-l border-white/10 last:border-0 group"
    >
        <div className="absolute left-[-5px] top-10 w-2.5 h-2.5 rounded-full bg-neutral-800 border border-neutral-600 group-hover:bg-accent group-hover:border-accent transition-colors"></div>
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
            <h3 className="text-xl font-bold text-white">{role}</h3>
            <span className="text-sm font-mono text-neutral-500 mt-1 sm:mt-0">{date}</span>
        </div>
        <div className="text-accent-light font-medium mb-4">{company}</div>
        <ul className="space-y-2">
            {highlights.map((h, i) => (
                <li key={i} className="text-neutral-400 text-sm flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/40"></span>
                    {h}
                </li>
            ))}
        </ul>
    </motion.div>
);
