"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaFacebook } from "react-icons/fa6";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { useState } from "react";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});
const LoginForm = ({ openMd, setOpenMd, switchToSignup }) => {
  const [open, setOpen] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(values) {
    console.log(values);
  }
  return (
    <div>
      <Dialog open={openMd} onOpenChange={setOpenMd}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl text-center font-extralight text-black">
              Login to your Account
            </DialogTitle>
            {/* Login Form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          className=" border-black border-1 text-black bg-[#F1F1F1] shadow ring-1 outline-[#808080] outline-1 ring-[#808080]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type={open ? "text" : "password"}
                          placeholder="Password"
                          className=" border-black border-1 text-black bg-[#F1F1F1] shadow ring-1 outline-[#808080] outline-1 ring-[#808080]"
                          {...field}
                        />
                      </FormControl>
                      <span
                        className="absolute end-8  top-32 cursor-pointer text-black"
                        onClick={() => setOpen(!open)}
                      >
                        {open ? <BsEyeSlash /> : <BsEye />}
                      </span>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-[#058AB3] hover:bg-[#058AB3] rounded-full"
                >
                  Login
                </Button>
              </form>
            </Form>
            <div className="text-center mt-4">
              <p className="underline text-[#0075ff]">Forget Your password</p>
              {/* <p className="text-black">Or</p> */}
              {/* <div className="flex items-center justify-center gap-2">
                <FaFacebook className="text-[#0075ff]" />
                <p className="underline text-[#0075ff]">
                  Continue with Facebook
                </p>
              </div> */}
              <p className="mt-2 text-black">Not Registered account?<span onClick={() => {
              setOpenMd(false)
              switchToSignup()
            }}
            className="text-blue-500 underline cursor-pointer">Create free account</span></p>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default LoginForm;
