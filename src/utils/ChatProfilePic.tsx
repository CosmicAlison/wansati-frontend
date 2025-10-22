import { Chat } from "@/types/Chat";

  export function ChatProfilePic({ chat, currentUserId }: { chat: Chat; currentUserId: number }) {
    let profileSrc = "/user_default.jpg";
    if (chat.type === "PRIVATE") {
      const otherUser = chat.members.find(member => member.id !== currentUserId);
      if (otherUser && otherUser.profileUrl) {
        profileSrc = otherUser.profileUrl; 
      } 
    } 
    return <img src={profileSrc} alt={"profile"} className="rounded-full w-10 h-10" />;
  }