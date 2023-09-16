import { Logo } from "./Logo";
import { Search } from "./Search";
import { UserMenu } from "./UserMenu";

export function NavBar() {
  return (
    <nav className="flex flex-row justify-between items-center py-4 border border-b-[1] px-4 md:px-8 xl:px-16 ">
      <Logo />
      <Search />
      <UserMenu />
    </nav>
  );
}
