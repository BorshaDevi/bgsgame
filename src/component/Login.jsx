'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
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

 
const formSchema = z.object({
  username: z.string().min(2).max(50),
})
const Login=()=>{
   const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
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
                <Input placeholder="Password" className=' border-black border-2'  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className='w-full bg-[#05a7b3] rounded-full'>Login</Button>
      </form>
    </Form>
    </DialogHeader>
  </DialogContent>
</Dialog>
        </div>
    )
}
export default Login;