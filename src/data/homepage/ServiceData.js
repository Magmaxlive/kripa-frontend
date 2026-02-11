import { House,MoveRight,ShieldCheck,MessageCircle   } from 'lucide-react';

export const services = [
    {
        icon : <House/>,
        title : 'Get a Home Loan',
        description : 'Dedicated advisers find the right mortgage for you.',
        buttonText : 'Book free consultation',
        buttonIcon : <MoveRight />,
        link:"contact"
    },
    {
        icon : <ShieldCheck/>,
        title : 'Protect & Grow Your Future',
        description : 'Custom insurance and wealth-building that fits your life.',
        buttonText : 'Talk Today',
        buttonIcon : <MessageCircle />,
        link:"contact"
    }
]