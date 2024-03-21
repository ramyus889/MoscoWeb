"use client";

import Image from "next/image";
import React from "react";

export default function Home() {
  const [image, setImage] = React.useState(true);

  const onClickImage = () => {
    setImage(!image);
  };

  return (
    <div className="">
      <div
        className={`top-[321px] z-10 rounded-[50px] bg-[url('/img/1.png')] w-[90px] h-[90px] bg-no-repeat bg-cover  right-[50px] absolute`}
      ></div>
      <div
        className={`top-[95px] z-10 rounded-[50px] bg-[url('/img/7.png')] w-[90px] h-[90px] bg-no-repeat bg-cover  right-[300px] absolute`}
      ></div>
      <div
        className={` ${
          image
            ? "h-screen bg-slate-700 z-10 opacity-50 top-0 left-0 right-0 bottom-0 absolute cursor-pointer transition duration-500"
            : "transition duration-500 "
        }`}
      ></div>
      <div
        onClick={onClickImage}
        className={`top-[260px] z-[11] rounded-[50px] bg-[url('/img/4.png')] w-[90px] h-[90px]  bg-no-repeat bg-cover cursor-pointer  left-[1568px] absolute ${
          image
            ? "scale-150  transition duration-500 "
            : " transition duration-500"
        }`}
      ></div>
      <div
        className={`top-[130px] z-1 rounded-[50px] bg-[url('/img/3.png')] w-[90px] h-[90px] bg-no-repeat bg-cover  left-[1000px] absolute`}
      ></div>
      <div
        className={`top-[405px] z-1 rounded-[50px] bg-[url('/img/5.png')] w-[90px] h-[90px] bg-no-repeat bg-cover  left-[500px] absolute`}
      ></div>
      <div
        className={`top-[590px] z-1 rounded-[50px] bg-[url('/img/6.png')] w-[90px] h-[90px] bg-no-repeat bg-cover  left-[1300px] absolute`}
      ></div>
      <div
        className={`top-[581px] z-1 rounded-[50px] bg-[url('/img/2.png')] w-[90px] h-[90px] bg-no-repeat bg-cover  right-[500px] absolute`}
      ></div>
      <div className="flex place-content-center">
        <div className="text-[#797d91] text-[80px] z-10 leading-[80px] w-[1000px] transition duration-500">
          {image
            ? " Генеральный директор, и основатель компании MoscoWeb"
            : "Мы — те самые, которые создают эффективные IT продукты, погружаясь в бизнес "}
        </div>
      </div>
    </div>
  );
}
