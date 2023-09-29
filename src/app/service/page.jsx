import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import PageLayout from '@/components/PageLayout';
import PageTitle from "@/components/PageTitle";
import Subscribe from '@/components/Subscribe'
import ServiceCard from '@/components/ServiceCard';
import React from 'react'
import getServiceList from '@/lib/getServiceList';

const page = async () => {
  const allServices = await getServiceList()
  // console.log(allServices)

  return (
    <>
      <PageHeader />
      <div className="py-8">
        <PageLayout>
          <PageTitle />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7">
            {allServices.map((service, idx) => {
              const {title, des, image1, image2, image3, image4} = service || {}
              return(
                <ServiceCard title={title} des={des} images={[image1, image2, image3, image4]} key="idx" />
              )
            })}
          </div>
        </PageLayout>
      </div>
      <Subscribe />
      <Footer />
    </>
  );
}

export default page