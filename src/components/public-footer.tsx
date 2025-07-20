import type { FC } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/logo';

export const PublicFooter: FC = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-start">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Connecting future leaders with today's innovators.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-2">
            <div>
              <h4 className="font-semibold text-foreground">Platform</h4>
              <ul className="mt-4 space-y-2">
                 <li><Link href="/colleges" className="text-sm text-muted-foreground hover:text-primary">For Colleges</Link></li>
                 <li><Link href="/industries" className="text-sm text-muted-foreground hover:text-primary">For Industries</Link></li>
                 <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Pricing</Link></li>
              </ul>
            </div>
             <div>
              <h4 className="font-semibold text-foreground">Company</h4>
              <ul className="mt-4 space-y-2">
                 <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
                 <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Careers</Link></li>
                 <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </div>
             <div>
              <h4 className="font-semibold text-foreground">Legal</h4>
              <ul className="mt-4 space-y-2">
                 <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
                 <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                 <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
           &copy; {new Date().getFullYear()} Travonaa. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
