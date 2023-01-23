import React from "react";
import Image from "next/image";
// import { tv } from "tailwind-variants";

interface ResponsiveExampleProps {}

const ResponsiveExample: React.FC<ResponsiveExampleProps> = () => {
  // const button = tv({
  //   base: "absolute font-medium rounded-full shadow-md bottom-0 right-0 m-4 px-4 py-2 active:opacity-80",
  //   variants: {
  //     color: {
  //       primary: "text-white bg-blue-500 hover:bg-blue-600",
  //       white: "text-gray-800 bg-white hover:bg-gray-100",
  //     },
  //   },
  // });

  return (
    <div className="relative max-w-xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden sm:flex sm:h-[240px]">
      <div className="md:flex">
        <div className="sm:flex-shrink-0 sm:h-full h-[480px]">
          <Image
            alt="Modern acme camera"
            className="sm:full sm:w-48 xs:w-full object-cover w-full h-full"
            height={400}
            src="/intro-responsive.jpeg"
            width={300}
          />
        </div>
        <div className="p-8 absolute xs:relative bottom-0 left-0 right-0 h-full">
          <div className="uppercase tracking-wide text-sm font-semibold sm:text-blue-500 sm:dark:text-blue-300 text-white/80">
            ACME Camera
          </div>
          <a
            className="block mt-1 text-lg leading-tight font-medium sm:text-black sm:dark:text-gray-300 text-slate-900"
            href="#"
          >
            Modern Camera
          </a>
          <p className="mt-2 text-md sm:text-gray-500 sm:dark:text-gray-400 text-white">
            Looking for a new camera? Look no further. This is the best camera
            on the market. It is in mint condition and comes with a 1 year
            warranty.
          </p>
        </div>
        <button
          // className={button({
          //   color: {
          //     initial: "white",
          //     md: "primary",
          //   },
          // })}
          className="absolute font-medium rounded-full shadow-md bottom-0 right-0 m-4 px-4 py-2 active:opacity-80 text-gray-800 bg-white hover:bg-gray-100 md:text-white md:bg-blue-500 md:hover:bg-blue-600"
        >
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ResponsiveExample;
