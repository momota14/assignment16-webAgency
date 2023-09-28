import Image from "next/image";
import PageLayout from "./PageLayout";

const Brands = () => {
  return (
    <div className="bg-white ">
      <PageLayout>
        <div className="grid place-items-center grid-cols-3 md:grid-cols-5 gap-5 m-5 ">
          <Image
            src="/images/google.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
          <Image
            src="/images/trello.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
          <Image
            src="/images/monday.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
          <Image
            src="/images/notion.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
          <Image
            src="/images/slack.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </div>
      </PageLayout>
    </div>
  );
};

export default Brands;
