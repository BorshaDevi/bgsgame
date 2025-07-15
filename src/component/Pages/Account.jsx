"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardFooter,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TabsCom from "../Tabs";


const Account = () => {
  return (
    <div className="w-full min-h-screen mt-10">
      <div className="text-center">
        <div className="md:flex md:justify-center md:items-center  ml-5 md:ml-0 gap-10 text-black">
          {/* my account */}
          <div className="">
            <h6 className="text-black font-extralight text-xl text-start mb-6">
              My Account
            </h6>
            <Card className="w-full max-w-sm ">
             <div className="p-5 text-center">
                <div className="flex  space-x-3">
                <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="text-start space-y-1 font-semibold mt-3">
                    <h6>Prince Sorkar</h6>
                    <p>$0.00</p>
                  </div>
             </div>
              <div className="grid grid-cols-2 mt-8 gap-10 font-extralight">
                    <div className="text-start space-y-3 text-black">
                      <p>Total Time Wins</p>
                    <p>Real Money</p>
                    <p>Bonus Money</p>
                    <p>Pending Withdrawals</p>
                    </div>
                    <div className=" space-y-3 text-black">
                      <p>$0.00</p>
                    <p>$0.00</p>
                    <p>$0.00</p>
                    <p>$0.00</p>
                    </div>
                   </div>
             </div>
              <CardFooter className="flex-col gap-2">
                <Button
                  type="submit"
                  className="w-full rounded-full bg-[#f22c4d] hover:bg-[#f22c4d]"
                >
                  Deposit
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-full border-[#f22c4d] text-[#f22c4d] hover:text-[#f22c4d] "
                >
                  Withdraw
                </Button>
              </CardFooter>
            </Card>
          </div>
          {/* Data */}
          <div className="w-full max-w-sm mt-8">
           <TabsCom></TabsCom>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Account;
