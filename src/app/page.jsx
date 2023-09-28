import FeaturedProject from "@/components/FeaturedProject";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar2";
import Subscribe from "@/components/Subscribe";
import WorkList from "@/components/WorkList";

const page = () => {
  return (
    <>
      <Hero />
      <WorkList />
      <FeaturedProject />
      <Subscribe />
      <Footer />
    </>
  );
};

export default page;
