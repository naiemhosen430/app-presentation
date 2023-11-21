import Link from "next/link";
import React from "react";

export default function FeatureSection() {
  return (
    <>
      <div className="w-10/12 m-auto py-20">
        <h1 className="text-2xl font-bold animation py-5 border-b-2 border-gray-700">
          OUR FEATURES
        </h1>

        <div className="py-20 animation">
          <div className="lg:flex items-start space-x-4 py-5">
            <div className="w-4/12 px-10">
              <img
                className="w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS9JxUmW6KAQDC9ckHbkJN8lXITGvCmtuobQ&usqp=CAU"
                alt="no image"
              />
            </div>
            <div className="w-8/12">
              <p className="text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
                quaerat, provident quo a eligendi repellat, velit eius aut vitae
                nobis blanditiis repudiandae molestiae incidunt ad vero quas
                voluptatem fuga? Adipisci? Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Neque quaerat, provident quo a
                eligendi repellat, velit eius aut vitae nobis blanditiis
                repudiandae molestiae incidunt ad vero quas voluptatem fuga?
                Adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Neque quaerat, provident quo a eligendi repellat, velit
                eius aut vitae nobis blanditiis repudiandae molestiae incidunt
                ad vero quas voluptatem fuga? Adipisci?
              </p>
            </div>
          </div>
          <div className="lg:flex items-start space-x-4 py-5">
            <div className="w-4/12 px-10">
              <img
                className="w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS9JxUmW6KAQDC9ckHbkJN8lXITGvCmtuobQ&usqp=CAU"
                alt="no image"
              />
            </div>
            <div className="w-8/12">
              <p className="text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
                quaerat, provident quo a eligendi repellat, velit eius aut vitae
                nobis blanditiis repudiandae molestiae incidunt ad vero quas
                voluptatem fuga? Adipisci? Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Neque quaerat, provident quo a
                eligendi repellat, velit eius aut vitae nobis blanditiis
                repudiandae molestiae incidunt ad vero quas voluptatem fuga?
                Adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Neque quaerat, provident quo a eligendi repellat, velit
                eius aut vitae nobis blanditiis repudiandae molestiae incidunt
                ad vero quas voluptatem fuga? Adipisci?
              </p>
            </div>
          </div>
          <div className="lg:flex items-start space-x-4 py-5">
            <div className="w-4/12 px-10">
              <img
                className="w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS9JxUmW6KAQDC9ckHbkJN8lXITGvCmtuobQ&usqp=CAU"
                alt="no image"
              />
            </div>
            <div className="w-8/12">
              <p className="text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
                quaerat, provident quo a eligendi repellat, velit eius aut vitae
                nobis blanditiis repudiandae molestiae incidunt ad vero quas
                voluptatem fuga? Adipisci? Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Neque quaerat, provident quo a
                eligendi repellat, velit eius aut vitae nobis blanditiis
                repudiandae molestiae incidunt ad vero quas voluptatem fuga?
                Adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Neque quaerat, provident quo a eligendi repellat, velit
                eius aut vitae nobis blanditiis repudiandae molestiae incidunt
                ad vero quas voluptatem fuga? Adipisci?
              </p>
            </div>
          </div>



        </div>

        <div className="text-center animation">
          <Link
            className="inline-block font-bold text-white hover:bg-slate-500 bg-slate-800 py-4 px-8 rounded-full"
            href={"/"}
          >
            Download now
          </Link>
        </div>
      </div>
    </>
  );
}
