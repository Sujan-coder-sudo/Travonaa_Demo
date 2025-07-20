import { DashboardLayout } from '@/components/dashboard-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Building, MapPin } from 'lucide-react';
import Image from 'next/image';

const industries = [
  { name: 'Innovate Corp', field: 'Technology', location: 'Bangalore, IN', image: 'https://placehold.co/600x400.png', dataAiHint: 'modern office' },
  { name: 'BioHealth Pharma', field: 'Biotechnology', location: 'Hyderabad, IN', image: 'https://placehold.co/600x400.png', dataAiHint: 'laboratory research' },
  { name: 'ConstructX', field: 'Manufacturing', location: 'Pune, IN', image: 'https://placehold.co/600x400.png', dataAiHint: 'factory interior' },
  { name: 'QuantumLeap AI', field: 'Artificial Intelligence', location: 'Gurugram, IN', image: 'https://placehold.co/600x400.png', dataAiHint: 'server room' },
  { name: 'GreenEnergy Solutions', field: 'Renewable Energy', location: 'Chennai, IN', image: 'https://placehold.co/600x400.png', dataAiHint: 'wind turbines' },
  { name: 'FinSecure Bank', field: 'Finance', location: 'Mumbai, IN', image: 'https://placehold.co/600x400.png', dataAiHint: 'city skyline' },
];

export default function CollegeDashboardPage() {
  return (
    <DashboardLayout userType="college">
      <div className="flex flex-col gap-6">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Browse Industries</h1>
            <p className="text-muted-foreground">Find and connect with companies for industrial visits.</p>
        </div>
        <div className="rounded-lg border bg-card p-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                <Input placeholder="Search by company name..." />
                <Select>
                    <SelectTrigger><SelectValue placeholder="Filter by category" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="biotechnology">Biotechnology</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="ai">Artificial Intelligence</SelectItem>
                    </SelectContent>
                </Select>
                 <Select>
                    <SelectTrigger><SelectValue placeholder="Filter by region" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="bangalore">Bangalore</SelectItem>
                        <SelectItem value="hyderabad">Hyderabad</SelectItem>
                        <SelectItem value="pune">Pune</SelectItem>
                        <SelectItem value="mumbai">Mumbai</SelectItem>
                    </SelectContent>
                </Select>
                 <Select>
                    <SelectTrigger><SelectValue placeholder="Filter by availability" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="available">Available for Visits</SelectItem>
                        <SelectItem value="contact">Contact for Availability</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Card key={industry.name} className="overflow-hidden">
                <CardHeader className="p-0">
                    <Image src={industry.image} width={600} height={400} alt={industry.name} className="aspect-video object-cover" data-ai-hint={industry.dataAiHint} />
                </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-xl">{industry.name}</CardTitle>
                <CardDescription className="mt-1 flex items-center gap-2">
                    <Building className="h-4 w-4" /> {industry.field}
                </CardDescription>
                <CardDescription className="mt-1 flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> {industry.location}
                </CardDescription>
              </CardContent>
              <CardFooter className="bg-muted/50 p-4">
                <Button className="w-full">Send Visit Request</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
