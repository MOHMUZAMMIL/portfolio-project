import { motion } from 'framer-motion';
import { Icons } from './Icons';
import resumePdf from '/Mohamed_Muzammil_ Resume.pdf';

export const CTA = () => {
    return (
        <section
            id="contact"
            className="py-32 px-6 bg-gradient-to-t from-accent-dark/20 to-[#0F0B09] relative overflow-hidden"
        >
            {/* Enhanced Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-3xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                >
                    Let's build scalable systems.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-neutral-400 mb-10"
                >
                    Open to frontend engineering opportunities and product collaborations.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
                >
                    {/* Email Button */}
                    <a
                        href="mailto:contactmuzammil275@gmail.com"
                        className="w-full sm:w-auto px-8 py-3 bg-accent text-background font-bold rounded-lg hover:bg-accent-light hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(255,107,53,0.6)] transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        <Icons.Mail /> Email Me
                    </a>

                    {/* LinkedIn Button */}
                    <a
                        href="https://www.linkedin.com/in/a-mohamed-muzammil"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-3 bg-[#E65100] text-white font-bold rounded-lg hover:bg-[#F57C00] hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(230,81,0,0.6)] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-orange-900/20"
                    >
                        <Icons.Linkedin /> LinkedIn
                    </a>

                    {/* Resume Button */}
                    <a
                        href={resumePdf}
                        download="Mohamed_Muzammil_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-3 bg-transparent border border-neutral-700 text-white font-medium rounded-lg hover:border-accent hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(255,107,53,0.3)] transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        Resume
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
