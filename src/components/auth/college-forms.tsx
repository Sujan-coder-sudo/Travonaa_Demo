'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const collegeLoginSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
  password: z.string().min(1, 'Password is required.'),
});

const collegeRegisterSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  collegeName: z.string().min(1, 'College name is required.'),
  collegeId: z.string().min(1, 'College ID is required.'),
  email: z.string().email('Please enter a valid email.'),
  institutionEmail: z.string().email({ message: "A valid institutional email is required for verification." }).refine(
    (email) => email.endsWith('.edu') || email.endsWith('.ac.in'),
    "Please use your official institutional email (.edu, .ac.in)."
  ),
  phone: z.string().min(10, 'Please enter a valid phone number.'),
  role: z.string({ required_error: 'Please select a role.' }),
  password: z.string().min(8, 'Password must be at least 8 characters long.'),
});

export function CollegeLoginForm() {
  const form = useForm<z.infer<typeof collegeLoginSchema>>({
    resolver: zodResolver(collegeLoginSchema),
    defaultValues: { email: '', password: '' },
  });

  function onSubmit(values: z.infer<typeof collegeLoginSchema>) {
    console.log(values);
    // Handle login logic
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.edu" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Login</Button>
      </form>
    </Form>
  );
}

export function CollegeRegisterForm() {
  const form = useForm<z.infer<typeof collegeRegisterSchema>>({
    resolver: zodResolver(collegeRegisterSchema),
    defaultValues: { name: '', collegeName: '', collegeId: '', email: '', institutionEmail: '', phone: '', password: '' },
  });

  function onSubmit(values: z.infer<typeof collegeRegisterSchema>) {
    console.log(values);
    // Handle registration logic
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
            <FormField control={form.control} name="name" render={({ field }) => (<FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>)} />
            <FormField control={form.control} name="collegeName" render={({ field }) => (<FormItem><FormLabel>College Name</FormLabel><FormControl><Input placeholder="Example University" {...field} /></FormControl><FormMessage /></FormItem>)} />
        </div>
        <FormField control={form.control} name="collegeId" render={({ field }) => (<FormItem><FormLabel>College ID</FormLabel><FormControl><Input placeholder="Your College ID" {...field} /></FormControl><FormMessage /></FormItem>)} />
        <FormField control={form.control} name="institutionEmail" render={({ field }) => (<FormItem><FormLabel>Institution Email</FormLabel><FormControl><Input placeholder="id@yourcollege.edu" {...field} /></FormControl><FormMessage /></FormItem>)} />
        <FormField control={form.control} name="phone" render={({ field }) => (<FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input placeholder="+1 234 567 890" {...field} /></FormControl><FormMessage /></FormItem>)} />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger><SelectValue placeholder="Select your role" /></SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="faculty">Faculty</SelectItem>
                  <SelectItem value="placement_officer">Placement Officer</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField control={form.control} name="password" render={({ field }) => (<FormItem><FormLabel>Password</FormLabel><FormControl><Input type="password" {...field} /></FormControl><FormMessage /></FormItem>)} />
        <FormItem>
            <FormLabel>Upload ID Card (Optional)</FormLabel>
            <FormControl><Input type="file" /></FormControl>
        </FormItem>
        <Button type="submit" className="w-full">Create Account</Button>
      </form>
    </Form>
  );
}
