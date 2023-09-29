import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";
import PageTitle from "@/components/PageTitle";
import Subscribe from "@/components/Subscribe";
import TeamCard from "@/components/TeamCard";
import getTeamList from "@/lib/getTeamList";
import React from "react";

const page = async () => {
  const teamList = await getTeamList();
  // console.log(teamList)

  return (
    <>
      <PageHeader />
      <div className="py-8">
        <PageLayout>
        <PageTitle />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7">
          {teamList.map((team, idx) => {
            const {name, image} = team || {};
            return(
              <TeamCard name={name} imgSrc={image} key="idx"/>
            )
          })}
        </div>
        </PageLayout>
      </div>
      <Subscribe />
      <Footer />
    </>
  );
};

export default page;
