'use client';

import type { FC, ReactElement } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface AuthTabsProps {
  userType: 'College' | 'Industry';
  loginForm: ReactElement;
  registerForm: ReactElement;
}

export const AuthTabs: FC<AuthTabsProps> = ({ userType, loginForm, registerForm }) => {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-muted/40 p-4">
      <Tabs defaultValue="login" className="w-full max-w-md">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>{userType} Login</CardTitle>
              <CardDescription>
                Welcome back. Please enter your credentials to access your dashboard.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loginForm}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>{userType} Registration</CardTitle>
              <CardDescription>
                Create an account to start connecting.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {registerForm}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
