import { Button } from "@/components/ui/button";

const SpecialForYou = () => {
  return (
    <>
     <div className="mt-10 w-full">
  <div className="w-full max-w-[1204px] mx-auto bg-cyan-200 bg-opacity-40 rounded-md px-4 md:px-8">
    <h1 className="text-center font-medium text-2xl text-black mt-6">
      Special For You
    </h1>
    <div className="p-3">
      {/* first div */}
      <div className="flex md:flex-row flex-col justify-center items-center gap-10 mb-5">
        <div>
          <img
            src="https://res.cloudinary.com/dg1okcxsx/image/upload/v1750924704/37e93d8015c5abba4d6b207bb212f6a310dcc0a2-removebg-preview_dabywh.png"
            alt=""
            className="md:w-[413px] md:h-[350px] rounded-md"
          />
        </div>
        <div className="space-y-3 text-left">
          <h6 className="text-black">Doller Ticket</h6>
          <h1 className="text-black text-xl">
            Welcome Offer: Enjoy a special offer on <br /> your first order
          </h1>
          <p className="text-gray-400 whitespace-normal">
            Grab it now – limited time only! Don’t miss your chance to <br />
            unlock amazing savings and exclusive rewards on your very <br />
            first order!
          </p>
          <Button className="bg-red-700 hover:bg-red-700">
            Claim Cashback
          </Button>
        </div>
      </div>

      {/* last div */}
      <div className="flex md:flex-row flex-col justify-center items-center gap-10 mt-5">
        <div className="space-y-3 text-left">
          <h6 className="text-black">Winner</h6>
          <h1 className="text-black text-xl">
            Meet the incredible winner who just <br /> bagged a massive reward
          </h1>
          <p className="text-gray-400 whitespace-normal">
            A life-changing $1,020,000 win has just turned dreams into <br />
            reality! Congrats to our lucky winner—proof that big rewards <br />
            are real, and you could be the next success story
          </p>
          <Button className="bg-red-700 hover:bg-red-700">View More</Button>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dg1okcxsx/image/upload/v1750922725/1931a0b7b783fb007422645b1ccde00e1e3e1093_be14xc.png"
            alt=""
            className="bg-white md:w-[413px] md:h-[350px] rounded-md"
          />
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};
export default SpecialForYou;
