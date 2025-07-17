"use client";
import { GoChevronDown } from "react-icons/go";
import { TfiWorld } from "react-icons/tfi";
import { GoChevronUp } from "react-icons/go";
import { IoReloadOutline } from "react-icons/io5";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Signup from "./SignUp";
import LoginForm from "./LoginForm";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUser] = useState(null);
  const router=useRouter()
  useEffect(() => {
    const loadUser = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  };

  loadUser(); // initial load

  // Listen to custom event
  window.addEventListener("userChanged", loadUser);

  return () => {
    window.removeEventListener("userChanged", loadUser);
  };
  }, []);

  // logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.dispatchEvent(new Event("userChanged"));
    router.push("/");
  }
  return (
    <div className="">
      <div className="md:flex md:items-center md:justify-center p-4 md:mx-auto w-full">
        <div className=" bg-[#f1f1f1] text-black">
          {/* desktop */}
          <div className=" w-full md:w-[1209px] md:h-[40px]  md:block hidden ">
            {/* desktop device */}
            <div className=" bg-[#f1f1f1] mx-auto flex items-center justify-around text-wrap ">
              <div className="flex gap-2 md:gap-5">
                <Link href="/">
                  <div className="flex object-cover">
                    <img
                      src="/logo.png"
                      className="md:w-8  overflow-hidden object-cover "
                      alt="logo"
                    />
                    <h1 className="text-xl font-bold mt-1  font-comfortaa subpixel-antialiased  brightness-100 backdrop-blur-sm">
                      <span className="text-[#064370]">bet</span>
                      <span className="text-[#0688ba] ">qix</span>
                    </h1>
                  </div>
                </Link>
                <div className="flex md:gap-5 gap-1 mt-1 text-black cursor-pointer">
                  <Link href="" className="text-xl">Lotteries</Link>
                  <span className="text-black opacity-50">|</span>
                  <Link href="" className="text-xl">Game</Link>
                  <span className="text-black opacity-50">|</span>
                  <Link href="/ourwinner" className="text-xl">Our Winner</Link>
                  <span className="text-black opacity-50">|</span>
                  {/* hover card */}
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div className="flex items-center gap-1 cursor-pointer group">
                        <span className=" mb-2 text-xl">Support</span>

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
                        <Link href="/contact" className="">
                          Contact us
                        </Link>
                        <Link href="">Payment policy</Link>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
              {/* sign login */}
              {user ? (
                <div className="flex items-center gap-3 ">
                  <div>
                    <DropdownMenu>
                      <DropdownMenuTrigger><GoPerson className="text-2xl mt-1" /></DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem><Link href='/myaccount'>My Account</Link></DropdownMenuItem>
                        <DropdownMenuItem>Refer a friend</DropdownMenuItem>
                        <DropdownMenuItem><button onClick={handleLogout}>Log Out</button></DropdownMenuItem>
                       
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="text-xl flex gap-3">
                    <p className="mt-1 text-black flex">Wallet $ : 2.41 <span> <IoReloadOutline className="text-[#f22c4d] mt-1 mr-3 ml-1" /></span> </p>
                    <Button className="bg-[#f22c4d] rounded-md text-white px-8 py-2 hover:bg-[#f22c4d]">Deposit</Button>
                    <div className="flex text-black pt-1">
                <p className="flex gap-2 ">
                  <TfiWorld className="mt-1"></TfiWorld>English
                </p>
              </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  {/*  */}
                  <button
                    onClick={() => setShowLogin(true)}
                    className="bg-[#f22c4d] rounded-md text-white px-8 py-2 hover:bg-[#f22c4d]"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setShowSignup(true)}
                    className="rounded-md border border-black px-6 py-2 text-black "
                  >
                    Sign Up
                  </button>

                  <LoginForm
                    openMd={showLogin}
                    setOpenMd={setShowLogin}
                    switchToSignup={() => {
                      setShowLogin(false);
                      setShowSignup(true);
                    }}
                  ></LoginForm>
                  <Signup
                    openMd={showSignup}
                    setOpenMd={setShowSignup}
                    switchToLogin={() => {
                      setShowSignup(false);
                      setShowLogin(true);
                    }}
                  ></Signup>
                  <div className="flex text-black ml-0">
                <p className="flex gap-2 ">
                  <TfiWorld className="mt-1"></TfiWorld>English
                </p>
              </div>
                </div>
              )}
              
            </div>
          </div>
          {/* mobile device */}
          <div>
            <div className="md:hidden flex items-center justify-between bg-[#f1f1f1] px-4 py-2">
              <Link href="/" className="flex items-center gap-2">
                <img
                  src="/logo.png"
                  className="w-8 h-8 object-cover"
                  alt="logo"
                />
                <h1 className="text-lg font-bold text-[#064370]">betqix</h1>
              </Link>
              <div className="flex items-center gap-2 mr-5 ">
                {/* dropdown menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <FiMenu className="text-black text-2xl " />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="text-center">
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href="">Lotteries</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="">Game</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/ourwinner">Our Winner</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      {user ? 
                      <div className="text-start space-y-3">
                        <p><Link href='/myaccount'>My Account</Link></p>
                        <p>Refer a friend</p>
                        <button onClick={handleLogout}>Log Out</button>
                        <p className="mt-1 text-black flex">Wallet $ : 2.41 <span> <IoReloadOutline className="text-[#f22c4d] mt-1 mr-3 ml-1" /></span> </p>
                    <Button className="bg-[#f22c4d] rounded-md text-white px-8 py-2 hover:bg-[#f22c4d]">Deposit</Button>
                    <div className="flex text-black pt-1"></div>
                      </div>
                      : 
                      <div className="grid items-center ">
                        {/*  */}
                        <button
                          onClick={() => setShowLogin(true)}
                          className="bg-[#f22c4d] rounded-md text-white px-4 py-1 hover:bg-[#f22c4d] w-full mb-2"
                        >
                          Login
                        </button>
                        <button
                          onClick={() => setShowSignup(true)}
                          className="rounded-md border mb-2 border-black px-2 text-black py-1"
                        >
                          Sign Up
                        </button>

                        <LoginForm
                          openMd={showLogin}
                          setOpenMd={setShowLogin}
                          switchToSignup={() => {
                            setShowLogin(false);
                            setShowSignup(true);
                          }}
                        ></LoginForm>
                        <Signup
                          openMd={showSignup}
                          setOpenMd={setShowSignup}
                          switchToLogin={() => {
                            setShowSignup(false);
                            setShowLogin(true);
                          }}
                        ></Signup>
                        <div className="flex text-black ">
                          <p className="flex gap-2 ">
                            <TfiWorld className="mt-1"></TfiWorld>English
                          </p>
                        </div>
                      </div>
                      }
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
