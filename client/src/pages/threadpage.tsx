import { getCurrentDeskQuery } from "@/entities/desks/query";
import { getCurrentThread } from "@/entities/threads/query";
import { Navigation } from "@/features/aside/ui/navigation";
import { Thread } from "@/features/thread/ui/thread";
import { MainContentLayout } from "@/shared/layouts/main-content-layout";
import { UiHeader } from "@/shared/ui/ui-header";
import { UiHeaderBlock } from "@/shared/ui/ui-header-block";
import Image from "next/image";
import { useRouter } from "next/router";
import { PostsItem} from "./deskpage";
import { UITogglePostForm } from "@/shared/ui/ui-toggle-post-form";
import { UiFooterBlock } from "@/shared/ui/ui-footer-block";


export function ThreadPage() {
  const router = useRouter();
  const desk = router.query.tag as string;
  const thread = router.query.thread as string;

  const currentDeskQuery = desk ? getCurrentDeskQuery(desk) : undefined;
  const deskItem = currentDeskQuery?.data?.data?.desk || {};

  const currentThreadQuery = thread ? getCurrentThread(thread) : undefined;
  const threadItem = currentThreadQuery?.data?.data?.thread || {};

  console.log(desk, thread);

  return (
    <MainContentLayout
      header={<UiHeader />}
      asideBlock={<Navigation />}
      headerBlock={
        <UiHeaderBlock
        isThread={false}
          buttonName="Ответить в тред"
          img={<Image src="/1.PNG" width="300" height="100" alt="logo" />}
          title={deskItem ? deskItem.name : ""}
        />
      }
      threadBlock={
        threadItem?.posts?.map((post: PostsItem, index: number) => (
              <Thread
                desk={desk}
                key={post.id}
                date={post.created_at}
                number={post.id}
                content={post.content}
                pictures={post.pictures}
                isFirst={index === 0}
                index = {index}
                postsCount={threadItem.posts_count}
                picturesCount={threadItem.pictures_count}
              />
        ))}
        postBlock={<UITogglePostForm buttonName="Ответить в тред" isThread={false} />}
        footerBlock={<UiFooterBlock />}
    />
  );
}
