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
      <span className="font-headline text-2xl font-bold">Travonaa</span>
    </Link>
  );
};
