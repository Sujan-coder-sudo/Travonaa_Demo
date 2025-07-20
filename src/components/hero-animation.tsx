// @ts-nocheck
'use client';

import { School, Building, Bus } from 'lucide-react';

export const HeroAnimation = () => {
  return (
    <div className="relative w-full max-w-lg h-full flex items-center justify-center">
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes flow {
          to {
            stroke-dashoffset: -1000;
          }
        }
        @keyframes bus-move {
            from {
                offset-distance: 0%;
            }
            to {
                offset-distance: 100%;
            }
        }
        .float {
          animation: float 6s ease-in-out infinite;
        }
        .float-delay-1 {
          animation-delay: -2s;
        }
        .float-delay-2 {
          animation-delay: -4s;
        }
        .flow {
          stroke-dasharray: 10;
          animation: flow 40s linear infinite;
        }
        #bus-path {
            offset-path: path('M 150 150 A 50 50 0 1 1 50 150 A 50 50 0 1 1 150 150 C 200 150 300 150 350 150 A 50 50 0 1 1 450 150 A 50 50 0 1 1 350 150 C 300 150 200 150 150 150 Z');
        }
        .bus {
            animation: bus-move 12s linear infinite;
        }
      `}</style>
      <svg
        viewBox="0 0 500 300"
        className="w-full h-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Path for bus - now invisible */}
        <path
          id="bus-path"
          d="M 150 150 A 50 50 0 1 1 50 150 A 50 50 0 1 1 150 150 C 200 150 300 150 350 150 A 50 50 0 1 1 450 150 A 50 50 0 1 1 350 150 C 300 150 200 150 150 150 Z"
          fill="none"
          stroke="transparent"
        />

        {/* Lines connecting nodes */}
        <path
          d="M 100 150 Q 250 50 400 150"
          stroke="hsl(var(--primary) / 0.3)"
          strokeWidth="2"
          fill="none"
          className="flow"
        />
        <path
          d="M 100 150 Q 250 250 400 150"
          stroke="hsl(var(--secondary-foreground) / 0.2)"
          strokeWidth="2"
          fill="none"
          className="flow"
          style={{ animationDirection: 'reverse', animationDelay: '-2s' }}
        />
        <path
          d="M 100 150 Q 150 220 250 150 Q 350 80 400 150"
          stroke="hsl(var(--accent) / 0.3)"
          strokeWidth="2"
          fill="none"
          className="flow"
          style={{ animationDuration: '30s' }}
        />

        {/* Academia Node */}
        <g className="float">
          <circle cx="100" cy="150" r="40" fill="hsl(var(--primary))" filter="url(#glow)" />
          <foreignObject x="75" y="125" width="50" height="50">
            <School className="w-full h-full text-primary-foreground" />
          </foreignObject>
        </g>

        {/* Industry Node */}
        <g className="float float-delay-1">
          <circle cx="400" cy="150" r="40" fill="hsl(var(--accent))" filter="url(#glow)" />
          <foreignObject x="375" y="125" width="50" height="50">
            <Building className="w-full h-full text-accent-foreground" />
          </foreignObject>
        </g>
        
        {/* Center Node */}
        <g className="float float-delay-2">
          <circle cx="250" cy="150" r="25" fill="hsl(var(--secondary))" />
           <foreignObject x="235" y="135" width="30" height="30">
             <span className="text-2xl font-bold text-secondary-foreground">T</span>
          </foreignObject>
        </g>

        {/* Bus Animation */}
        <g className="bus">
            <foreignObject x="-15" y="-15" width="30" height="30">
                 <Bus className="w-full h-full text-primary" style={{ transform: 'scaleX(-1)' }}/>
            </foreignObject>
        </g>
      </svg>
    </div>
  );
};
