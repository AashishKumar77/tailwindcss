import React from "react";

const ListMakers = () => {
  return (
    <>
      <div className="flex items-center justify-center pt-6 pb-6 ">
        <div className="bg-white-500 h-auto w-auto  rounded-xl ring-2 hover:ring-1 p-6">
          Ingredients
          <ul
            role="list"
            className="marker:text-sky-400 list-disc list-desc pl-5 space-y-3 text-slate-500"
          >
            <li>5 sups</li>
            <li>5 sups</li>
            <li>5 sups</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default ListMakers;
