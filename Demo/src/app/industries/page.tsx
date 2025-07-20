import { PublicHeader } from '@/components/public-header';
import { PublicFooter } from '@/components/public-footer';
import { AuthTabs } from '@/components/auth/auth-tabs';
import { IndustryLoginForm, IndustryRegisterForm } from '@/components/auth/industry-forms';

export default function IndustriesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />
      <main className="flex-1">
        <AuthTabs
          userType="Industry"
          loginForm={<IndustryLoginForm />}
          registerForm={<IndustryRegisterForm />}
        />
      </main>
      <PublicFooter />
    </div>
  );
}
