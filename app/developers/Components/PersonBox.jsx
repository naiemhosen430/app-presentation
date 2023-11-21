import Image from "next/image";
import React from "react";

export default function PersonBox() {
  return (
    <>
      <div className="p-4 lg:w-3/12 w-12/12 md:w-10/12 sm:w-12/12 inline-block rounded-md shadow-md hover:bg-slate-400">
        <Image width={0} height={0} className="h-40 w-full" src={""} />
        <h1 className="text-2xl font-bold py-2">MD Naiem Hosen</h1>
        <h1 className="text-xl font-bold text-slate-800 py-2">
          Position: Softwer Engineer
        </h1>
        <p className="text-sm text-slate-900 py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          ullam praesentium ab magnam odit aliquam omnis iure, ducimus totam
          expedita error iusto officiis asperiores! Dicta impedit vitae a quam
          praesentium!
        </p>
      </div>
    </>
  );
}
