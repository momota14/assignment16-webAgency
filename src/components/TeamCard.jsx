import Image from "next/image";
import React from "react";

function TeamCard({imgSrc, name}) {
  return (
    <div className="w-full shadow rounded-xl overflow-hidden">
      <div>
        <Image src={imgSrc} alt="img" height={600} width={400} className="w-full h-80 object-cover" />
      </div>
      <div className="p-3 text-center font-semibold text-[20px]">{name}</div>
    </div>
  );
}

export default TeamCard;
