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
        'flex items-center gap-2 text-foreground',
        className
      )}
    >
      <div className="rounded-md bg-primary p-2 text-primary-foreground">
        <style>
          {`
            @keyframes run-bus {
              0% { transform: translateX(-20%); }
              100% { transform: translateX(20%); }
            }
            .animated-bus {
              animation: run-bus 1s ease-in-out infinite alternate;
            }
          `}
        </style>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animated-bus"
        >
          <path d="M6 17H2" />
          <path d="M22 17H18" />
          <path d="M4 17V6h16v11" />
          <path d="M4 12H20" />
          <path d="M8 6V4" />
          <path d="M16 6V4" />
          <path d="M19 17.01V17.01" />
          <path d="M5 17.01V17.01" />
        </svg>
      </div>
      <span className="text-xl font-bold tracking-tight">Travonaa</span>
    </Link>
  );
};
