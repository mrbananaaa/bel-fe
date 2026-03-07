type Chat = {
  id: number;
  displayName: string;
  username: string;
  profilePicture?: string;
  lastMessageTime: Date;
};

type ChatCardProps = {
  chat: Chat;
  activeChat: number | null;
  setActiveChat: React.Dispatch<React.SetStateAction<number | null>>;
};

function getHoursAndMinutes(time: Date): string {
  const hh = String(time.getHours()).padStart(2, "0");
  const mm = String(time.getMinutes()).padStart(2, "0");

  return `${hh}:${mm}`;
}

const ChatCard = ({ chat, activeChat, setActiveChat }: ChatCardProps) => {
  const timeSent = getHoursAndMinutes(chat.lastMessageTime);

  return (
    <div
      onClick={() => setActiveChat(chat.id)}
      className={`w-full flex justify-between p-4 rounded-lg shadow-lg border border-accent cursor-pointer selection:bg-none ${activeChat === chat.id ? "bg-red-300" : "bg-white hover:bg-bg-light/5"}`}
    >
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gray-300 rounded-full border border-accent" />

        <div className="flex flex-col space-y-2">
          <div>
            <div className="font-head font-medium text-sm text-fg-light">
              {chat.displayName}
            </div>
            <div className="font-paragraph text-xs text-paragraph">
              @{chat.username}
            </div>
          </div>

          <div className="font-paragraph text-xs text-slate-600 truncate max-w-52">
            Ini chat panjang banget ni brok giluuuuy
          </div>
        </div>
      </div>

      <div className="font-head font-medium text-xs text-paragraph">
        {timeSent}
      </div>
    </div>
  );
};

type ChatListProps = {
  chatList: Chat[];
  activeChat: number | null;
  setActiveChat: React.Dispatch<React.SetStateAction<number | null>>;
};

export const ChatList = ({
  chatList,
  activeChat,
  setActiveChat,
}: ChatListProps) => {
  return (
    <div className="flex flex-col space-y-2">
      {chatList.map((c, i) => (
        <ChatCard
          key={i}
          chat={c}
          activeChat={activeChat}
          setActiveChat={setActiveChat}
        />
      ))}
    </div>
  );
};
