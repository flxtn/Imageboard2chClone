import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

export type UiButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;

export function UiButton({ ...props }: UiButtonProps) {
  return (
    <button
      {...props}
      className="border bg-gray-300 cursor-pointer flex px-2 h-6 items-center justify-center hover:bg-gray-400"
    />
  );
}
