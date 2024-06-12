import ChatItem from "./ChatItem";
import { Link, useParams } from "react-router-dom";
import React from "react";
import styled from "@emotion/styled";
import useChatRoomList from "@hooks/chat/useChatRoomList";

export default function ChatContainer() {
  // api 요청 어디서 하지...
  const { id } = useParams(); // 현재 params 에서 받는데 session id 받는걸로 변경
  const { data: chatList } = useChatRoomList(id || "");

  if (!chatList) return <></>;

  return (
    <ul>
      {chatList.map((chatRoom, idx) => (
        <React.Fragment key={chatRoom.chatroomNo}>
          <li>
            <Link
              to={`/chat/${id}/${chatRoom.opponentId}/${chatRoom.chatroomNo}`}
            >
              <ChatItem {...chatRoom} />
            </Link>
          </li>
          {chatList.length - 1 !== idx && <Divider />}
        </React.Fragment>
      ))}
    </ul>
  );
}

const Divider = styled.div`
  width: 100%;
  border-top: 1px solid #e0e0e0;
`;
