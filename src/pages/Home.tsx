import { FONTS, COLORS } from "../constants/styles";
import headerLogo from "../assets/images/header_logo.png";
import Services from "../components/services";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ServiceGrid from "../components/ServiceGrid";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import RecommendedServices from "../components/RecommendedServices";
import Testiomonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Blog from "../components/Blog";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const headerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (headerRef.current) {
      const headerAnimation = headerRef.current.querySelectorAll("h1, p, img");

      gsap.from(headerAnimation, {
        opacity: 0, // Corrected typo
        y: 50,
        x: -30,
        duration: 2,
        ease: "bounce",
        stagger: 0.2,
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      });
    }
  }, []);

  return (
    <section>
      <div className="home_bg h-screen relative">
        {/* Background color */}
        <div className="absolute h-full w-full grid lg:grid-cols-[80%_30%] grid-rows-auto">
          {/* First grid column: header */}
          <div className="bg-gradient-to-b lg:bg-gradient-to-r from-[#422A3C] to-transparent via-[#422A3C] flex items-center justify-center px-7">
            <header
              ref={headerRef}
              className="lg:w-[500px] text-white flex flex-col gap-6"
            >
              <div className="lg:flex items-center justify-center gap-3">
                <img
                  src={headerLogo}
                  alt="logo"
                  aria-label="header logo icon"
                />
                <p
                  className="font-semibold text-white text-center"
                  style={{ fontFamily: FONTS.subTitleFont }}
                >
                  Hair Salon, Masseuse, Beauty Salon
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <h1
                  className="lg:text-[70px] font-bold text-center"
                  style={{
                    fontFamily: FONTS.titleFont,
                    color: COLORS.headerText,
                  }}
                >
                  Find a service close to you
                </h1>
                <p className="text-center">
                  There are many variations of passages of Lorem Ipsum available;
                  the majority have suffered alteration in some form.
                </p>
              </div>
            </header>
          </div>
          {/* Second grid column */}
          <div className="absolute"></div>
        </div>
      </div>
      {/* Services Section */}
      <div className="py-10">
        <Services />
      </div>
      <ServiceGrid />
      <RecommendedServices />
      <Testiomonials />
      <Newsletter />
      <Blog />
    </section>
  );
}

export default Home;
