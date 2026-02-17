import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icons } from './Icons';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#projects', label: 'Projects' },
        { href: '#experience', label: 'Experience' },
        { href: '#contact', label: 'Contact' },
    ];

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center backdrop-blur-sm bg-background/50 border-b border-white/5"
            >
                <div className="flex items-center gap-2">
                    <span className="font-bold text-lg tracking-tight text-white">
                        MUZA<span className="text-accent">MMIL</span>
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="hover:text-accent-light transition-colors flex items-center gap-1 group"
                        >
                            {link.label}{' '}
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <Icons.ArrowUpRight />
                            </span>
                        </a>
                    ))}
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''
                            }`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
                            }`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                            }`}
                    />
                </button>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-background/80 backdrop-blur-md z-40 md:hidden"
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Menu Content */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="fixed top-[73px] left-0 right-0 z-40 md:hidden bg-surface/95 backdrop-blur-lg border-b border-white/10 shadow-2xl"
                        >
                            <nav className="px-6 py-8 flex flex-col gap-6">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        onClick={handleLinkClick}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.3 }}
                                        className="text-lg font-medium text-white hover:text-accent-light transition-colors flex items-center justify-between group"
                                    >
                                        {link.label}
                                        <Icons.ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </motion.a>
                                ))}
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
