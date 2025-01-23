import icon1 from '../assets/images/Frame 1000004333 (1).png';
import icon2 from '../assets/images/Frame 1000004333.png';
import icon3 from '../assets/images/Frame 1000004334.png';
import icon4 from '../assets/images/Frame 1000004335.png';
import icon5 from '../assets/images/Frame 1000004336.png';
import icon6 from '../assets/images/Frame 1000004334 (1).png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Services() {
  // Refs
  const containerRef = useRef<HTMLDivElement | null>(null);

  const services = [
    { id: 1, icon: icon1, title: 'Fodterapeut' },
    { id: 2, icon: icon2, title: 'Wellnesscenter' },
    { id: 3, icon: icon3, title: 'Makeup-artist' },
    { id: 4, icon: icon4, title: 'Barbersalon' },
    { id: 5, icon: icon5, title: 'Frisørsalon' },
    { id: 6, icon: icon6, title: 'Massageklinik' },
  ];

  // Animation
  useGSAP(() => {
    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll('.service-item');

      gsap.from(items, {
        x: -50,
        opacity: 0,
        ease: 'expo.in',
        stagger: 0.4,
        delay: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 100%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  }, []);


  return (
    <div className="bg-white flex items-center justify-center py-10">
      <div
        ref={containerRef}
        className="w-full flex flex-wrap gap-7 items-center justify-center lg:justify-between px-10"
      >
        {services.map((data) => (
          <div
            key={data.id}
            className="service-item flex flex-col gap-9 items-center"
          >
            <img
            src={data.icon} alt={data.title} className="" />
            <p className="text-center">{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
