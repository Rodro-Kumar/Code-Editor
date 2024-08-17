import Navbar from "./Component/Navbar";
import Result from "./Component/result";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import CodeMirror from "@uiw/react-codemirror";
import { useCallback, useState } from "react";
import htmllogo from "../src/assets/html.png";
import csslogo from "../src/assets/css.png";
import jslogo from "../src/assets/js.png";
function App() {
  //* create three usestate
  const [html_edit, setHtml_Edit] = useState("");
  const [css_edit, setCss_Edit] = useState("");
  const [js_edit, setJs_Edit] = useState("");

  const onChangeHtml = useCallback((value) => {
    setHtml_Edit(value);
  }, []);
  const onChangeCss = useCallback((value) => {
    setCss_Edit(value);
  }, []);
  const onChangeJs = useCallback((value) => {
    setJs_Edit(value);
  }, []);

  const srcCode = `
  <html>
   <body>${html_edit}</body>
      <style>${css_edit}</style>
      <script>${js_edit}</script>
  </html>
  `;
  return (
    <>
      <div>
        {/* Navbar */}
        <Navbar />

        {/*//* Editor */}
        <div className="container flex flex-col items-center justify-between px-4 pt-10 gap-y-4 md:flex-row xl:px-0 ">
          {/* HTML */}
          <div className="w-full md:w-[32%]">
            <div className="p-2 bg-black rounded-t-xl">
              <h4 className="flex items-center text-lg font-bold text-red-500 font-Roboto md:text-2xl gap-x-2">
                Html
                <img src={htmllogo} alt="" className="w-[30px]" />
              </h4>
            </div>

            <CodeMirror
              className="border border-gray-700 md:text-xl text-md"
              value={html_edit}
              height="342px"
              theme="dark"
              extensions={[html(true)]}
              onChange={onChangeHtml}
            />
          </div>
          {/* CSS */}
          <div className="w-full md:w-[32%]">
            <div className="p-2 bg-black rounded-t-xl">
              <h4 className="flex items-center text-lg font-bold text-sky-400 font-Roboto md:text-2xl gap-x-2">
                Css
                <img src={csslogo} alt="" className="w-[30px]" />
              </h4>
            </div>

            <CodeMirror
              className="border border-gray-700 md:text-xl text-md "
              value={css_edit}
              height="342px"
              theme="dark"
              extensions={[css(true)]}
              onChange={onChangeCss}
            />
          </div>
          {/* JAVASCRIPT */}
          <div className="w-full md:w-[32%]">
            <div className="p-2 bg-black rounded-t-xl">
              <h4 className="flex items-center text-lg font-bold text-yellow-400 font-Roboto md:text-2xl gap-x-2">
                Javascript
                <img src={jslogo} alt="" className="w-[30px]" />
              </h4>
            </div>

            <CodeMirror
              className="border border-gray-700 md:text-xl text-md"
              value={js_edit}
              height="342px"
              theme="dark"
              extensions={[javascript(true)]}
              onChange={onChangeJs}
            />
          </div>
        </div>
        {/* RESULT */}
        <Result srccode={srcCode} />
      </div>
    </>
  );
}

export default App;
