import { COLORS, FONTS } from "../constants/styles";
import icon1 from '../assets/images/beauty.png';
import icon2 from '../assets/images/great_service.png';
import icon3 from '../assets/images/genuine.png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Values() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    // Header animation
    if (headerRef.current) {
      const headerElements = headerRef.current.querySelectorAll("h1, p");
      gsap.from(headerElements, {
        y: -100,
        opacity: 0,
        stagger: 0.5,
        ease: "back.in",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Cards animation
    cardRefs.current.forEach((card, idx) => {
      if (card) {
        // Ensure card is not null before using it
        gsap.from(card, {
          y: 60,
          opacity: 0,
          ease: "back.in",
          delay: idx * 0.1, // Stagger delay
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });
  }, []);

  const values = [
    { id: 1, title: "Beauty Experts", icon: icon1, context: "The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages." },
    { id: 2, title: "Great Service", icon: icon2, context: "The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages." },
    { id: 3, title: "Genuine Products", icon: icon3, context: "The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages." },
  ];

  return (
    <section className="py-16">
      {/** Work values */}
      <div className="flex items-center justify-center">
        <header ref={headerRef} className="flex flex-col items-center justify-center gap-2">
          <p style={{ color: COLORS.border }} className="text-sm">
            OUR VALUES
          </p>
          <p className="text-3xl font-bold text-center">The work values we thrive for</p>
        </header>
      </div>
      <div className="flex flex-col lg:gap-24 gap-10 items-center justify-center py-16">
        {values.map((data, idx) => (
          <div
          ref={(el) => (cardRefs.current[idx] = el)}
          key={data.id} 
          className="flex lg:flex-row flex-col gap-6 items-center justify-center lg:w-[590px]">
            {/** Icon */}
            <div
              style={{ backgroundColor: COLORS.headerText }}
              className="cardElements w-[100px] h-[100px] border border-[#422A3C] rounded-lg flex shrink-0 items-center justify-center"
            >
              <img src={data.icon} alt={data.title} aria-label={data.title} />
            </div>
            {/** Context */}
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-lg font-bold">{data.title}</p>
              <p className="text-[#555555]" style={{ fontFamily: FONTS.subTitleFont }}>
                {data.context}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Values;
