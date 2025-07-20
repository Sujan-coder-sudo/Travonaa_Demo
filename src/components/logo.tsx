import Link from 'next/link';
import type { FC } from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-1 text-primary',
        className
      )}
    >
        <span className="font-headline text-2xl font-bold tracking-tight text-foreground">TRAV</span>
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-auto"
        >
            <circle cx="12" cy="12" r="10" fill="hsl(var(--foreground))" />
            <circle cx="12" cy="12" r="4" fill="white" />
        </svg>
        <span className="font-headline text-2xl font-bold tracking-tight" style={{ color: '#4A4A4A' }}>NAA</span>
    </Link>
  );
};
