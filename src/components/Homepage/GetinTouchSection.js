import ContactCard from "../common/ContactCard";
import ContactForm from "../common/ContactForm";
import SectionHeading from "../common/SectionHeading";

export default function GetinTouchSection() {
  return (
    <div className="bg-(--color-secondary) py-20 px-8" id="contact">
        <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div className="flex flex-col gap-8">
                    <SectionHeading class="md:justify-start justify-center md:items-start items-center" minorHeading="Get In Touch" mainHeading="Let's Start Your Journey" paragraph="Ready to take the next step? Book a free consultation with our team and discover how we can help you achieve your financial goals." />
                    <ContactForm/>
                </div>

                <ContactCard/>
            </div>
        </div>
      
    </div>
  )
}
