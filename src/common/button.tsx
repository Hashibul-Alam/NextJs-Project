import React, { PropsWithChildren } from "react";

const Buttons = (props:PropsWithChildren) => {
  return (
    <div>
      <button className="text-white relative px-4 py-1.5 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
        <div className="absolute inset-0">
          {" "}
          <div className="border border-white/20 absolute inset-0 rounded-lg [mask-image:linear-gradient(to_bottom, black,transparent)]"></div>
          <div className="absolute inset-0 rounded-lg border border-white/40 [mask-image:linear-gradient(to_top, black,transparent)]"></div>
          <div className="absolute inset-0 shadow-[0px_0px_10px_rgb(140,69,255)_inset] rounded-lg"></div>
        </div>
        <span>{props.children}</span>
      </button>
    </div>
  );
};

export default Buttons;
