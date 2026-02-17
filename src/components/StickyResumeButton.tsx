import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Icons } from './Icons';

export const StickyResumeButton = () => {
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        // Show button after scrolling down 500px (approx past Hero)
        if (latest > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    });

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.a
                    href="/Mohamed_Muzammil_%20Resume.pdf"
                    download
                    initial={{ scale: 0, opacity: 0, rotate: 180 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0, opacity: 0, rotate: -180 }}
                    whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255, 107, 53, 0.5)" }}
                    whileTap={{ scale: 0.9 }}
                    className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-accent text-background rounded-full flex items-center justify-center shadow-lg cursor-pointer border-2 border-transparent hover:border-white/20 transition-colors"
                >
                    <Icons.Download />
                </motion.a>
            )}
        </AnimatePresence>
    );
};
