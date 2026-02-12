import React from 'react';

/**
 * ShimmerButton — 21st.dev / Magic UI inspired
 * A button with a shimmering light that travels around the perimeter.
 */
const ShimmerButton = ({
    children,
    className = '',
    shimmerColor = '#ef4444',
    shimmerSize = '0.1em',
    shimmerDuration = '2.5s',
    background = 'rgba(0, 0, 0, 0.9)',
    borderRadius = '12px',
    ...props
}) => {
    return (
        <>
            <button
                className={`shimmer-button group relative z-0 inline-flex items-center justify-center overflow-hidden whitespace-nowrap px-8 py-4 font-semibold text-white transition-all duration-300 ${className}`}
                style={{ borderRadius, '--shimmer-color': shimmerColor, '--shimmer-size': shimmerSize }}
                {...props}
            >
                {/* Shimmer effect */}
                <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ borderRadius }}
                >
                    <div
                        className="absolute inset-[-100%]"
                        style={{
                            background: `conic-gradient(from 0deg, transparent 0 340deg, ${shimmerColor} 360deg)`,
                            animation: `shimmer-spin ${shimmerDuration} linear infinite`,
                        }}
                    />
                </div>

                {/* Background */}
                <div
                    className="absolute inset-[1.5px]"
                    style={{ background, borderRadius: `calc(${borderRadius} - 1.5px)` }}
                />

                {/* Glowing overlay on hover */}
                <div
                    className="absolute inset-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(circle at center, ${shimmerColor}22 0%, transparent 70%)`,
                        borderRadius: `calc(${borderRadius} - 1.5px)`,
                    }}
                />

                {/* Content */}
                <span className="relative z-10 flex items-center gap-2">
                    {children}
                </span>
            </button>

            <style>{`
        @keyframes shimmer-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
        </>
    );
};

export default ShimmerButton;
