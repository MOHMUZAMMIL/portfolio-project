import { motion } from 'framer-motion';

interface ProjectCardProps {
    title: {
        main: string;
    };
    metrics: Array<{
        value: string;
        label: string;
    }>;
    stack: string[];
    delay: number;
}

export const ProjectCard = ({ title, metrics, stack, delay }: ProjectCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: delay * 0.1, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{
            y: -8,
            scale: 1.02,
        }}
        className="group relative rounded-2xl p-6 md:p-8 overflow-hidden transition-colors duration-400 border border-white/10 hover:border-accent/50 bg-gradient-to-br from-[#1A1412] to-[#1C1613] hover:from-[#1F1612] hover:to-[#221A16] shadow-sm hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] will-change-transform transform-gpu"
    >
        { }
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute -inset-[100px] bg-gradient-to-br from-accent/20 via-transparent to-transparent blur-[120px]" />
        </div>

        <div className="relative z-10 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-white mb-2">{title.main}</h3>

            <div className="grid grid-cols-2 gap-4 my-6">
                {metrics.map((m, i) => (
                    <div key={i} className="flex flex-col">
                        <span className="text-2xl font-mono font-bold text-neutral-400 transition-all duration-400 group-hover:text-accent-light group-hover:drop-shadow-[0_0_8px_rgba(255,107,53,0.4)]">
                            {m.value}
                        </span>
                        <span className="text-xs uppercase tracking-wider text-neutral-600 font-medium">
                            {m.label}
                        </span>
                    </div>
                ))}
            </div>

            <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
                {stack.map((tech) => (
                    <motion.span
                        whileHover={{ scale: 1.05 }}
                        key={tech}
                        className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs font-medium text-neutral-300 transition-all duration-300 group-hover:border-accent/40 group-hover:text-accent-light group-hover:bg-accent/10"
                    >
                        {tech}
                    </motion.span>
                ))}
            </div>
        </div>
    </motion.div>
);
