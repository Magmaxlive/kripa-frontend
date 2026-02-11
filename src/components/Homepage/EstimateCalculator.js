'use client';

import { Calculator } from 'lucide-react';
import { useState } from 'react';


export default function EstimateCalculator() {
    const [formData,setFormData] = useState({
        amount : 750000,
        rate : 6.49,
        year : 30
    })

    const [result,setResult]=useState(0)

    const onChangeHandler = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const CalculateEmi = (e)=>{
        e.preventDefault();
        const principal = formData.amount; 
        const monthlyRate = formData.rate / 12 / 100; 
        const months = formData.year * 12; 

        // EMI formula
        const emi =
            (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
            (Math.pow(1 + monthlyRate, months) - 1);

        setResult(emi.toFixed(2))

        return emi;
    }
  return (
    <div className="bg-(--color-secondary) text-(--color-text) rounded-xl p-6 border shadow-2xl border-gray-300 flex flex-col">
        <div className="flex gap-4 justify-start items-center">
            <div className='bg-(--color-button-bg) rounded-2xl h-fit w-fit p-4 text-(--color-primary)'>
                        <Calculator />
            </div>

            <div className="flex flex-col gap-1">
                <h5 className="text-xl font-bold">Quick Estimate</h5>
                <p className="text-sm font-medium text-(--color-muted)">Estimated weekly repayments</p>
            </div>
        </div>

        {/* calculator */}
            <form action="" method="post" onSubmit={CalculateEmi}>
                <div className="flex flex-col gap-4 p-4 mt-3">
                    <div className="flex flex-col w-full gap-2">
                        <label htmlFor="amount" className='font-semibold'>Loan Amount</label>
                        <input type="number" value={formData.amount} name='amount' onChange={onChangeHandler} id='amount' placeholder='Enter the Amount $' className='bg-(--color-neutral) placeholder:text-(--color-muted) placeholder:font-normal w-full border border-gray-200 rounded-md p-2 font-bold text-(--color-primary)' required/>
                    </div>

                    <div className="flex justify-between gap-2">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="interest" className='font-semibold'>Interest Rate</label>
                            <input type="number" value={formData.rate} name='rate' onChange={onChangeHandler} id='interest' placeholder='Enter the Rate %' className='bg-(--color-neutral) placeholder:text-(--color-muted) placeholder:font-normal w-full border border-gray-200 rounded-md p-2 font-bold text-(--color-primary)' required/>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="term" className='font-semibold'>Loan Term</label>
                            <input type="number" value={formData.year} name='year' onChange={onChangeHandler} id='interest' placeholder='Enter the Years' className='bg-(--color-neutral) placeholder:text-(--color-muted) placeholder:font-normal w-full border border-gray-200 rounded-md p-2 font-bold text-(--color-primary)' required />
                        </div>
                    </div>

                    <button type='submit' className="mt-4 bg-(--color-primary) text-(--color-secondary) w-fit self-end flex gap-2 justify-center items-center rounded-lg lg:py-2 lg:px-6 p-2  font-semibold">
                        Calculate
                    </button>

                    <hr className='my-2 text-gray-300' />

                    <div className="flex flex-col gap-2">
                        <h6 className="text-sm font-base text-(--color-muted)">Estimated Weekly Payment</h6>
                        <h4 className="text-3xl font-bold text-(--color-primary)">
                            ${result}
                        </h4>
                    </div>


                </div>
            </form>
        
      
    </div>
  )
}
