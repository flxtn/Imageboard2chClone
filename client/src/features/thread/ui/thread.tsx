import clsx from "clsx";
import Link from "next/link";
import { useModalThread } from "../model/use-modal-thread";


type ThreadProps = {
  date: string;
  number: number;
  content: string;
  pictures: string[];
  desk: string;
  isFirst?: boolean;
  postsCount?: number;
  picturesCount?: number;
  thread?: number;
  index?: number;
};
export function Thread({
  date,
  number,
  content,
  pictures,
  desk,
  isFirst,
  postsCount,
  picturesCount,
  thread,
  index,
}: ThreadProps) {
  const {
    onMouseDown,
    onMouseUp,
    scale,
    setModalImage,
    modalImage,
    onMouseMove,
    onWheel,
    handleClick,
    modalPosition,
  } = useModalThread();

  const picPostCount = pictures?.length;

  const convertToHTML = (bbcode: string) => {
    bbcode = bbcode.replace(/\[b\](.*?)\[\/b\]/g, '<strong>$1</strong>');
    bbcode = bbcode.replace(/\[i\](.*?)\[\/i\]/g, '<em>$1</em>');
    bbcode = bbcode.replace(/\[u\](.*?)\[\/u\]/g, '<u>$1</u>');

    return bbcode;
  };

  const htmltext = convertToHTML(content)

  return (
    <div className="flex mb-[6px]">
      <div
        className={clsx(
          "flex flex-col min-h-[80px] w-auto rounded-sm pr-7",
          !isFirst && "bg-post-color"
        )}
      >
        <div className="flex flex-row pl-2 pt-1   ">               
          <span className="text-zinc-800">       
            {`Аноним `}{" "}
            {isFirst && <span className="text-green-500 ">#OP</span>} {date} №
            {number}{" "}
            <span className="text-green-700">
              {index != undefined ? index + 1 : ""}
            </span>
          </span>
          {isFirst && (
            <Link
              href={`${desk}/res/${thread}`}
              className="ml-1 text-orange-600 hover:text-orange-700"
            >
              Ответ
            </Link>
          )}
        </div>
        <div                      /*КАРТИНКА + ТЕКСТ*/
          className={clsx(
            "flex pb-1 ",
            picPostCount > 1 ? "flex flex-col" : "flex flex-row"
          )}
        >
          <div
            className={clsx(
              picPostCount > 1 && picPostCount < 4 && "flex-row",
              picPostCount === 1 && "flex-col",
              picPostCount > 3 && "flex-wrap",
              "flex "
            )}
          >
            {pictures === null || pictures === undefined
              ? ""
              : pictures.map((picture, index, array) => (
                  <div
                    className={clsx(
                      index != array.length - 1 ? "max-w-content mb-1" : "w-full mb-2"
                    )}
                  >
                    <img
                      src={`http://127.0.0.1:8000/thumbnails/${picture}`}
                      alt={""}
                      className="cursor-pointer pl-3 pt-2"
                      key={index}
                      onClick={() => setModalImage(picture)}
                    />
                  </div>
                ))}
          </div>
          <span className="text-base pl-4 py-3">
            <pre dangerouslySetInnerHTML={{__html: htmltext}}></pre>
          </span>
      </div>                              
        {isFirst && (     /* КОНЕЦ КАРТИНКА + ТЕКСТ*/
          <div>
            <span>
              {postsCount} постов, {picturesCount} медиа
            </span>
          </div>
        )}
      </div>
      {modalImage && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
          onMouseDown={onMouseDown}
          onWheel={onWheel}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
        >
          <img
            src={`http://127.0.0.1:8000/${modalImage}`}
            alt=""
            className="max-w-full max-h-full border-8 border-modal-color"
            onClick={handleClick}
            style={{
              transform: `translate(${modalPosition.x}px, ${modalPosition.y}px) scale(${scale})`,
            }}
          />
        </div>
      )}
    </div>
  );
}
