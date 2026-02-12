import React from 'react';

/**
 * AnimatedGradientText — 21st.dev / Magic UI inspired
 * Text with an animated gradient that shifts colors continuously.
 */
const AnimatedGradientText = ({
    children,
    className = '',
    colors = ['#ef4444', '#f97316', '#ef4444'],
    duration = '3s',
}) => {
    const gradientStr = colors.join(', ');

    return (
        <span
            className={`animated-gradient-text inline-block ${className}`}
            style={{
                backgroundImage: `linear-gradient(90deg, ${gradientStr}, ${colors[0]})`,
                backgroundSize: '300% 100%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: `gradient-shift ${duration} ease infinite`,
            }}
        >
            {children}
            <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
        </span>
    );
};

export default AnimatedGradientText;
