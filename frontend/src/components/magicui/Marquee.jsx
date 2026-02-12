import React from 'react';

/**
 * Marquee — 21st.dev / Magic UI inspired
 * An infinite scrolling marquee component.
 */
const Marquee = ({
    children,
    className = '',
    reverse = false,
    pauseOnHover = true,
    duration = '30s',
    vertical = false,
}) => {
    const direction = vertical
        ? (reverse ? 'marquee-vertical-reverse' : 'marquee-vertical')
        : (reverse ? 'marquee-reverse' : 'marquee');

    return (
        <div
            className={`relative flex overflow-hidden ${vertical ? 'flex-col' : ''} ${className}`}
            style={{
                maskImage: vertical
                    ? 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
                    : 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: vertical
                    ? 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
                    : 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
        >
            <div
                className={`flex shrink-0 gap-4 ${vertical ? 'flex-col' : ''} ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
                style={{
                    animation: `${direction} ${duration} linear infinite`,
                }}
            >
                {children}
            </div>
            <div
                className={`flex shrink-0 gap-4 ${vertical ? 'flex-col' : ''} ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
                style={{
                    animation: `${direction} ${duration} linear infinite`,
                }}
                aria-hidden="true"
            >
                {children}
            </div>

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 1rem)); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(calc(-100% - 1rem)); }
          100% { transform: translateX(0); }
        }
        @keyframes marquee-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(calc(-100% - 1rem)); }
        }
        @keyframes marquee-vertical-reverse {
          0% { transform: translateY(calc(-100% - 1rem)); }
          100% { transform: translateY(0); }
        }
      `}</style>
        </div>
    );
};

export default Marquee;
