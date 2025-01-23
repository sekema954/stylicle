//Newsletter component
import image from '../assets/images/newsletter.png';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FONTS } from '../constants/styles';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
function Newsletter() {
    const headerRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLDivElement | null>(null);
    const [errorMsg, setErrorMsg] = useState('');
    const [MsgSent, setMsgSent] = useState('');
    useGSAP(()=>{
        if(headerRef.current) {
            const headerelements = headerRef.current.querySelectorAll('h1, p, input, button, i, svg');
            gsap.from(headerelements, {
                x: -50,
                y:-50,
                delay: .10,
                ease:'sine.inOut',
                opacity:0,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: 'top 80%',
                    toggleActions:'play none none reverse'
                }
            });
        };


        if(imageRef.current) {
            const imageelements = imageRef.current.querySelectorAll('img');
            gsap.from(imageelements, {
                x: 50,
                delay: .10,
                ease:'sine.inOut',
                opacity:0,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: 'top 80%',
                    toggleActions:'play none none reverse'
                }
            });
        };
    }, []);


    const [email, setEmail] = useState("");


    const handleSubmit = (event:any) =>{
        event.preventDefault();

        const sendEmail = async () =>{
            const url = 'http://localhost:3000/subscribe';
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({ email }),
            };
    
            try {
                const response = await fetch (url, options);
                if(!response.ok) {
                    throw new Error(`Error posting email ${response.statusText}`);
                } else {
                    setMsgSent("Subscibed Successfully");
                    setTimeout(()=>{
                        setEmail("");
                        setErrorMsg("");
                        setMsgSent("");
                    }, 1000);
                    
                }
            } catch(err) {
                console.error(`Error connecting to backend api`, err)
            }
        }    
        if(!email) {
            setErrorMsg('Email field is required');
        } else {
            setErrorMsg('');
            sendEmail();
        }
    };

  return (
    <section>
        {/**grid layout */}
        <div className="grid lg:grid-cols-2 grid-rows-auto lg:px-20 px-5 py-20">
            {/**grid cols 1 */}
            <div ref={imageRef}>
                <img src={image} alt="icon" aria-label='icon of lady doing hair' />
            </div>
            {/**grid cols 2 */}
            <div
             ref={headerRef}
            className='lg:w-[553px] ml-6 flex flex-col items-center justify-center gap-6'>
                <header
                className='lg:w-[535px] lg:mt-0 mt-10'>
                    <h1
                    style={{fontFamily: FONTS.titleFont}}
                    className='text-3xl font-bold'>Subscribe to newsletter</h1>
                    <p className='text-[#555555]'>Sign up for our newsletter to stay up-to-date on the latest promotions, discounts, and new features releases.</p>
                </header>
                {/**form & button */}
                <div
                className="relative w-full">
                    <form
                    onSubmit={handleSubmit}
                    className="w-full flex items-center">
                        {/* Input Field */}
                        <div className="relative w-full">
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className="z-[500] absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400"
                        />
                        <input
                            onChange={(event:any)=>setEmail(event.target.value)}
                            value={email}
                            className="h-[60px] border border-[#ECBFD3] w-full rounded-[50px] pl-12 pr-[100px] px-5 focus:outline-none"
                            type="email"
                            name='email'
                            id="email"
                            autoComplete="off"
                            placeholder="Enter your email"
                        />
                        </div>
                        {/* Button */}
                        <button
                        type="submit"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white text-sm px-5 py-1 rounded-[50px] hover:bg-gray-800"
                        >
                        Subscribe
                        </button>
                    </form>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <p className='text-red-500 text-bold'>{errorMsg}</p>
                        <p className='text-green-600 text-bold'>{MsgSent}</p>
                    </div>
                    </div>

            </div>
        </div>
    </section>
  )
}

export default Newsletter