import { PublicHeader } from '@/components/public-header';
import { PublicFooter } from '@/components/public-footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Building,
  CheckCircle,
  Link as LinkIcon,
  MousePointerClick,
  School,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const features = {
  colleges: [
    'Access to a wide network of industries.',
    'Streamlined process for booking visits.',
    'Direct communication with company representatives.',
    'Gain practical insights for students.',
  ],
  industries: [
    'Connect with upcoming talent.',
    'Showcase your company culture and innovations.',
    'Simplified management of visit requests.',
    'Build strong academic partnerships.',
  ],
};

const steps = [
  {
    icon: MousePointerClick,
    title: 'Step 1: Register',
    description:
      'Colleges and Industries sign up and create their profiles. Verification ensures authenticity.',
  },
  {
    icon: CheckCircle,
    title: 'Step 2: Verify',
    description:
      'Our team verifies profiles to maintain a trusted network of institutions and companies.',
  },
  {
    icon: LinkIcon,
    title: 'Step 3: Connect',
    description:
      'Browse profiles, send visit requests, and schedule meetings seamlessly through the platform.',
  },
];

const testimonials = [
  {
    name: 'Dr. Anya Sharma',
    title: 'Placement Head, ABC Engineering College',
    avatar: 'AS',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'woman portrait',
    quote:
      "Travonaa has revolutionized how we connect with industries. Our students have gained invaluable exposure that wasn't possible before.",
  },
  {
    name: 'Rohan Verma',
    title: 'HR Manager, Innovate Corp',
    avatar: 'RV',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'man portrait',
    quote:
      'An excellent platform for industry-academia collaboration. We’ve found some of our best interns through visits organized on Travonaa.',
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <PublicHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-white pt-24 text-center">
          <div className="container mx-auto px-4">
            <div
              className="absolute inset-0 bg-grid-slate-200/[0.04] bg-[10px_10px]"
              style={{
                maskImage: 'linear-gradient(to bottom, white 0%, white 80%, transparent 100%)',
              }}
            />
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Book Industry Visits & Corporate Meetings Easily
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Travonaa bridges the gap between academia and industry, creating
              opportunities for students and companies to connect, learn, and grow
              together.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/colleges">For Colleges</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/industries">For Industries</Link>
              </Button>
            </div>
            <div className="relative mt-12">
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-screen-xl h-2/3 bg-primary/5 rounded-t-full blur-3xl" />
               <Image
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&h=600&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Indian students traveling in a bus for an industrial visit"
                width={1200}
                height={600}
                className="relative mx-auto rounded-t-lg border object-cover shadow-2xl"
                data-ai-hint="students bus"
                priority
              />
            </div>
          </div>
        </section>

        {/* Why Travonaa Section */}
        <section className="py-20 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-20">
              <div className="rounded-xl bg-card p-8 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-accent/20 p-3">
                    <School className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="font-headline text-3xl font-bold text-foreground">
                    Why Travonaa for Colleges?
                  </h2>
                </div>
                <ul className="mt-6 space-y-3">
                  {features.colleges.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-card p-8 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-accent/20 p-3">
                    <Building className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="font-headline text-3xl font-bold text-foreground">
                    Why Travonaa for Industries?
                  </h2>
                </div>
                <ul className="mt-6 space-y-3">
                  {features.industries.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-white py-20 sm:py-32">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A Simple Path to Collaboration
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Getting started with Travonaa is straightforward. Follow these three
              simple steps to join our network.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <Card key={step.title} className="text-left">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="rounded-lg bg-primary/10 p-3">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-headline">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 sm:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Loved by Leaders in Academia & Industry
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="flex flex-col">
                  <CardContent className="flex-1 p-6">
                    <p className="text-muted-foreground">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                  <div className="border-t bg-muted/50 p-6">
                    <div className="flex items-center gap-4">
                      <Avatar>
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
