import PageBanner from "@/components/common/PageBanner";
import { refinance_blogs } from "@/data/refinance/blogs";
import SectionHeading from "@/components/common/SectionHeading";
import BlogSection from "@/components/common/BlogSection";


export default function page() {
  return (
    <div className="flex flex-col">
        <PageBanner title="blogs" breadCrumbs={[
            {
                label : 'blogs',
                href : '/blogs'
            }
        ]} />

        <div className="bg-(--color-neutral) py-20 px-8">
                                
                                    <div className="flex flex-col justify-center items-center gap-12 mx-auto max-w-[1200px]">
                                      <SectionHeading minorHeading="blogs" mainHeading="Check out our blog articles" />
        
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                          {refinance_blogs.map((i,index)=>(
                                            <BlogSection image={i.image} title={i.title} excerpt={i.excerpt} key={index} />
                                          ))}
                                        </div>
        
                                    </div>
        
                                                
                                  </div>
      
    </div>
  )
}
