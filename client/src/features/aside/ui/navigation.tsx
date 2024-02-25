import { getQueryDesks } from "@/entities/desks/query";
import Link from "next/link";

type Desk = {
    name: string;
    tag: string;
    id: number;
}

export function Navigation() {
  const queryDesk = getQueryDesks();
  const items = queryDesk.data?.data.desks || [];

  return (
    <div className="flex flex-col text-sm font-medium">
      {items.map((item: Desk) => (
        <Link href={`/${item.tag}`} key={item.id}>
          <span className="text-orange-600 hover:text-orange-700">{'/'+ item.tag + '/ - ' + item.name}</span>
        </Link>
      ))}
    </div>
  );
}
