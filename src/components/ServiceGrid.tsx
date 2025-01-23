//Service Grid
import { useRef } from 'react'
import grid1 from '../assets/images/grid1.png'
import grid2 from '../assets/images/grid2.png'
import grid3 from '../assets/images/grid3.png'
import grid4 from '../assets/images/grid4.png'
import grid5 from '../assets/images/grid5.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

function ServiceGrid() {

    const textRef = useRef<HTMLDivElement | null>(null);
    const gridRef = useRef<HTMLDivElement | null>(null);

    useGSAP(()=>{
        if(textRef.current) {
            const elements = textRef.current;
            const headerAnimation = elements.querySelectorAll('h1, p');

            gsap.from(headerAnimation, {
                x: 20,
                y: 20,
                opacity: 0.1,
                stagger: 0.3,
                ease: 'power1.inOut',
                delay: .10,
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'

                }
            });
        }
    },[]);

     // Animation for grid
  useGSAP(() => {
    if (gridRef.current) {
      const gridItems = gridRef.current.querySelectorAll('img');

      gsap.from(gridItems, {
        x: 20,
        y: 40,
        opacity: 0,
        stagger: 0.2,
        ease: 'expo.inOut',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  }, []);
  return (
    <section className="py-10 px-10">
        <div className="flex items-center justify-center">
        {/**header */}
            <header
            ref={textRef}
            className="max-w-[768px] text-center">
                {/**TitleText */}
                    <h1 className="lg:text-[45px] font-bold">We are Experienced in making you very Beautiful</h1>
                    <p className="text-gray-500 text sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </header>
        </div>
        {/***grid */}
        <div className="flex items-center justify-center py-10">
            <div
            ref={gridRef}
            className="parent flex-col">
                <div className="div1">
                    <img src={grid1} alt="icon" />
                </div>

                <div className="div2">
                    <img src={grid2} alt="icon" />
                </div>

                <div className="div3">
                    <img src={grid3} alt="icon" />
                </div>

                <div className="div4">
                    <img src={grid4} alt="icon" />
                </div>

                <div className="div5">
                    <img src={grid5} alt="icon" aria-label=''/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServiceGrid