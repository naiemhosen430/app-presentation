import React from "react";
import PersonBox from "./Components/PersonBox";

export default function page() {
  return (
    <>
      <div className="w-10/12 m-auto">
        <h1 className="text-3xl font-bold py-2 border border-slate-600  border-t-0 border-b-2 border-s-0 border-r-0 ">
          OUR DEVELOPER COMMUNITY
        </h1>

        <div className="text-center py-20 pt-10 space-x-8 space-y-8">
          <PersonBox />
          <PersonBox />
          <PersonBox />
          <PersonBox />
          <PersonBox />
          <PersonBox />
          <PersonBox />
          <PersonBox />
        </div>
      </div>
    </>
  );
}
