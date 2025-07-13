"use client";
import AboutAnimation from "./AboutAnimation";
import CompanyDetails from "./CompanyDetails";
import FAQAnimation from "./FAQAnimation";
import SupportAnimation from "./SupportAnimation";

const Card = () => {
  return (
    <div className="mt-16 max-w-6xl mx-auto px-4 md:px-14">

       <h1 className="text-center font-medium mb-10 text-3xl text-black">
          Get to know betqix
        </h1>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-10">
          <div className="card1" >
            <div className="bg-cyan-200 bg-opacity-40 rounded-md  w-full md:h-64 h-52 " >
              {/* <AboutAnimation></AboutAnimation> */}
              <img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1752379886/image_38_fnxin3.png' className="p-4"></img>
            </div>
            <h1 className="text-black font-semibold underline-offset-8 text-xl underline text-center mt-2">
              About Us
            </h1>
          </div>
          <div className="card2" >
            <div className="bg-cyan-200 bg-opacity-40 rounded-md  w-full md:h-64 h-52 " >
              {/* <SupportAnimation></SupportAnimation> */}
              <img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1752379875/image_39_qgrtz8.png' className="p-4"></img>
            </div>
            <h1 className="text-black font-semibold underline-offset-8 underline  text-xl text-center mt-2">
              Support
            </h1>
          </div>
          <div className="card3" >
            <div className="bg-cyan-200 bg-opacity-40 rounded-md  w-full md:h-64 h-52" >
              {/* <CompanyDetails></CompanyDetails> */}
              <img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1752379866/image_40_gbzqhc.png' className="p-4"></img>
            </div>
            <h1 className="text-black font-semibold underline-offset-8 underline text-xl text-center mt-2">
              Company Details
            </h1>
          </div>
          <div className="card4" >
            <div className="bg-cyan-200  bg-opacity-40 rounded-md  w-full md:h-64 h-52" >
              {/* <FAQAnimation></FAQAnimation> */}
              <img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1752379860/image_bebz96.png' className="p-4"></img>
            </div>
            <h1 className="text-black font-semibold underline-offset-8 text-xl underline text-center mt-2">
              FAQ
            </h1>
          </div>
        </div>
    </div>
  );
};
export default Card;
