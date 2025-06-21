import React from "react";
import Lottie from "lottie-react";
import faq  from "../component/faq.json";
const FAQAnimation=()=>{
    return(
        <>
        <Lottie animationData={faq} loop={true} />
        </>
    )
}
export default FAQAnimation;