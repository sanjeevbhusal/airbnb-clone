import Image from "next/image";
import { Search } from "./Search";
import { UserMenu } from "./UserMenu";

export function NavBar() {
  return (
    <nav className="flex flex-row justify-between items-center py-4 border border-b-[1] px-4 md:px-8 xl:px-16 ">
      <Image
        alt="logo"
        height="100"
        width="120"
        src="/images/logo.png"
        className="hidden lg:block"
      />
      <Image
        alt="logo"
        height="100"
        width="25"
        src="/images/logo-small.png"
        className="hidden md:block lg:hidden"
      />
      <Search />
      <UserMenu />
    </nav>
  );
}
