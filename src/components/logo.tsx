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
        'flex items-center text-primary',
        className
      )}
    >
      <svg
        className="h-8 w-auto"
        viewBox="0 0 180 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="30"
          y="24"
          fontFamily="Inter, sans-serif"
          fontSize="24"
          fontWeight="bold"
          className="font-headline"
        >
          ravonaa
        </text>
        <path
          d="M19.16 3.2C17.56 2.4 15.76 2 13.6 2C11.44 2 9.64 2.4 8.04 3.2L8.2 5.2C9.64 4.4 11.44 4 13.6 4C15.76 4 17.56 4.4 18.92 5.2L19.16 3.2ZM13.6 30V4H15.6V30H13.6ZM11.6 30V4H13.6V30H11.6Z"
        />
      </svg>
    </Link>
  );
};
