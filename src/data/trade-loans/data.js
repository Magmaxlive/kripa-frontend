import { CarFront,BriefcaseBusiness,Landmark  } from 'lucide-react';



export const features = [
    {
        description : 'Business Loan - a lump sum of between $5K and $500K over a fixed term'
    },

    {
        description : 'Line of Credit - ongoing access to between $2K and $150K over a renewable 24-month term'
    },

     {
        description : 'Straight forward application, quick decision and funding possible in 24 hours'
    },

    
     {
        description : 'There is no asset security required upfront to access funding up to $150,000'
    },
]


export const steps = [
    {
        step : 1,
        image : '/images/submit-details.jpg',
        title : 'Submit your details',
        description : "First we need a few details about you and your business. Select the button below and fill out the form. It takes less than a minute and there's no obligation.",
        btnText : 'get started'
    },

    {
        step : 2,
        image : '/images/talk_to_person.jpg',
        title : 'Speak to a specialist',
        description : "We or our lending partner will call for a quick chat about your business and answer any questions you have. If you wish to proceed we will complete the application with you."
    },

    {
        step : 3,
        image : '/images/decision.jpg',
        title : 'Get a fast decision',
        description : "The process is quick and easy. You'll get a fast decision, with funding possible in 24 hours to approved applicants."
    },
]


export const youWillNeed = [
    {
        icon : <CarFront />,
        title : 'Driver Licence'
    },

    {
        icon : <BriefcaseBusiness />,
        title : 'Business NZBN'
    },


    {
        icon : <Landmark />,
        title : 'Up to 6 months bank statements'
    },

]