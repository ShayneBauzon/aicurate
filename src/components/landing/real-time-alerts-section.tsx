
"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ThumbsUp, ThumbsDown, ExternalLink } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from 'next/link';

interface HighlightableText {
  id: string;
  content: string;
  explanation: string;
  sourceLink: string;
  sourceText: string;
}

const highlightedContent: HighlightableText[] = [
  {
    id: 'region',
    content: 'Antartica, Russia, and Europe.',
    explanation: 'This region list is geographically inaccurate for the typical habitat of Duranta erecta. It is native to the Americas, from Florida to Brazil and the Caribbean, and has been introduced to other tropical/subtropical regions.',
    sourceLink: 'https://en.wikipedia.org/wiki/Duranta_erecta',
    sourceText: 'Wikipedia - Duranta erecta'
  },
  {
    id: 'decay',
    content: 'their ability to feed on decaying material. In terms of plant anatomy, these species help decompose and recycle the nutrients back to the soil.',
    explanation: "While plants contribute to soil health through decomposition *after they die*, Duranta erecta itself doesn't primarily 'feed on' decaying material in the way fungi or certain microorganisms do. It's a photosynthetic plant obtaining energy from sunlight.",
    sourceLink: 'https://www.gardeningknowhow.com/ornamental/shrubs/duranta/duranta-sky-flower.htm',
    sourceText: 'Gardening Know How - Duranta'
  }
];

const articleParts = [
  { type: 'text', content: 'Duranta erecta is a flowering plant that can grow as a spreading or weeping evergreen shrub or small tree, growing up to 15-18 feet tall. It is native to the tropical regions of ' },
  { type: 'highlight', highlightId: 'region' },
  { type: 'text', content: ' Considering that it is a tropical plant, in lower temperatures, it is cultivated and grown as a smaller shrub, usually only reaching about 2-4 feet tall. Duranta erecta are important due to ' },
  { type: 'highlight', highlightId: 'decay' },
  { type: 'text', content: ' Duranta erecta (White Snakeroot) was collected near Antarctica. Specifically, near the permission from the authorities, it was collected on August 10th, 2023 at 6:00 PM. The flower was found as a plant in the vicinity. The container was not specified. It was carefully carried back ensuring enough space to prevent it from being undamaged during transport.'}
];


export default function RealTimeAlertsSection() {
  const [activePopover, setActivePopover] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{[key: string]: 'up' | 'down' | null}>({});

  const handleHighlightClick = (highlightId: string, event: React.MouseEvent<HTMLSpanElement>) => {
    setActivePopover(prev => prev === highlightId ? null : highlightId);
  };
  
  const handleFeedback = (highlightId: string, rating: 'up' | 'down') => {
    setFeedback(prev => ({...prev, [highlightId]: rating}));
    // Here you could also send feedback to a server
    console.log(`Feedback for ${highlightId}: ${rating}`);
    setTimeout(() => setActivePopover(null), 500); // Optionally close popover after feedback
  };

  return (
    <section id="demo" className="w-full py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            See VerifAI in Action
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Click on the highlighted phrases in the text below to see VerifAI's explanation.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto shadow-2xl">
          <CardHeader className="bg-muted/50 p-4 border-b">
            {/* Browser UI mock */}
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <div className="bg-background p-2 rounded-md text-sm text-muted-foreground overflow-x-auto">
              https://example-botany-article.com/duranta_erecta_guide
            </div>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <div className="mb-6 relative aspect-[16/9] w-full overflow-hidden rounded-lg shadow-md">
              <Image
                src="/photos/duranta-erecta.jpg"
                alt="Duranta erecta plant with vibrant purple flowers and green leaves"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">DURANTA ERECTA</h3>
            <div className="text-foreground/80 leading-relaxed space-y-4">
              <p>
                {articleParts.map((part, index) => {
                  if (part.type === 'text') {
                    return <span key={index}>{part.content}</span>;
                  }
                  if (part.type === 'highlight' && part.highlightId) {
                    const highlightData = highlightedContent.find(h => h.id === part.highlightId);
                    if (!highlightData) return null;

                    return (
                      <Popover key={highlightData.id} open={activePopover === highlightData.id} onOpenChange={(isOpen) => !isOpen && setActivePopover(null)}>
                        <PopoverTrigger asChild>
                          <span
                            onClick={(e) => handleHighlightClick(highlightData.id, e)}
                            className="bg-yellow-300/50 hover:bg-yellow-400/60 text-yellow-900 dark:bg-yellow-600/40 dark:hover:bg-yellow-500/50 dark:text-yellow-100 rounded px-1 py-0.5 cursor-pointer transition-colors"
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && handleHighlightClick(highlightData.id, e as any)}
                          >
                            {highlightData.content}
                          </span>
                        </PopoverTrigger>
                        <PopoverContent 
                          side="bottom" 
                          align="start" 
                          className="w-80 md:w-96 z-50 bg-card shadow-xl rounded-lg border p-4"
                          onEscapeKeyDown={() => setActivePopover(null)}
                        >
                          <div className="space-y-3">
                            <h4 className="font-bold text-primary text-lg">VERIFAI</h4>
                            <p className="text-sm text-card-foreground">{highlightData.explanation}</p>
                            <Link href={highlightData.sourceLink} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
                              {highlightData.sourceText} <ExternalLink className="w-3 h-3" />
                            </Link>
                            <div className="mt-3 pt-3 border-t border-border">
                              <p className="text-xs text-muted-foreground mb-2">How would you rate this explanation?</p>
                              <div className="flex items-center gap-3">
                                <Button 
                                  variant={feedback[highlightData.id] === 'up' ? 'default' : 'outline'} 
                                  size="icon" 
                                  className={`h-8 w-8 rounded-full ${feedback[highlightData.id] === 'up' ? 'bg-green-500 hover:bg-green-600 text-white' : ''}`}
                                  onClick={() => handleFeedback(highlightData.id, 'up')}
                                  aria-label="Rate up"
                                >
                                  <ThumbsUp className="w-4 h-4" />
                                </Button>
                                <Button 
                                  variant={feedback[highlightData.id] === 'down' ? 'default' : 'outline'} 
                                  size="icon" 
                                  className={`h-8 w-8 rounded-full ${feedback[highlightData.id] === 'down' ? 'bg-red-500 hover:bg-red-600 text-white' : ''}`}
                                  onClick={() => handleFeedback(highlightData.id, 'down')}
                                  aria-label="Rate down"
                                >
                                  <ThumbsDown className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    );
                  }
                  return null;
                })}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
