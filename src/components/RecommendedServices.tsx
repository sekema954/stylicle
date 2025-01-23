
import { useGSAP } from "@gsap/react";
import { COLORS, FONTS } from "../constants/styles"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef } from "react";
import ping from '../assets/images/ping.png'
import service1 from '../assets/images/service1.png'
import service2 from '../assets/images/service2.png'
import service3 from '../assets/images/service3.png'
import service4 from '../assets/images/service4.png'
import star from '../assets/images/star.png'

gsap.registerPlugin(ScrollTrigger);
function RecommendedServices() {
    // Service dummy data
    const myServices = [
        {id: 1, service_name: "Hair Dye", thumbnail: service1, location: "Brookpark External, 2708, North Olmsted Drive", reviews_count: 104, ratings: 4.5, pingIcon: ping},
        {id: 2, service_name: "Facial Treatments", thumbnail: service2, location: "Brookpark External, 2708, North Olmsted Drive", reviews_count: 100, ratings: 5.0, pingIcon: ping},
        {id: 3, service_name: "Nails", thumbnail: service3, location: "Brookpark External, 2708, North Olmsted Drive", reviews_count: 200, ratings: 4.2, pingIcon: ping},
        {id: 4, service_name: "Massages", thumbnail: service4, location: "Brookpark External, 2708, North Olmsted Drive", reviews_count: 50, ratings: 4.3, pingIcon: ping},
    ];

    // Animation refs
    const textRef = useRef<HTMLDivElement | null>(null);
    const serviceRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        if (textRef.current) {
            const header = textRef.current.querySelectorAll("h1, p");

            gsap.from(header, {
                x: -40,
                opacity: 0.1,
                ease: 'power1.inOut',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse',
                },
            });
        }

        if (serviceRef.current) {
            const elements = serviceRef.current.querySelectorAll(".service_card_item");

            gsap.from(elements, {
                x: -20,
                y: 20,
                opacity: 0,
                ease: 'expo.inOut',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: serviceRef.current,
                    start: "top 90%",
                    toggleActions: 'play none none reverse',
                },
            });
        }
    }, []);

    return (
        <section className="py-10">
            <div>
                <header
                    ref={textRef}
                    className="flex items-center justify-center flex-col gap-2 px-5">
                    <p className="text-[#BA7894] text-sm">OUR SERVICES</p>
                    <h1 className="text-3xl font-bold">Recommended</h1>
                    <p
                    className="text-center"
                    style={{ color: COLORS.neutralGray }}>
                        Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque.
                    </p>
                </header>
            </div>
            {/** Service cards */}
            <div
                ref={serviceRef}
                className="service_card flex flex-col lg:flex-row items-center justify-center lg:px-14 px-6 gap-5 mt-10">
                {myServices.map(data => (
                    <div
                        className="service_card_item border border-[#ECBFD3] rounded-lg lg:w-[384px] lg:h-[536px]"
                        key={data.id}>
                        {/** Image placeholder */}
                        <div className="lg:h-[275px]">
                            <img
                                className="w-full h-full object-center"
                                src={data.thumbnail}
                                alt={data.service_name}
                                aria-label={data.service_name} />
                        </div>
                        {/** Service info container */}
                        <div className="px-5 py-5 flex flex-col gap-4">
                            {/** Ratings & reviews */}
                            <div className="flex justify-between">
                                <div className="flex gap-2">
                                    <img src={star} alt="star icon" aria-label="star icon for ratings" />
                                    <p>{data.ratings}</p>
                                </div>
                                <p
                                    className="text-sm font-bold"
                                    style={{ fontFamily: FONTS.titleFont }}>
                                    {`${data.reviews_count} reviews`}
                                </p>
                            </div>
                            {/** Service name */}
                            <p className="text-lg font-bold">{data.service_name}</p>
                            {/** Location */}
                            <div className="flex items-center justify-center gap-3 pb-5">
                                <img className="" src={data.pingIcon} alt="location icon" aria-label="location icon" />
                                <p>{data.location}</p>
                            </div>
                            {/** Book button */}
                            <a href="tel:123-456-7890">
                                <button
                                    style={{ fontFamily: FONTS.titleFont }}
                                    className="font-medium text-white bg-[#BA7894] transition duration-[.5s] hover:bg-[#ECBFD3] w-full h-[53px] rounded-md">
                                    BOOK NOW
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default RecommendedServices;
