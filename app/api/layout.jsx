'use client'
import { useState } from "react";
import SideBar from "./Components/SideBar";


export default function layout({ children }) {


  return (
    <>
      <div className="lg:flex lg:items-start lg:justify-start">
          <SideBar />
        {children}
      </div>
    </>
  );
}
