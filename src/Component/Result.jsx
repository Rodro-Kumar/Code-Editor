import React from "react";

const Result = ({ srccode }) => {
  return (
    <>
      <div className="pt-5 px-4 md:px-0">
        <div className="container">
          <div className="bg-black p-2 rounded-t-xl">
            <h5 className="md:text-2xl text-lg font-Roboto font-bold text-green-600 capitalize mb-2">
              output
            </h5>
          </div>

          <iframe
            className="w-full h-80 rounded-b-xl bg-white"
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

export default Result;
