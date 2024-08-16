import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-slate-700 shadow-md shadow-slate-700 py-4">
        <div className="container">
          <div className="relative z-10">
            <h1 className="text-3xl text-white font-Roboto font-bold -tracking-tighter capitalize">
              Code editor
            </h1>

            <h1 className="absolute top-[3px] left-0 text-3xl text-slate-500 -tracking-tighter -z-10  font-Roboto font-bold capitalize">
              Code editor
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
