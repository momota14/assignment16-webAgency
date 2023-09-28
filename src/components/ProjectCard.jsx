import Image from 'next/image'
import React from 'react'

function ProjectCard() {
  return (
    <div className="p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl">
      <div className="w-full rounded-xl overflow-hidden">
        <Image
          src="/images/projectPic.png"
          alt="image"
          width={600}
          height={600}
          className="w-full"
        />
      </div>
      <div className="uppercase font-semibold text-xl pt-3">
        Lorem ipsum dolor sit consectutar
      </div>
    </div>
  );
}

export default ProjectCard