import { motion } from 'framer-motion';
import { TimelineItem } from './TimelineItem';

export const Experience = () => {
    return (
        <section
            id="experience"
            className="py-24 px-6 md:px-12 lg:px-24 bg-[#0F0B09]"
        >
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-white">Experience</h2>
                </motion.div>

                <div className="ml-4">
                    <TimelineItem
                        role="Digital Transformation Engineer"
                        company="Ideassion Technology Solutions"
                        date="Dec 2022 – Present"
                        highlights={[
                            'Architected core ERP system modules enabling real-time inventory tracking.',
                            'Implemented seamless API integrations reducing data latency by 35%.',
                            'Optimized frontend performance, achieving 98+ Lighthouse scores.',
                            'Developed complex D3.js visualizations for executive dashboards.',
                            'Integrated location-based features for logistics tracking using Maps API.',
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};
