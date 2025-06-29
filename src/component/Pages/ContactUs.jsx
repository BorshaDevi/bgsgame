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
        <div className="w-full min-h-screen">
           <div className="flex  ">
            <div className=" mt-16 mx-auto">
                {/* contact */}
                <div>
                    <h6 className="text-black text-xl font-extralight">Contact Us</h6>
                     <div className="flex gap-5 ">
                       <BsChatDots className="text-blue-500 text-xl"/>
                       <div className="mt-5">
                        <p className="text-black">Live Chat Our friendly and professional Customer Service team offers live chat assistance <br></br> in several languages</p>
                       </div>
                     </div>
                </div>
                {/* Email */}
                <div>
                    <h6 className="text-black text-xl font-extralight">Email</h6>
                    <div className="flex gap-5">
                     <MdOutlineEmail className="text-blue-500 text-xl"/>
                     <p className="text-black mt-5">Our team of lottery experts at TheLotter is prepared to provide a quick and thorough <br></br> response to all your questions and concerns via email. Just fill in the required fields <br></br> below, and received lottery help straight to your on-site mailbox in less than 24 hours.</p>
                    </div>
                </div>
                {/* text area */}
                <div>
                   <p className="text-black mt-5">Email Address: example@.com</p>
                   <div>
                    <form>
                        <div className="w-full h-full flex justify-between ">
                            <label className="text-black mt-5">Topic</label>
                        <input type="text" placeholder='Enter your topic'className="border-gray-400 border w-1/2 h-full p-2 mt-5 " />
                        </div>
                        <br></br>
                        <textarea placeholder='Write Your Message'className="border-gray-400 border md:w-[666px] md:h-[262px] w-full h-[200px] p-4 mt-5" ></textarea>
                        <br></br>
                        <input type='submit' value='Send' className="text-blue-600 border border-blue-700 rounded-r-md rounded-l-md bg-white text-xl mb-5  py-1 px-3"/>
                        </form>
                   </div>

                </div>
            </div>

           </div>
        </div>
    )
}
export default ContactUs;