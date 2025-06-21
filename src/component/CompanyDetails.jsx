import React from "react";
import Lottie from "lottie-react";
import details  from "../component/companydetailsanimation.json";
const CompanyDetails=()=>{
    return(
        <>
        <Lottie animationData={details} loop={true} />
        </>
    )
}
export default CompanyDetails;