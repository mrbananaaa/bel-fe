type Chat = {
  id: number;
  displayName: string;
  username: string;
  profilePicture?: string;
  lastMessageTime: Date;
};

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

type ChatCardProps = {
  chat: Chat;
};

function getHoursAndMinutes(time: Date): string {
  const hh = String(time.getHours()).padStart(2, "0");
  const mm = String(time.getMinutes()).padStart(2, "0");

  return `${hh}:${mm}`;
}

const ChatCard = ({ chat }: ChatCardProps) => {
  const timeSent = getHoursAndMinutes(chat.lastMessageTime);

  return (
    <div className="w-full flex justify-between p-4 rounded-lg bg-white shadow-lg border border-accent cursor-pointer hover:bg-bg-light/5 selection:bg-none">
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

export const ChatList = () => {
  return (
    <div className="flex flex-col space-y-2 min-w-96">
      {chatLists.map((c, i) => (
        <ChatCard key={i} chat={c} />
      ))}
    </div>
  );
};
