import { FONTS } from "../constants/styles";
import mail from "../assets/images/mail.png";
import phone from "../assets/images/phone.png";
import home from "../assets/images/home.png";
import contactbg from "../assets/images/contact.png";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function GetInTouch() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<(HTMLDivElement | null)[]>([]);

  const contact = [
    { id: 1, title: "Visit Us:", context: "Mariendalsvej 50D 2 2000 Frederiksberg.", icon: home },
    { id: 2, title: "Drop Us:", context: "support@beautyness.com.", icon: mail },
    { id: 3, title: "Call Us:", context: "Call: 1-800-123-9999", icon: phone },
  ];

  useGSAP(() => {
    // Animate header and background image
    if (containerRef.current) {
      const bgImage = containerRef.current.querySelector(".contact-bg");

      if (bgImage) {
        gsap.fromTo(
          bgImage,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            },
          }
        );
      }
    }

    // Animate contact details
    contactRef.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(
          item,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section className="py-16" ref={containerRef}>
      {/** Grid layout */}
      <div className="grid lg:grid-cols-2 lg:grid-rows-auto">
        {/** Grid col 1 */}
        <div className="flex items-center justify-center">
          <div className="lg:w-[500px] lg:h-[565px] bg-[#F7E5C1] contact-bg">
            <img src={contactbg} alt="icon" aria-label="contact icon" />
          </div>
        </div>
        {/** Grid col 2 */}
        <div className="px-5">
          <header className="lg:w-[534px] text-center lg:text-start flex flex-col gap-3">
            <p className="text-[#422A3C] text-sm mt-5">GET IN TOUCH</p>
            <h1 className="text-4xl font-bold">We are always here to help you always...</h1>
            <p style={{ fontFamily: FONTS.subTitleFont }}>
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, buying to many desktop publishing packages.
            </p>
          </header>
          {/** Contact information */}
          <div className="flex flex-col gap-10 pt-5">
            {contact.map((data, index) => (
              <div
                className="flex gap-5"
                key={data.id}
                ref={(el) => (contactRef.current[index] = el)}
              >
                {/** Icons */}
                <div>
                  <div className="w-16 h-16 border border-black flex items-center justify-center">
                    <img src={data.icon} alt={data.title} aria-label={data.title} />
                  </div>
                </div>
                {/** Contact context */}
                <div className="flex flex-col gap-1">
                  <h1 className="font-bold text-2xl">{data.title}</h1>
                  <p className="font-medium">{data.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
