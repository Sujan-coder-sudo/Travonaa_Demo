'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, Wand2 } from 'lucide-react';
import { getSuggestions } from './actions';
import type { SuggestInstitutionsOutput } from '@/ai/flows/company-suggestion';

const formSchema = z.object({
  companyDescription: z.string().min(50, "Please provide a description of at least 50 characters.").max(2000),
});

export function SuggestionForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<SuggestInstitutionsOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { companyDescription: '' },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setError(null);
    setResult(null);
    startTransition(async () => {
      try {
        const res = await getSuggestions(values);
        if (res.suggestedInstitutions && res.suggestedInstitutions.length > 0) {
          setResult(res);
        } else {
          setError("Could not generate suggestions. Please try refining your description.");
        }
      } catch (e) {
        setError("An unexpected error occurred. Please try again.");
      }
    });
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Describe Your Company</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="companyDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Profile</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your company's industry, size, goals, and what you look for in academic partners. For example: We are a mid-sized fintech company specializing in blockchain solutions, looking to partner with universities that have strong computer science programs for internships and guest lectures."
                        className="min-h-[200px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      The more detail you provide, the better the suggestions will be.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isPending}>
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Get Suggestions
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Suggested Institutions</CardTitle>
        </CardHeader>
        <CardContent className="min-h-[280px]">
          {isPending && (
            <div className="flex h-full flex-col items-center justify-center text-muted-foreground">
                <Loader2 className="h-8 w-8 animate-spin" />
                <p className="mt-4">Analyzing your profile...</p>
            </div>
          )}
          {error && <p className="text-destructive">{error}</p>}
          {result && (
            <div className="flex flex-wrap gap-2">
              {result.suggestedInstitutions.map((institution, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1 text-sm">
                  {institution}
                </Badge>
              ))}
            </div>
          )}
          {!isPending && !result && !error && (
            <div className="flex h-full flex-col items-center justify-center text-center text-muted-foreground">
                <Wand2 className="h-10 w-10" />
                <p className="mt-4">Your suggested partners will appear here.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
