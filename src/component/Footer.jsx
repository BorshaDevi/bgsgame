import { CiFacebook } from "react-icons/ci";
import { ImYoutube } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";
const Footer=()=>{
    return (
        <div>
      <div className="bg-black h-1/2 p-10 mx-auto text-center">
        <img
          src="https://res.cloudinary.com/dg1okcxsx/image/upload/v1750497533/betquix_white_logo_1_nwitsk.jpg"
          className="w-36"
          alt="Betquix Logo"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 text-white justify-center p-5">
          <div className="space-y-3">
            <p className="underline underline-offset-8 text-start">Polices</p>
            <div className="flex flex-col gap-2 text-start">
              <Link href="/ppolicy#term">Terms of Use</Link>
              <Link href="/ppolicy#pp">Privacy Policy</Link>
              <Link href="/ppolicy#cookie">Cookie Policy</Link>
            </div>
          </div>

          <div className="space-y-3">
            <p className="underline underline-offset-8 text-start">About Us</p>
            <div className="flex flex-col gap-2 text-start">
              <Link href="/ppolicy#about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/ppolicy#mission">Our Mission</Link>
            </div>
          </div>

          <div className="space-y-3">
            <p className="underline underline-offset-8 text-start">Information</p>
            <div className="flex flex-col gap-2 text-start">
              <Link href="">Payment Method</Link>
              <Link href="/ppolicy#taxe">Lottery Taxes</Link>
              <Link href="/ppolicy#faq">FAQ</Link>
            </div>
          </div>
        </div>

        <hr className="mt-8 mb-5 w-full" />

        <div className="text-center text-white">
          <p className="text-sm">Copyright BetQix 2025.</p>
        </div>
      </div>
    </div>
    )
}
export default Footer;