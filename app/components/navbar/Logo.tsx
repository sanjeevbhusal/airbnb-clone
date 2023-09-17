import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
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
    </Link>
  );
}
