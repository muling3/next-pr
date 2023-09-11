import { CustomButton } from "@/components/CustomButton";
import { CustomInput } from "@/components/CustomInput";
import React from "react";
import Link from "next/link";
import { CustomSelectInput } from "@/components/CustomSelectInput";

const Register = () => {
  return (
    <div className="mx-10 sm:mx-auto mt-10 border-2 border-gray-100 w-full sm:w-2/3 md:1/2 px-6 py-6 lg:px-8 shadow-xl flex flex-col justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-600">
          Create an account
        </h2>
      </div>

      <div className="flex flex-col justify-center">
        <div className="grid grid-cols-2 gap-2 justify-center ">
          <CustomInput
            placeholder="Your firstname"
            icon="person"
            label="firstname"
            type="text"
          />

          <CustomInput
            placeholder="Your middlename"
            icon="person"
            label="middlename"
            type="text"
          />
        </div>

        <div className="grid grid-cols-2 gap-2 justify-center ">
          <CustomInput
            placeholder="Your lastname"
            icon="person"
            label="lastname"
            type="text"
          />

          <CustomInput
            placeholder="Your username"
            icon="person"
            label="username"
            type="text"
          />
        </div>

        <div className="grid grid-cols-2 gap-2 justify-center ">
          <CustomInput
            placeholder="you@example.com"
            icon="mail"
            label="mail"
            type="mail"
          />

          <CustomInput
            placeholder="Your phonenumber"
            icon="phone_enabled"
            label="phonenumber"
            type="number"
          />
        </div>

        <div className="grid grid-cols-2 gap-2 justify-center">
          <CustomInput
            placeholder=""
            icon="visibility_off"
            label="password"
            type="password"
          />

          <CustomInput
            placeholder=""
            icon="visibility_off"
            label="confirm password"
            type="password"
          />
        </div>

        <div className="grid grid-cols-2 gap-2 justify-center">
          <CustomSelectInput
            icon="agender"
            label="gender"
            options={["male", "female"]}
          />
        </div>
      </div>

      <CustomButton title="Sign Up" navigateTo={"/login"} />

      <div className="w-full my-2 py-1 flex justify-between items-center">
        <div className="relative flex items-start">
          <p className="font-medium text-gray-600">
            Already have an account?
            <span className="ml-1">
              <Link
                className="text-orange-400 text-sm underline underline-offset-2 hover:cursor-pointer"
                href={"/login"}
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

export default Register;
