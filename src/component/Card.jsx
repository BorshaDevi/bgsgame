"use client";
import AboutAnimation from "./AboutAnimation";
import CompanyDetails from "./CompanyDetails";
import FAQAnimation from "./FAQAnimation";
import SupportAnimation from "./SupportAnimation";

const Card = () => {
  return (
    <div className="mt-10 ">
      <div className="max-w-[1200px] mx-auto px-4">
        <h1 className="text-center font-medium mb-10 text-2xl text-black">
          Get to know betqix
        </h1>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-10">
          <div className="card1">
            <div className="bg-cyan-200 bg-opacity-40 rounded-md shadow w-full md:h-64 h-52 ">
              <AboutAnimation></AboutAnimation>
            </div>
            <h1 className="text-black font-semibold underline-offset-8 underline text-center mt-2">
              About Us
            </h1>
          </div>
          <div className="card2">
            <div className="bg-cyan-200 bg-opacity-40 rounded-md shadow w-full md:h-64 h-52">
              <SupportAnimation></SupportAnimation>
            </div>
            <h1 className="text-black font-semibold underline-offset-8 underline text-center mt-2">
              Support
            </h1>
          </div>
          <div className="card3">
            <div className="bg-cyan-200 bg-opacity-40 rounded-md shadow w-full md:h-64 h-52">
              <CompanyDetails></CompanyDetails>
            </div>
            <h1 className="text-black font-semibold underline-offset-8 underline text-center mt-2">
              Company Details
            </h1>
          </div>
          <div className="card4">
            <div className="bg-cyan-200  bg-opacity-40 rounded-md shadow w-full md:h-64 h-52">
              <FAQAnimation></FAQAnimation>
            </div>
            <h1 className="text-black font-semibold underline-offset-8 underline text-center mt-2">
              FAQ
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
