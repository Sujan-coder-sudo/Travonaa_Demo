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
      <div className="flex items-center gap-1">
        <span className="font-headline text-2xl font-bold tracking-tight text-foreground">TRAV</span>
        <svg
            width="24"
            height="24"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-auto"
        >
            <path 
                d="M14 0C7.82 0 2.5 5.32 2.5 11.5C2.5 19.42 14 28 14 28C14 28 25.5 19.42 25.5 11.5C25.5 5.32 20.18 0 14 0ZM14 15.5C11.7909 15.5 10 13.7091 10 11.5C10 9.29086 11.7909 7.5 14 7.5C16.2091 7.5 18 9.29086 18 11.5C18 13.7091 16.2091 15.5 14 15.5Z"
                fill="hsl(var(--foreground))"
            />
            <circle cx="14" cy="11.5" r="4" fill="white" />
        </svg>
        <span className="font-headline text-2xl font-bold tracking-tight" style={{ color: '#4A4A4A' }}>NAA</span>
      </div>
    </Link>
  );
};
