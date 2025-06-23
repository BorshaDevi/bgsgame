import { Button } from "@/components/ui/button";

const ImageBannar=()=>{
    return(
        <div className="relative w-full mt-10 h-full ">
        <div className="flex  w-full aspect-[1920/758] ">
           <img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1750516995/image_7_p7ydtd.jpg' className="w-1/5 h-full object-cover" alt=''></img>
           <img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1750517000/image_6_kdixuj.jpg'className="w-1/5 h-full object-cover" alt=''></img>
           <img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1750517011/image_5_yokai0.jpg'className="w-1/5 h-full object-cover" alt=''></img>
           <img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1750517016/image_4_asoztv.jpg'className="w-1/5 h-full object-cover" alt=''></img>
           <img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1750517024/image_3_xifo3h.jpg'className="w-1/5 h-full object-cover" alt=''></img>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/20 md:px-4 md:space-y-4  space-y-1">
              <img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1750519325/betquix_white_logo_1-removebg-preview_ce4ouc.png' className="md:w-[220px] md:h-auto mx-auto h-10 w-36"  alt=''></img>
              <p className="md:text-xl">Enjoy your game and do not forget to share them with your friends.</p>
              <Button className='bg-red-700 hover:bg-red-700  '>Coming Soon</Button>
        </div>
        </div>
    )
}
export default ImageBannar;