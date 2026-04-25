import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard = ({ children, className }: GlassCardProps) => {
  return (
    <div
      className={cn(
        'glass-card p-6 rounded-xl overflow-hidden relative group border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]',
        className
      )}
    >
      {/* Subtle subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassCard;
