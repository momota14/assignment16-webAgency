import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import PageLayout from '@/components/PageLayout';
import PageTitle from "@/components/PageTitle";
import Subscribe from '@/components/Subscribe'
import ServiceCard from '@/components/serviceCard';
import React from 'react'

const page = () => {
  return (
    <>
      <PageHeader />
      <div className="py-8">
        <PageLayout>
          <PageTitle />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7">
            {/* code..... */}
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </PageLayout>
      </div>
      <Subscribe />
      <Footer />
    </>
  );
}

export default page