import { useEffect, useRef } from "react";

function Section({ id, children, onVisible, className }) {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible(id);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [id, onVisible]);

  return (
    <section ref={ref} id={id} className={className}>
      {children}
    </section>
  );
}

export default Section;
