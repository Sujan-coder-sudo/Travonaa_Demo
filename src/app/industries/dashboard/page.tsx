import { DashboardLayout } from '@/components/dashboard-layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowUpRight, Eye, MailCheck, Users } from 'lucide-react';
import Link from 'next/link';

const requests = [
    { college: 'ABC Engineering College', date: '2024-09-15', status: 'Pending' },
    { college: 'XYZ Institute of Technology', date: '2024-09-10', status: 'Approved' },
    { college: 'National Science University', date: '2024-09-05', status: 'Rejected' },
    { college: 'City Business School', date: '2024-08-28', status: 'Approved' },
];

const analytics = [
    { title: 'Profile Views', value: '1,204', icon: Eye, change: '+15.2% from last month' },
    { title: 'Total Inquiries', value: '89', icon: Users, change: '+10.5% from last month' },
    { title: 'Visit Requests', value: '23', icon: MailCheck, change: '+5 since last week' },
];

export default function IndustryDashboardPage() {
  return (
    <DashboardLayout userType="industry">
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Industry Dashboard</h1>
                <p className="text-muted-foreground">Manage visit requests and view your profile performance.</p>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {analytics.map((item) => (
                    <Card key={item.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                            <item.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{item.value}</div>
                            <p className="text-xs text-muted-foreground">{item.change}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card>
                <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2">
                        <CardTitle>Recent Visit Requests</CardTitle>
                        <CardDescription>Approve or reject incoming requests from colleges.</CardDescription>
                    </div>
                    <Button asChild size="sm" className="ml-auto gap-1">
                        <Link href="#">View All<ArrowUpRight className="h-4 w-4" /></Link>
                    </Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>College Name</TableHead>
                                <TableHead>Requested Date</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {requests.map((req) => (
                                <TableRow key={req.college}>
                                    <TableCell className="font-medium">{req.college}</TableCell>
                                    <TableCell>{req.date}</TableCell>
                                    <TableCell>
                                        <Badge variant={req.status === 'Pending' ? 'secondary' : req.status === 'Approved' ? 'default' : 'destructive'}>
                                            {req.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            {req.status === 'Pending' && (
                                                <>
                                                    <Button variant="outline" size="sm">Approve</Button>
                                                    <Button variant="destructive" size="sm">Reject</Button>
                                                </>
                                            )}
                                            {req.status !== 'Pending' && (
                                                <Button variant="ghost" size="sm" disabled>No Actions</Button>
                                            )}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    </DashboardLayout>
  );
}
