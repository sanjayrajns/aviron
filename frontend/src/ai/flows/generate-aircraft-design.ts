'use server';

/**
 * @fileOverview Generates an aircraft design based on a user prompt.
 *
 * - generateAircraftDesign - A function that generates an aircraft design based on a user prompt.
 * - GenerateAircraftDesignInput - The input type for the generateAircraftDesign function.
 * - GenerateAircraftDesignOutput - The return type for the generateAircraftDesign function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAircraftDesignInputSchema = z.object({
  prompt: z.string().describe('A description of the desired aircraft design.'),
});
export type GenerateAircraftDesignInput = z.infer<typeof GenerateAircraftDesignInputSchema>;

const GenerateAircraftDesignOutputSchema = z.object({
  design: z.string().describe('A description of the generated aircraft design.'),
});
export type GenerateAircraftDesignOutput = z.infer<typeof GenerateAircraftDesignOutputSchema>;

export async function generateAircraftDesign(input: GenerateAircraftDesignInput): Promise<GenerateAircraftDesignOutput> {
  return generateAircraftDesignFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAircraftDesignPrompt',
  input: {schema: GenerateAircraftDesignInputSchema},
  output: {schema: GenerateAircraftDesignOutputSchema},
  prompt: `You are an expert aircraft designer. Based on the user's prompt, generate a detailed aircraft design description.\n\nPrompt: {{{prompt}}}`,
});

const generateAircraftDesignFlow = ai.defineFlow(
  {
    name: 'generateAircraftDesignFlow',
    inputSchema: GenerateAircraftDesignInputSchema,
    outputSchema: GenerateAircraftDesignOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
