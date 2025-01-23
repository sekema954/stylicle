import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import photo from '../assets/images/Photo.png';
import icon from '../assets/images/check.png';
import { FONTS } from '../constants/styles';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Journey() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const methodologyRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement | null>(null);

  const methodology = [
    { id: 1, title: 'The Assessment Stage', context: 'The point of the Lorem ipsum is that it has a more or leaa normal letters' },
    { id: 2, title: 'The Initialisation Stage', context: 'The point of the Lorem ipsum is that it has a more or leaa normal letters' },
    { id: 3, title: 'The Treatment Stage', context: 'The point of the Lorem ipsum is that it has a more or leaa normal letters' },
  ];

  useGSAP(() => {
    // Header animation
    if (headerRef.current) {
      const headerElements = headerRef.current.querySelectorAll('p, h1');
      gsap.from(headerElements, {
        y: -50,
        opacity: 0,
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }

    // Methodology items animation
    methodologyRefs.current.forEach((method, idx) => {
      if (method) {
        gsap.from(method, {
          x: -50,
          opacity: 0,
          delay: idx * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: method,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      }
    });

    // Image animation
    if (imageRef.current) {
      gsap.from(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  }, []);

  return (
    <section className="lg:px-28 py-20">
      {/** grid layout */}
      <div className="grid lg:grid-cols-2 grid-rows-auto">
        {/** grid1 content */}
        <div className="px-8">
          <header ref={headerRef} style={{ fontFamily: FONTS.titleFont }} className="flex flex-col gap-3">
            <p className="text-sm text-[#BA7894]">WHAT INCLUDES</p>
            <h1 className="text-3xl font-bold">The start of the journey</h1>
            <p className="text-[#555555] text-sm leading-6">
              ServiceMarket.dk was founded in 2021 by two young entrepreneurs who saw a problem with the fragmented service
              industry in Denmark. There were thousands of small businesses offering services, but it was difficult for consumers
              to find them and know which ones to choose. They developed the idea of creating a platform that would bring all
              these service providers together in one place, making it easier for consumers to find what they need and get their
              issues resolved quickly and easily. Without having to go to many different websites, each with their own booking
              system.
            </p>
          </header>
          <div className="pt-10">
            <h1 className="font-bold text-md">Our Methodology:</h1>
            <div className="pt-6 flex flex-col gap-4">
              {methodology.map((data, idx) => (
                <div
                  className="flex gap-5"
                  key={data.id}
                  ref={(el) => (methodologyRefs.current[idx] = el)} // Assign ref to each methodology item
                >
                  <img className="h-6 w-6" src={icon} alt="icon" />
                  <div className="lg:w-[448px] flex flex-col">
                    <h1 className="font-bold">{data.title}</h1>
                    <p style={{ fontFamily: FONTS.subTitleFont }} className="text-[#555555] text-md">
                      {data.context}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* grid 2 video / photo */}
        <div ref={imageRef} className="relative py-10 lg:px-0 px-2">
          <div className="flex items-center justify-center">
            <img src={photo} alt="photo" aria-label="lady cleaning her face icon" />
            <a
              href="/video"
              className="w-16 h-16 rounded-full bg-white absolute bottom-[50%] shadow shadow-lg flex items-center justify-center left-[50%]"
            >
              <FontAwesomeIcon className="text-2xl" icon={faPlay}></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
