import { WavesArrowUp,HandCoins,BookCheck,Hourglass,CircleDollarSign,ChevronsDown,FastForward   } from 'lucide-react';


export const advantages = [
    {
        title : 'Higher asset value appreciation',
        description : 'Commercial properties for sale are far lesser in supply and therefore enjoy a greater demand. This is one of the most fundamental reasons why commercial properties usually appreciate more than other property types.',
        icon : <WavesArrowUp />
    },

    {
        title : 'Income from leases',
        description : <>
            <p>Lease income from commercial properties is a repeating income stream. It becomes a good source of capital to repay your commercial loan too. Commercial property owners enjoy a higher return on investment than residential property owners.</p>
            <p>No wonder commercial properties with existing tenants and leases are always in high demand! And did you know that in New Zealand, tenants are responsible for furnishing, insurance and repairs? </p>
        </>,
        icon : <HandCoins  />
    },

     {
        title : 'Tax benefits',
        description : "Commercial property mortgage repayments, depreciation deductions, and maintenance costs can save a considerable part of the lease you collect from your tenants. We at Kripa Financial Solutions Limited would be happy to get you a good tax advisor. He/she could help you understand and leverage all the tax benefits of owning a commercial property.",
        icon : <BookCheck   />
    },
]


export const keyfacts = [
    {
        title : 'How much can you borrow?',
        description : "Typically around 65%. Banks generally issue commercial loans for 65% of the commercial property's value. However, at Kripa, we have noticed several buyers securing a higher loan (up to 80%) by offering more assets as security collateral"
    },

    {
        title : 'What are the typical repayment terms?',
        description : "You can expect a commercial loan's interest rate is usually 1% to 2% higher than home loan rates. And most banks stipulate a loan repayment period of 10-15 years."
    },

     {
        title : 'Necessary Documentation',
        description : <div className='space-y-2'>
            <p>There are only two requirements for commercial loans:</p>
            <ul className='list-disc space-y-2'>
                <li>Commercial Property Sale & Purchase Agreement</li>
                <li>Copy of the Lease Agreement between you and your tenant - the business establishment that is taking your commercial property on lease. You will need to mention the rent, excluding GST.</li>
            </ul>
        </div>
    },
]


export const whyKripa = [
    {
        title : 'High approval rates',
        description : 'We at Kripa are experts in presenting your commercial loan application and repayment capabilities. Therefore giving your commercial loan a better chance of getting approved.',
        icon : <Hourglass/>
    },


    {
        title : 'Higher loan amounts',
        description : 'We draft your application in a manner that encourages banks to disburse a higher loan amount - to make your commercial property purchase as smooth as possible.',
        icon : <CircleDollarSign />
    },


    {
        title : 'Lower, better, negotiated interest rates',
        description : 'We evaluate current commercial loan proposals from various lenders and banks to see how they could be structured to lower the interest. We also negotiate with several lenders and banks on your behalf to get the best possible commercial loan rate. Because the lower the interest is, the higher the repayment towards the principal amount. And better for your business. ',
        icon : <ChevronsDown />
    },


    {
        title : 'Speedy loan disbursals',
        description : 'We understand that your commercial property seller is evaluating several buyers simultaneously. And the speed of turnaround could help you compete with other buyers interested in the same commercial property. ',
        icon : <FastForward  />
    },
]