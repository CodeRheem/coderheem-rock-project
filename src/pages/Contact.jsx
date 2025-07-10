import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import heroImage from "@/assets/banner.png"


const formSchema = z.object({
  firstName: z.string().min(4, "First name is required"),
  lastName: z.string().min(4, "Last name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(11, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
  agree: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the Privacy Policy" }),
  }),
})

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(data) {
    console.log("Submitted!", data)
    alert("Message sent!")
  }

  return (
    <div>
      <div className="bg-[#006D5A]">
        <img src={heroImage} alt="Contact banner" className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover" />
          <div className="max-w-xl shadow-sm relative -mt-12 sm:-mt-24 md:-mt-32 mx-4 sm:mx-auto mb-4 p-4 sm:p-6 md:p-8 bg-white text-black rounded-md">
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <p className="mb-6 text-sm">Do you have a question, need help, or want to work with us? Leave us a message.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex-1">
                  <label>First Name</label>
                  <Input placeholder="First name" {...register("firstName")} />
                  {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName.message}</p>}
                </div>
                <div className="flex-1">
                  <label>Last Name</label>
                  <Input placeholder="Last name" {...register("lastName")} />
                  {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message}</p>}
                </div>
              </div>

              <label>Email</label>
              <Input placeholder="Email" {...register("email")} />
              {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}

              <label>Phone Number</label>
              <Input placeholder="Phone Number" {...register("phone")} />
              {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}

              <label>Message</label>
              <Input
                placeholder="How can we help you?"
                {...register("message")}
              />
              {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}

              <label className="flex items-center gap-2">
                <input type="checkbox" {...register("agree")} />
                <span className="text-sm">I agree to be contacted and have read the Privacy Policy.</span>
              </label>
              {errors.agree && <p className="text-red-500 text-xs">{errors.agree.message}</p>}

              <div className="flex justify-center mt-10">
                <Button type="submit" className="bg-orange-400  px-6 py-2 rounded-full text-black w-full sm:w-auto">Contact Us</Button>
                
              </div>
            </form>
          </div>
      </div>
    </div>  
  )
}

