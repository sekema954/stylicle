import { FONTS } from "../constants/styles";
import image from '../assets/images/about.jpg';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function AboutUsContext() {
  const imageRef = useRef(null);
  const textHeaderRef = useRef(null);
  const textParagraphRef = useRef(null);

  useGSAP(() => {
    // Animate the image
    if (imageRef.current) {
      gsap.from(imageRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Animate the header text
    if (textHeaderRef.current) {
      gsap.from(textHeaderRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textHeaderRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Animate the paragraph text
    if (textParagraphRef.current) {
      gsap.from(textParagraphRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textParagraphRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, []);

  return (
    <section className="relative text-white bg-[#F7E5C1] flex items-center justify-center px-36 py-32">
      {/**grid layout */}
      <div className="grid lg:grid-cols-2 grid-rows-auto bg-[#422A3C] lg:py-16 lg:px-16 py-5 px-5">
        {/**grid1 */}
        <div>
          <div
            ref={imageRef}
            className="lg:w-[480px] lg:h-[610px] border lg:absolute top-0 z-[500]"
          >
            <img src={image} alt="icon" />
          </div>
        </div>
        {/**grid2 */}
        <div className="py-8">
          <p className="text-sm">ABOUT US</p>
          <h1
            ref={textHeaderRef}
            style={{ fontFamily: FONTS.titleFont }}
            className="text-[45px] font-bold"
          >
            It’s the bridge between service companies and consumers.
          </h1>
          <p
            ref={textParagraphRef}
            style={{ fontFamily: FONTS.subTitleFont }}
            className="text-sm"
          >
            ServiceMarket.dk is a Copenhagen-based technology company known for our
            overview platform. Our aim is to simplify and improve everyday life for
            citizens in Denmark. One platform that brings together all services in
            an easy and controlled environment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUsContext;
