import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function PageBanner({ title,bannerBg, breadCrumbs = [] }) {
  return (
    <div className="relative py-20 px-8 bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url(${bannerBg})`}}>
        <div className="absolute inset-0 bg-(--color-primary)/80"></div>
        <div className="relative flex flex-col gap-8 z-10 text-(--color-secondary) max-w-[1200px] mx-auto">
            <h1 className="text-5xl font-extrabold capitalize">
                {title}
            </h1>

            <div className="flex gap-2 capitalize text-(--color-secondary)/70">
                <Link className='hover:underline hover:text-(--color-secondary) underline-offset-4' href='/'>Home</Link>
                
                {breadCrumbs.map((i,index)=>(
                    <div className='flex gap-2' key={index}>
                        <ChevronRight />
                        <Link className='hover:underline hover:text-(--color-secondary) underline-offset-4 ' href={i.href}>{i.label}</Link>
                    </div>
                ))
                }
            </div>
        </div>
      
    </div>
  )
}
