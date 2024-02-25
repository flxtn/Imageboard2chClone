import clsx from "clsx";
import { TextareaHTMLAttributes, PropsWithRef, useId } from "react";

export type UiTextFieldProps = {
  inputProps?: PropsWithRef<TextareaHTMLAttributes<HTMLTextAreaElement>>;
};

export function UiTextField({ inputProps }: UiTextFieldProps) {
  const id = useId();

  return (
    <textarea
      id={id}
      {...inputProps}
      className={clsx(
        inputProps?.className,
        "border bg-slate-100 border-slate-300 px-1 text-justify focus:bg-white outline-none h-[200px] w-[450px]"
      )}
    />
  );
}
