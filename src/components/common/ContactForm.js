import { options } from "@/data/homepage/GetinTouchData"
import { MoveRight } from 'lucide-react';




export default function ContactForm() {
  return (
    <form action="" method="post">
    <div className="flex flex-col gap-6">
            <div className="flex gap-3">
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="first_name" className="font-medium">First Name</label>
                    <input type="text" name="first_name" className="border w-full rounded-2xl p-3 border-gray-300" placeholder="Enter Your first name" />
                </div>

                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="last_name" className="font-medium">Last Name</label>
                    <input type="text" name="last_name" placeholder="Enter Your Last name" className="border w-full rounded-2xl p-3 border-gray-300" />

                </div>
            </div>

            <div className="flex flex-col w-full gap-2">
                    <label htmlFor="email" className="font-medium">Email</label>
                    <input type="email" name="email" placeholder="Enter Your Email" className="border w-full rounded-2xl p-3 border-gray-300" />
            </div>


            <div className="flex flex-col w-full gap-2">
                    <label htmlFor="phone" className="font-medium">Phone</label>
                    <input type="number" name="phone" placeholder="Enter Phone number" className="border w-full rounded-2xl p-3 border-gray-300" />
            </div>

            <div className="flex flex-col w-full gap-2">
                    <label htmlFor="services" className="font-medium">How can we help ?</label>
                    <select  name="serivces" defaultValue="nill" className="border w-full rounded-2xl p-3 border-gray-300"> 
                        <option value="nill" disabled>Select a service</option>

                        {options.map((i,index)=>(
                            <option value={i.id} key={index}>{i.service}</option>
                        ))}
                    </select>
            </div>


             <div className="flex flex-col w-full gap-2">
                    <label htmlFor="message" className="font-medium">Message ( optional )</label>
                    <textarea  name="message" placeholder="Enter Message" className="border h-30 w-full rounded-2xl p-3 border-gray-300" />
            </div>

             <button type="submit" className="bg-(--color-accent) w-full flex gap-2 justify-center items-center rounded-xl lg:py-3 lg:px-6 p-3 text-[#14181f] font-semibold">
                        Book free Consultation
                        <MoveRight/>
                </button>
       
      
        </div>
     </form>
  )
}
