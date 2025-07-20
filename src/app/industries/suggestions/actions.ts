'use server';

import { suggestInstitutions, type SuggestInstitutionsInput, type SuggestInstitutionsOutput } from '@/ai/flows/company-suggestion';
import { z } from 'zod';

const SuggestInstitutionsInputSchema = z.object({
  companyDescription: z.string(),
});

export async function getSuggestions(input: SuggestInstitutionsInput): Promise<SuggestInstitutionsOutput> {
  const parsedInput = SuggestInstitutionsInputSchema.safeParse(input);

  if (!parsedInput.success) {
    throw new Error('Invalid input');
  }

  try {
    const result = await suggestInstitutions(parsedInput.data);
    return result;
  } catch (error) {
    console.error("Error in suggestInstitutions flow:", error);
    // In a real app, you might want to throw a more specific, user-friendly error.
    throw new Error("Failed to generate AI suggestions.");
  }
}
