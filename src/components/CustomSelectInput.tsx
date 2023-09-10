import { CustomInputProps } from "@/types/CustomInputProps";
import React, { FC } from "react";

export const CustomSelectInput: FC<CustomInputProps> = ({
  label,
  type,
  placeholder,
  icon,
  options,
}) => {
  return (
    <div className="mb-[10px]">
      <label
        htmlFor={label}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label.toUpperCase()}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <select
          name={label}
          id={label}
          className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6 transition-all duration-2000"
        >
          {options &&
            options?.map((opt: string, index: number) => (
              <option key={index}>{opt.toUpperCase()}</option>
            ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center pl-3">
        </div>
      </div>
    </div>
  );
};
