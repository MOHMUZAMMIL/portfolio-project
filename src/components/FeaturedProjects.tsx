import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

export const FeaturedProjects = () => {
    const projects = [
        {
            title: { main: 'Street Vendor Platform' },
            metrics: [
                { value: 'Real-time', label: 'Vendor Tracking' },
                { value: '99.8%', label: 'Uptime' },
            ],
            stack: ['React Native', 'Maps API', 'Firebase'],
        },
        {
            title: { main: 'Enterprise Chemical Manufacturing' },
            metrics: [
                { value: '40%', label: 'Efficiency Gain' },
                { value: '500+', label: 'Daily Logs' },
            ],
            stack: ['React', 'React Native', '.Net Core', 'PostgreSQL'],
        },
        {
            title: { main: 'Global Paint Manufacturer' },
            metrics: [
                { value: '5K+', label: 'SKUs Managed' },
                { value: '40%', label: 'Error Reduction' },
            ],
            stack: ['React', 'React Native', '.Net Core', 'PostgreSQL'],
        },
        {
            title: { main: 'Interactive Family Tree Visualization Platform' },
            metrics: [
                { value: "1K+", label: "Hierarchical Nodes" },
                { value: "60fps", label: "Smooth Rendering" }
            ],
            stack: [
                "React",
                "D3.js",
                "SVG",
                "Tree Layout",
                "Zoom/Pan",
                "Dynamic Data"
            ]
        },
    ];

    return (
        <section
            id="projects"
            className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#0F0B09] to-[#140E0C]"
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Engineering Excellence
                    </h2>
                    <p className="text-neutral-400 text-lg">
                        Production-grade systems built for scale and performance.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {projects.map((p, i) => (
                        <ProjectCard key={i} {...p} delay={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};
