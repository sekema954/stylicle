//Footer Component
import logo from '../assets/images/logo_white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FONTS } from '../constants/styles';
function Footer() {
  const icons = [faFacebook, faTwitter, faInstagram, faYoutube];
  return (
    <footer className=" bg-[#241520] lg:px-48 py-32 relative">
      {/**footer wtapper */}
      <div>
        {/**footer header */}
        <div className='flex flex-col  gap-3 lg:justify-between text-white'>
          <div className='flex gap-3 items-center justify-center'>
            <img className='w-7 h-8' src={logo} alt="logo" aria-label='logo' />
            <p>SERVICE MARKET</p>
          </div>
          {/**social media icons */}
          <div className='flex gap-4 items-center justify-center py-5'>
            {icons.map((icon, idx)=>(
              <div
              className='w-8 h-8 lg:w-14 lg:h-14 border border border-[#ECBFD3] flex shrink-0 items-center justify-center transition duration-[.5s] hover:bg-white hover:text-black cursor-pointer'
              key={idx}>
                <FontAwesomeIcon
                className='text-2xl'
                icon={icon}></FontAwesomeIcon>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className='bg-white mt-16'></hr>

      {/**title cols */}
      <div
        style={{fontFamily: FONTS.titleFont}}
        className='flex flex-col lg:flex-row items-center justify-between text-white py-6'> 
        <div>
          <div>
            <h1 className='text-2xl font-bold'>Explore</h1>
          </div>
          {/***page links */}
          <ul className='flex flex-col gap-3 text-sm py-5 text-center'>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/service'>Service</a></li>
            <li><a href='/blog'>Blog</a></li>
            <li><a href='/contact'>Contact</a></li>
          </ul>
        </div>
        <div className='mt-5'>
          <div>
            <h1 className='text-2xl font-bold'>Utiliy Pages</h1>
          </div>
          {/**utility pages */}
          <ul className='flex flex-col gap-3 text-sm py-16 text-center'>
              <li><a href='/privacy_policy'>Privacy Policy</a></li>
              <li><a href='/terms_of_use'>Terms of Use</a></li>
            </ul>
        </div>

        <div>
          <div>
            <h1 className='text-2xl font-bold text-center'>Get In Touch</h1>
          </div>
          {/**keep in touch */}
          <div className='flex flex-col gap-3 py-10 text-center'>
              <p><span>Address: <span>8609 Marrietta Pkwy</span></span></p>
              <p><span>Mail: <span>stylicle@gmail.com</span></span></p>
              <p><span>Phone: <span>+1 (404)-4305-3405</span></span></p>
            </div>
        </div>
      </div>
      <div className='h-[70px] bg-black flex items-center justify-center absolute w-full right-0 bottom-0 text-white'>
            <p className='text-center'>&copy; 2025, Stylicle | All rights reserved.</p>
      </div>
    </footer>

  )
}

export default Footer