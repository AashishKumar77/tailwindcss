import React from "react";

const Button = () => {
  return (
    <>
      <div className="flex items-center justify-center space-x-4 px-6 py-6 mt-auto">
        <button className=" bg-red-500 mt-10 text-white hover:text-black rounded-xl ring-1 hover:ring-2 w-20 px-3">
          Hi{" "}
        </button>
        <button className="bg-red-500 mt-10 text-white hover:text-black rounded-xl ring-1 hover:ring-2 w-20 px-3">
          Hi{" "}
        </button>
        <button className="bg-red-500 mt-10 text-white hover:text-black rounded-xl ring-1 hover:ring-2 w-20 px-3">
          Hi{" "}
        </button>
        <p className="text-slate-20 mt-10">Hello</p>
      </div>
    </>
  );
};

export default Button;
