import React, { useEffect, useState, useCallback, useMemo } from 'react';

/**
 * SparklesText — 21st.dev / Magic UI inspired
 * Generates sparkle stars around text with smooth color transitions.
 */
const SparklesText = ({
    children,
    className = '',
    sparklesCount = 10,
    colors = { first: '#ef4444', second: '#f97316' },
}) => {
    const [sparkles, setSparkles] = useState([]);

    const generateStar = useCallback(() => {
        const size = Math.random() * 16 + 6;
        return {
            id: Math.random().toString(36).slice(2),
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            color: Math.random() > 0.5 ? colors.first : colors.second,
            delay: Math.random() * 2,
            scale: Math.random() * 0.6 + 0.3,
            size,
            lifespan: Math.random() * 8 + 4,
        };
    }, [colors]);

    useEffect(() => {
        const initSparkles = Array.from({ length: sparklesCount }, generateStar);
        setSparkles(initSparkles);

        const interval = setInterval(() => {
            setSparkles((prev) =>
                prev.map((s) => (Math.random() > 0.7 ? generateStar() : s))
            );
        }, 2000);

        return () => clearInterval(interval);
    }, [sparklesCount, generateStar]);

    const starElement = useMemo(() => (
        <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z" fill="currentColor" />
        </svg>
    ), []);

    return (
        <span className={`relative inline-block ${className}`}>
            <span className="relative z-10">{children}</span>
            {sparkles.map((sparkle) => (
                <span
                    key={sparkle.id}
                    className="absolute pointer-events-none"
                    style={{
                        left: sparkle.x,
                        top: sparkle.y,
                        width: sparkle.size,
                        height: sparkle.size,
                        color: sparkle.color,
                        transform: `scale(${sparkle.scale})`,
                        animation: `sparkle-spin ${sparkle.lifespan}s linear infinite`,
                        animationDelay: `${sparkle.delay}s`,
                        zIndex: 20,
                    }}
                >
                    {starElement}
                </span>
            ))}
            <style>{`
        @keyframes sparkle-spin {
          0% { opacity: 0; transform: scale(0) rotate(0deg); }
          25% { opacity: 1; transform: scale(1) rotate(90deg); }
          50% { opacity: 0.8; transform: scale(0.6) rotate(180deg); }
          75% { opacity: 1; transform: scale(0.9) rotate(270deg); }
          100% { opacity: 0; transform: scale(0) rotate(360deg); }
        }
      `}</style>
        </span>
    );
};

export default SparklesText;
