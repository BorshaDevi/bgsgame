import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
const Login=()=>{
    return(
        <div>
             <Dialog>
  <DialogTrigger className="bg-[#f22c4d] rounded-md text-white px-2 py-1 hover:bg-[#f22c4d]">Login</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle className='text-xl'>Login to your account</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
        </div>
    )
}
export default Login;