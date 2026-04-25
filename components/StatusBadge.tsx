import React from 'react';
import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  label: string;
  value?: string;
  className?: string;
  valueClassName?: string;
}

const StatusBadge = ({ label, value, className, valueClassName }: StatusBadgeProps) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span className="monospace-label">{label}</span>
      {value && (
        <span className={cn(
          "font-mono text-[10px] text-foreground/50 border border-white/10 px-1.5 py-0.5 rounded bg-white/5",
          valueClassName
        )}>
          {value}
        </span>
      )}
    </div>
  );
};

export default StatusBadge;
