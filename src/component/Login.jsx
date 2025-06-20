'use client'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FaFacebook } from "react-icons/fa6";
import Link from "next/link"
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { useState } from "react";

 
const formSchema = z.object({
  username: z.string().min(2).max(50),
})
const Login=()=>{
  const [open, setOpen] = useState(false);
   const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
  })
  function onSubmit(values) {
    console.log(values)
  }
    return(
        <div>
             <Dialog>
  <DialogTrigger  className="bg-[#f22c4d] rounded-md text-white px-2 py-1 hover:bg-[#f22c4d]">Login</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle className='text-2xl text-center'>Login to your account</DialogTitle>
      {/* Login Form */}
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter your email" className=' border-black border-2' {...field} />
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
                <Input type={open ? 'text': 'password'} placeholder="Password" className=' border-black border-2'  {...field} />
              </FormControl>
              <span className="absolute end-8  top-32 cursor-pointer" 
                                      onClick={() => setOpen(!open)}
                                      >
              
                                    {open ? (
                                      <BsEyeSlash  />
                                    ) : (
                                      <BsEye  />
                                    )}
                                    </span>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className='w-full bg-[#05a7b3] hover:bg-[#05a7b3] rounded-full'>Login</Button>
      </form>
    </Form>
    <div className="text-center mt-4">
           <p className="underline text-[#0075ff]">Forget my password</p>
           <p>Or</p>
           <div className="flex items-center justify-center gap-2">
            <FaFacebook className="text-[#0075ff]" />
            <p className="underline text-[#0075ff]">Continue with Facebook</p>
           </div>
           <p className="mt-2">Not Registered account?<Link href='/signup' className="underline text-[#0075ff]">Create Free account</Link> </p>
    </div>
    </DialogHeader>
  </DialogContent>
</Dialog>
        </div>
    )
}
export default Login;