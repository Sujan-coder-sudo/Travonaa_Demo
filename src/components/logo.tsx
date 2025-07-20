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
        viewBox="0 0 110 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 30V7.5H11V30H7Z" />
        <path d="M1.5 8C1.5 7.72386 1.72386 7.5 2 7.5H16C16.2761 7.5 16.5 7.72386 16.5 8V8C16.5 12.1421 13.1421 15.5 9 15.5V15.5C4.85786 15.5 1.5 12.1421 1.5 8V8Z" stroke="currentColor" strokeWidth="3" />
        <text
          x="22"
          y="24"
          fontFamily="Inter, sans-serif"
          fontSize="24"
          fontWeight="bold"
          className="font-headline"
        >
          ravonaa
        </text>
      </svg>
    </Link>
  );
};
