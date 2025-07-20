import Link from 'next/link';
import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { Bus } from 'lucide-react';

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
        <Bus className="h-5 w-5" />
      </div>
      <span className="text-xl font-bold tracking-tight">Travonaa</span>
    </Link>
  );
};
