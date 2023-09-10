import { CustomButton } from "@/components/CustomButton";
import { CustomInput } from "@/components/CustomInput";
import React from "react";
import Link from "next/link";

export default () => {
  return (
    <div className="mx-auto mt-10 border-2 border-gray-100 w-1/3 flex flex-col justify-center px-6 py-8 lg:px-8 shadow-xl">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-600">
          Sign in to your account
        </h2>
      </div>

      <CustomInput
        placeholder="you@example.com"
        icon="mail"
        label="email"
        type="email"
      />

      <CustomInput
        placeholder=""
        icon="visibility_off"
        label="password"
        type="password"
      />
      <div className="w-full my-2 py-1 flex justify-between items-center">
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="remember-me"
              aria-describedby="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-600"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="remember-me" className="font-medium text-gray-600">
              Remember me
            </label>
          </div>
        </div>
        <div>
          <p className="text-gray-600 text-sm underline underline-offset-2 hover:cursor-pointer">
            Forgot Password
          </p>
        </div>
      </div>
      <CustomButton title="Sign In" navigateTo={"/"} />
      <div className="w-full my-2 py-1 flex justify-between items-center">
        <div className="relative flex items-start">
          <p className="font-medium text-gray-600">
            Don't have an account?
            <span className="ml-1">
              <Link
                className="text-orange-400 text-sm underline underline-offset-2 hover:cursor-pointer"
                href={"/register"}
              >
                Click here
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
