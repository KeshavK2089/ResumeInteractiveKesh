import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'experience', 'skills', 'education', 'projects', 'research', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'research', label: 'Research' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 dark:bg-gray-950/90 backdrop-blur-lg border-b border-border/50 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-lg transition-all"
              data-testid="button-logo"
            >
              Keshav Kotteswaran
            </button>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all hover-elevate active-elevate-2 ${
                    activeSection === link.id
                      ? 'text-primary font-semibold'
                      : 'text-foreground'
                  }`}
                  data-testid={`link-nav-${link.id}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </nav>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background md:hidden" data-testid="mobile-menu">
          <div className="flex flex-col items-center justify-center h-full gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-2xl font-medium transition-all hover-elevate active-elevate-2 px-6 py-3 rounded-lg ${
                  activeSection === link.id
                    ? 'text-primary font-bold'
                    : 'text-foreground'
                }`}
                data-testid={`link-mobile-${link.id}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
