import { useEffect, useState, useRef, type RefObject } from 'react';

interface ObserverOptions {
  /**
   * La soglia definisce a che percentuale di visibilità dell'elemento la
   * callback viene attivata. Un valore di 0 significa che la callback viene
   * attivata appena una qualsiasi parte dell'elemento è visibile, mentre un
   * valore di 1 significa che viene attivata solo quando l'intero elemento 
   * è visibile.
   */
  threshold?: number;
  /**
   * La distanza radice definisce l'offset dall'elemento radice (o viewport se
   * root  null) al quale la callback viene attivata. Ad esempio, se la distanza
   * radice  impostata su "100px", la callback viene attivata quando l'elemento
   *  a 100px dalla parte superiore della viewport.
   */
  rootMargin?: string;
}

const useIntersectionObserver = (
  options: ObserverOptions = { threshold: 0.1, rootMargin: '0px' }
): [RefObject<HTMLDivElement | null>, boolean] => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options, ref]);

  return [ref, isIntersecting];
};

export default useIntersectionObserver;
