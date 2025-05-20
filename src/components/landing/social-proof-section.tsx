import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah L.',
    title: 'PhD Researcher',
    avatar: 'SL',
    image: 'https://placehold.co/100x100.png',
    imageHint: 'woman portrait',
    quote: "AIcurate has become an indispensable tool for my research. It helps me quickly sift through information and identify potentially outdated studies. A real time-saver!",
    rating: 5,
  },
  {
    name: 'Mike P.',
    title: 'Journalist',
    avatar: 'MP',
    image: 'https://placehold.co/100x100.png',
    imageHint: 'man glasses',
    quote: "In my line of work, accuracy is paramount. AIcurate gives me an extra layer of confidence by flagging content that needs a second look. Highly recommended!",
    rating: 5,
  },
  {
    name: 'Jessica W.',
    title: 'Student',
    avatar: 'JW',
    image: 'https://placehold.co/100x100.png',
    imageHint: 'student smiling',
    quote: "As a student, I'm constantly browsing for information. AIcurate helps me avoid unreliable sources and ensures my assignments are based on credible facts.",
    rating: 4,
  },
];

export default function SocialProofSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-20 lg:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            Trusted by Users Like You
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground md:text-lg">
            Hear what our users have to say about how AIcurate has transformed their online experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.imageHint} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
                <blockquote className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center mt-auto">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/50'}`}
                      />
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
