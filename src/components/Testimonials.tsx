import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FONTS } from "../constants/styles";
import { useState } from "react";
import profile from "../assets/images/profilepic.png";
import profile2 from '../assets/images/profile.avif';
import profile3 from '../assets/images/profile3.jpg'

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Leslie Alexander",
      profile: profile,
      city: "Atlanta",
      state: "GA",
      title: "I was impressed with the magnificent services",
      context:
        "It is a long established fact that a reader will be tracked distracted by the readable content of a page when looking at its layout. The point of using Lorem of distribution it looks like readable English.",
    },
    {
      id: 2,
      name: "Maria Hernandez",
      profile: profile2,
      city: "Douglasville",
      state: "GA",
      title: "I was greeted nicely at entrance",
      context:
        "It is a long established fact that a reader will be tracked distracted by the readable content of a page when looking at its layout. The point of using Lorem of distribution it looks like readable English.",
    },
    {
      id: 3,
      name: "Hailey Trent",
      profile: profile3,
      city: "Smyrna",
      state: "GA",
      title: "The staff were really nice and polite",
      context:
        "It is a long established fact that a reader will be tracked distracted by the readable content of a page when looking at its layout. The point of using Lorem of distribution it looks like readable English.",
    },
  ];

  const [isActiveReview, setActiveReview] = useState(0);

  const handlePrev = () => {
    setActiveReview((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveReview((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = testimonials[isActiveReview];

  return (
    <section className="py-10 bg-gray-100">
      {/* Header */}
      <header className="flex flex-col gap-2 items-center justify-center text-center">
        <p className="text-gray-500 text-sm">Testimonials</p>
        <h1 className="text-2xl lg:text-4xl font-bold">
          What our customers say...
        </h1>
      </header>

      {/* Testimonial Wrapper */}
      <div className="py-5 px-4 lg:px-10">
        <div className="lg:h-[500px] bg-[#422A3C] rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-y-0 items-center py-5">
          {/* Grid Col 1: Profile Picture */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="flex gap-x-3 items-center">
              <div className="lg:w-[50px] lg:h-[200px] rounded-3xl bg-white"></div>
              <div className="lg:w-[50px] lg:h-[300px] rounded-3xl bg-white"></div>
              <div className="w-[200px] h-[200px] lg:w-[280px] lg:h-[280px] rounded-full border-4 border-white overflow-hidden">
                <img
                  src={currentTestimonial.profile}
                  alt={currentTestimonial.name}
                  aria-label={currentTestimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Grid Col 2: Testimonial */}
          <div className="flex items-center justify-center text-white px-4">
            <div className="flex flex-col gap-5 lg:w-[80%] text-center lg:text-left">
              <span className="text-4xl lg:text-5xl font-bold">"</span>
              {/* Customer Name */}
              <div>
                <p className="text-[#EDFFF0] text-lg lg:text-xl">
                  {currentTestimonial.name}
                </p>
                <p>
                  {currentTestimonial.city}, {currentTestimonial.state}
                </p>
              </div>
              {/* Main Title */}
              <div>
                <h1
                  style={{ fontFamily: FONTS.subTitleFont }}
                  className="text-[#EDFFF0] text-xl lg:text-3xl font-semibold"
                >
                  {currentTestimonial.title}
                </h1>
                <p className="text-sm lg:text-base">
                  “{currentTestimonial.context}“
                </p>
              </div>
              <span className="text-4xl lg:text-5xl font-bold">"</span>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="py-6 flex items-center justify-center gap-7">
          <button
            onClick={handlePrev}
            className="w-10 h-10 border border-gray-500 rounded-full shadow-md transition duration-500 hover:bg-[#422A3C] hover:text-white"
            aria-label="Scroll left button"
          >
            <FontAwesomeIcon icon={faCaretLeft} />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 border border-gray-500 rounded-full shadow-md transition duration-500 hover:bg-[#422A3C] hover:text-white"
            aria-label="Scroll right button"
          >
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
