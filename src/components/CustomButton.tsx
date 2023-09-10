"use client";

import React, { FC } from "react";
import { useRouter } from "next/navigation";

type Props = {
  navigateTo: string;
  title: string;
};

export const CustomButton: FC<Props> = ({ title, navigateTo }) => {
  const router = useRouter();
  const handleOnClick = () => {
    console.log("sign in button clicked");
    // navigate to home page
    router.push("/");
  };

  return (
    <div>
      <button
        type="submit"
        className="flex w-full justify-center animate-pulse hover:animate-none rounded-md bg-slate-600 px-3 my-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-200 hover:text-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200 transition-all duration-500"
        onClick={handleOnClick}
      >
        {title}
      </button>
    </div>
  );
};
