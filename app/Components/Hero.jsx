import React from "react";
import BookSwiper from "./Swiper/BookSwiper";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="bg-slate-500 animation lg:flex sm:block md:block lg:items-start h-screen">
        <div className="lg:w-6/12 sm:w-12/12 md:w-12/12 p-20">
          <BookSwiper />
        </div>
        <div className="lg:w-6/12 sm:w-12/12 bg-white md:w-12/12 animation px-5 py-20">
          <h1 className="text-4xl font-bold p-2">
            Here's will be your application name.
          </h1>
          <h1 className="text-lg font-bold p-2">Rating: 4.5 stars</h1>
          <p className="text-lg font-bold p-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            cum, cupiditate id, optio quibusdam, necessitatibus nesciunt atque
            commodi blanditiis dolores debitis in. Placeat inventore itaque
            repellendus fugit incidunt eaque possimus?
          </p>
          <div className="flex lg:text-lg md:text-sm sm:text-sm space-x-5 items-center pt-10 justify-start">
            <Link
              className="bg-slate-400 py-3 px-4 block lg:w-4/12 md-5/12 sm:5/12 hover:bg-slate-600 text-center rounded-full text-white"
              href={"/"}
            >
              Get Start
            </Link>
            <Link
              className="bg-slate-800 py-3 px-4 block lg:w-4/12 md-5/12 sm:5/12 hover:bg-slate-600 text-center rounded-full text-white"
              href={"/"}
            >
              Download now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
