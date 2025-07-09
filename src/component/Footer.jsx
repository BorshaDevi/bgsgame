import { CiFacebook } from "react-icons/ci";
import { ImYoutube } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";
const Footer=()=>{
    return (
        <div >
            <div className="bg-black h-1/2 p-10 mx-auto">
            <img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1750497533/betquix_white_logo_1_nwitsk.jpg' className="w-36 mb-10" alt=''></img>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white ">
                <div className="space-y-2">
                    <p className="underline underline-offset-8">Polices</p>
                    <Link href='/ppolicy#term'>Terms of Use</Link><br></br>
                    <Link href='/ppolicy#pp'>Privacy Policy</Link><br></br>
                    <Link href='/ppolicy#cookie'>Cookie Policy</Link><br></br>
                </div>
                <div className="space-y-2">
                    <p className="underline underline-offset-8">About Us</p>
                    <Link href='/ppolicy#about'>About Us</Link>
                    <br></br>
                  <Link href='/contact'>Contact Us</Link><br></br>
                    <Link href='/ppolicy#mission'>Our Mission</Link><br></br>
                </div>
                <div className="space-y-2">
                    <p className="underline underline-offset-8">Information</p>
                    <Link href=''>Payment Method</Link><br></br>
                    <Link href='/ppolicy#taxe'>Lottery Taxes</Link><br></br>
                    <Link href='/ppolicy#faq'>FAQ</Link><br></br>
                </div>
                {/* <div className="space-y-2 ">
                    <p className="underline underline-offset-8">Social Connected</p>
                    <div className="text-2xl flex gap-2 ">
                      <a href=''><CiFacebook /></a>
                      <a href="" className="text-red-600"> <ImYoutube /></a>
                      <a href=""><FaXTwitter /></a>
                      <a href=""><BsInstagram /></a>
                    </div>
                </div> */}
               </div>
               <hr className="mt-8 mb-5 w-full"></hr>
                <div className="text-center text-white">
                 <p className="text-sm">Copyright BetQix  2025.</p>
                 </div>
            </div>
        </div>
    )
}
export default Footer;