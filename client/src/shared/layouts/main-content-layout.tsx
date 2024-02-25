import { ReactNode } from "react";

export function MainContentLayout({
  header,
  headerBlock,
  asideBlock,
  threadBlock,
  postBlock,
  footerBlock,
}: {
  header: ReactNode;
  headerBlock: ReactNode;
  asideBlock: ReactNode;
  threadBlock: ReactNode;
  postBlock?: ReactNode;
  footerBlock?: ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col">
        {header}
        <div className="mx-auto">{headerBlock}</div>
      </div>
      <div className="flex flex-row mt-8">
        <aside className="w-2/12 pl-4">{asideBlock}</aside>
        <main className="w-10/12 ml-2">
          <div className="mb-5">{threadBlock}</div>
          <div className="flex justify-center">{postBlock}</div>
          <hr className="my-8 h-px border-0 bg-gray-300" />
        </main>
      </div>
      <div>{footerBlock}</div>
    </div>
  );
}
