import React, { useEffect, useState } from "react";
import Image from "next/image";
const MediumCard = ({ img, name, url }) => {
  const [page, setPage] = useState("");
  useEffect(() => {
    setPage(url);
  }, []);

  const goPage = () => {
    window.open(`${url}`, "_blank");
  };
  return (
    <div
      className="cursor-pointer hover:scale-105  transform transition duration-300 ease-out"
      onClick={goPage}
    >
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="mt-3 text-1xl">{name}</h3>
    </div>
  );
};

export default MediumCard;
