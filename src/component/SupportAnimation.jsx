import React from "react";
import Lottie from "lottie-react";
import support  from "../component/girl.json";
const SupportAnimation=()=>{
    return(
        <>
        <Lottie animationData={support} loop={true} />
        </>
    )
}
export default SupportAnimation;