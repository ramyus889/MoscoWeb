"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function HeadTop() {
  const [close, setClose] = React.useState(false);
  const pathname = usePathname();
  const onClose = () => {
    setClose(!close);
  };
  return (
    <header className="pt-10 ps-10 sticky top-0  left-0 w-[500px]  z-[15] ">
      <div className="flex flex-col gap-8 ">
        <Link href="/">
          <svg
            width="100"
            height="31"
            viewBox="0 0 100 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.1532 1.25433C20.7655 0.46315 21.7096 0 22.7101 0C24.1385 0 25.2965 1.15801 25.2965 2.58648V26.6098C25.2965 28.4768 23.783 29.9903 21.916 29.9903H3.42673C1.17929 29.9903 -0.087508 27.4081 1.288 25.6307L20.1532 1.25433Z"
              fill="#DCC3B0"
            />
            <path
              d="M38.1474 1.25433C38.7597 0.46315 39.7037 0 40.7042 0C42.1327 0 43.2907 1.158 43.2907 2.58647V27.2859C43.2907 28.7795 42.0799 29.9903 40.5863 29.9903H20.0427C18.3571 29.9903 17.407 28.0536 18.4387 26.7206L38.1474 1.25433Z"
              fill="#DCC3B0"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M79.0856 27.0001C79.0692 27.006 79.0527 27.0119 79.0363 27.0177C72.609 29.333 66.2961 30.2941 61.2317 29.9138C56.2977 29.5433 51.803 27.8077 50.3885 23.9206C48.974 20.0335 51.3016 15.8142 54.8431 12.3584C58.4783 8.81113 63.9319 5.48885 70.3435 3.13032C70.3717 3.11985 70.3999 3.10947 70.4281 3.09918L70.4585 3.08815L70.5229 3.06467C77.0122 0.702369 83.3955 -0.280292 88.5072 0.103552C93.4411 0.47405 97.9358 2.20969 99.3503 6.09679C100.765 9.9839 98.4372 14.2031 94.8957 17.659C91.2267 21.2393 85.7052 24.5904 79.2159 26.9527L79.1515 26.9761L79.1211 26.9872C79.1093 26.9915 79.0974 26.9958 79.0856 27.0001ZM61.4735 26.4834C63.6328 26.6455 66.1032 26.5326 68.7633 26.1275C66.6586 24.9479 64.8741 23.1616 63.6956 20.908L54.6182 24.2125C55.8614 25.3559 58.1028 26.2303 61.4735 26.4834ZM53.441 20.9777C53.6585 19.3025 54.8136 17.1917 57.2331 14.8308C58.783 13.3184 60.748 11.8166 63.0461 10.4168C62.1919 12.6735 61.9729 15.1891 62.5185 17.6732L53.441 20.9777ZM66.9503 19.7232C69.157 23.4778 73.7216 25.2526 77.8771 23.7764C77.8969 23.7693 77.9167 23.7621 77.9365 23.7549C77.9482 23.7507 77.96 23.7465 77.9717 23.7422C82.1278 22.214 84.501 17.9063 83.7762 13.598L66.9503 19.7232ZM82.599 10.3632L65.7731 16.4884C65.0506 12.1935 67.4066 7.89933 71.5386 6.35858C71.5701 6.34702 71.6015 6.33548 71.6331 6.32397C75.799 4.82266 80.3854 6.59682 82.599 10.3632ZM87.0308 12.4132C87.5812 14.9191 87.3535 17.4571 86.4805 19.729C88.8701 18.2928 90.9084 16.7453 92.5058 15.1866C94.9252 12.8256 96.0803 10.7148 96.2978 9.03971L87.0308 12.4132ZM95.1206 5.80487L85.8536 9.17837C84.6648 6.90495 82.8592 5.10711 80.7304 3.92794C83.4839 3.49192 86.0399 3.36687 88.2653 3.53399C91.636 3.7871 93.8775 4.66148 95.1206 5.80487Z"
              fill="#DCC3B0"
            />
          </svg>
        </Link>
        <div className="text-[#444651] text-[28px] max-[750px]:text-[18px] max-[500px]:hidden max-[500px]:text-[20px]">
          Помогаем бизнесу выделиться <br /> на рынке © 2023 MoscoWeb
        </div>
        <div
          className="inline-block w-[100px] mt-[60px]  max-[500px]:rotate-0 rotate-[270deg] -ms-[20px]"
          onClick={onClose}
        >
          <Link
            href="/application"
            className={` text-[28px] rounded-full py-3 px-5 text-[#444651] border ${
              pathname === "/application" ? "hidden" : ""
            }`}
          >
            Заявка
          </Link>
        </div>
      </div>
    </header>
  );
}
