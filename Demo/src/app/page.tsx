import { PublicHeader } from '@/components/public-header';
import { PublicFooter } from '@/components/public-footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  ArrowRight,
  Building,
  School,
  Briefcase,
  Lightbulb,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';
import { HeroAnimation } from '@/components/hero-animation';

const features = [
  {
    icon: Lightbulb,
    title: 'Discover Talent',
    description:
      'Connect with the brightest minds and future innovators from top-tier educational institutions.',
  },
  {
    icon: Briefcase,
    title: 'Build Your Brand',
    description:
      'Increase your company’s visibility and appeal to the next generation of professionals.',
  },
  {
    icon: TrendingUp,
    title: 'Drive Innovation',
    description:
      'Collaborate on research and projects, staying ahead of industry trends and challenges.',
  },
];

const testimonials = [
  {
    name: 'Priya Mehta',
    title: 'Placement Officer, IIT Bombay',
    avatar: 'PM',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'woman portrait',
    quote:
      "Travonaa has transformed our industry outreach. The platform is intuitive, and the quality of connections is unparalleled. It's a must-have for any ambitious university.",
  },
  {
    name: 'Arjun Singh',
    title: 'University Relations Lead, Tata Motors',
    avatar: 'AS',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'man portrait',
    quote:
      'We’ve discovered incredible talent through Travonaa. It simplifies campus engagement and helps us build meaningful, long-term relationships with academia.',
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <PublicHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="container relative z-10 mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div className="text-center md:text-left">
                <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
                  Where Academia Meets Industry
                </h1>
                <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
                  Travonaa is the definitive platform for fostering powerful
                  collaborations between educational institutions and leading
                  companies.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
                  <Button asChild size="lg">
                    <Link href="/colleges">
                      For Colleges <ArrowRight />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/industries">
                      For Industries <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative flex h-[400px] items-center justify-center">
                 <HeroAnimation />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted/50 py-20 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why Partner with Academia?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Unlock a world of opportunity by connecting with the academic
                community.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  className="transform-gpu border-transparent bg-background shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-primary/20 dark:bg-card"
                >
                  <CardContent className="p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-headline text-xl font-bold">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Dual CTA Section */}
        <section className="py-20 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Card className="flex flex-col items-center justify-between overflow-hidden bg-primary/5 p-8 text-center md:p-12">
                <div className="mb-6">
                  <School className="mx-auto h-12 w-12 text-primary" />
                  <h3 className="mt-4 font-headline text-2xl font-bold">
                    Are you a College?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Unlock unparalleled opportunities for your students and
                    faculty. Connect with industry leaders for industrial
                    visits, internships, and research collaborations.
                  </p>
                </div>
                <Button asChild size="lg">
                  <Link href="/colleges">
                    Get Started <ArrowRight />
                  </Link>
                </Button>
              </Card>
              <Card className="flex flex-col items-center justify-between overflow-hidden bg-secondary/50 p-8 text-center md:p-12">
                <div className="mb-6">
                  <Building className="mx-auto h-12 w-12 text-secondary-foreground" />
                  <h3 className="mt-4 font-headline text-2xl font-bold">
                    Are you an Industry?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Discover the next generation of talent. Showcase your
                    innovations and build a strong pipeline of future employees
                    and collaborators.
                  </p>
                </div>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/industries">
                    Join Now <ArrowRight />
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-muted/50 py-20 sm:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Trusted by the Best
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
              Hear what leaders in academia and industry have to say about their
              experience with Travonaa.
            </p>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.name}
                  className="flex flex-col bg-background dark:bg-card"
                >
                  <CardContent className="flex-1 p-6 text-lg">
                    <p className="text-muted-foreground">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                  <div className="border-t p-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={testimonial.image}
                          alt={testimonial.name}
                          data-ai-hint={testimonial.dataAiHint}
                        />
                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
