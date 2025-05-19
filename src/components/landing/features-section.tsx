import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, MessageSquareText, ThumbsUp } from 'lucide-react'; // Updated icons

const features = [
  {
    icon: <Cpu className="w-10 h-10 text-primary mb-4" />,
    title: 'Real-Time AI Detection',
    description: 'One of VerifAI’s core features is an integrated AI detector that identifies outdated, biased, or false information in real time. It precisely highlights specific words or phrases, flagging them as false or misleading.',
  },
  {
    icon: <MessageSquareText className="w-10 h-10 text-primary mb-4" />,
    title: 'In-Page AI Explanation',
    description: 'A unique feature that sets VerifAI apart is its in-page explanation system. When users hover over (or click) a highlighted phrase, a popup appears providing a clear explanation of why the information was flagged, including a corrected version and source links.',
  },
  {
    icon: <ThumbsUp className="w-10 h-10 text-primary mb-4" />,
    title: 'User Feedback System',
    description: 'VerifAI includes a feedback mechanism allowing users to rate explanations and submit feedback, helping to improve the AI’s accuracy and performance over time.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-20 lg:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            Powerful Features at Your Fingertips
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            VerifAI is packed with cutting-edge capabilities to ensure you navigate the web with clarity and confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <CardHeader className="items-center text-center">
                {feature.icon}
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
