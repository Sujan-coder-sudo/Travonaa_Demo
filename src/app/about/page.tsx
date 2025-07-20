import { PublicHeader } from '@/components/public-header';
import { PublicFooter } from '@/components/public-footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

const team = [
  { name: 'Swaroop C Patil', role: 'Founder', avatar: 'SP', image: 'https://storage.googleapis.com/aifirebase/sc-759882f0-e761-4171-92b8-c313a5a70908.png', dataAiHint: 'man portrait' },
  { name: 'Sujan Rathod', role: 'Co-Founder', avatar: 'SR', image: 'https://placehold.co/128x128.png', dataAiHint: 'man portrait' },
  { name: 'Chithranjan S', role: 'Co-Founder', avatar: 'CS', image: 'https://placehold.co/128x128.png', dataAiHint: 'man portrait' },
  { name: 'Pramukh', role: 'Team Member', avatar: 'P', image: 'https://placehold.co/128x128.png', dataAiHint: 'person portrait' },
  { name: 'Manoj S', role: 'Team Member', avatar: 'MS', image: 'https://placehold.co/128x128.png', dataAiHint: 'person portrait' },
  { name: 'Pawan', role: 'Team Member', avatar: 'P', image: 'https://placehold.co/128x128.png', dataAiHint: 'person portrait' },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <PublicHeader />
      <main className="flex-1">
        <div className="container mx-auto max-w-5xl px-4 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Meet the Team Behind Travonaa
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              We are a passionate group of innovators dedicated to connecting
              education with industry to create a brighter future for students.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="flex flex-col items-center p-6">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.dataAiHint} />
                    <AvatarFallback>{member.avatar}</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-md text-accent">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <PublicFooter />
    </div>
  );
}
