import React from "react";
import Lottie from "lottie-react";
import aboutus from "../component/aboutanimation.json";
const AboutAnimation =()=>{
 return (
    <>
    <Lottie animationData={aboutus} loop={true} />
    </>
 )
}
export default AboutAnimation;