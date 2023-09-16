import { BiMenu } from "react-icons/bi";
import Image from "next/image";

export function UserMenu() {
  return (
    <div className="flex-row gap-4 items-center hidden md:flex">
      <p className="font-bold text-sm">Airbnb your home</p>
      <div className="flex flex-row gap-3 p-2 border border-gray-200 rounded-full items-center">
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
    </div>
  );
}
