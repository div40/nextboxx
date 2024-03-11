import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import Image from "next/image";

const Header = () => {
  return (
    <div className=" border-b py-4 bg-neutral-400/10 fixed top-0 left-0 w-full backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" flex items-center gap-2">
          <Image
            src={"/assets/logos/box.svg"}
            alt="logo"
            width={37}
            height={37}
          />
          <span className="text-neutral-900 font-bold text-3xl">NextBox</span>
        </div>
        <div className="flex gap-4 text-white">
          <OrganizationSwitcher />
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
