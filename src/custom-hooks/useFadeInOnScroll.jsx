import { useEffect, useRef, useState } from 'react';

export default function useScrollFadeAlternate(direction = 'left') {
  const ref = useRef();
  const [isVisible, setVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY === 0;
      if (atTop && !isVisible && hasBeenVisible) {
        setHasBeenVisible(false); // reset only if out of view and previously shown
      }
    };

    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setHasBeenVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [isVisible, hasBeenVisible]);

  const baseClass = 'fade-in-section';
  const directionClass = direction === 'left' ? 'fade-in-left' : 'fade-in-right';
  const visibleClass = hasBeenVisible ? 'fade-in-visible' : '';

  return {
    ref,
    className: `${baseClass} ${directionClass} ${visibleClass}`.trim()
  };
}