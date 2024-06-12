import API from "@api/api";
import URLs from "@api/urls";
import { ChatRoom } from "@models/chat";
import { useEffect, useState } from "react";

export default function useChatRoomList(id: string) {
  const [chatRoom, setChatRoom] = useState<ChatRoom[]>();

  const fetchChatRoomList = async () => {
    const res: ChatRoom[] = await API.get(URLs.chat.fetchChatList(id));
    setChatRoom(res);
  };

  useEffect(() => {
    fetchChatRoomList();
  }, []);

  return { data: chatRoom };
}
