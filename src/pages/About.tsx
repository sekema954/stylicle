import { useGSAP } from "@gsap/react";
import { COLORS } from "../constants/styles";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef } from "react";
import Values from "../components/Values[aboutpage]";
import AboutUsContext from "../components/AboutUsContext";
import Testimonials from "../components/Testimonials";
import Journey from "../components/Journey";

gsap.registerPlugin(ScrollTrigger);
//About section
function About() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  useGSAP(()=>{
    if(headerRef.current) {
      const headerElements = headerRef.current.querySelectorAll("h1, p");
      gsap.from(headerElements, {
        x: 20,
        y: 20,
        opacity: 0,
        stagger: 0.2,
        ease:"bounce",
        delay: .20,
        scrollTrigger: {
          trigger: headerRef.current,
          start:'top 80%',
          toggleActions: 'play none none reverse'
        }
      })
    }
  }, []);
  return (
    <section>
      <header
      ref={headerRef}
      className="lg:h-[495px] bg-[#422A3C] flex items-center justify-center py-10 px-4">
        <div className="lg:w-[649px] flex flex-col gap-6 text-center">
          <p
            style={{color: COLORS.border}}
            className="text-sm">SHORT STORY ABOUT US
          </p>
          <h1 className="text-[55px] font-medium text-[#F7E5C1]">The big story behind, our beautyness center</h1>
          <a href="tel:1234034231">
            <button
            className="text-white text-sm bg-[#BA7894] w-[177px] h-[65px] transition duration-[.5s] hover:bg-[#ECBFD3]">CONTACT US</button>
          </a>
        </div>
      </header>
      <Values />
      <AboutUsContext />
      <Journey />
      <Testimonials />
    </section>
  )
}

export default About