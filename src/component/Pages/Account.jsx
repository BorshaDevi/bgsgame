"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Account = () => {
  return (
    <div className="w-full min-h-screen mt-10">
      <div className="text-center">
        <div className="flex justify-center items-center text-black">
          {/* my account */}
          <div>
            <h6 className="text-black font-extralight text-xl text-start">
              My Account
            </h6>
            <Card className="w-full max-w-sm ">
             <div className="p-5 text-center">
                <div className="flex">
                <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h6>Prince</h6>
                    <p>$0.00</p>
                  </div>
             </div>
              <CardContent>
                   <div className="flex justify-around">
                    <p>Total Time Wins</p>
                    <p>$0.00</p>
                   </div>
                   <div className="flex justify-around">
                    <p>Real Money</p>
                    <p>$0.00</p>
                   </div>
                   <div className="flex justify-around">
                    <p>Bonus Money</p>
                    <p>$0.00</p>
                   </div>
                   <div className="flex justify-around">
                    <p>Pending Withdrawals</p>
                    <p>$0.00</p>
                   </div>
              </CardContent>
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
             </div>
            </Card>
          </div>
          <div>data</div>
        </div>
      </div>
    </div>
  );
};
export default Account;
