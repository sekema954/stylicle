//contact section
import { useGSAP } from "@gsap/react";
import { COLORS } from "../constants/styles";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef } from "react";
import GetInTouch from "../components/GetInTouch";
import ContactForm from "../components/ContactForm";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
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
                className="text-sm">GET IN TOUCH WITH US
              </p>
              <h1 className="text-[55px] font-medium text-[#F7E5C1]">We Are Ready To Assist You In 24x7</h1>
            </div>
        </header>
        <GetInTouch />
        <ContactForm />
    </section>
  )
}

export default Contact