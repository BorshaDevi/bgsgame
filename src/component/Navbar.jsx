import Link from "next/link";
import { GoChevronDown } from "react-icons/go";
import { TfiWorld } from "react-icons/tfi";
import { GoChevronUp } from "react-icons/go";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import Login from "./Login";
import SignUp from "./SignUp";
const Navbar = () => (
  <div className="mt-5">
    <div className=" w-full md:w-[1209px] md:h-[40px] ">
      <div className=" bg-[#f1f1f1] mx-auto flex items-center justify-around text-wrap ">
        <div className="flex gap-2 md:gap-5">
          <div className="flex gap-1">
            <img
              src="/logo.png"
              className="md:w-10  overflow-hidden object-cover "
              alt="logo"
            />
            <h1 className="text-xl mb-1 font-semibold subpixel-antialiased font-[sans-serif] brightness-100 backdrop-blur-sm">
              <span className="text-[#064370]">bet</span>
              <span className="text-[#0688ba] ">qix</span>
            </h1>
          </div>
          <div className="flex md:gap-5 gap-1 mt-1 text-black">
            <h1 className="">Game</h1>
            <h1 className="">Result</h1>
            {/* hover card */}
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="flex items-center gap-1 cursor-pointer group">
                  <span className=" mb-2">Support</span>

                  {/* icon change on hover */}
                  <span className="relative w-5 h-5">
                    <GoChevronDown className="absolute inset-0 opacity-100 group-hover:opacity-0 scale-100 group-hover:scale-90 transition-all duration-300" />
                    <GoChevronUp className="absolute inset-0 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300" />
                  </span>
                </div>
              </HoverCardTrigger>

              {/* ✅ No group-hover here — HoverCard handles visibility */}
              <HoverCardContent className="transition-all  ease-in-out w-full">
                <div className="space-y-2">
                  <p>How it works</p>
                  <p>Contact us</p>
                  <p>Payment policy</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
        {/* sign login */}
        <div className="flex items-center gap-1 md:gap-5">
            <Login ></Login>
          <SignUp></SignUp>
          <div className="flex ">
            <p className="flex gap-2">
              {" "}
              <TfiWorld className="mt-1"></TfiWorld>English
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Navbar;
