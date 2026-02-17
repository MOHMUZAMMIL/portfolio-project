import { Icons } from './Icons';
import { SkillCard } from './SkillCard';

export const Skills = () => {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0F0B09] border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <SkillCard
                        icon={Icons.Code}
                        title="Frontend Systems"
                        desc="Expertise in React, React Native, TypeScript, and modern state management (Redux, React Query)."
                        delay={0}
                    />
                    <SkillCard
                        icon={Icons.Zap}
                        title="Performance Engineering"
                        desc="Optimizing bundle sizes, reducing TTI, and implementing virtualization for data-heavy UIs."
                        delay={1}
                    />
                    <SkillCard
                        icon={Icons.Database}
                        title="API & Data Arch"
                        desc="Designing scalable schemas, efficient polling/socket strategies, and robust error handling."
                        delay={2}
                    />
                    <SkillCard
                        icon={Icons.Globe}
                        title="Enterprise Apps"
                        desc="Building complex ERPs, Dashboards (D3.js), and Map integrations (Google Maps API)."
                        delay={3}
                    />
                </div>
            </div>
        </section>
    );
};
