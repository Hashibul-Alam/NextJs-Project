import Buttons from "@/common/button";
import { LogoIcon, MenuIcon } from "./icon";

const HeaderMenu = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto">
          <div className="border border-white/15 size-10 inline-flex justify-center items-center rounded-lg">
            <LogoIcon className="size-8" />
          </div>

          <div className="hidden md:block">
            <nav className="flex gap-5 items-center text-sm">
              <a href="" className="text-white/70 hover:text-white transition ">
                Features
              </a>
              <a href="" className="text-white/70 hover:text-white transition ">
                Developers
              </a>
              <a href="" className="text-white/70 hover:text-white transition ">
                Company
              </a>
              <a href="" className="text-white/70 hover:text-white transition ">
                Blog
              </a>
              <a href="" className="text-white/70 hover:text-white transition ">
                Changelog
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Buttons>Join Waitlist</Buttons>
            <MenuIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMenu;
