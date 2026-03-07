import { paths } from "@/config/paths";
import { ChatList } from "@/features/chat/components/chat-list";
import { useState } from "react";
import { Link } from "react-router";

type Chat = {
  id: number;
  displayName: string;
  username: string;
  profilePicture?: string;
  lastMessageTime: Date;
};

export const ChatRoute = () => {
  const [activeChat, setActiveChat] = useState<number | null>(null);

  const chatLists: Chat[] = [
    {
      id: 1,
      displayName: "Devyan Astagiri",
      username: "mrbananaaa",
      lastMessageTime: new Date(Date.now()),
    },
    {
      id: 2,
      displayName: "Abigail Caroline",
      username: "carolineee",
      lastMessageTime: new Date(Date.now()),
    },
    {
      id: 3,
      displayName: "Denny Baik Hati",
      username: "travelguyonan",
      lastMessageTime: new Date(Date.now()),
    },
  ];

  return (
    <div className="flex min-w-svw min-h-svh max-h-svh overflow-hidden bg-bg-light">
      <div className="flex flex-col space-y-20 p-2 border-r border-accent">
        <div className="font-head font-bold text-white bg-accent text-xl tracking-[-0.06em] selection:bg-accent selection:text-white w-fit">
          <Link to={paths.home.getHref()}>BEL</Link>
        </div>
        <div className="min-w-96">
          {chatLists.length > 0 ? (
            <ChatList
              chatList={chatLists}
              activeChat={activeChat}
              setActiveChat={setActiveChat}
            />
          ) : (
            <div className="w-full min-h-svh flex justify-center items-center">
              Start a Conversations
            </div>
          )}
        </div>
      </div>
      <div className="w-full p-2 min-h-svh flex justify-center items-center">
        Chat section
      </div>
    </div>
  );
};
