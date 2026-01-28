import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import data from "@/data/conference.json";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Get in Touch</h2>
          <h3 className="text-3xl font-heading font-bold text-slate-900">Contact Us</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <h4 className="text-2xl font-bold text-slate-900">Reach out to us</h4>
            <p className="text-slate-600">
              Have questions about registration, paper submission, or venue details? 
              Fill out the form or contact us directly.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">Address</h5>
                  <p className="text-slate-600">{data.contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">Email</h5>
                  <p className="text-slate-600">{data.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">Phone</h5>
                  <p className="text-slate-600">{data.contact.phone}</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video w-full bg-slate-100 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-200">
                <MapPin className="w-8 h-8 mb-2" />
                <span className="font-medium">Google Maps Embed Placeholder</span>
              </div>
            </div>
          </div>

          <Card className="shadow-lg border-none">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="Your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="Inquiry about..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="Type your message here..." className="min-h-[150px]" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 h-12">
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
