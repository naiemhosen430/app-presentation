import Link from "next/link";
import React from "react";

export default function VersionSection() {
  return (
    <>
      <div className="w-10/12 m-auto py-10">
        <h1 className="text-2xl font-bold py-5 border-b-2 border-gray-700">
          Version
        </h1>

        <div className="bg-slate-100 rounded-md p-4 px-0 shadow-md">
          <div className="border border-slate-600">
            <h1 className="text-xl text-center font-bold p-4">Version 0.1</h1>

            <div>
              <div className="flex text-center justify-center rounded-md">
                <h1 className="font-bold p-2 bg-slate-500 w-6/12">Platform</h1>
                <h1 className="font-bold p-2 bg-slate-500 w-3/12">Relese</h1>
                <h1 className="font-bold p-2 bg-slate-500 w-3/12">Action</h1>
              </div>

              <div className="flex text-center justify-center rounded-md">
                <h1 className="font-bold p-2 w-6/12">Android</h1>
                <h1 className="font-bold p-2 w-3/12">2022 dec 01</h1>
                <Link
                  className="font-bold p-2 hover:bg-slate-500 w-3/12 block"
                  href={"/"}
                >
                  Sownload
                </Link>
              </div>
              <div className="flex text-center justify-center rounded-md">
                <h1 className="font-bold p-2 w-6/12">IOS</h1>
                <h1 className="font-bold p-2 w-3/12">2022 dec 01</h1>
                <Link
                  className="font-bold p-2 hover:bg-slate-500 w-3/12 block"
                  href={"/"}
                >
                  Sownload
                </Link>
              </div>
              <div className="flex text-center justify-center rounded-md">
                <h1 className="font-bold p-2 w-6/12">Linux</h1>
                <h1 className="font-bold p-2 w-3/12">2022 dec 01</h1>
                <Link
                  className="font-bold p-2 hover:bg-slate-500 w-3/12 block"
                  href={"/"}
                >
                  Sownload
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 rounded-md p-4 px-0 shadow-md">
          <div className="border border-slate-600">
            <h1 className="text-xl text-center font-bold p-4">Version 0.2</h1>

            <div>
              <div className="flex text-center justify-center rounded-md">
                <h1 className="font-bold p-2 bg-slate-500 w-6/12">Platform</h1>
                <h1 className="font-bold p-2 bg-slate-500 w-3/12">Relese</h1>
                <h1 className="font-bold p-2 bg-slate-500 w-3/12">Action</h1>
              </div>

              <div className="flex text-center justify-center rounded-md">
                <h1 className="font-bold p-2 w-6/12">Android</h1>
                <h1 className="font-bold p-2 w-3/12">2022 dec 01</h1>
                <Link
                  className="font-bold p-2 hover:bg-slate-500 w-3/12 block"
                  href={"/"}
                >
                  Sownload
                </Link>
              </div>
              <div className="flex text-center justify-center rounded-md">
                <h1 className="font-bold p-2 w-6/12">IOS</h1>
                <h1 className="font-bold p-2 w-3/12">2022 dec 01</h1>
                <Link
                  className="font-bold p-2 hover:bg-slate-500 w-3/12 block"
                  href={"/"}
                >
                  Sownload
                </Link>
              </div>
              <div className="flex text-center justify-center rounded-md">
                <h1 className="font-bold p-2 w-6/12">Linux</h1>
                <h1 className="font-bold p-2 w-3/12">2022 dec 01</h1>
                <Link
                  className="font-bold p-2 hover:bg-slate-500 w-3/12 block"
                  href={"/"}
                >
                  Sownload
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 rounded-md p-4 px-0 shadow-md">
          <div className="border border-slate-600">
            <h1 className="text-xl text-center font-bold p-4">Version 0.3</h1>

            <div>
              <div className="flex text-center justify-center rounded-md">
                <h1 className="font-bold p-2 bg-slate-500 w-6/12">Platform</h1>
                <h1 className="font-bold p-2 bg-slate-500 w-3/12">Relese</h1>
                <h1 className="font-bold p-2 bg-slate-500 w-3/12">Action</h1>
              </div>

              <div className="flex text-center justify-center rounded-md">
                <h1 className="font-bold p-2 w-6/12">Android</h1>
                <h1 className="font-bold p-2 w-3/12">2022 dec 01</h1>
                <Link
                  className="font-bold p-2 hover:bg-slate-500 w-3/12 block"
                  href={"/"}
                >
                  Sownload
                </Link>
              </div>
              <div className="flex text-center justify-center rounded-md">
                <h1 className="font-bold p-2 w-6/12">IOS</h1>
                <h1 className="font-bold p-2 w-3/12">2022 dec 01</h1>
                <Link
                  className="font-bold p-2 hover:bg-slate-500 w-3/12 block"
                  href={"/"}
                >
                  Sownload
                </Link>
              </div>
              <div className="flex text-center justify-center rounded-md">
                <h1 className="font-bold p-2 w-6/12">Linux</h1>
                <h1 className="font-bold p-2 w-3/12">2022 dec 01</h1>
                <Link
                  className="font-bold p-2 hover:bg-slate-500 w-3/12 block"
                  href={"/"}
                >
                  Sownload
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
