import { DashboardLayout } from '@/components/dashboard-layout';
import { SuggestionForm } from './suggestion-form';

export default function SuggestionsPage() {
  return (
    <DashboardLayout userType="industry">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI-Powered Partner Suggestions</h1>
          <p className="text-muted-foreground">
            Generate relevant suggestions for institutions that may match your company profile.
          </p>
        </div>
        <SuggestionForm />
      </div>
    </DashboardLayout>
  );
}
