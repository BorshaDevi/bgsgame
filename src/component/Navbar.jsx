import Link from "next/link";
import { GoChevronDown } from "react-icons/go";
import { TfiWorld } from "react-icons/tfi";
import { GoChevronUp } from "react-icons/go";
const Navbar=()=>(
    <div className="mt-5">
        <div className=" w-full md:w-[1209px] md:h-[40px] ">
            <div className=" bg-[#f1f1f1] mx-auto flex items-center justify-around text-wrap ">
                <div className="flex gap-2 md:gap-5">
                    <div className="flex gap-1">
                        <img src='/logo.png' className="md:w-10  overflow-hidden object-cover " alt='logo'/>
                        <h1 className="text-xl mb-1 font-semibold subpixel-antialiased font-[sans-serif] brightness-100 backdrop-blur-sm"><span className="text-[#064370]">bet</span><span className="text-[#0688ba] ">qix</span></h1>
                    </div>
                    <div className="flex md:gap-5 gap-1 mt-1">
                        <h1 className="">Game</h1>
                        <h1 className="">Result</h1>
                        <h1 className="flex gap-1">Support <GoChevronDown className="mt-1"></GoChevronDown></h1>
                    </div>
                </div>
                {/* sign login */}
                <div className="flex items-center gap-1 md:gap-5">
                  <Link href='/login' className="bg-[#f22c4d] rounded-md text-white px-2 py-1">Login</Link>
                  <Link href='/signup' className="rounded-md border-black border px-2 py-1">Sign Up</Link>
                  <div className="flex ">
                    <p className="flex gap-2"> <TfiWorld className="mt-1"></TfiWorld>English</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
)
export default Navbar;