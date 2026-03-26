import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, MessageSquare, Clock } from "lucide-react";
import data from "@/data/conference.json";
import { starryBackground, starryOverlay } from "@/styles/theme";
import { cn } from "@/lib/utils";

export function Contact() {
  const contactMethods = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Address",
      value: data.contact.address,
      description: "Visit us at our location"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: data.contact.email,
      description: "Drop us a message anytime"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: data.contact.phone,
      description: "Mon - Fri, 9:00 AM - 5:00 PM"
    }
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-24" style={starryBackground}>
      <div className={cn("absolute inset-0", starryOverlay)}></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -left-[40%] w-[80%] h-[80%] rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-[30%] -right-[30%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full mb-4">
              Get in Touch
            </span>
            <h2 className="text-4xl font-heading font-bold text-white mb-4">Contact Us</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Have questions or need more information? Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Contact Cards */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-white/5">
                <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                <div className="space-y-6">
                  {contactMethods.map((method, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="flex items-start gap-5 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{method.title}</h4>
                        <p className="text-gray-300">{method.value}</p>
                        <p className="text-sm text-gray-400 mt-1">{method.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Working Hours
                  </h4>
                  <div className="space-y-2 text-gray-300">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Map */}
            <div className="h-full">
              <div className="h-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900/80 backdrop-blur-sm">
                <div className="p-6 border-b border-white/5">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Our Location
                  </h3>
                </div>
                <div className="h-[500px] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.007093964072!2d80.23151531528765!3d12.97186819085625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d4f5b3a3b5d%3A0x6e8f9a1c3e3e3e3e!2sKoneru%20Lakshmaiah%20Education%20Foundation!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title="Location on Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
