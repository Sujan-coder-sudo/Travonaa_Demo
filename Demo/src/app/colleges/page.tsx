import { PublicHeader } from '@/components/public-header';
import { PublicFooter } from '@/components/public-footer';
import { AuthTabs } from '@/components/auth/auth-tabs';
import { CollegeLoginForm, CollegeRegisterForm } from '@/components/auth/college-forms';

export default function CollegesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />
      <main className="flex-1">
        <AuthTabs
          userType="College"
          loginForm={<CollegeLoginForm />}
          registerForm={<CollegeRegisterForm />}
        />
      </main>
      <PublicFooter />
    </div>
  );
}
