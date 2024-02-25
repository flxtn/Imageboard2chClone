import { PostMutation } from "@/entities/post/query";
import { PostThreadMutation } from "@/entities/threads/query";
import { PostThreadForm } from "@/features/post-thread-form/ui/post-thread-form";
import { ReactNode, useState } from "react";
import { UITogglePostForm } from "./ui-toggle-post-form";

type HeaderBlockProps = {
  img: ReactNode;
  title: ReactNode;
  buttonName: string
  isThread: boolean
};

export function UiHeaderBlock({ img, title, buttonName, isThread}: HeaderBlockProps) {


  return (
    <div className="flex flex-col gap-4 justify-center h-auto mt-5">
      <div className="mx-auto">{img}</div>
      <div className="text-4xl text-orange-600 flex mx-auto justify-center hover:text-orange-700">
        {title}
      </div>
      <UITogglePostForm buttonName={buttonName} isThread={isThread} />
    </div>
  );
}
