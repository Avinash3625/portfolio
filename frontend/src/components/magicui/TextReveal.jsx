import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * TextReveal — 21st.dev / Magic UI inspired
 * Text that fades in word by word as you scroll down the page.
 */
const TextReveal = ({ children, className = '' }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 0.9', 'start 0.25'],
    });

    const words = typeof children === 'string' ? children.split(' ') : [];

    return (
        <div ref={containerRef} className={className}>
            <p className="flex flex-wrap text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed">
                {words.map((word, i) => {
                    const start = i / words.length;
                    const end = start + 1 / words.length;

                    return (
                        <Word key={`${word}-${i}`} progress={scrollYProgress} range={[start, end]}>
                            {word}
                        </Word>
                    );
                })}
            </p>
        </div>
    );
};

const Word = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0.15, 1]);
    const color = useTransform(progress, range, ['rgb(107, 114, 128)', 'rgb(255, 255, 255)']);

    return (
        <span className="relative mr-2 mt-1">
            <motion.span style={{ opacity, color }}>
                {children}
            </motion.span>
        </span>
    );
};

export default TextReveal;
