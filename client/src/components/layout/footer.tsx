import { Facebook, Twitter, Linkedin, Mail, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <h2 className="text-2xl font-heading font-bold mb-4"> AI-CQCOM 2026</h2>
            <p className="text-slate-400 mb-6 max-w-md">
              International Conference on Artificial Intelligence, Cyber Security & Digital Forensics.
              Organized by KLH University.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#committees" className="hover:text-primary transition-colors">Committees</a></li>
              <li><a href="#registration" className="hover:text-primary transition-colors">Registration</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Contact</h3>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>contact@AI-CQCOM2026.org</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe size={16} />
                <span>www.AI-CQCOM2026.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2026 AI-CQCOM. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
