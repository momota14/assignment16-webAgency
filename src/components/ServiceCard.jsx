import Image from "next/image";
import React from "react";

function ServiceCard() {
  return (
    <div className="p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl">
      <div className="text-[26px] font-semibold uppercase">
        Build & Launch without problems
      </div>
      <div className="text-[#9D9D9D] py-4 text-[16px]">
        Increase your teams productivity and save time with a bot that answers
        and fields customer inquiries
      </div>
      <div className="grid grid-cols-12 gap-4 [&>*:first-child]:col-span-8 [&>*:nth-child(2)]:col-span-4 [&>*]:col-span-6 [&>*]:rounded-xl">
        <div className="w-full h-[240px] bg-gray-100 overflow-hidden">
          <Image
            src="/images/projectPic.png"
            alt="image"
            height={500}
            width={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-[240px] bg-gray-500"></div>
        <div className="w-full h-[240px] bg-gray-500"></div>
        <div className="w-full h-[240px] bg-gray-200"></div>
      </div>
    </div>
  );
}

export default ServiceCard;
