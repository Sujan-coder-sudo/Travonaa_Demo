'use server';
/**
 * @fileOverview An AI agent that suggests institutions that may match a company profile.
 *
 * - suggestInstitutions - A function that handles the suggestion process.
 * - SuggestInstitutionsInput - The input type for the suggestInstitutions function.
 * - SuggestInstitutionsOutput - The return type for the suggestInstitutions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestInstitutionsInputSchema = z.object({
  companyDescription: z
    .string()
    .describe('The description of the company, including industry, size, and goals.'),
});
export type SuggestInstitutionsInput = z.infer<typeof SuggestInstitutionsInputSchema>;

const SuggestInstitutionsOutputSchema = z.object({
  suggestedInstitutions: z
    .array(z.string())
    .describe('A list of suggested institution names that may be a good match for the company.'),
});
export type SuggestInstitutionsOutput = z.infer<typeof SuggestInstitutionsOutputSchema>;

export async function suggestInstitutions(input: SuggestInstitutionsInput): Promise<SuggestInstitutionsOutput> {
  return suggestInstitutionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestInstitutionsPrompt',
  input: {schema: SuggestInstitutionsInputSchema},
  output: {schema: SuggestInstitutionsOutputSchema},
  prompt: `You are an expert in identifying potential partnerships between companies and educational institutions.

  Given the following company description, suggest a list of institution names that would be a good match for potential partnerships.
  The list should be comma separated.
  Company Description: {{{companyDescription}}}
  `,
});

const suggestInstitutionsFlow = ai.defineFlow(
  {
    name: 'suggestInstitutionsFlow',
    inputSchema: SuggestInstitutionsInputSchema,
    outputSchema: SuggestInstitutionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
