import Link from "next/link";
import React from "react";

export default function AboutSection() {
  return (
    <>
      <div className="bg-slate-800">
        <div className="w-10/12 animation m-auto py-20">
          <h1 className="text-2xl font-bold py-5 border-b-2 text-white border-gray-700">
            About the application
          </h1>

          <div className="py-10 animation">
            <p className="text-xl font-bold text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              dicta eligendi nulla esse dolore aliquam aut officiis voluptatum
              sapiente ratione dolores laborum delectus hic laudantium, ex
              labore repellendus iste porro. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eius dicta eligendi nulla esse
              dolore aliquam aut officiis voluptatum sapiente ratione dolores
              laborum delectus hic laudantium, ex labore repellendus iste porro.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              dicta eligendi nulla esse dolore aliquam aut officiis voluptatum
              sapiente ratione dolores laborum delectus hic laudantium, ex
              labore repellendus iste porro. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eius dicta eligendi nulla esse
              dolore aliquam aut officiis voluptatum sapiente ratione dolores
              laborum delectus hic laudantium, ex labore repellendus iste porro.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              dicta eligendi nulla esse dolore aliquam aut officiis voluptatum
              sapiente ratione dolores laborum delectus hic laudantium, ex
              labore repellendus iste porro.
            </p>

            <div className="text-center animation py-10">
              <Link
                className="inline-block font-bold text-white hover:bg-slate-500 bg-slate-600 py-2 px-8 rounded-full"
                href={"/"}
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
