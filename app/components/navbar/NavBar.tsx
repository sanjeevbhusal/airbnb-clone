import { User } from "@prisma/client";
import { Logo } from "./Logo";
import { Search } from "./Search";
import { UserMenu } from "./UserMenu";
import { Categories } from "./Categories";

interface NavbarProps {
  user: User | null;
}

export function NavBar({ user }: NavbarProps) {
  return (
    <nav>
      <div className="flex flex-row justify-between items-center py-4 border border-b-[1] px-4 md:px-8 xl:px-16 gap-4 ">
        <Logo />
        <Search />
        <UserMenu user={user} />
      </div>
      <Categories />
    </nav>
  );
}
