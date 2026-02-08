'use client';

export default function FloatingParticles() {
  return (
    <div className="floating-particles">
      {[...Array(6)].map((_, i) => (
        <div key={`y-${i}`} className="particle" />
      ))}
      {[...Array(6)].map((_, i) => (
        <div key={`c-${i}`} className="particle cyan" style={{ animationDelay: `${i * 1.5}s` }} />
      ))}
    </div>
  );
}
