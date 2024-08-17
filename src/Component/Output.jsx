import React from "react";

const Output = ({ srccode }) => {
  return (
    <>
      <div className="px-4 pt-5 md:px-0">
        <div className="container">
          <div className="p-2 bg-black rounded-t-xl">
            <h5 className="mb-2 text-lg font-bold text-green-600 capitalize md:text-2xl font-Roboto">
              output
            </h5>
          </div>

          <iframe
            className="w-full bg-white h-80 rounded-b-xl"
            srcDoc={srccode}
            title="output"
            sandbox="allow-scripts"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Output;
