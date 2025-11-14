import { useScrollProgress } from '@/hooks/useScrollAnimation';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 z-[100] bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient"
      style={{
        transform: `scaleX(${progress / 100})`,
        transformOrigin: 'left',
        transition: 'transform 0.1s ease-out'
      }}
      data-testid="scroll-progress"
    />
  );
}
