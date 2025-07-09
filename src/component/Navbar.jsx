'use client'
import { GoChevronDown } from "react-icons/go";
import { TfiWorld } from "react-icons/tfi";
import { GoChevronUp } from "react-icons/go";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Signup from "./SignUp";
import LoginForm from "./LoginForm";
import { useState } from "react";
import Link from "next/link";


const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)
  return(
    <div className="mt-5">
    <div className=" w-full md:w-[1209px] md:h-[40px] ">
      <div className=" bg-[#f1f1f1] mx-auto flex items-center justify-around text-wrap ">
        <div className="flex gap-2 md:gap-5">
          <Link href='/' ><div className="flex gap-1">
            <img
              src="/logo.png"
              className="md:w-10  overflow-hidden object-cover "
              alt="logo"
            />
            <h1 className="text-xl mb-1 font-semibold subpixel-antialiased font-[sans-serif] brightness-100 backdrop-blur-sm">
              <span className="text-[#064370]">bet</span>
              <span className="text-[#0688ba] ">qix</span>
            </h1>
          </div></Link>
          <div className="flex md:gap-5 gap-1 mt-1 text-black cursor-pointer">
            <h1 className="">Game</h1>
            <Link href='/ourwinner'>Our Winner</Link>
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
                <div className="space-y-2 flex flex-col">
                  <p>How it works</p>
                  <Link href='/contact' className="">Contact us</Link>
                  <Link href=''>Payment policy</Link>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
        {/* sign login */}
        <div className="flex items-center gap-1 md:gap-5">
            {/*  */}
            <button onClick={() => setShowLogin(true)} className="bg-[#f22c4d] rounded-md text-white px-2 py-1 hover:bg-[#f22c4d]">Login</button>
      <button onClick={() => setShowSignup(true)} className="rounded-md border border-black px-2 text-black py-1">Sign Up</button>

            <LoginForm
             openMd={showLogin}
        setOpenMd={setShowLogin}
        switchToSignup={() => {
          setShowLogin(false)
          setShowSignup(true)
        }}
            ></LoginForm>
            <Signup
            openMd={showSignup}
        setOpenMd={setShowSignup}
        switchToLogin={() => {
          setShowSignup(false)
          setShowLogin(true)
        }}
            ></Signup>
          <div className="flex text-black ">
            <p className="flex gap-2 ">
              <TfiWorld className="mt-1"></TfiWorld>English
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Navbar;
