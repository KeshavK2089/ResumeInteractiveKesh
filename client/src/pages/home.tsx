import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Education } from '@/components/Education';
import { Projects } from '@/components/Projects';
import { Research } from '@/components/Research';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Research />
        <Contact />
      </main>
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Keshav Kotteswaran. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
