"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function SideBar() {
  const [mMunuShow, setMMunuShow] = useState(false)
  const [option, setOption] = useState([
    "Instalation",
    "Use-For",
    "Instalation",
    "Instalation",
    "Instalation",
    "Instalation",
    "Instalation",
    "Instalation",
    "Instalation",
    "Instalation",
    "Instalation",
  ]);

  
    // hundle onclick
    const menuToggle = () => {
      if (mMunuShow === false){
        setMMunuShow(true)
      }else{
        setMMunuShow(false)
      }
    }

  return (
    <>
          <div className="py-5">
        <button className="px-4 lg:hidden sm:block md:block rounded-md hover:bg-slate-900 hover:text-white font-bold" onClick={menuToggle}>Options</button>
      </div>

      {mMunuShow && <div className="w-3/12 h-screen bg-slate-100">
        <ul>
          {option.map((item) => (
            <Link
              className="rounded-md block text-xl shadow-lg hover:bg-slate-800 hover:text-white py-2 px-4 my-1"
              href={`/documandation/${item.toLowerCase()}`}
            >
              {item}
            </Link>
          ))}
        </ul>
      </div>}

      <div className="w-3/12 sm:hidden md:hidden lg:inline-block hidden h-screen bg-slate-100">
        <ul>
          {option.map((item) => (
            <Link
              className="rounded-md block text-xl shadow-lg hover:bg-slate-800 hover:text-white py-2 px-4 my-1"
              href={`/documandation/${item.toLowerCase()}`}
            >
              {item}
            </Link>
          ))}
        </ul>
      </div>

    </>
  );
}
