import { ElementType, HTMLAttributes, useEffect, useRef, useState } from 'react';

// extends HTMLAttributes to allow passing standard HTML attributes as component type props
interface FadeInTextProps extends HTMLAttributes<HTMLOrSVGElement> {
  children: React.ReactNode;
  component?: ElementType;
  className?: string;
  delay?: number;
}

const FadeInText = ({ children, component = 'p', className, delay = 0 }: FadeInTextProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            const timeout = setTimeout(() => setVisible(true), delay);
            return () => clearTimeout(timeout);
          } else {
            setVisible(true);
          }
        }
      },
      { threshold: 1 } // 100% näkyvissä
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [delay]);

 const Tag = component


  return (
    <Tag ref={ref} className={`${className} ${visible ? 'visible' : ''}`}>
      {children}
    </Tag>
  );
};

export default FadeInText;

