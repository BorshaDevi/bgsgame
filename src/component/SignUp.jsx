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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { FaFacebook } from "react-icons/fa6";
import Link from "next/link";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password:z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
  country:z.string()
});
const Signup = () => {
  const [open, setOpen] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      country:'',
    },
  });
  function onSubmit(values) {
    console.log(values);
  }
  return (
    <div>
      <Dialog>
        <DialogTrigger className="rounded-md border border-black px-2 py-1 ">
          Sign Up
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">
              Login to your account
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
                          className=" border-black border-2"
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
                    <FormItem className="relative">
                      <FormControl>
                        <Input
                          type={open ? "text" : "password"}
                          placeholder="Password"
                          className=" border-black border-2"
                          {...field}
                        />
                      </FormControl>
                      {/* Eye Icon */}
                      <span
                        className="absolute end-8  top-1 cursor-pointer"
                        onClick={() => setOpen(!open)}
                      >
                        {open ? <BsEyeSlash /> : <BsEye />}
                      </span>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <Select 
                      value={field.value}
                       onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full border-black border-2">
                          <SelectValue placeholder="Bangladesh" />
                        </SelectTrigger>
                        <SelectContent  className="">
                          <SelectItem value="light">Bangladesh</SelectItem>
                          <SelectItem value="dark">India</SelectItem>
                          <SelectItem value="system">China</SelectItem>
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  className="w-full bg-[#05a7b3] hover:bg-[#05a7b3] rounded-full"
                >
                  Sign Up
                </Button>
              </form>
            </Form>
            <div className="text-center mt-4">
              <p className="underline text-[#0075ff]">Forget my password</p>
              <p>Or</p>
              <div className="flex items-center justify-center gap-2">
                <FaFacebook className="text-[#0075ff]" />
                <p className="underline text-[#0075ff]">
                  Continue with Facebook
                </p>
              </div>
              <p className="mt-2">
                Already Registered?
                <Link href="/login" className="underline text-[#0075ff]">
                  Click here
                </Link>{" "}
                to login
              </p>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default Signup;
