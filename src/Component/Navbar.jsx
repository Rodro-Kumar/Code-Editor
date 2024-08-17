import React from "react";
import logo from "../assets/code.png";

const Navbar = () => {
  return (
    <>
      <div className="px-4 py-2 shadow-md bg-slate-700 shadow-slate-700 md:py-4 md:px-0">
        <div className="container flex items-center gap-x-1">
          <div className="relative z-10">
            <h1 className="text-lg font-bold text-white capitalize md:text-3xl font-Roboto -tracking-tighter">
              Code editor
            </h1>

            <h1 className="absolute top-[3px] left-0 md:text-3xl text-lg text-slate-500 -tracking-tighter -z-10  font-Roboto font-bold capitalize">
              Code editor
            </h1>
          </div>

          <div>
            <img src={logo} alt="" className="w-[40px] md:w-[50px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
