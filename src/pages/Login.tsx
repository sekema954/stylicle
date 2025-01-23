import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FONTS } from "../constants/styles";
import image from "../assets/images/Photo.png";
import googleIcon from "../assets/images/google.png";

function Login() {
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
              Login to an account
            </h1>
            <p
              ref={(el) => (textRefs.current[1] = el as HTMLParagraphElement)}
              className="text-gray-400"
            >
              welcome back
            </p>
            <div className="mt-5">
              <button className="flex items-center justify-center gap-4 h-[60px] bg-white border shadow shadow-xl px-4 transition duration-[.5s] hover:bg-black hover:text-white">
                <img
                  className="w-6 h-6"
                  src={googleIcon}
                  alt="icon"
                  aria-label="Google Icon"
                />
                Sign In with Google
              </button>
            </div>
          </header>

          {/** Form elements */}
          <form className="mt-3 flex flex-col gap-10">

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

export default Login;
