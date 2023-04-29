"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

const Header = () => {
  const items = useSelector(selectItems);

  return (
    <div className="bg-black flex items-center justify-between py-4">
      {/* Left */}
      <div>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6nPrISNoR9LoprNPW6Rnm6tDAI8YCxX9jtD6iFBp6y7fCZ1018PDwJGAPEmqaWOIzS0U&usqp=CAU"
          alt="logo"
          width={100}
          height={100}
          className="hidden lg:inline-flex shrink-0"
        />

        {/* Menu Icon */}
        <div className="lg:hidden text-white ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>

      {/* Middle */}
      <div className="lg:flex flex-1 mx-20 bg-yellow-300 items-center  h-10 outline-orange-700  hidden">
        <input
          type="text"
          placeholder="Search your favorite"
          className="flex-grow items-center h-full rounded-l-md pl-4"
        />
        <div className="w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>

      {/* Right */}
      <div className="flex text-white lg:space-x-8 space-x-4">
        <div>
          <h1 className="text-xs font-bold">Hello, Rohit Patel</h1>
          <h2 className="font-medium">Account & Lists</h2>
        </div>
        <div>
          <h1 className="text-xs font-bold">Return</h1>
          <h2 className="font-medium">& Orders</h2>
        </div>
        <div className="flex items-center space-x-2 pr-4">
          <Link href="/checkout">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </Link>
          <div>{items.length}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
