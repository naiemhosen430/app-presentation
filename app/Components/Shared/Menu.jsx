"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Menu() {
  const [menuBox, setMenuBox] = useState(false)
  const [menuItem, setMunuItem] = useState([
    "Owner-Panel",
    "Documandation",
    "Api",
    "Version",
    "Developers",
    "Users",
    "Community",
  ]);

  // hundle onclick
  const menuToggle = () => {
    if (menuBox === true) {
      setMenuBox(false)
    }else{
      setMenuBox(true)
    }
  }
  return (
    <>
      <div className="flex sticky z-10 top-0 bg-white items-center shadow-md justify-center py-2 px-4">
        <div className="lg:w-1/12  md:w-5/12 sm:w-5/12 w-5/12">
          <h1 className="text-xl font-bold">MY APP</h1>
        </div>

        <div className="lg:w-9/12 hidden lg:inline-block">
          <ul className="flex items-center space-x-2 justify-center">
            {menuItem.map((item) => (
              <Link
                className="inline-block py-1 px-2 hover:text-slate-600"
                href={`/${item.toLowerCase()}`}
              >
                {item}
              </Link>
            ))}
          </ul>
        </div>

        <div className="lg:w-2/12  md:w-4/12 sm:w-4/12 w-4/12 text-center">
          <Link
            href={"/"}
            className="bg-slate-500 block text-white font-bold py-1 px-4 rounded-full hover:bg-slate-800"
          >
            Download
          </Link>
        </div>

        <div className="lg:hidden inline-block md:inline-block text-center sm:w-3/12 md:w-3/12 w-3/12 sm:inline-block">
          <button onClick={menuToggle} className="rounded-md bg-slate-900 text-white font-bold py-2 px-4 inline-block">Menu</button>
        </div>

      </div>
      {menuBox && (        <div className="w-screen h-screen right-0 top-0 p-5 bg-slate-900">
          <ul className="space-y-4">
            {menuItem.map((item) => (
              <Link
                className="block py-1 px-2 text-white font-bold hover:text-slate-600"
                href={`/${item.toLowerCase()}`}
              >
                {item}
              </Link>
            ))}
          </ul>
          <div className="text-center text-white py-20">
            Here will be Social media icons
          </div>
        </div>)}

    </>
  );
}
