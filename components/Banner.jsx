import React, { useEffect, useState } from "react";
import Image from "next/image";
import bg from "../img/bg.jpeg";

const Banner = () => {
  const [time, setTime] = useState("00");

  const currentTime = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    setTime(parseInt(`${hours}`));
  };
  useEffect(() => {
    currentTime();
  }, []);
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src={bg} layout="fill" objectFit="cover" />
      <div className="absolute top-1/3 w-full text-center md:top-1/2">
        {time >= 6 && time < 18 ? (
          <p className="text-md sm:text-xl ">오늘도 힘내세요 아버지</p>
        ) : (
          <p className="text-md font-bold sm:text-xl ">오늘도 수고하셨어요 아버지</p>
        )}

        <button
          className="text-purple-500 bg-white px-8 
        py-3 shadow-md rounded-full font-bold my-4 hover:shadow-xl
        active:scale-90 transition duration-150
        "
        >
          😍
        </button>
      </div>
    </div>
  );
};

export default Banner;
