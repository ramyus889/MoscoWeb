// import React from "react";
// import {
//   Dropdown,
//   DropdownTrigger,
//   DropdownMenu,
//   DropdownItem,
//   Button,
// } from "@nextui-org/react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// export default function App() {
//   const pathname = usePathname();
//   const [open, setOpen] = React.useState(false);

//   const onClickOpen = () => {
//     setOpen(!open);
//   };
//   return (
//     <Dropdown>
//       <DropdownTrigger>
//         <Button variant="bordered" onClick={onClickOpen}>
//           {open ? "Закрыть" : "Меню"}
//         </Button>
//       </DropdownTrigger>
//       <DropdownMenu aria-label="Static Actions" className="text-[50px] ">
//         <DropdownItem key="aboutUs">
//           <Link
//             href="/aboutUs"
//             className={` ${
//               pathname === "/aboutUs" ? "text-white " : "text-slate-500"
//             }`}
//           >
//             О Нас
//           </Link>
//         </DropdownItem>
//         <DropdownItem key="services">
//           <Link
//             href="/services"
//             className={` ${
//               pathname === "/services" ? "text-white " : "text-slate-500"
//             }`}
//           >
//             Услуги
//           </Link>
//         </DropdownItem>
//         <DropdownItem key="consulting">
//           <Link
//             href="/consulting"
//             className={` ${
//               pathname === "/consulting" ? "text-white " : "text-slate-500"
//             }`}
//           >
//             Консалтинг
//           </Link>
//         </DropdownItem>
//         <DropdownItem key="brand">
//           <Link
//             href="/brand"
//             className={` ${
//               pathname === "/brand" ? "text-white " : "text-slate-500"
//             }`}
//           >
//             Бренд инжинеринг
//           </Link>
//         </DropdownItem>
//         <DropdownItem key="case">
//           <Link
//             href="/case"
//             className={` ${
//               pathname === "/case" ? "text-white " : "text-slate-500"
//             }`}
//           >
//             Кейсы
//           </Link>
//         </DropdownItem>
//         <DropdownItem key="contact">
//           <Link
//             href="/contact"
//             className={` ${
//               pathname === "/contact" ? "text-white " : "text-slate-500"
//             }`}
//           >
//             Контакты
//           </Link>
//         </DropdownItem>
//       </DropdownMenu>
//     </Dropdown>
//   );
// }
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function App() {
  const pathName = usePathname();
  const [open, setOpen] = React.useState(false);

  const onClickOpen = () => {
    setOpen(!open);
  };
  const items = [
    {
      key: "aboutUs",
      label: "О Нас",
      href: "/aboutUs",
    },
    {
      key: "services",
      label: "Услуги",
      href: "/services",
    },
    {
      key: "edit",
      label: "Консалтинг",
      href: "/consulting",
    },
    {
      key: "brand",
      label: "Бренд инжинеринг",
      href: "/brand",
    },
    {
      key: "case",
      label: "Кейсы",
      href: "/case",
    },
    {
      key: "contact",
      label: "Контакты",
      href: "/contact",
    },
  ];

  return (
    <Dropdown className="border-none">
      <DropdownTrigger>
        <Button variant="bordered" onClick={onClickOpen}>
          {open ? "Закрыть" : "Меню"}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="DynamicActions" items={items}>
        {(item) => (
          <DropdownItem key={item.key} textValue={item.label}>
            <Link
              onClick={() => setOpen(false)}
              href={item.href}
              className={`text-[40px] py-3 px-1 ${
                pathName === item.href ? "text-white " : "text-slate-500"
              }`}
            >
              {item.label}
            </Link>
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
