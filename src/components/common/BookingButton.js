import { MoveRight } from 'lucide-react';
import Link from 'next/link';

export default function BookingButton() {
  return (
    <Link href="#" className="bg-(--color-accent) w-fit flex gap-2 justify-center items-center rounded-xl lg:py-3 lg:px-6 p-3 text-[#14181f] font-semibold">
            Book Consultation
            <MoveRight/>
    </Link>
  )
}

