const PPolicy=()=>{
    return(
        <>
        <div className=" mt-10 ">
             <div className="flex justify-center items-center">
               <div>
                 {/* policies */}
                <div className="text-start text-black space-y-4">
                <h1 className="uppercase text-3xl font-extralight">Policies</h1>
                 <h4 className="font-semibold underline-offset-8 underline">Terms & Condition</h4>
                 <div className="w-full h-full bg-white rounded-md p-5 text-start shadow space-y-5">
                    <p>Welcome to our platform. By accessing and using this website, you agree to comply with and be bound by <br></br> the following terms and conditions:</p>
                    <ul className="list-disc pl-5 space-y-5">
                        <li>Users must be 18 years of age or older.</li>
                        <li>All games are based purely on chance and luck; no winning is guaranteed.</li>
                        <li>Users are solely responsible for using a VPN to access the site.</li>
                        <li>This site does not hold any official gaming license.</li>
                        <li>All activities are done at the user's own discretion and risk.</li>
                        <li>Users are responsible for ensuring the legality of online betting in their jurisdiction.</li>
                        <li>Each user is allowed only one account. Multiple accounts by the same individual may be terminated.</li>
                        <li>We believe in responsible gaming. Users are encouraged to play for fun, not as a source of income.</li>
                        <li>Our services are not available in regions where online betting is illegal. Use of VPN is at the user's own risk.</li>
                        <li>Identity and payment method verification may be required. Accounts may be frozen for fraud or AML concerns.</li>
                        <li>Participation is at the user’s own risk. We do not guarantee earnings, and users may lose money.</li>
                        <li>We are not liable for damages resulting from site use, technical errors, or third-party issues.</li>
                        <li>Terms and policies may change at any time; users should review them regularly.</li>
                    </ul>
                 </div>
             </div>
             {/* privacy policy */}
             <div className="text-start text-black space-y-4">
                <h4 className="font-semibold underline-offset-8 underline mt-10">Privacy Policy *</h4>
                <div className="w-full h-full bg-white rounded-md p-5 text-start shadow space-y-5">
                    <p>We collect essential user information such as email addresses, IP addresses, and transaction history.</p>
                    <ul className="list-disc pl-5 space-y-5">
                        <li>Cookies may be used to enhance user experience.</li>
                        <li>User data is stored securely and may be shared with payment providers (Skill, Crypto gateways) strictly for processing payments.</li>
                        <li>We do not share your personal information with third parties without your consent, except as required by law.</li>
                        <li> Our servers and control systems are hosted in the Netherlands.</li>
                        <li>We do not sell or misuse user data.</li>
                    </ul>
                </div>
             </div>
               </div>
             </div>
        </div>
        </>
    )
}
export default PPolicy;