import React from "react";

const Column = () => {
  return (
    <>
      <div className="container">
        <div className=" items-center justify-center flex gap-8 columns-3 md:columns-3 sm:columns-3 lg:columns-3   px-10 pt-10 pb-6">
          <img
            className="sm:h-10 sm:w-10 md:h-10 md:w-10 lg:h-10 lg:w-10"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Modern building architecture"
          />{" "}
          <img
            className="sm:h-10 sm:w-10 md:h-10 md:w-10 lg:h-10 lg:w-10"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Modern building architecture"
          />
          <img
            className="sm:h-10 sm:w-10 md:h-10 md:w-10 lg:h-10 lg:w-10"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Modern building architecture"
          />
        </div>
      </div>
    </>
  );
};

export default Column;
