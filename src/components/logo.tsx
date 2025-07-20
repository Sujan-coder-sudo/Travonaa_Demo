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
        <g clipPath="url(#clip0_1_2)">
          <text 
            x="0" 
            y="24"
            fontFamily="Inter, sans-serif"
            fontSize="24"
            fontWeight="bold"
            fill="#212A4A"
            className="font-headline"
            letterSpacing="-0.5"
          >
            TRAV
          </text>
          
          <g transform="translate(74, 5)">
            <path 
              d="M11.0859 0.707107C14.7869 -2.99393 21.2131 -2.99393 24.9141 0.707107L25.3354 1.12843C27.0583 2.85132 28 5.21406 28 7.66981V13.8284C28 19.8251 20.3553 25.5681 15.0006 25.5681C9.64593 25.5681 2 19.8251 2 13.8284V7.66981C2 5.21406 2.94172 2.85132 4.66462 1.12843L5.08594 0.707107C8.78693 -2.99393 15.2131 -2.99393 18.9141 0.707107"
              transform="translate(-2, 0)" fill="#212A4A"
            />
            <path 
              d="M13,0 A13,13 0 0,1 26,13 L13,13 Z"
              fill="#343E47"
            />
            <circle cx="13" cy="13" r="1.5" fill="white"/>
            <path d="M13 13 L21 5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </g>

          <text
            x="110"
            y="24"
            fontFamily="Inter, sans-serif"
            fontSize="24"
            fontWeight="bold"
            fill="#343E47"
            className="font-headline"
            letterSpacing="-0.5"
          >
            NAA
          </text>
        </g>
        <defs>
          <clipPath id="clip0_1_2">
            <rect width="170" height="32" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
};
