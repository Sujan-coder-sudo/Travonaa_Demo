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
        'flex items-center gap-2 text-primary',
        className
      )}
    >
      <svg
        className="h-7 w-auto"
        viewBox="0 0 170 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_final_logo)">
          <text 
            x="0" 
            y="24"
            fontFamily="Inter, sans-serif"
            fontSize="24"
            fontWeight="bold"
            fill="#1B2A4E"
            className="font-headline"
            letterSpacing="-0.5"
          >
            TRAV
          </text>
          
          <g transform="translate(74, 4)">
             <circle cx="13" cy="13" r="13" fill="#1B2A4E"/>
             <path d="M13 0 A 13 13 0 0 1 26 13 L 13 13 Z" fill="#3B496D" />
             <circle cx="13" cy="13" r="1.5" fill="white"/>
             <path d="M13 13 L21 5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </g>

          <text
            x="110"
            y="24"
            fontFamily="Inter, sans-serif"
            fontSize="24"
            fontWeight="bold"
            fill="#4A4A4A"
            className="font-headline"
            letterSpacing="-0.5"
          >
            NAA
          </text>
        </g>
        <defs>
          <clipPath id="clip0_final_logo">
            <rect width="170" height="32" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
};