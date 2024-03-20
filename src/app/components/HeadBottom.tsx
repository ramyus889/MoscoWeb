"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeadBottom() {
  const pathname = usePathname();
  return (
    <header className="fixed bottom-0 right-0 left-0 flex gap-[124px] backdrop-blur-[50px] place-content-center text-[40px] px-[20px] py-10 text-[#aab3bc]">
      <Link
        href="/aboutUs"
        className={` ${pathname === "/aboutUs" ? "text-white " : ""}`}
      >
        О Нас
      </Link>
      <Link
        href="/services"
        className={` ${pathname === "/services" ? "text-white " : ""}`}
      >
        Услуги
      </Link>
      <Link
        href="/consulting"
        className={` ${pathname === "/consulting" ? "text-white " : ""}`}
      >
        Консалтинг
      </Link>
      <Link
        href="/brand"
        className={` ${pathname === "/brand" ? "text-white " : ""}`}
      >
        Бренд инжинеринг
      </Link>
      <Link
        href="/case"
        className={` ${pathname === "/case" ? "text-white " : ""}`}
      >
        Кейсы
      </Link>
      <Link
        href="/contact"
        className={` ${pathname === "/contact" ? "text-white " : ""}`}
      >
        Контакты
      </Link>
    </header>
  );
}
