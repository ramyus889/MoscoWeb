import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function App() {
  const [open, setOpen] = React.useState(false);
  const [close, setClose] = React.useState(false);
  const pathname = usePathname();

  const onClose = () => {
    setClose(!close);
  };
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
      <div className="bg-black h-screen fixed top-0 right-0 left-0 bottom-0  max-[500px]:h-screen max-[500px]:fixed max-[500px]:top-0 max-[500px]:right-0 max-[500px]:left-0 max-[500px]:bottom-0">
        <DropdownMenu aria-label="DynamicActions" items={items}>
          {(item) => (
            <DropdownItem key={item.key} textValue={item.label}>
              <Link
                onClick={() => setOpen(false)}
                href={item.href}
                className={`text-[40px] py-3 px-1 ${
                  pathname === item.href ? "text-white " : "text-slate-500"
                }`}
              >
                {item.label}
              </Link>
            </DropdownItem>
          )}
        </DropdownMenu>
      </div>
    </Dropdown>
  );
}
