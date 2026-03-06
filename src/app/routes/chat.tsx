import { paths } from "@/config/paths";
import { ChatList } from "@/features/chat/components/chat-list";
import { Link } from "react-router";

export const ChatRoute = () => {
  return (
    <div className="flex min-w-svw min-h-svh max-h-svh overflow-hidden bg-bg-light">
      <div className="flex flex-col space-y-20 p-2 border-r border-accent">
        <div className="font-head font-bold text-white bg-accent text-xl tracking-[-0.06em] selection:bg-accent selection:text-white w-fit">
          <Link to={paths.home.getHref()}>BEL</Link>
        </div>
        <ChatList />
      </div>
      <div className="w-full p-2 min-h-svh flex justify-center items-center">
        Chat section
      </div>
    </div>
  );
};
