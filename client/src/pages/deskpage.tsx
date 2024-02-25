import { getCurrentDeskQuery } from "@/entities/desks/query";
import { getThreadsQuery } from "@/entities/threads/query";
import { Navigation } from "@/features/aside/ui/navigation";
import { Thread } from "@/features/thread/ui/thread";
import { MainContentLayout } from "@/shared/layouts/main-content-layout";
import { UiFooterBlock } from "@/shared/ui/ui-footer-block";
import { UiHeader } from "@/shared/ui/ui-header";
import { UiHeaderBlock } from "@/shared/ui/ui-header-block";
import { UITogglePostForm } from "@/shared/ui/ui-toggle-post-form";
import Image from "next/image";
import { useRouter } from "next/router";

export type PostsItem = {
  id: number;
  content: string;
  pictures: string[];
  created_at: string;
  thread_id: number
};

export type ThreadItem = {
  created_at: string;
  id: number;
  posts: PostsItem[];
  posts_count: number;
  pictures_count: number;
};

export default function DeskPage() {
  const router = useRouter();
  const desk = router.query.tag as string;

  const currentDeskQuery = desk ? getCurrentDeskQuery(desk) : undefined;
  const deskItem = currentDeskQuery?.data?.data?.desk || {};
  const threadsQuery = desk ? getThreadsQuery(desk) : undefined;
  const threadItem = threadsQuery?.data?.data?.threads || [];

  return (
    <MainContentLayout
      header={<UiHeader />}
      headerBlock={
        <UiHeaderBlock
        isThread={true}
          buttonName="Создать тред"
          img={<Image src="/1.PNG" width="300" height="100" alt="logo" />}
          title={deskItem ? deskItem.name : ""}
        />
      }
      asideBlock={<Navigation />}
      threadBlock={threadItem?.map((item: ThreadItem) => (
        <div>
          {item?.posts?.map((post, index) => (
            <Thread
              desk={desk}
              key={post.id}
              date={post.created_at}
              number={post.id}
              thread={item.id}
              content={post.content}
              pictures={post.pictures}
              isFirst={index === 0}
              postsCount={item.posts_count}
              picturesCount={item.pictures_count}
            />
          ))}
        </div>
      ))}
      postBlock={<UITogglePostForm isThread={true} buttonName="Создать тред" />}
      footerBlock={<UiFooterBlock />}
    />
  );
}
