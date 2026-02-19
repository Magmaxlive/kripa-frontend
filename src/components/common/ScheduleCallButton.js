import Link from "next/link"
import { PhoneCall } from "lucide-react"

export default function ScheduleCallButton() {
  return (
    <Link href='/book-appoinment' className="bg-(--color-accent) w-fit flex gap-2 justify-center items-center rounded-xl lg:py-3 lg:px-6 p-3 text-(--color-text) hover:bg-(--color-primary) hover:text-(--color-secondary) font-semibold cursor-pointer">
                Schedule a Call
                <PhoneCall/>
    </Link>
  )
}
