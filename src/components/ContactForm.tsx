import { useState } from "react"
import { FONTS } from "../constants/styles"

//Contact Form
function ContactForm() {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        phoneNumber:"",
        serviceNeeded:"",
        message: ""
    });

    const handleChange = (e:any) =>{
        const target = e.target;
        const {name, value} = target;
        setFormData((prevData)=>({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e:any) =>{
        e.preventDefault();

        //validate form
        if(!formData.name || !formData.email || !formData.phoneNumber || !formData.serviceNeeded || !formData.message) {
            alert("All fields required");
        };

        console.log(`form data`, formData);
    }


  return (
    <section className="bg-[#FBF2E0] py-16 flex flex-col items-center justify-center lg:px-80 px-3">
        <header className="lg:w-[622px] flex flex-col gap-3 items-center justify-center py-10">
            <p className="text-[#BA7894] text-sm">SCHEDULE YOUR PRESENCE</p>
            <h1
            style={{fontFamily: FONTS.titleFont}}
            className="font-bold text-3xl">Get in touch</h1>
            <p
            style={{fontFamily: FONTS.subTitleFont}}
            className="text-[#555555] text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        </header>
        {/**contact form */}
        <div className="lg:h-[700px] w-full bg-white shadow shadow-xl rounded-3xl border lg:px-16 px-5 py-16">
            {/**form */}
            <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
            action="">
                {/**name input */}
                <input
                    onChange={handleChange}
                    className="border border-[#555555] h-[65px] w-full px-5"
                    type="text" 
                    value={formData.name}
                    name="name" 
                    id="name" 
                    aria-label="name input"
                    placeholder="Name"
                 />

                     {/**email input */}
                <input
                    onChange={handleChange}
                    className="border border-[#555555] h-[65px] w-full px-5"
                    type="text" 
                    value={formData.email}
                    name="email" id="email" 
                    aria-label="email input"
                    placeholder="Email"
                 />


                     {/**phone number */}
                <input
                    onChange={handleChange}
                    className="border border-[#555555] h-[65px] w-full px-5"
                    type="phone" 
                    value={formData.phoneNumber}
                    name="phoneNumber" 
                    id="phone" 
                    placeholder="Phone"
                    aria-label="phone input"
                 />


                     {/**service needed */}
                <input
                    onChange={handleChange}
                    className="border border-[#555555] h-[65px] w-full px-5"
                    type="text" 
                    name="serviceNeeded" 
                    id="service" 
                    value={formData.serviceNeeded}
                    aria-label="enter message"
                    placeholder="Service You Need"
                 />

                     {/**message */}
                <textarea
                    onChange={handleChange}
                    className="border border-[#555555] w-full px-5 py-3"
                    name="message" 
                    rows={3}
                    id="message" 
                    value={formData.message}
                    placeholder="Any Note For Us"
                 />
                 {/**button */}
                 <button className="bg-[#422A3C] text-white h-[65px] transition duration-[.5s] hover:bg-opacity-[70%]">SUBMIT</button>
            </form>
        </div>
    </section>
  )
}

export default ContactForm