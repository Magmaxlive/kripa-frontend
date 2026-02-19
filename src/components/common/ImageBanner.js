import Image from "next/image"
import BookingButton from "./BookingButton"

export default function ImageBanner() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full">

  <div className="relative w-full h-[400px] md:h-[500px]">
    <Image
      src="/images/mortage.jpg"
      alt="banner image"
      fill
      className="object-cover"
      priority
    />
  </div>

  <div className="flex flex-col justify-center items-center text-center gap-6 bg-(--color-primary) p-8">
    <h2 className="text-3xl md:text-4xl font-bold text-(--color-secondary)">
      Get the Best Mortgage Deal for Today and Tomorrow  
      <br /> to achieve your financial goals
    </h2>

    <BookingButton />
  </div>

</div>

  )
}
