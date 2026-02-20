import PageBanner from "@/components/common/PageBanner";
import GetinTouchSection from "@/components/Homepage/GetinTouchSection";


export default function page() {
  return (
    <div className="flex flex-col">
        <PageBanner title="contact us" breadCrumbs={[
            {
                label : 'contact us',
                href : '/contact-us'
            }
        ]}   />


        <GetinTouchSection buttonText="Send Message" />
      
    </div>
  )
}
