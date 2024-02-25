import Link from "next/link"

export function UiHeader(){
    return (<div className="text-sm text-orange-600 flex flex-col ">
        <Link href="#" className="px-2">Главная</Link>
        <hr className="mt-[4px] gap-1 h-px border-0 bg-zinc-300" />
    </div>)
}