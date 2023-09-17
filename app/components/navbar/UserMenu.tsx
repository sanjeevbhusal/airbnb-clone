"use client";

import { BiMenu } from "react-icons/bi";
import Image from "next/image";
import { createRef, useEffect, useState } from "react";
import { MenuItem } from "./MenuItem";
import { useRegisterModal } from "@/app/hooks/useRegisterModal";
import { useLoginModal } from "@/app/hooks/useLoginModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { Button } from "../Button";

interface UserMenuProps {
  user: User | null;
}

export function UserMenu({ user }: UserMenuProps) {
  const [openMenu, setOpenMenu] = useState(false);
  const menuItemRef = createRef<HTMLDivElement>();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

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
    <div className="flex-row gap-4 items-center flex relative">
      <p className="font-bold text-sm hidden md:block hover:bg-neutral-100 cursor-pointer p-3 rounded-full">
        Airbnb your home
      </p>

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
          src={user?.image || "/images/placeholder.jpg"}
          className="rounded-full cursor-pointer"
        />
      </div>
      {openMenu ? (
        <div
          className="absolute right-0 top-[120%] w-60 border rounded-md shadow bg-white"
          ref={menuItemRef}
        >
          {user ? (
            <>
              <div className="py-2">
                <MenuItem label="Messages" isBold onClick={() => {}} />
                <MenuItem label="Notifications" isBold onClick={() => {}} />
                <MenuItem label="Trips" isBold onClick={() => {}} />
                <MenuItem label="Wishlists" isBold onClick={() => {}} />
              </div>
              <hr />
              <div className="py-2">
                <MenuItem label="Airbnb your home" onClick={() => {}} />
                <MenuItem label="Account" onClick={() => {}} />
              </div>
              <hr />
              <div className="py-2">
                <MenuItem label="Help center" onClick={() => {}} />
                <MenuItem label="Log out" onClick={() => signOut()} />
              </div>
            </>
          ) : (
            <>
              <MenuItem label="Sign up" isBold onClick={registerModal.onOpen} />
              <MenuItem label="Log in" onClick={loginModal.onOpen} />
              <MenuItem label="Help center" onClick={() => {}} />
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}
