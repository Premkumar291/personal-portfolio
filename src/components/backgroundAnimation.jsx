import React, { useMemo } from 'react';

// Combined Vertical and Horizontal Zigzag lines.
const zigzagLines = [
    // --- Vertical Zigzags (Top to Bottom) ---
    {
        d: "M200,-200 L350,200 L150,500 L400,800 L200,1200",
        delay: 0,
        duration: "10s"
    },
    {
        d: "M600,-250 L500,250 L750,550 L550,850 L700,1250",
        delay: 2,
        duration: "13s"
    },
    {
        d: "M1000,-200 L900,300 L1150,600 L950,900 L1100,1300",
        delay: 1,
        duration: "11s"
    },
    {
        d: "M1400,-300 L1550,200 L1350,500 L1600,800 L1400,1200",
        delay: 3,
        duration: "14s"
    },
    {
        d: "M1800,-200 L1650,300 L1900,700 L1700,1000 L1850,1300",
        delay: 0.5,
        duration: "12s"
    },

    // --- Horizontal Zigzags (Left to Right) ---
    {
        d: "M-200,150 L300,50 L600,250 L1000,100 L1400,200 L1800,50 L2200,150",
        delay: 1.5,
        duration: "15s"
    },
    {
        d: "M-250,450 L200,550 L500,350 L900,600 L1300,400 L1700,550 L2200,450",
        delay: 3.5,
        duration: "18s"
    },
    {
        d: "M-200,800 L400,700 L800,900 L1200,750 L1600,950 L2200,800",
        delay: 2.5,
        duration: "16s"
    },
    {
        d: "M-300,1050 L300,950 L700,1150 L1200,950 L1600,1150 L2200,1000",
        delay: 0.2,
        duration: "14s"
    },

    // --- Crossing/Diagonal ---
    {
        d: "M-100,200 L500,500 L1000,300 L1500,800 L2000,600",
        delay: 4,
        duration: "17s"
    }
];

export const Background = () => {
    const paths = useMemo(() => zigzagLines, []);

    return (
        <div className="absolute inset-0 z-0 bg-black pointer-events-none overflow-hidden">
            {/* Self-contained styles for the animation */}
            <style>{`
        @keyframes dash {
          0% {
            stroke-dashoffset: 6000;
          }
          100% {
            stroke-dashoffset: -6000;
          }
        }
        .line-trace {
          stroke-dasharray: 400 6000;
          stroke-dashoffset: 6000;
          animation-name: dash;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>

            <svg
                className="w-full h-full opacity-80"
                viewBox="0 0 1920 1080"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {paths.map((line, index) => (
                    <g key={index}>
                        {/* 1. Static base line (Faint connection) */}
                        <path
                            d={line.d}
                            stroke="#222"
                            strokeWidth="1"
                            fill="none"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                        />
                        {/* 2. Animated light trace */}
                        <path
                            d={line.d}
                            stroke="rgba(255,255,255,0.9)"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="line-trace"
                            filter="url(#glow)"
                            vectorEffect="non-scaling-stroke"
                            style={{
                                animationDuration: line.duration,
                                animationDelay: `-${line.delay}s`,
                            }}
                        />
                    </g>
                ))}
            </svg>

            {/* Vignette overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
        </div>
    );
};
