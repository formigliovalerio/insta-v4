import React from "react";
import Image from "next/image";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import Home from "@/pages";

export default function Header() {
  return (
    <>
      <div className="shadow-sm border-b sticky top-0 bg-white z-30">
        <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
          {/* Left */}

          <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid items-center">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCdR4OSPaCJUWNax8htTcthz_0tvjGlGLKOA&usqp=CAU"
              className="object-contain"
              width={1000}
              height={1000}
            />
          </div>

          <div className="cursor-pointer h-24 w-10 relative lg:hidden flex items-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
              className="object-contain"
              width={1000}
              height={1000}
            />
          </div>

          {/* Middle */}

          <div className="relative">
            <div className="absolute top-2 left-2 ">
              <SearchIcon className="h-5 text-gray-500" />
            </div>

            <input
              type="text"
              placeholder="Search"
              className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
            />
          </div>
          {/* Right */}

          <div className="flex space-x-4 items-center">
            <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
            <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
            <img
              src="https://media.licdn.com/dms/image/D4D03AQHVEtsCODP-QQ/profile-displayphoto-shrink_800_800/0/1673711126433?e=2147483647&v=beta&t=zvyJRW9Z7JLgdxY98qiv6CG8ozrROcBGjrJGvua26Hc"
              alt="user-image"
              className="h-10 rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}
