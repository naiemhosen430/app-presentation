import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <div className="w-10/12 m-auto">
        <h1 className="text-2xl border border-yellow-800 border-x-0 border-b-2 border-t-0 font-bold py-4  ">
          Our Communitry!
        </h1>

        <div className="py-10">
          <div className="flex items-start justify-start hover:bg-slate-400">
            <div className="w-4/12">
              <Image width={0} height={0} src={""} className="w-full" />
            </div>

            <div className="px-10 w-8/12 border rounded-md shadow-md">
              <h1 className="font-bold text-2xl py-4">YouTube</h1>
              <p className="text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Soluta, rerum exercitationem? Possimus ratione reiciendis ex
                natus provident laudantium eligendi. Laboriosam sit ut quam odio
                aspernatur incidunt pariatur dicta modi eveniet! Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Soluta, rerum
                exercitationem? Possimus ratione reiciendis ex natus provident
                laudantium eligendi. Laboriosam sit ut quam odio aspernatur
                incidunt pariatur dicta modi eveniet! Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Soluta, rerum exercitationem?
                Possimus ratione reiciendis ex natus provident laudantium
                eligendi. Laboriosam sit ut quam odio aspernatur incidunt
                pariatur dicta modi eveniet!
              </p>
              <div className="py-10 text-center">
                <Link
                  className="w-full py-2 px-4 block bg-slate-800 text-white hover:bg-slate-600"
                  href={""}
                >
                  Go to YouTube
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="lg:flex lg:items-start lg:justify-start hover:bg-slate-400">
            <div className="px-10 w-8/12 border rounded-md shadow-md">
              <h1 className="font-bold text-2xl py-4">Facebook</h1>
              <p className="text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Soluta, rerum exercitationem? Possimus ratione reiciendis ex
                natus provident laudantium eligendi. Laboriosam sit ut quam odio
                aspernatur incidunt pariatur dicta modi eveniet! Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Soluta, rerum
                exercitationem? Possimus ratione reiciendis ex natus provident
                laudantium eligendi. Laboriosam sit ut quam odio aspernatur
                incidunt pariatur dicta modi eveniet! Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Soluta, rerum exercitationem?
                Possimus ratione reiciendis ex natus provident laudantium
                eligendi. Laboriosam sit ut quam odio aspernatur incidunt
                pariatur dicta modi eveniet!
              </p>
              <div className="py-10 text-center">
                <Link
                  className="w-full py-2 px-4 block bg-slate-800 text-white hover:bg-slate-600"
                  href={""}
                >
                  Go to Facebook
                </Link>
              </div>
            </div>

            <div className="w-4/12">
              <Image width={0} height={0} src={""} className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
