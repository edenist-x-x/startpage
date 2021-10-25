import Image from "next/image";

import React, { useEffect, useState } from "react";

const SmallCard = ({ no, url, name, img }) => {
  const [page, setPage] = useState("");
  useEffect(() => {
    setPage(url);
  }, []);

  const goPage = () => {
    window.open(`${page}`, "_blank");
  };
  return (
    <div
      onClick={goPage}
      className="flex items-center m-2 mt-5 mx-auto space-x-4 rounded-xl
    cursor-pointer  hover:scale-105 transition-transform duration-200 ease-out"
    >
      {/* Left */}
      <div className="relative h-12 w-48">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      {/* Right */}
      <div>
        {/* <h2>{name}</h2> */}
        {/* <h3 className="text-gray-500">{distance}</h3> */}
      </div>
    </div>
  );
};

export default SmallCard;
