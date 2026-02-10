import SectionHeading from "../common/SectionHeading";
import { MoveRight } from 'lucide-react';
import Link from "next/link";
import EstimateCalculator from "./EstimateCalculator";


export default function FinancialToolsSection() {
  return (
    <div className="bg-(--color-neutral) py-20 px-8">
        <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 place-items-center">

                {/* left coloumn */}
                <div className="flex flex-col gap-6">
                    <SectionHeading class="md:justify-start justify-center md:items-start items-center" minorHeading="Financial Tools" mainHeading="How much can you borrow?" paragraph="Quick check." />
                    
                    <Link href="#" className="bg-(--color-accent) self-center lg:self-start w-fit flex gap-2 justify-center items-center rounded-xl lg:py-3 lg:px-6 p-3 text-(--color-text) font-semibold">
                                Find out
                        <MoveRight/>
                    </Link>
                </div>

                {/* right coloumn */}

                <EstimateCalculator/>
            </div>
        </div>
      
    </div>
  )
}
