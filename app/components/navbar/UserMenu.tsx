"use client";

import { BiMenu } from "react-icons/bi";
import Image from "next/image";
import { createRef, useEffect, useState } from "react";
import { MenuItem } from "./MenuItem";

export function UserMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuItemRef = createRef<HTMLDivElement>();

  useEffect(() => {
    // If Menu Item is not in DOM, there is no need to add a Event listener.
    if (!menuItemRef.current) {
      return;
    }

    const eventHandler = () => {
      if (!openMenu) {
        return;
      }

      setOpenMenu(false);
    };

    document.addEventListener("click", eventHandler);

    return () => {
      document.removeEventListener("click", eventHandler);
    };
  }, [openMenu]);

  return (
    <div className="flex-row gap-4 items-center hidden md:flex relative">
      <p className="font-bold text-sm">Airbnb your home</p>
      <div
        className="flex flex-row gap-3 p-2 border border-gray-200 rounded-full items-center cursor-pointer"
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      >
        <div className="text-xl">
          <BiMenu />
        </div>
        <Image
          alt="Avatar"
          height="20"
          width="25"
          src="/images/placeholder.jpg"
          className="rounded-full cursor-pointer"
        />
      </div>
      {openMenu ? (
        <div
          className="absolute right-0 top-[120%] w-48 border rounded-md shadow bg-white"
          ref={menuItemRef}
        >
          <MenuItem label="Sign up" isBold onClick={() => {}} />
          <MenuItem label="Log in" onClick={() => {}} />
          <MenuItem label="Help center" onClick={() => {}} />
        </div>
      ) : null}
    </div>
  );
}
