
import { Button } from "@/components/ui/button";
import { BsChatDots } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
const ContactUs=()=>{
    return(
        <>
           <div className="flex justify-center items-center">
            <div className="">
                {/* contact */}
                <div>
                    <h6 className="text-black text-xl font-extralight">Contact Us</h6>
                     <div className="flex gap-5 ">
                       <BsChatDots className="text-blue-500 text-xl"/>
                       <div className="mt-5">
                        <p className="text-black">Live Chat Our friendly and professional Customer Service team offers live chat assistance <br></br> in several languages</p>
                        <Button className='rounded-full bg-red-600 text-white'>Live Chat</Button>
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
                        <div className="w-[666px] h-[48px] flex justify-between ">
                            <label className="text-black mt-5">Topic</label>
                        <input type="text" placeholder='Enter your topic'className="border-gray-400 border p-1 mt-5 " />
                        </div>
                        <br></br>
                        <textarea placeholder='Write Your Message'className="border-gray-400 border w-[666px] h-[262px] p-4 mt-5" ></textarea>
                        <br></br>
                        <input type="submit" value='send'  className="uppercase rounded-l-full rounded-r-full text-blue-500 border-blue-600 border p-1 flex  justify-end" />
                    </form>
                   </div>

                </div>
            </div>

           </div>
        </>
    )
}
export default ContactUs;