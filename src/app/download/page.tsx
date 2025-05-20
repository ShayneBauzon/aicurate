
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
// import { Progress } from '@/components/ui/progress'; // Though not used in final, good to have if we want progress bar
import { ShieldCheck, Star, Info, CheckCircle, Users, MessageSquare, PackagePlus, AlertTriangle, Loader2 } from 'lucide-react';

const AicurateLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className="w-16 h-16 mr-4"
    aria-labelledby="aicurateLogoDownloadPageTitle"
  >
    <title id="aicurateLogoDownloadPageTitle">AIcurate Logo</title>
    <path
      d="M50 5 C 55 5, 90 20, 90 50 C 90 80, 55 95, 50 95 C 45 95, 10 80, 10 50 C 10 20, 45 5, 50 5 Z"
      fill="hsl(var(--primary))"
    />
    <path
      d="M30 35 L50 65 L70 35"
      stroke="hsl(var(--primary-foreground))"
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M52 58 L60 66 L78 42"
      stroke="hsl(var(--accent))"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);


const featuresList = [
  {
    icon: <CheckCircle className="w-5 h-5 text-green-500" />,
    name: 'Real-Time AI Detection',
    description: 'Identifies outdated, biased, or false information instantly as you browse.',
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-blue-500" />,
    name: 'In-Page AI Explanation',
    description: 'Hover over flagged content for clear explanations and source links.',
  },
  {
    icon: <Users className="w-5 h-5 text-purple-500" />,
    name: 'User Feedback System',
    description: 'Rate explanations to help improve AI accuracy over time.',
  },
];

const reviews = [
  {
    author: "Sarah L.",
    rating: 5,
    comment: "AIcurate has transformed how I research online. It's a must-have!",
    date: "July 15, 2024",
  },
  {
    author: "Mike P.",
    rating: 5,
    comment: "Incredible tool for fact-checking on the fly. Highly recommend.",
    date: "July 10, 2024",
  },
  {
    author: "Jessica W.",
    rating: 4,
    comment: "Very helpful for avoiding misinformation. The explanations are clear.",
    date: "July 5, 2024",
  }
];

type InstallStep = 'idle' | 'confirming' | 'installing' | 'installed' | 'error';

// export const metadata: Metadata = {
//   title: 'Download AIcurate Extension - Chrome Web Store',
//   description: 'Install the AIcurate browser extension to curate information by detecting outdated, biased, or false content in real-time.',
// };


export default function DownloadPage() {
  const [currentDate, setCurrentDate] = React.useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [installStep, setInstallStep] = useState<InstallStep>('idle');
  const [mainButtonText, setMainButtonText] = useState('Add to Chrome');
  const [isMainButtonDisabled, setIsMainButtonDisabled] = useState(false);

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  const handleAddToChromeClick = () => {
    if (installStep === 'installed') return;
    setInstallStep('confirming');
    setIsDialogOpen(true);
  };

  const handleConfirmInstall = () => {
    setInstallStep('installing');
    // Simulate installation process
    setTimeout(() => {
      // Simulate a chance of error for demo
      // const success = Math.random() > 0.2; 
      const success = true; // For now, always success
      if (success) {
        setInstallStep('installed');
        setMainButtonText('Added to Chrome');
        setIsMainButtonDisabled(true);
      } else {
        setInstallStep('error');
      }
    }, 2500); // Simulate 2.5 seconds installation time
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    if (installStep !== 'installed' && installStep !== 'error') {
      setInstallStep('idle');
    }
  };
  
  const resetInstallFlow = () => {
    setIsDialogOpen(false);
    setInstallStep('idle');
  };


  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <Link href="/main" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
                <ShieldCheck className="h-7 w-7 text-primary" />
                <span className="text-xl font-bold text-primary">AIcurate Home</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <AicurateLogo />
            <div className="flex-grow mt-4 sm:mt-0">
              <h1 className="text-3xl font-bold text-slate-800">AIcurate</h1>
              <p className="text-sm text-slate-500 mt-1">Offered by: AIcurate Team</p>
              <div className="flex items-center mt-1">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
                <span className="ml-2 text-sm text-slate-500">(125 ratings)</span>
                <span className="mx-2 text-slate-300">|</span>
                <span className="text-sm text-slate-500">10,000+ users</span>
              </div>
            </div>
            <Button
              size="lg"
              className={`mt-4 sm:mt-0 sm:ml-6 text-white px-8 py-3 text-base font-semibold shrink-0 transition-colors
                ${isMainButtonDisabled ? 'bg-green-600 hover:bg-green-700 cursor-default' : 'bg-blue-600 hover:bg-blue-700'}`}
              onClick={handleAddToChromeClick}
              disabled={isMainButtonDisabled}
            >
              {isMainButtonDisabled ? <CheckCircle className="mr-2 h-5 w-5" /> : null}
              {mainButtonText}
            </Button>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-8 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-700">Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  AIcurate is your essential browser companion for navigating the web with confidence. Our advanced AI-powered extension works in real-time to help you identify and understand potentially outdated, biased, or false information. Get instant clarity with in-page explanations and contribute to a more informed online experience.
                </p>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-slate-700 mb-3">Screenshots</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <Image data-ai-hint="browser extension interface" src="https://placehold.co/1280x800.png" alt="AIcurate Screenshot 1" width={1280} height={800} className="rounded-md border border-slate-200 shadow-sm" />
                    <Image data-ai-hint="extension popup" src="https://placehold.co/1280x800.png" alt="AIcurate Screenshot 2" width={1280} height={800} className="rounded-md border border-slate-200 shadow-sm" />
                    <Image data-ai-hint="settings page" src="https://placehold.co/1280x800.png" alt="AIcurate Screenshot 3" width={1280} height={800} className="rounded-md border border-slate-200 shadow-sm" />
                  </div>
                </div>
              </CardContent>
            </Card>

             <Card className="mb-8 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-700">Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {featuresList.map((feature) => (
                  <div key={feature.name} className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-medium text-slate-700">{feature.name}</h4>
                      <p className="text-sm text-slate-500">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="mb-8 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-700">User Reviews</CardTitle>
                <CardDescription>What people are saying about AIcurate.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {reviews.map((review, index) => (
                  <div key={index} className="border-b border-slate-200 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-center mb-1">
                      {Array(5).fill(0).map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} />
                      ))}
                       <span className="ml-auto text-xs text-slate-400">{review.date}</span>
                    </div>
                    <p className="text-slate-600 text-sm mb-1">"{review.comment}"</p>
                    <p className="text-xs font-medium text-slate-500">- {review.author}</p>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-4 text-blue-600 border-blue-600 hover:bg-blue-50">See all reviews</Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-700 flex items-center">
                  <Info className="w-5 h-5 mr-2 text-slate-500" />
                  Additional Information
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 space-y-3">
                <div>
                  <strong className="font-medium text-slate-700">Version:</strong> 1.0.0
                </div>
                <div>
                  <strong className="font-medium text-slate-700">Updated:</strong> {currentDate || 'Loading...'}
                </div>
                <div>
                  <strong className="font-medium text-slate-700">Size:</strong> 1.2MB
                </div>
                <div>
                  <strong className="font-medium text-slate-700">Languages:</strong> English
                </div>
                 <div>
                  <strong className="font-medium text-slate-700">Developer:</strong>
                  <Link href="#" className="text-blue-600 hover:underline ml-1">AIcurate Team</Link>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
                <CardHeader>
                    <CardTitle className="text-lg font-semibold text-slate-700">Privacy Practices</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                    <p className="mb-2">AIcurate has disclosed the following information regarding the collection and usage of your data. More detailed information can be found in the developer's privacy policy.</p>
                    <Link href="#" className="text-blue-600 hover:underline font-medium">
                        View Privacy Policy
                    </Link>
                </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 mt-12 py-8 text-center">
        <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} AIcurate. All rights reserved.</p>
        <div className="mt-2">
            <Link href="/main" className="text-xs text-blue-600 hover:underline">Back to AIcurate Homepage</Link>
        </div>
      </footer>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md" onInteractOutside={(e) => e.preventDefault()}>
          {installStep === 'confirming' && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center text-lg">
                  <PackagePlus className="w-6 h-6 mr-2 text-blue-600" />
                  Add "AIcurate"?
                </DialogTitle>
                <DialogDescription className="pt-2">
                  To provide its features, AIcurate needs permission to:
                </DialogDescription>
                <ul className="list-disc pl-5 mt-2 text-sm text-slate-600 space-y-1 text-left sm:text-left">
                  <li>Read and change data on websites you visit</li>
                  <li>Display notifications</li>
                </ul>
              </DialogHeader>
              <DialogFooter className="sm:justify-between mt-4">
                <Button variant="outline" onClick={resetInstallFlow} className="sm:mr-auto">
                  Cancel
                </Button>
                <Button onClick={handleConfirmInstall} className="bg-blue-600 hover:bg-blue-700 text-white">
                  Add extension
                </Button>
              </DialogFooter>
            </>
          )}
          {installStep === 'installing' && (
            <>
              <DialogHeader>
                <DialogTitle className="text-lg">Installing AIcurate...</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col items-center justify-center py-8 space-y-4">
                <Loader2 className="w-12 h-12 text-primary animate-spin" />
                <p className="text-sm text-slate-500">Please wait while the extension is being added.</p>
              </div>
            </>
          )}
          {installStep === 'installed' && (
            <>
              <DialogHeader>
                 <DialogTitle className="flex items-center text-lg text-green-600">
                   <CheckCircle className="w-6 h-6 mr-2" />
                  AIcurate has been added to Chrome
                </DialogTitle>
                <DialogDescription className="pt-2">
                  You can manage your extensions by clicking the puzzle icon in the Chrome toolbar.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="mt-4">
                <Button onClick={handleCloseDialog} className="w-full">Okay</Button>
              </DialogFooter>
            </>
          )}
           {installStep === 'error' && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center text-lg text-red-600">
                  <AlertTriangle className="w-6 h-6 mr-2" />
                  Installation Failed
                </DialogTitle>
                <DialogDescription className="pt-2">
                  An unexpected error occurred while trying to add AIcurate. Please try again later.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="mt-4">
                <Button onClick={resetInstallFlow} className="w-full">Close</Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
