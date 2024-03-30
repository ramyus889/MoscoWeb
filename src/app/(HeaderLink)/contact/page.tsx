"use client";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div className="">
      <div className="fixed top-0 right-0">
        <div
          data-aos="zoom-out-down"
          className="flex flex-col gap-[6px] text-end text-[36px] max-[1024px]:text-[30px] max-[750px]:text-[20px] font-[500] text-[#797D91] mt-[30px] me-10"
        >
          <Link target="_blank" href="https://www.youtube.com/@agatsarsky">
            Youtube.com
          </Link>
          <Link target="_blank" href="https://www.instagram.com/mweb.agency/">
            inst.com
          </Link>
          <Link target="_blank" href="https://t.me/moscoweb">
            t.me
          </Link>
        </div>
      </div>
      <div className="flex place-content-center max-[1920px]:mt-[70px] max-[1440px]:mt-[130px] max-[500px]:mt-[240px]">
        <div className="">
          <div className="text-[120px] max-[1920px]:text-[80px] max-[1440px]:text-[60px] max-[1024px]:text-[40px] max-[500px]:text-[30px] text-[#797d91] font-[500]">
            sale@moscoweb.agency
          </div>
          <div className="text-[80px] max-[1920px]:text-[60px] max-[1440px]:text-[40px] max-[1024px]:text-[30px] max-[500px]:text-[25px] text-[#17181b] font-[500]">
            Напишите нам
          </div>
        </div>
      </div>
    </div>
  );
}
