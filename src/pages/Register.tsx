import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FONTS } from "../constants/styles";
import image from "../assets/images/Photo.png";
import googleIcon from "../assets/images/google.png";

function Register() {
  const leftGridRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLHeadingElement | HTMLParagraphElement | HTMLButtonElement)[]>([]);

  useEffect(() => {
    // Left grid animation
    if (leftGridRef.current) {
      gsap.fromTo(
        leftGridRef.current,
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );
    }

    // Text animations
    textRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, delay: index * 0.2, ease: "power3.out" }
        );
      }
    });
  }, []);

  return (
    <section className="lg:py-20">
      <div className="grid lg:grid-cols-2 grid-rows-auto min-h-screen">
        {/** Left Grid */}
        <div
          className="px-4 flex flex-col gap-3 items-center justify-center"
          ref={leftGridRef}
        >
          <header className="flex flex-col items-center justify-center">
            <h2
              style={{ fontFamily: FONTS.titleFont }}
              className="text-4xl font-bold text-[#BA7894]"
            >
              Join the <span className="text-[#422A3C]">STYLICLE</span> family
            </h2>
            <p className="text-gray-500 mt-3 text-center">
              Discover a world of unique styles, curated for you.
            </p>
          </header>
          <img
            className="w-full h-full max-h-[80vh] object-contain"
            src={image}
            alt="icon"
          />
        </div>

        {/** Right Grid */}
        <div className="px-20 flex flex-col justify-center">
          <header>
            <h1
              style={{ fontFamily: FONTS.titleFont }}
              ref={(el) => (textRefs.current[0] = el as HTMLHeadingElement)}
              className="text-3xl font-medium py-3"
            >
              Create an account
            </h1>
            <p
              ref={(el) => (textRefs.current[1] = el as HTMLParagraphElement)}
              className="text-gray-400"
            >
              Let's get started with your account
            </p>
            <div className="mt-5">
              <button className="flex items-center justify-center gap-4 h-[60px] bg-white border shadow shadow-xl px-4 transition duration-[.5s] hover:bg-black hover:text-white">
                <img
                  className="w-6 h-6"
                  src={googleIcon}
                  alt="icon"
                  aria-label="Google Icon"
                />
                Sign Up with Google
              </button>
            </div>
          </header>

          {/** Form elements */}
          <form className="mt-3 flex flex-col gap-10">
            <div className="flex flex-col">
              <label htmlFor="name">Name:</label>
              <input
                className="w-full border-b border-b-black px-3 py-3"
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                aria-label="Input box to enter your name"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">Email:</label>
              <input
                className="w-full border-b border-b-black px-3 py-3"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                aria-label="Input box to enter your email"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password">Password:</label>
              <input
                className="w-full border-b border-b-black px-3 py-3"
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your Password"
                aria-label="Input box to enter your password"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password_confirm">Confirm Password:</label>
              <input
                className="w-full border-b border-b-black px-3 py-3"
                type="password"
                name="password_confirm"
                id="password_confirm"
                placeholder="Confirm Your Password"
                aria-label="Input box to confirm your password"
              />
            </div>

            <div>
              <button
                ref={(el) => (textRefs.current[2] = el as HTMLButtonElement)}
                className="h-[60px] w-full text-white text-lg bg-[#BA7894] transition duration-[.5s] hover:bg-opacity-[55%]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
