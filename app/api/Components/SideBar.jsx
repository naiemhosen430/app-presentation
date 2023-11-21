"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function SideBar() {
  const [mMunuShow, setMMunuShow] = useState(false)

  const [option, setOption] = useState([
    "What is api?",
    "Our api",
    "Api-Processing",
    ["Premium", "Api-One", "Api-Two", "Api-Three", "Api-Fire"],
    ["Free", "Api-One", "Api-Two", "Api-Three", "Api-Fire"],
    "Installation",
    "Installation",
    "Installation",
    "Installation",
    "Installation",
    "Installation",
  ]);

  const [boxStates, setBoxStates] = useState(
    new Array(option.length).fill(false)
  );

  const showBox = (index) => {
    const updatedBoxStates = [...boxStates];
    updatedBoxStates[index] = !updatedBoxStates[index];
    setBoxStates(updatedBoxStates);
  };



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

      {/* // mobile mode */}
      {mMunuShow && (<div className="w-full lg:h-screen overflow-y-auto">
        <ul>
          {option.map((item, index) => (
            <div key={index}>
              {Array.isArray(item) ? (
                <div className="w-12/12">
                  <button
                    onClick={() => showBox(index)}
                    className="rounded-md w-full text-left text-xl shadow-lg hover:bg-slate-800 hover:text-white py-2 px-4 my-1"
                  >
                    {item[0]}
                  </button>

                  {boxStates[index] && (
                    <div className="ps-10">
                      {item.slice(1).map((i, subIndex) => (
                        <Link
                          key={subIndex}
                          className="rounded-md block text-xl shadow-lg hover:bg-slate-800 hover:text-white py-2 px-4 my-1"
                          href={`/api/${i.toLowerCase()}`}
                        >
                          {i}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  className="rounded-md block text-xl shadow-lg hover:bg-slate-800 hover:text-white py-2 px-4 my-1"
                  href={`/api/${item.toLowerCase()}`}
                >
                  {item}
                </Link>
              )}
            </div>
          ))}
        </ul>
      </div>)}

      {/* // dexstop mode */}
      <div className="lg:inline-block md:hidden sm:hidden hidden lg:w-3/12 h-screen overflow-y-auto">
        <ul>
          {option.map((item, index) => (
            <div key={index}>
              {Array.isArray(item) ? (
                <div className="w-12/12">
                  <button
                    onClick={() => showBox(index)}
                    className="rounded-md w-full text-left text-xl shadow-lg hover:bg-slate-800 hover:text-white py-2 px-4 my-1"
                  >
                    {item[0]}
                  </button>

                  {boxStates[index] && (
                    <div className="ps-10">
                      {item.slice(1).map((i, subIndex) => (
                        <Link
                          key={subIndex}
                          className="rounded-md block text-xl shadow-lg hover:bg-slate-800 hover:text-white py-2 px-4 my-1"
                          href={`/api/${i.toLowerCase()}`}
                        >
                          {i}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  className="rounded-md block text-xl shadow-lg hover:bg-slate-800 hover:text-white py-2 px-4 my-1"
                  href={`/api/${item.toLowerCase()}`}
                >
                  {item}
                </Link>
              )}
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
