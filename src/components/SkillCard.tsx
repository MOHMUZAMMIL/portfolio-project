import { motion } from 'framer-motion';

interface SkillCardProps {
    icon: React.ComponentType;
    title: string;
    desc: string;
    delay: number;
}

export const SkillCard = ({ icon: Icon, title, desc, delay }: SkillCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay * 0.1 }}
        className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-accent/30 transition-colors group cursor-default"
    >
        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
            <Icon />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-neutral-400 leading-relaxed">{desc}</p>
    </motion.div>
);
