"use client";

import { useState } from "react";

import UserCarousel from "../../componentsUi/UserCarousel";

export default function Home() {
  return (
    <div className="flex -mt-[150px] place-content-center">
      <UserCarousel />
    </div>
  );
}
