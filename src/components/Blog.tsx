import { FONTS } from "../constants/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import image1 from '../assets/images/grid1.png';
import image2 from '../assets/images/grid2.png';
import image3 from '../assets/images/grid3.png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const blogs = [
  { id: 1, title: "Discover the secret to beauty.", content:"Regular trims are also essential for maintaining healthy hair. Cutting split ends helps to prevent further damage, ensuring that your hair grows long and strong. You don’t need to rush to the salon for trims; doing it yourself every few weeks can make a huge difference.Additionally, reducing stress levels can significantly impact hair health. Stress is known to trigger hair loss and even premature graying. By incorporating stress-relieving activities such as yoga, meditation, or even walking, you can help maintain your hair’s natural beauty.Lastly, be mindful of your hair care tools. Using gentle, non-abrasive brushes and combs can prevent breakage, and sleeping on a silk pillowcase reduces friction, helping to keep your hair smooth and frizz-free. With a little extra attention, your hair can stay healthy and beautiful for years to come.", thumbnail: image1, date: "December 26, 2021" },
  { id: 2, title: "Uncover Victoria's secret.", content:"A spa is not just a place to pamper yourself; it’s a sanctuary for your body and mind. Whether you're seeking relaxation, stress relief, or a beauty boost, the soothing ambiance and therapeutic treatments of a spa can transform your mood and well-being. From soothing massages to revitalizing facials, a spa offers a variety of treatments tailored to rejuvenate and refresh.One of the most popular spa treatments is the massage. The gentle yet firm strokes of a professional massage therapist can help alleviate tension, improve circulation, and release endorphins, your body's natural mood lifters. With different types of massages available—such as Swedish, deep tissue, or hot stone—you can choose the one that best suits your needs.Facials, on the other hand, provide deep cleansing, exfoliation, and nourishment to your skin. A professional facial not only improves your skin's texture and tone but also promotes a healthy, glowing complexion. Many spas also offer specialty facials, such as anti-aging or acne treatments, to target specific skin concerns.If you're looking for an all-around sensory experience, consider indulging in a spa body wrap. This treatment involves the application of hydrating or detoxifying products on the skin, followed by wrapping the body to enhance absorption and leave the skin feeling silky smooth.For those seeking ultimate relaxation, a visit to a spa’s sauna or steam room can provide relief for tired muscles and promote detoxification through sweating. The combination of heat and steam can also improve blood circulation and enhance your skin’s natural glow. A spa day is more than just a luxury; it’s an investment in your health and well-being. Taking the time to unwind and indulge in these rejuvenating treatments can help you manage stress, improve your mood, and leave you feeling refreshed and recharged. Whether you’re celebrating a special occasion or just need a break from the hustle and bustle, a spa offers a peaceful escape that nourishes your mind, body, and soul.",  thumbnail: image2, date: "January 26, 2023" },
  { id: 3, title: "DIY makeup covers for the face.", content:"Beauty is not just about physical appearance—it's about embracing who you are, inside and out. It’s about confidence, self-care, and feeling good in your skin. The beauty industry offers a wide range of products and services designed to enhance and celebrate our natural features, helping us feel empowered and radiant. One of the most fundamental aspects of beauty is skincare. Healthy, glowing skin is often seen as the foundation of beauty. Daily skincare routines involving cleansing, exfoliating, moisturizing, and protecting your skin from the sun can keep your complexion looking youthful and vibrant. Products like serums, masks, and oils can target specific skin concerns, such as dryness, acne, or signs of aging, giving you a personalized approach to skincare. Makeup, on the other hand, allows for self-expression and creativity. Whether you're opting for a natural look or experimenting with bold colors and styles, makeup enhances your features and can boost your confidence. From foundation and concealer to eyeshadows, lipsticks, and highlighters, makeup products offer endless possibilities for creating a look that suits your personality and mood.", thumbnail: image3, date: "April 26, 2025" },
];


function Blog() {
  // Ref for parent container
  const blogContainerRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    if (blogContainerRef.current) {
      const cardElements = blogContainerRef.current.querySelectorAll('.card');
      cardElements.forEach((el, index) => {
        gsap.from(el, {
          x: 4,
          y: 4,
          delay: index * 0.3,
          opacity: Math.min(index * 0.1, 1),
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }
  });

  return (
    <section className="py-10">
      <header className="flex items-center justify-center py-5">
        <h1 className="lg:text-4xl text-xl font-bold text-center" style={{ fontFamily: FONTS.titleFont }}>
          Get the latest news and updates
        </h1>
      </header>
      
      <div
        ref={blogContainerRef}
        className="flex lg:flex-row flex-col items-center justify-center gap-8 px-4"
      >
        {blogs.map((data) => (
          <article
            key={data.id}
            className="card lg:w-[370px] border px-3 py-3 shadow-lg"
          >
            {/** Thumbnail */}
            <div className="w-full h-[250px] border">
              <img
                className="w-full h-full object-cover"
                src={data.thumbnail}
                alt={data.title}
                aria-label={data.title}
              />
            </div>

            {/** Title and Date */}
            <div className="mt-2">
              <h2
                className="text-2xl"
                style={{ fontFamily: FONTS.titleFont }}
              >
                {data.title}
              </h2>
              <p className="mt-4 text-gray-500">{data.date} <span>Blog</span></p>
            </div>

            {/** Read More Link */}
            <div className="py-3 flex items-center gap-3">
              <a
                className="flex gap-3 items-center transition duration-500 hover:bg-[#241520] hover:text-white px-4"
                href={`/blog/${data.id}`}
              >
                Read More
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blog;
