"use client";

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { analyzeContentAction } from '@/app/actions'; // Server Action
import type { FlagOutdatedInformationOutput } from '@/ai/flows/flag-outdated-info';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const exampleTexts = [
  {
    id: 'outdated',
    label: 'Outdated News Example',
    text: "Recent reports from 2010 indicate that Pluto is still considered the ninth planet in our solar system.",
  },
  {
    id: 'neutral',
    label: 'Neutral Statement Example',
    text: "Water is essential for all known forms of life. It is composed of hydrogen and oxygen.",
  },
  {
    id: 'complex',
    label: 'Complex/Nuanced Example',
    text: "While some studies suggest benefits of a new miracle supplement, many doctors remain skeptical due to lack of long-term research.",
  },
];


export default function RealTimeAlertsSection() {
  const [inputText, setInputText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [analysisResult, setAnalysisResult] = useState<FlagOutdatedInformationOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!inputText.trim()) {
      setError("Please enter some text to analyze.");
      setAnalysisResult(null);
      return;
    }
    setIsLoading(true);
    setAnalysisResult(null);
    setError(null);

    try {
      const result = await analyzeContentAction({ webpageContent: inputText });
      setAnalysisResult(result);
    } catch (e) {
      console.error("Analysis error:", e);
      setError("Failed to analyze content. Please try again.");
      setAnalysisResult({ shouldFlag: true, reason: "An error occurred during analysis."});
    } finally {
      setIsLoading(false);
    }
  };

  const handleExampleClick = (text: string) => {
    setInputText(text);
    setAnalysisResult(null);
    setError(null);
  };

  return (
    <section id="demo" className="w-full py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            See VerifAI in Action
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Paste text into the mock browser below or try an example to see how VerifAI flags potentially problematic content.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto shadow-2xl">
          <CardHeader className="bg-muted/50 p-4 border-b">
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <div className="bg-background p-2 rounded-md text-sm text-muted-foreground">
              https://example-news-article.com/todays_top_story
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Textarea
                  placeholder="Paste content here to verify..."
                  value={inputText}
                  onChange={(e) => {
                    setInputText(e.target.value);
                    setAnalysisResult(null);
                    setError(null);
                  }}
                  rows={8}
                  className="w-full text-sm leading-relaxed border-input focus:ring-primary"
                  aria-label="Text content to verify"
                />
                <div className="mt-2 flex flex-wrap gap-2">
                  {exampleTexts.map(ex => (
                    <Button key={ex.id} type="button" variant="outline" size="sm" onClick={() => handleExampleClick(ex.text)}>
                      Try: {ex.label}
                    </Button>
                  ))}
                </div>
              </div>
              <Button type="submit" disabled={isLoading || !inputText.trim()} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Info className="mr-2 h-4 w-4" />
                )}
                Verify Content
              </Button>
            </form>

            {error && (
              <Alert variant="destructive" className="mt-6">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {analysisResult && !error && (
              <div className="mt-6 p-4 border rounded-lg bg-secondary/30">
                <h3 className="text-lg font-semibold mb-2 text-foreground">Analysis Result:</h3>
                {analysisResult.shouldFlag ? (
                  <Alert variant="destructive">
                    <AlertTriangle className="h-5 w-5" />
                    <AlertTitle className="font-semibold">Potentially Outdated/Problematic</AlertTitle>
                    <AlertDescription className="mt-1 text-sm">
                      {analysisResult.reason}
                    </AlertDescription>
                  </Alert>
                ) : (
                  <Alert variant="default" className="border-green-500 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700">
                     <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <AlertTitle className="font-semibold text-green-700 dark:text-green-300">Looks Good!</AlertTitle>
                    <AlertDescription className="mt-1 text-sm text-green-600 dark:text-green-400">
                       {analysisResult.reason || "This content does not appear to be outdated based on our analysis."}
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
