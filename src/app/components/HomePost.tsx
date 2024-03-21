"use client";

import { useState } from "react";

import UserCarousel from "../../componentsUi/UserCarousel";

export default function Home() {
  return (
    <div className="flex -mt-[150px] max-[750px]:mt-[60px]  max-[1024px]:-mt-[0px] max-[1440px]:mt-[30px] max-[1920px]:-mt-[90px] place-content-center">
      <UserCarousel />
    </div>
  );
}
