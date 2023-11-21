import Image from "next/image";
import React from "react";
import AboutSection from "../Components/AboutSection";

export default function page() {
  return (
    <>
      <div className="w-10/12 m-auto">
        <h1 className="text-4xl text-center font-bold p-20  ">
          Currently MY APP is using 10M people!
        </h1>

        <div className="lg:flex py-20">
          <div className="lg:w-5/12 md:w-10/12 sm:w-12/12">
            <Image width={0} height={0} src={""} className="w-full" />
          </div>
          <div className="lg:w-7/12 md:w-10/12 sm:w-12/12 w-12/12">
            <p className="px-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              nesciunt commodi delectus fuga corporis exercitationem eaque ipsum
              in. Rerum quae nostrum adipisci, earum nam enim deleniti nesciunt
              ipsa perferendis amet! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quas nesciunt commodi delectus fuga corporis
              exercitationem eaque ipsum in. Rerum quae nostrum adipisci, earum
              nam enim deleniti nesciunt ipsa perferendis amet! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quas nesciunt commodi
              delectus fuga corporis exercitationem eaque ipsum in. Rerum quae
              nostrum adipisci, earum nam enim deleniti nesciunt ipsa
              perferendis amet! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quas nesciunt commodi delectus fuga corporis
              exercitationem eaque ipsum in. Rerum quae nostrum adipisci, earum
              nam enim deleniti nesciunt ipsa perferendis amet! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quas nesciunt commodi
              delectus fuga corporis exercitationem eaque ipsum in. Rerum quae
              nostrum adipisci, earum nam enim deleniti nesciunt ipsa
              perferendis amet! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quas nesciunt commodi delectus fuga corporis
              exercitationem eaque ipsum in. Rerum quae nostrum adipisci, earum
              nam enim deleniti nesciunt ipsa perferendis amet! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quas nesciunt commodi
              delectus fuga corporis exercitationem eaque ipsum in. Rerum quae
              nostrum adipisci, earum nam enim deleniti nesciunt ipsa
              perferendis amet!
            </p>
          </div>
        </div>
      </div>
      <AboutSection />
    </>
  );
}
