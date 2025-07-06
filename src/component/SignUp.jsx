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
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FaFacebook } from "react-icons/fa6";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
  country: z.string({
    message: 'You must select country.'
  }),
  terms:z.boolean({
    message: "You must accept the terms and conditions",
  }),
  term:z.boolean().optional(),
});
const Signup = ({ openMd, setOpenMd, switchToLogin }) => {
  const [open, setOpen] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      country: "",
      terms:'',
      term:'',
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
            <DialogTitle className="text-2xl text-center text-black">
             Create A Free Account
            </DialogTitle>
            {/* Login Form */}
            <Form {...form}  >
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
                          className=" border-black border-1 text-black bg-gray-100"
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
                          className=" border-black border-1 text-black bg-gray-100 "
                          {...field}
                        />
                      </FormControl>
                      {/* Eye Icon */}
                      <span
                        className="absolute end-8  top-1 cursor-pointer text-black"
                        onClick={() => setOpen(!open) }
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
                        <SelectTrigger className="w-full border-black border-1 text-black bg-gray-100">
                          <SelectValue placeholder="Bangladesh" />
                        </SelectTrigger>
                        <SelectContent className="border-1 border-black">
                          <SelectItem value="bangladesh">Bangladesh</SelectItem>
                          <SelectItem value="india">India</SelectItem>
                          <SelectItem value="China">China</SelectItem>
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <Label htmlFor="terms " className='text-black '>
                          I am over 18 years of age and have read and accept
                          the 
                          <span className="text-blue-500">Terms Of Use</span>
                           and the 
                          <span className="text-blue-500">Privacy Notice</span>
                          . (Required)
                        </Label>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="term"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="term"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <Label htmlFor="term" className='text-black'>
                          Yes, I want to receive exclusive deals and discounts!
                        </Label>
                      </div>
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
              {/* <p className="text-black">Or</p> */}
              {/* <div className="flex items-center justify-center gap-2">
                <FaFacebook className="text-[#0075ff]" />
                <p className="underline text-[#0075ff]">
                  Continue with Facebook
                </p>
              </div> */}
              <p className="mt-2 text-black">
                Already Registered?
                <span onClick={() => {
              setOpenMd(false)
              switchToLogin()
            }}
            className="text-blue-500 underline cursor-pointer">Click here </span>
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
