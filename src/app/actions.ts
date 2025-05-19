// src/app/actions.ts
'use server';

import { 
  flagOutdatedInformation, 
  type FlagOutdatedInformationInput, 
  type FlagOutdatedInformationOutput 
} from '@/ai/flows/flag-outdated-info';

export async function analyzeContentAction(
  input: FlagOutdatedInformationInput
): Promise<FlagOutdatedInformationOutput> {
  try {
    // Add a small delay to simulate network latency for better UX demonstration
    // await new Promise(resolve => setTimeout(resolve, 1500)); 
    const result = await flagOutdatedInformation(input);
    return result;
  } catch (error) {
    console.error("Error in analyzeContentAction:", error);
    // Return a structured error that matches FlagOutdatedInformationOutput
    return {
      shouldFlag: true, // Consider it flagged if an error occurs
      reason: "An error occurred while analyzing the content. Please try again or check the server logs.",
    };
  }
}
