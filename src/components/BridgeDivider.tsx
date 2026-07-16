import React from 'react';

interface BridgeDividerProps {
  direction?: 'up' | 'down';
  className?: string;
  color?: string;
}

export default function BridgeDivider({ direction = 'down', className = "", color = "text-slate-50" }: BridgeDividerProps) {
  // SVG representing the elegant arch and suspension cables of a high-trust compliance bridge.
  return (
    <div className={`w-full overflow-hidden leading-none select-none pointer-events-none relative z-10 ${className}`}>
      {direction === 'down' ? (
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className={`w-full h-8 sm:h-12 md:h-16 lg:h-20 fill-current ${color}`}
        >
          {/* Subtle bridge suspension cables effect */}
          <path d="M0,0 Q300,100 600,100 Q900,100 1200,0 L1200,120 L0,120 Z" />
          {/* Suspended thin line motif */}
          <path 
            d="M0,10 Q300,90 600,90 Q900,90 1200,10" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            className="opacity-20"
          />
        </svg>
      ) : (
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className={`w-full h-8 sm:h-12 md:h-16 lg:h-20 fill-current ${color}`}
        >
          {/* Arching Bridge Base representation */}
          <path d="M0,120 Q300,20 600,20 Q900,20 1200,120 L1200,0 L0,0 Z" />
          {/* Accent cable curve */}
          <path 
            d="M0,110 Q300,30 600,30 Q900,30 1200,110" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            className="opacity-20"
          />
        </svg>
      )}
    </div>
  );
}
