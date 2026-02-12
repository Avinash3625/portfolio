import React from 'react';
import { motion } from 'framer-motion';

/**
 * BlurFade — 21st.dev / Magic UI inspired
 * A smooth blur and fade-in animation for content.
 */
const BlurFade = ({
    children,
    className = '',
    delay = 0,
    duration = 0.4,
    yOffset = 6,
    inView = true,
    blur = '6px',
}) => {
    const variants = {
        hidden: {
            opacity: 0,
            y: yOffset,
            filter: `blur(${blur})`,
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
        },
    };

    return (
        <motion.div
            initial="hidden"
            animate={inView ? undefined : undefined}
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            transition={{
                delay,
                duration,
                ease: 'easeOut',
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default BlurFade;
