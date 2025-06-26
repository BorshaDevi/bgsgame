import { Button } from "@/components/ui/button";

const SpecialForYou = () => {
  return (
    <>
      <div className="mt-10">
        <div className="bg-cyan-200  bg-opacity-40 rounded-md md:w-[1204px] md:ml-14">
          <h1 className="text-center font-medium text-2xl text-black">
            Special For You
          </h1>
          <div className="md:px-5 p-3">
            {/* first div */}
          <div className="flex md:flex-row flex-col justify-center items-center gap-10 md:px-7 px-3 mb-5">
            {/* image */}
              <div>
            <img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1750924704/37e93d8015c5abba4d6b207bb212f6a310dcc0a2-removebg-preview_dabywh.png' alt='' className="md:w-[413px] md:h-[350px] rounded-md"></img>
              </div>
              {/* texts */}
             <div className="space-y-3 text-wrap start-1 text-left md:px-8">
                <h6 className="text-black">Doller Ticket</h6>
                <h1 className="text-black text-xl">Welcome Offer: Enjoy a special offer on <br></br>your first order</h1>
                <p className="text-gray-400 text-wrap whitespace-normal">Grab it now – limited time only! Don’t miss your chance to
                    <br></br> unlock amazing savings and exclusive rewards on your very <br></br> first order!</p>
                <Button className='bg-red-700 hover:bg-red-700 '>Claim Cashback</Button>
             </div>
          </div>

          {/* last div */}
          <div className="flex md:flex-row flex-col justify-center items-center gap-10 md:px-7 px-3 mt-5">
            {/* texts */}
              <div className="space-y-3 text-wrap start-1 text-left md:px-8 ">
                <h6 className="text-black">Winner</h6>
                <h1 className="text-black text-xl ">Meet the incredible winner who just <br></br> bagged a massive reward</h1>
                <p className="text-gray-400 text-wrap whitespace-normal">A life-changing $1,020,000 win has just turned dreams into <br></br>reality! Congrats to our lucky winner—proof that big rewards <br></br> are real, and you could be the next success story</p>
                <Button className='bg-red-700 hover:bg-red-700'>View More</Button>
              </div>
              {/* image */}
             <div>
                <img src='https://res.cloudinary.com/dg1okcxsx/image/upload/v1750922725/1931a0b7b783fb007422645b1ccde00e1e3e1093_be14xc.png' alt='' className=" bg-white md:w-[413px] md:h-[350px] rounded-md"></img>
             </div>

          </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SpecialForYou;
