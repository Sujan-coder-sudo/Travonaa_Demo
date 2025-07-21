'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useRouter } from 'next/navigation';

const industryLoginSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
  password: z.string().min(1, 'Password is required.'),
});

const industryRegisterSchema = z.object({
  name: z.string().min(1, 'Contact name is required.'),
  companyName: z.string().min(1, 'Company name is required.'),
  email: z.string().email('Please enter a valid company email.'),
  password: z.string().min(8, 'Password must be at least 8 characters long.'),
  description: z.string().min(50, 'Please provide a description of at least 50 characters.'),
  mcaVerified: z.boolean().default(false).refine(val => val === true, {
    message: "You must confirm MCA verification."
  }),
});

export function IndustryLoginForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof industryLoginSchema>>({
    resolver: zodResolver(industryLoginSchema),
    defaultValues: { email: '', password: '' },
  });

  function onSubmit(values: z.infer<typeof industryLoginSchema>) {
    console.log(values);
    // Handle login logic
    router.push('/industries/dashboard');
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Email</FormLabel>
              <FormControl>
                <Input placeholder="contact@company.com" {...field} />
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

export function IndustryRegisterForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof industryRegisterSchema>>({
    resolver: zodResolver(industryRegisterSchema),
    defaultValues: { name: '', companyName: '', email: '', password: '', description: '' },
  });

  function onSubmit(values: z.infer<typeof industryRegisterSchema>) {
    console.log(values);
    // Handle registration logic
    router.push('/industries/dashboard');
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField control={form.control} name="name" render={({ field }) => (<FormItem><FormLabel>Contact Name</FormLabel><FormControl><Input placeholder="Jane Smith" {...field} /></FormControl><FormMessage /></FormItem>)} />
        <FormField control={form.control} name="companyName" render={({ field }) => (<FormItem><FormLabel>Company Name</FormLabel><FormControl><Input placeholder="Innovate Corp" {...field} /></FormControl><FormMessage /></FormItem>)} />
        <FormField control={form.control} name="email" render={({ field }) => (<FormItem><FormLabel>Work Email</FormLabel><FormControl><Input type="email" placeholder="jane.s@innovatecorp.com" {...field} /></FormControl><FormMessage /></FormItem>)} />
        <FormField control={form.control} name="password" render={({ field }) => (<FormItem><FormLabel>Password</FormLabel><FormControl><Input type="password" {...field} /></FormControl><FormMessage /></FormItem>)} />
        <FormField control={form.control} name="description" render={({ field }) => (<FormItem><FormLabel>Company Description</FormLabel><FormControl><Textarea placeholder="Describe your company, its mission, and what students can expect from a visit." {...field} /></FormControl><FormMessage /></FormItem>)} />
        <FormItem>
            <FormLabel>Upload 5+ Company Images</FormLabel>
            <FormControl><Input type="file" multiple accept="image/*" /></FormControl>
            <FormDescription>Drag-and-drop or click to select images.</FormDescription>
        </FormItem>
        <FormField
          control={form.control}
          name="mcaVerified"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>MCA Verification</FormLabel>
                <FormDescription>
                  By checking this box, you confirm that your company is registered with the Ministry of Corporate Affairs (MCA).
                </FormDescription>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Create Account</Button>
      </form>
    </Form>
  );
}
