import React from "react";

function TestimonialsCard() {
  return (
    <div className="p-7 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl flex flex-col items-center gap-8">
      <div className="p-12  w-12 rounded-[16px] bg-gray-500"></div>
      <div className="text-[#9D9D9D] text-center text-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et
        placerat metus. Morbi aliquet felis sit amet erat finibus, ac
        condimentum ligula ornare.
      </div>

      <div className="flex flex-col text-center gap-1">
        <div className="text-[26px] font-bold uppercase">Alice Bradley</div>
        <div className="font-normal text-[16px]">Backend Developer</div>
      </div>
    </div>
  );
}

export default TestimonialsCard;
