import React from 'react';

/**
 * BorderBeam — 21st.dev / Magic UI inspired
 * An animated beam of light that travels along the border of its container.
 */
const BorderBeam = ({
    size = 200,
    duration = 12,
    delay = 0,
    colorFrom = '#ef4444',
    colorTo = '#f97316',
    className = '',
}) => {
    return (
        <div
            className={`absolute inset-0 pointer-events-none overflow-hidden rounded-[inherit] ${className}`}
        >
            <div
                className="absolute inset-0"
                style={{
                    '--beam-size': `${size}px`,
                    '--beam-duration': `${duration}s`,
                    '--beam-delay': `${delay}s`,
                    '--beam-color-from': colorFrom,
                    '--beam-color-to': colorTo,
                }}
            >
                <div
                    className="absolute"
                    style={{
                        width: 'calc(100% * 2 + var(--beam-size) * 2)',
                        height: 'calc(100% * 2 + var(--beam-size) * 2)',
                        top: 'calc(var(--beam-size) * -1)',
                        left: 'calc(var(--beam-size) * -1)',
                        background: `conic-gradient(from calc(270deg - (45deg / 2)), transparent 0%, var(--beam-color-from) 30%, var(--beam-color-to) 50%, transparent 100%)`,
                        animation: `border-beam-spin var(--beam-duration) linear infinite`,
                        animationDelay: `var(--beam-delay)`,
                    }}
                />
            </div>
            {/* Mask - only shows the border area */}
            <div
                className="absolute inset-0"
                style={{
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    padding: '1.5px',
                    borderRadius: 'inherit',
                }}
            />
            <style>{`
        @keyframes border-beam-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};

export default BorderBeam;
