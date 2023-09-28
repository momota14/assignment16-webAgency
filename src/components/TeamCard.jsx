import Image from "next/image";
import React from "react";

function TeamCard() {
  return (
    <div className="w-full shadow rounded-xl overflow-hidden">
      <div>
        <Image src="/images/teamImag.png" alt="img" height={600} width={400} className="w-full h-72 object-cover" />
      </div>
      <div className="p-3 text-center font-semibold">Devon Lane</div>
    </div>
  );
}

export default TeamCard;
