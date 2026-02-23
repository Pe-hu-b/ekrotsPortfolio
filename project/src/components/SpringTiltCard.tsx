import { useRef, useState, ReactNode } from 'react';

interface SpringTiltCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function SpringTiltCard({ children, className = '', style }: SpringTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotX = useRef(0);
  const rotY = useRef(0);
  const targetRotX = useRef(0);
  const targetRotY = useRef(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    targetRotY.current = x * 12;
    targetRotX.current = -y * 12;

    if (!isAnimating) {
      setIsAnimating(true);
      const animate = () => {
        rotX.current += (targetRotX.current - rotX.current) * 0.1;
        rotY.current += (targetRotY.current - rotY.current) * 0.1;

        if (cardRef.current) {
          cardRef.current.style.transform = `perspective(1000px) rotateX(${rotX.current}deg) rotateY(${rotY.current}deg)`;
        }

        if (Math.abs(targetRotX.current - rotX.current) > 0.1 || Math.abs(targetRotY.current - rotY.current) > 0.1) {
          requestAnimationFrame(animate);
        } else {
          setIsAnimating(false);
        }
      };
      animate();
    }
  };

  const handleMouseLeave = () => {
    targetRotX.current = 0;
    targetRotY.current = 0;

    const decay = () => {
      rotX.current *= 0.85;
      rotY.current *= 0.85;

      if (cardRef.current) {
        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotX.current}deg) rotateY(${rotY.current}deg)`;
      }

      if (Math.abs(rotX.current) > 0.01 || Math.abs(rotY.current) > 0.01) {
        requestAnimationFrame(decay);
      }
    };
    decay();
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ ...style, transition: 'none' }}
    >
      {children}
    </div>
  );
}
