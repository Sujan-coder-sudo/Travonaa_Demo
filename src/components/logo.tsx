import Image from 'next/image';
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
      <Image src="/logo.png" alt="Travonaa Logo" width={140} height={40} className="h-10 w-auto" />
    </Link>
  );
};
