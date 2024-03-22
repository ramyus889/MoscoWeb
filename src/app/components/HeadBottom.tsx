"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DropDown from "../../componentsUi/DropDown";

export default function HeadBottom() {
  const pathname = usePathname();
  return (
    <div
      className={`fixed bottom-0 right-0 left-0  max-[500px]:overflow-hidden z-[13] ${
        pathname === "/application" ? "hidden" : ""
      }`}
    >
      <div className="min-[1024px]:hidden mb-7 ms-7 text-[30px]">
        <DropDown />
      </div>
      <header className=" flex gap-[124px] max-[1920px]:gap-[100px] max-[1920px]:text-[30px] max-[1440px]:gap-[50px] max-[1440px]:text-[30px] w-full max-[1024px]:hidden backdrop-blur-[50px] place-content-center text-[40px] px-[20px] py-10 text-[#aab3bc]">
        <Link
          href="/aboutUs"
          className={` ${
            pathname === "/aboutUs" ? "text-white border-b-2 border-white" : ""
          }`}
        >
          О Нас
        </Link>
        <Link
          href="/services"
          className={` ${
            pathname === "/services" ? "text-white border-b-2 border-white" : ""
          }`}
        >
          Услуги
        </Link>
        <Link
          href="/consulting"
          className={` ${
            pathname === "/consulting"
              ? "text-white border-b-2 border-white"
              : ""
          }`}
        >
          Консалтинг
        </Link>
        <Link
          href="/brand"
          className={` ${
            pathname === "/brand" ? "text-white border-b-2 border-white" : ""
          }`}
        >
          Бренд инжинеринг
        </Link>
        <Link
          href="/case"
          className={` ${
            pathname === "/case" ? "text-white border-b-2 border-white" : ""
          }`}
        >
          Кейсы
        </Link>
        <Link
          href="/contact"
          className={` ${
            pathname === "/contact" ? "text-white border-b-2 border-white" : ""
          }`}
        >
          Контакты
        </Link>
      </header>
    </div>
  );
}
