import { Building2 } from 'lucide-react';
import type { FC } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link
      href="/"
      className={cn('flex items-center gap-2 text-primary', className)}
    >
      <Building2 className="h-7 w-7" />
      <span className="text-2xl font-bold tracking-tight font-headline">Travonaa</span>
    </Link>
  );
};
