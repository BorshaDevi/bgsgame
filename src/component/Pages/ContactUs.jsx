'use client'
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BsChatDots } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const ContactUs=()=>{
    const [loading ,setLoading]=useState()
    if(loading){
       return <p className="text-red-700">Loading....</p>
    }
    return(
       <>
        <div className="w-full min-h-screen">
           <div className="flex  ">
            <div className=" mt-16 mx-auto">
                {/* contact */}
                <div>
                    <h6 className="text-black text-xl font-extralight">Contact Us</h6>
                     <div className="flex gap-5 mt-5 mb-2 ">
                       <BsChatDots className="text-blue-500 text-2xl"/>
                       <div className="mt-5">
                        <p className="text-black">Live Chat Our friendly and professional Customer Service team offers live chat assistance <br></br> in several languages</p>
                       </div>
                     </div>
                </div>
                {/* Email */}
                <div className="mt-5">
                    <h6 className="text-black text-xl font-extralight">Email</h6>
                    <div className="flex gap-5 mt-5 mb-2">
                     <MdOutlineEmail className="text-blue-500 text-2xl"/>
                     <p className="text-black mt-5">Our team of lottery experts at TheLotter is prepared to provide a quick and thorough <br></br> response to all your questions and concerns via email. Just fill in the required fields <br></br> below, and received lottery help straight to your on-site mailbox in less than 24 hours.</p>
                    </div>
                </div>
                {/* text area */}
                <div className="md:w-[666px]">
                    <div className="flex gap-5 mt-5 mb-2 md:w-[377px] md:h-[28px] md:justify-between ">
                       <p className="text-black mt-5">Email Address:</p>
                       <p className="text-black mt-5 md:mr-16 mr-36"> example@.com</p>
                    </div>
                   
                   <div>
                    <form className="text-black" >
                        <div className="md:w-[666px] md:h-[48px] w-full h-full flex justify-between">
                            <label className="text-black mt-5">Topic</label>
                        <input type="text" placeholder='Enter your topic'className="border-gray-400 border md:w-[450px] md:h-[48px] w-full ml-20 h-full p-1 mt-5 " />
                        </div>
                        <br></br>
                        <textarea placeholder='Write Your Message'className="border-gray-400 border md:w-[666px] md:h-[262px] w-full h-[200px] p-1  mt-5" ></textarea>
                        <br></br>
                        <div className="flex justify-end">
                            <input type='submit' value='Send' className="text-blue-600 border border-blue-700 rounded-full bg-white  mb-5 py-1 px-6"/>
                        </div>
                        </form>
                   </div>

                </div>
            </div>

           </div>
        </div>
       </>
    )
}
export default ContactUs;


