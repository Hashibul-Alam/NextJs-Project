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
                    <a href="" className="text-white/70 hover:text-white transition " >Features</a>
                    <a href="" className="text-white/70 hover:text-white transition " >Developers</a>
                    <a href="" className="text-white/70 hover:text-white transition " >Company</a>
                    <a href="" className="text-white/70 hover:text-white transition " >Blog</a>
                    <a href="" className="text-white/70 hover:text-white transition " >Changelog</a>
                </nav>
            </div>

          <div className="flex items-center gap-4">
            <button className="text-white relative px-4 py-1.5 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
              <div className="absolute inset-0">
                {" "}
                <div className="border border-white/20 absolute inset-0 rounded-lg [mask-image:linear-gradient(to_bottom, black,transparent)]"></div>
                <div className="absolute inset-0 rounded-lg border border-white/40 [mask-image:linear-gradient(to_top, black,transparent)]"></div>
                <div className="absolute inset-0 shadow-[0px_0px_10px_rgb(140,69,255)_inset] rounded-lg"></div>
              </div>
              <span>Join Waitlist</span>
            </button>
            <MenuIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMenu;
