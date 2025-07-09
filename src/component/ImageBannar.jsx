import { Button } from "@/components/ui/button";

const ImageBannar=()=>{
    return(
        <div className="relative w-full mt-10 h-full ">
       <div  className="">
         <div className="flex  w-full aspect-[1920/758]  ">
           <img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1750952069/1a8acb04534147d53909f9a720695ef98f75dc10_1_sc8wa6.jpg' className="w-1/5 h-full object-cover" alt=''></img>
           <img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1750952077/e798fb77287ba9c0d0bdd8880fd2304391740344_2_yexvfz.jpg'className="w-1/5 h-full object-cover" alt=''></img>
           <img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1750952085/0c127471b8d6f365a9f047fd0d3988deae9ec8f9_2_iqlxtz.jpg'className="w-1/5 h-full object-cover" alt=''></img>
           <img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1750952091/63b78a8ee87ea1bbab6c7029f106bdd5e57206e6_1_spc1yl.jpg'className="w-1/5 h-full object-cover" alt=''></img>
           <img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1750875073/4c1fcc18c89549743fc9a114f66ca40a5bfcdfe5_tyruch.png'className="w-1/5 h-full object-cover" alt=''></img>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/20 md:px-4 md:space-y-4  space-y-1">
              <img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1750519325/betquix_white_logo_1-removebg-preview_ce4ouc.png' className="md:w-[220px] md:h-auto mx-auto h-10 w-36"  alt=''></img>
              <p className="md:text-xl">Enjoy your game and do not forget to share them with your friends.</p>
              <Button className='bg-red-700 hover:bg-red-700  '>Coming Soon</Button>
        </div>
       </div>
        </div>
    )
}
export default ImageBannar;