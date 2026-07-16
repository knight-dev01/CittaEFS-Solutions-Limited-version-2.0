import { useRef } from 'react';
import { useInView } from 'motion/react';
import { useCountUp } from '../hooks/useCountUp';

export function AnimatedSectionNumber({ targetNumber }: { targetNumber: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useCountUp(isInView ? targetNumber : 0, 1000);
  
  return (
    <span ref={ref}>
      {count.toString().padStart(2, '0')}.
    </span>
  );
}

export function AnimatedStat({ targetValue, suffix = "", prefix = "" }: { targetValue: number, suffix?: string, prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useCountUp(isInView ? targetValue : 0, 2000);
  
  return (
    <div ref={ref}>
      {prefix}{count}{suffix}
    </div>
  );
}
