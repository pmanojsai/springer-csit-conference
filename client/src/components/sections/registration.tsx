import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import data from "@/data/conference.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  affiliation: z.string().min(2, "Affiliation is required"),
  role: z.enum(["Student", "Professional", "Academic Member"]),
  paperTitle: z.string().optional(),
  terms: z.boolean().refine(val => val === true, "You must accept terms"),
});

export function Registration() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      affiliation: "",
      paperTitle: "",
      terms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Registration Attempted",
      description: "This is a mockup. Payment integration is pending.",
    });
  }

  return (
    <section id="registration" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Join Us</h2>
          <h3 className="text-3xl font-heading font-bold text-slate-900">Registration</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Fee Table */}
          <div className="space-y-6">
            <h4 className="text-2xl font-bold mb-4">Registration Fees</h4>
            <div className="space-y-4">
              {data.registration.fees.map((fee, idx) => (
                <Card key={idx} className="overflow-hidden border-l-4 border-l-primary hover:shadow-md transition-shadow">
                  <CardHeader className="bg-slate-50 py-3">
                    <CardTitle className="text-lg text-slate-900">{fee.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xs text-slate-500 uppercase font-bold">Early Bird</div>
                      <div className="text-xl font-bold text-primary">{fee.earlyBird}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase font-bold">Regular</div>
                      <div className="text-xl font-bold text-slate-700">{fee.regular}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase font-bold">Virtual</div>
                      <div className="text-xl font-bold text-slate-700">{fee.virtual}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="bg-amber-50 text-amber-900 p-4 rounded-lg text-sm border border-amber-200">
              <strong>Note:</strong> Early bird pricing ends on {data.importantDates.find(d => d.label.includes("Notification"))?.date || "Aug 30, 2026"}.
            </div>
          </div>

          {/* Form */}
          <Card className="border-slate-200 shadow-lg">
            <CardHeader>
              <CardTitle>Register for AICDF 2026</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Dr. John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@university.edu" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Role</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select role" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Student">Student</SelectItem>
                              <SelectItem value="Professional">Professional</SelectItem>
                              <SelectItem value="Academic Member">Academic Member</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="affiliation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Affiliation / University</FormLabel>
                        <FormControl>
                          <Input placeholder="University of Tech" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="paperTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Paper Title (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="AI in Healthcare..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Accept terms and conditions
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg" disabled>
                    Pay with Razorpay
                  </Button>
                  <p className="text-xs text-center text-muted-foreground font-mono">
                    // TODO: Insert Razorpay script & API keys here
                  </p>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
