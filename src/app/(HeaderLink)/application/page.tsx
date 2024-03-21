"use client";

import { useRef, useState } from "react";
import Link from "next/link";
export default function Home() {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const nextInputRef = useRef<number | string | null>(null);

  const handleClick = (id: number) => {
    setActiveButton(id);
  };

  const handleInputChange = (e: number | string) => {
    const value = e.target.value;
    if (value.length >= 25) {
      nextInputRef.current && nextInputRef.current.focus();
    }
  };
  return (
    <>
      <div className="flex items-end  gap-14">
        <div className="flex flex-col gap-5 w-[1500px] text-[55px] max-[1440px]:text-[48px]  max-[1920px]:text-[52px] ps-10">
          <label className="flex gap-4  items-center">
            <span className=" w-[900px] text-[#bcc5d0]">
              Привет, Меня зовут
            </span>
            <input
              type="text"
              placeholder="введите имя"
              className=" bg-[#020817] w-full border-b-2  outline-none ps-3 text-[#bcc5d0]  placeholder:text-[24px] max-[1440px]:placeholder:text-[18px] placeholder:text-slate-500 placeholder:text-center border-slate-500"
            />
          </label>
          <label className="flex   items-center">
            <span className=" w-[470px] text-[#bcc5d0]">и я работаю</span>
            <input
              type="text"
              placeholder="название организаций"
              className=" bg-[#020817] w-full border-b-2 text-[56px] outline-none ps-3 text-[#bcc5d0] max-[1440px]:placeholder:text-[18px] placeholder:text-[24px]  placeholder:text-slate-500 placeholder:text-center border-slate-500"
            />
          </label>
          <label className="flex gap-4  items-center">
            <span className=" w-[800px] text-[#bcc5d0]">давайте создадим</span>
            <input
              type="text"
              placeholder="ребрендинг"
              className=" bg-[#020817] w-full border-b-2  outline-none ps-3 text-[#bcc5d0]  placeholder:text-[24px] max-[1440px]:placeholder:text-[18px] placeholder:text-slate-500 placeholder:text-center border-slate-500"
            />
          </label>
          <div className="flex gap-3  items-center">
            <span className=" w-[480px] text-[#bcc5d0]">бюджет проекта</span>
            <div className="flex gap-2">
              <button
                onClick={() => handleClick(1)}
                className={`text-[30px] max-[1440px]:text-[23px] max-[1920px]:text-[26px] py-[15px] px-[25px] w-[320px] rounded-full border-2 text-slate-500 ${
                  activeButton === 1
                    ? "border-slate-300 text-slate-300 transition duration-500"
                    : "transition duration-500"
                }`}
              >
                200тыс - 1млн
              </button>
              <button
                onClick={() => handleClick(2)}
                className={`text-[30px] max-[1440px]:text-[23px] max-[1920px]:text-[26px] py-[15px] px-[25px] w-[320px] rounded-full border-2 text-slate-500 ${
                  activeButton === 2
                    ? "border-slate-300 text-slate-300 transition duration-500"
                    : "transition duration-500"
                }`}
              >
                1-2млн
              </button>
              <button
                onClick={() => handleClick(3)}
                className={`text-[30px] max-[1440px]:text-[23px] max-[1920px]:text-[26px] py-[15px] px-[25px] w-[320px] rounded-full border-2 text-slate-500 ${
                  activeButton === 3
                    ? "border-slate-300 text-slate-300 transition duration-500"
                    : "transition duration-500"
                }`}
              >
                {">3млн"}
              </button>
            </div>
          </div>
          <label className="flex gap-4  items-center">
            <span className=" w-[400px] text-[#bcc5d0]">свяжитесь</span>
            <input
              type="text"
              placeholder="контакты для обратной связи"
              className=" bg-[#020817] w-full border-b-2  outline-none ps-3 text-[#bcc5d0]  placeholder:text-[24px] max-[1440px]:placeholder:text-[18px] placeholder:text-slate-500 placeholder:text-center border-slate-500"
            />
          </label>
          <label className="flex gap-4  items-center">
            <span className=" w-[200px] text-[#bcc5d0]">детали</span>
            <input
              type="text"
              placeholder="подробности"
              onChange={handleInputChange}
              className=" bg-[#020817] w-full border-b-2  outline-none ps-3 text-[#bcc5d0]  placeholder:text-[24px] max-[1440px]:placeholder:text-[18px] placeholder:text-slate-500 placeholder:text-center border-slate-500"
            />
          </label>
          <input
            ref={nextInputRef}
            onChange={handleInputChange}
            type="text"
            className="bg-[#020817] w-full border-b-2  outline-none ps-3 text-[#bcc5d0]   border-slate-500"
          />
        </div>
        <Link
          href="/"
          className="text-[47px] py-[15px] px-[25px] w-[290px] max-[1920px]:text-[30px] max-[1024px]:fixed max-[1024px]:mt-10 max-[1024px]:me-10 max-[1024px]:top-0 max-[1024px]:right-0 text-center rounded-full border-2 text-slate-500"
        >
          отправить
        </Link>
      </div>
    </>
  );
}
