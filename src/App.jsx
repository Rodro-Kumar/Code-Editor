import Navbar from "./Component/Navbar";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { useCallback } from "react";

function App() {
  return (
    <>
      <div>
        {/* Navbar */}
        <Navbar />

        {/*//* HTML & CSS & JAVASCRIPT */}
        <div className="container pt-10 flex items-center justify-between">
          {/* HTML */}
          <div className="w-[30%]">
            <h4 className="text-red-500 bg-black mb-1 font-Roboto font-bold text-2xl">
              Html
            </h4>
            <textarea
              name="html"
              id="html"
              className="w-full bg-slate-600 border-2 border-white rounded-lg h-[500px] py-4 px-3 text-white font-Roboto font-medium text-md"
            ></textarea>
          </div>
          <div className="w-[30%]">
            <h4 className="text-sky-400 bg-black mb-1 font-Roboto font-bold text-2xl">
              Css
            </h4>
            <textarea
              name="html"
              id="html"
              className="w-full bg-slate-600 border-2 border-white rounded-lg h-[500px] py-4 px-3 text-white font-Roboto font-medium text-md"
            ></textarea>
          </div>
          <div className="w-[30%]">
            <h4 className="text-yellow-400 bg-black mb-1 font-Roboto font-bold text-2xl">
              Javascript
            </h4>
            <textarea
              name="html"
              id="html"
              className="w-full bg-slate-600 border-2 border-white rounded-lg h-[500px] py-4 px-3 text-white font-Roboto font-medium text-md"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
