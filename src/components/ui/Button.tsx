import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  className?: string;
}

const getVariantClasses = (variant: string, inner: boolean = false) => {
  switch (variant) {
    case "primary":
      return inner
        ? "bg-blue-600"
        : "bg-blue-400 border-blue-600 hover:border-blue-300";
    case "secondary":
      return inner
        ? "bg-slate-800"
        : "bg-slate-600 border-slate-800 hover:border-slate-400";

    case "ghost":
      return inner ? "bg-transparent": "bg-transparent border-transparent hover:bg-zinc-900"
  }
};

const variants = {
  primary: "bg-blue-400 border-blue-600 hover:border-blue-300",
};

const Button: React.FC<ButtonProps> = ({ children, className,variant = "primary" }) => {
  return (
    <button
      className={twMerge(twMerge(
        " font-martian group font-light text-sm   relative text-white h-[40px] px-4 hover:brightness-110  border-2  cursor-pointer transition-all  items-center justify-center rounded-none overflow-hidden flex duration-100  active:brightness-130",
        getVariantClasses(variant)
      ), className)}
    >
      <div className="z-40 flex gap-2 items-center w-full justify-between">{children}</div>
      {/* <div className="size-full absolute left-0 top-0 backdrop-blur-[40px] z-20" ></div> */}
      <div
        className={twMerge(
          "absolute z-0 left-0 translate-x-[-5px] translate-y-[-5px] top-0 size-[100%] transition-all  rounded-none blur-lg",
          getVariantClasses(variant, true)
        )}
      ></div>
    </button>
  );
};

export default Button;
