
'use client';

import type { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/colleges', label: 'For Colleges' },
  { href: '/industries', label: 'For Industries' },
];

const NavLink: FC<{ href: string; label: string; className?: string }> = ({
  href,
  label,
  className,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
        isActive && 'text-foreground',
        className
      )}
    >
      {label}
      {isActive && (
        <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-primary transition-all"></span>
      )}
    </Link>
  );
};

export const PublicHeader: FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" asChild>
            <Link href="/colleges">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/colleges">Get Started</Link>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 p-6">
              <Logo />
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    {...link}
                    className="text-lg"
                  />
                ))}
              </nav>
              <div className="mt-4 flex flex-col gap-2">
                 <Button variant="secondary" asChild className="w-full">
                  <Link href="/colleges">Login</Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/colleges">Get Started</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
