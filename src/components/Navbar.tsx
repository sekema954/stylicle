//Navbar Component
import { useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import { COLORS, FONTS } from '../constants/styles';
import { useEffect, useState } from 'react';
function Navbar() {
  const location  = useLocation();
  const [isFixed, setFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleFixedNavbar= () =>{
    if(window.scrollY >= 50) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  useEffect(()=>{
    if(isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    window.addEventListener('scroll', handleFixedNavbar);
    return()=>{
      window.removeEventListener('scroll', handleFixedNavbar);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  return (
    <div>
      <nav
        className={`flex items-center justify-between h-20 bg-white px-4 lg:px-10 ${isFixed ? 'w-full fixed z-[2000]' : ''}`}>
        {/**logo */}
        <div className='flex items-center justify-center gap-5'>
          <img className='w-6 h-auto' src={logo} alt="logo" aria-label='logo icon' />
          <h1
          className='lg:text-[32px] text-xl'
          style={{fontFamily: FONTS.logoFont, color: COLORS.primary}}>STYLICLE</h1>
        </div>
        {/**navlinks & buttons */}
        <ul
        style={{fontFamily: FONTS.subTitleFont}}
        className='hidden lg:flex gap-10 items-center justify-center'>
          <li><a className={`${location.pathname === '/' ? 'text-[#422A3C] font-bold': ''}`} href="/">Home</a></li>
          <li><a className={`${location.pathname === '/about' ? 'text-[#422A3C] font-bold' : ''}`} href="/about">About Us</a></li>
          <li><a className={`${location.pathname === '/contact' ? 'text-[#422A3C] font-bold' : ''}`} href="/contact">Contact Us</a></li>
          {/**language select */}
          <div>
            <select name="language" id="language">
              <option value="english">EN</option>
              <option value="french">FR</option>
              <option value="spanish">ESP</option>
            </select>
          </div>
          {/***call to action buttons login & register */}
          <div className='flex gap-5 items-center justify-center'>
            {/**login */}
            <a href="/login">
              <button className='h-[52px] w-[91px] border border-black transition duration-[.5s] hover:bg-black hover:text-white'>Login</button>
            </a>
            {/**register */}
            <a href="/register">
              <button className='h-[52px] w-[91px] bg-black text-white transition duration-[.5s] hover:border hover:border-black hover:bg-white hover:text-black'>Register</button>
            </a>
          </div>
        </ul>
         {/**hamburger icon */}
         <button
         onClick={()=>setIsOpen(!isOpen)}
         className={`lg:hidden flex flex-col gap-1 transition-all duration-[.5s] ${isOpen ? 'hidden opacity-0' : 'opacity-100'}`}>
           {Array.from({ length: 3}).map((_, idx)=>(
            <div
            key={idx}
            className='w-6 h-1 bg-black'></div>
           ))}
          </button>
      </nav>
      {/**dropdown menu */}
      <div
        className={`lg:hidden fixed inset-0 w-full bg-black bg-opacity-90 flex items-center justify-center transition-all ease-in-out duration-[.5s] z-[2000] ${isOpen ? '' : 'hidden'}`}>
        <ul
          className="text-white text-lg flex flex-col gap-4"
          style={{ fontFamily: FONTS.subTitleFont }}
        >
          <li><a className={`${location.pathname === '/' ? 'text-[#422A3C] font-bold': ''}`} href="/">Home</a></li>
          <li><a className={`${location.pathname === '/about' ? 'text-[#422A3C] font-bold' : ''}`} href="/about">About Us</a></li>
          <li><a className={`${location.pathname === '/contact' ? 'text-[#422A3C] font-bold' : ''}`} href="/contact">Contact Us</a></li>
          <li><a className={`${location.pathname === '/login' ? 'text-[#422A3C] font-bold' : ''}`} href="/login">Login</a></li>
          <li><a className={`${location.pathname === '/register' ? 'text-[#422A3C] font-bold' : ''}`} href="/register">Register</a></li>
        </ul>
        {/** Close button */}
        <div
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 bg-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer z-[2001]">
          <span className="text-2xl font-medium mb-1">&times;</span>
        </div>
      </div>

      <div
      onClick={()=>setIsOpen(false)}
      className={`bg-white w-8 h-8 rounded-full absolute top-28 right-10 flex items-center justify-center transition transition-all duration-600 ${isOpen ? 'flex opacity-100' : 'hidden opacity-0'}`}>
        <span className='text-2xl font-medium mb-1'>&times;</span>
      </div>
    </div>
  )
}

export default Navbar