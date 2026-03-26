import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { ResearchAreas } from "@/components/sections/research-areas";
import { Committees } from "@/components/sections/committees";
import { Dates } from "@/components/sections/dates";
import { Registration } from "@/components/sections/registration";
import { Contact } from "@/components/sections/contact";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ResearchAreas />
        <Committees />
        <Dates />
        <Registration />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
