import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import bostonSkyline from '@assets/stock_images/boston_skyline_citys_e5bec399.jpg';
import { useParallax } from '@/hooks/useScrollAnimation';

export function Hero() {
  const parallaxOffset = useParallax();

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
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-100 ease-out"
        style={{
          backgroundImage: `url(${bostonSkyline})`,
          transform: `translateY(${parallaxOffset * 0.5}px) scale(1.1)`
        }}
      />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 animate-gradient bg-[length:200%_200%]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-2xl animate-in slide-in-from-bottom-8 duration-700">
            Keshav Kotteswaran
          </h1>

          <p className="text-xl md:text-2xl text-white/90 font-medium drop-shadow-lg animate-in slide-in-from-bottom-8 duration-700 delay-150">
            Bioengineering Professional | Project Manager | Systems Engineering
          </p>

          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed drop-shadow-md animate-in fade-in duration-700 delay-300">
            Specialized in healthcare technology, medical device development, and bioengineering research.
            Leading teams to optimize clinical workflows and advance biomedical innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-in slide-in-from-bottom-8 duration-700 delay-500">
            <Button
              size="lg"
              onClick={() => scrollToSection('research')}
              className="min-w-[180px] bg-primary/90 hover:bg-primary text-white border-primary backdrop-blur-sm hover:scale-105 hover:shadow-2xl transition-all duration-300"
              data-testid="button-view-resume"
            >
              View Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('research')}
              className="min-w-[180px] backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300"
              data-testid="button-read-research"
            >
              Read Research
            </Button>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('experience')}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hover:scale-110 transition-transform"
          aria-label="Scroll to experience section"
          data-testid="button-scroll-down"
        >
          <ChevronDown size={32} className="text-white/80 drop-shadow-md" />
        </button>
      </div>
    </section>
  );
}
