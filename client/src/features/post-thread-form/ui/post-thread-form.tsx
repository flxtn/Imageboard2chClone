import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { usePostThreadForm } from "../model/use-post-thread-form";
import { useRouter } from "next/router";
import { PostThread, PostThreadMutation } from "@/entities/threads/query";
import { PostMutation } from "@/entities/post/query";
import clsx from "clsx";

export function PostThreadForm({ isThread }: { isThread: boolean }) {
  const router = useRouter();
  const desk = router.query.tag as string;
  const thread = router.query.thread as string;

  const {
    register,
    handleSubmit,
    handleDragEnter,
    handleDrop,
    handleDragLeave,
    handleFileInputChange,
    dragging,
    files,
    setFiles,
    filesUrl,
  } = usePostThreadForm(desk);

  const threadMutation = isThread
    ? PostThreadMutation(desk)
    : PostMutation(desk, thread);

  console.log(files);

  const onSubmit = (data: PostThread) => {
    const formData = new FormData();
    formData.append("content", data.content);
    files.map(file => formData.append("pictures[]", file));
    threadMutation.mutate(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UiButton>Отправить</UiButton>
        <UiTextField
          inputProps={{
            placeholder: "Комментарий. Макс. длина 1500",
            ...register("content"),
          }}
        />
        <div
          className={clsx(
            "h-14 border-4 border-dotted mb-2 border-gray-300 flex items-center justify-center relative cursor-pointer",
            dragging && "border-red-500"
          )}
          onDragEnter={handleDragEnter}
          onDragOver={(e) => e.preventDefault()}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <span className={clsx("text-2xl text-gray-300", dragging && 'text-slate-500')}>ДОБАВИТЬ ФАЙЛ</span>
          <input
            type="file"
            accept="image/*"
            multiple
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleFileInputChange}
          />
        </div>
      </form>
      <div className="flex flex-row mb-2">
        {filesUrl.length
          ? filesUrl.map((item, index) => (
              <div className="border border-solid mr-2 relative">
                <div className="h-[100px] w-[100px] inline-block">
                  <img
                    src={item.url}
                    alt=""
                    className="max-w-[100px] max-h-[100px]"
                  ></img>
                  <div className="bg-opacity-45 bg-gray-300 flex w-[100px] h-[25px] justify-between items-center px-1 absolute left-0 bottom-0">
                    {`${parseFloat(
                      (item.file.size / (1024 * 1024)).toFixed(1)
                    )}МБ`}
                    <button
                      onClick={() =>
                        setFiles((prev) => prev.filter((_, i) => i != index))
                      }
                    >
                      Х
                    </button>
                  </div>
                </div>
              </div>
            ))
          : " "}
      </div>
    </div>
  );
}
