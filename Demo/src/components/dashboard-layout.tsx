'use client';

import type { FC, ReactNode } from 'react';
import Link from 'next/link';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
  SidebarFooter,
} from '@/components/ui/sidebar';
import {
  Bell,
  Home,
  Search,
  Settings,
  Users,
  Briefcase,
  BrainCircuit,
  LogOut,
  Building,
  School,
  LifeBuoy,
  Menu,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Logo } from './logo';

const CollegeNav = () => (
  <>
    <SidebarMenuItem>
      <SidebarMenuButton href="/colleges/dashboard" isActive>
        <Home />
        <span>Dashboard</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
    <SidebarMenuItem>
      <SidebarMenuButton href="#">
        <Briefcase />
        <span>Browse Industries</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
    <SidebarMenuItem>
      <SidebarMenuButton href="#">
        <Users />
        <span>My Requests</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </>
);

const IndustryNav = () => (
  <>
    <SidebarMenuItem>
      <SidebarMenuButton href="/industries/dashboard" isActive>
        <Home />
        <span>Dashboard</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
    <SidebarMenuItem>
      <SidebarMenuButton href="#">
        <Users />
        <span>Visit Requests</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
    <SidebarMenuItem>
      <SidebarMenuButton href="/industries/suggestions">
        <BrainCircuit />
        <span>AI Suggestions</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </>
);

export const DashboardLayout: FC<{
  children: ReactNode;
  userType: 'college' | 'industry';
}> = ({ children, userType }) => {
  const user = {
    name: userType === 'college' ? 'College Admin' : 'Industry Rep',
    email: userType === 'college' ? 'admin@college.edu' : 'rep@company.com',
    avatar: 'https://placehold.co/100x100.png',
    dataAiHint: 'person portrait',
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-muted/40">
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <Logo />
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {userType === 'college' ? <CollegeNav /> : <IndustryNav />}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
             <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton href="#">
                        <Settings />
                        <span>Settings</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton href="#">
                        <LifeBuoy />
                        <span>Support</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
             </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <div className="flex flex-1 flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                 <div className="md:hidden">
                    <SidebarTrigger asChild>
                        <Button size="icon" variant="outline"><Menu /></Button>
                    </SidebarTrigger>
                </div>
                <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search..." className="w-full rounded-lg bg-white pl-8 md:w-[200px] lg:w-[320px]" />
                </div>
                <Button variant="outline" size="icon" className="h-8 w-8">
                    <Bell className="h-4 w-4" />
                    <span className="sr-only">Toggle notifications</span>
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                        <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar} alt={user.name} data-ai-hint={user.dataAiHint} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                    <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        {userType === 'college' ? <School className="mr-2 h-4 w-4" /> : <Building className="mr-2 h-4 w-4" />}
                        <span>{userType === 'college' ? 'College' : 'Industry'} Dashboard</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                         <Link href="/">
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Logout</span>
                        </Link>
                    </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </header>
            <main className="flex-1 p-4 sm:px-6 sm:py-0">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};
