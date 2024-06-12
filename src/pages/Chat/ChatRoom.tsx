import React, { useCallback, useEffect, useRef, useState } from "react";
import { Client, IMessage } from "@stomp/stompjs";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./ChatMessagePage.css";
import ChatMessageList from "../../components/ChatMessageList";
import SquareButton from "@components/Button/SquareButton";
import SvgSelector from "@components/Svg/SvgSelector";
import { DoubleProfileImage } from "@components/ProfileImage/ProfileImage";
import Mangu from "@assets/images/mangu.jpg";
import Mangu2 from "@assets/images/mangu2.jpg";
import styled from "@emotion/styled";

interface ChatDTO {
  type: string;
  senderId: string;
  senderNickname?: string;
  receiverId: string;
  receiverNickname?: string;
  sendImg?: string;
  message: string;
  isRead: number;
  chatroomNo: number;
  sendTime?: Date;
  sendTimeStr?: string;
}

const ChatMessagePage: React.FC = () => {
  const {id, oppId, chatroomNo } = useParams();
  const [loading, setLoading] = useState(true);
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [messages, setMessages] = useState<ChatDTO[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollTo(0, messagesEndRef.current.scrollHeight);
  };

  const loadInitChatMessages = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost/api/chat/${id}/${chatroomNo}`, //zkdlwjsxm@example.com 부분은 session id 받아서
      );
      const responseMessages = response.data as ChatDTO[];
      setMessages(responseMessages);
      setLoading(false);
    } catch (error) {
      console.error("채팅 내역 로드 실패", error);
    }
  }, [oppId]);

  const client = new Client({
    brokerURL: "ws://localhost/chat", // 서버 WebSocket URL
    reconnectDelay: 5000,
  });

  useEffect(() => {
    if (loading) {
      loadInitChatMessages();
    }

    client.onConnect = () => {
      client.subscribe(`/topic/public`, (message: IMessage) => {
        const msg: ChatDTO = JSON.parse(message.body);
        setMessages((prevMessages) => [...prevMessages, msg]);
        console.log("myId", id, "oppId", oppId, "chatroomNo", chatroomNo);
      });
    };

    client.activate();
    setStompClient(client);

    return () => {
      client.deactivate();
    };
  }, [loadInitChatMessages, loading, oppId]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        `http://localhost/api/chat/${id}/${chatroomNo}`, //zkdlwjsxm@example.com 부분은 session id 받아서
      );

      const responseMessages = response.data as ChatDTO[];
      setMessages((prevMessages) => [...prevMessages, ...responseMessages]);
      scrollToBottom();
    } catch (error) {
      console.error("채팅 내역 로드 실패", error);
    }
  };

  const onNewMessageChange = (value: string) => {
    setNewMessage(value);
  };

  const onSendMessage = () => {
    if (stompClient && newMessage) {
      const chatMessage: ChatDTO = {
        type: "chat",
        senderId: id || "", //zkdlwjsxm@example.com 부분은 session id 받아서
        //senderNickname: "최성재", //session nickname 받아서
        receiverId: oppId || "",
        isRead: 1,
        sendImg: "",
        sendTime: new Date(),
        message: newMessage,
        chatroomNo: Number(chatroomNo),
        sendTimeStr: "",
      };

      stompClient.publish({
        destination: `/app/chat/rooms/${chatroomNo}/send`,
        body: JSON.stringify(chatMessage),
      });

      setNewMessage("");
    }
  };

  const handleGoBack = () => {
    if (stompClient) {
      stompClient.deactivate();
    }
  };

  const reportUser = async () => {
    try {
      const reportReason = prompt(
        "신고 사유를 작성해주세요. 신고 시 해당 채팅방은 삭제됩니다.",
      );
      if (reportReason) {
        await axios.post(
          `http://localhost/api/chat/report/${chatroomNo}`, //oppId 부분은 신고 대상의 memberId로 변경
          {
            memberId:id, //zkdlwjsxm@example.com 부분은 session id 받아서
            reportedId: oppId, //oppId 부분은 신고 대상의 memberId로 변경
            reportReason: reportReason,
          },
        );
        alert("신고가 접수되었습니다.");
        location.href = `/chat/${id}`;
      }
    } catch (error) {
      console.error("신고하기 실패", error);
    }

  };

  const blockUser = async () => {
    if (confirm("차단하시겠습니까?")) {
      try {
        await axios.get(
          `http://localhost/api/chat/block/${oppId}/${chatroomNo}`, //zkdlwjsxm@example.com 부분은 session id 받아서
        );
        handleGoBack();
        location.href = `/chat/${id}`;
      } catch (error) {
        console.error("친구 차단하기 실패", error);
      }
    }
  };

  const makePromise = async () => {
    try {
      await axios.post(`http://localhost/api/chat/promise`, {
        myId: id, //zkdlwjsxm@example.com 부분은 session id 받아서
        yourId: oppId,
        startWalkTime: "", //oppId 부분은 신고 대상의 memberId로 변경
        endWalkTime: "",
      });
    } catch (error) {
      console.error("약속잡기 실패", error);
    }
  };

  const leaveChatroom = async () => {
    try {
      await axios.get(
        `http://localhost/api/chat/outChatroom/${id}/${chatroomNo}`,
      );
      handleGoBack();
      location.href = `/chat/${id}`;

    } catch (error) {
      console.error("채팅방 나가기 실패", error);
    }
  };

  const memberNickname = "보호자닉네임";
  const dogName = "강아지 이름";

  return (
    <div className="chat-container">
      <div className="chat-header">
        <Link
          to={`/chat/${id}`} //zkdlwjsxm@example.com 부분은 session id 받아서

          onClick={handleGoBack}
        >
          <SvgSelector
            svg="expandLeft"
            height={24}
            width={24}
            stroke="#212121"
          />
        </Link>
        <div className="profile-img">
          <DoubleProfileImage
            size={48}
            border={3}
            borderColor="#fff"
            left={40}
            img={Mangu}
            img2={Mangu2}
          />
          <Name>{`${memberNickname} | ${dogName}`}</Name>
        </div>
        <SvgSelector
          svg="menu"
          height={32}
          width={32}
          stroke="#212121"
          //onClick={() => setIsModalOpen(true)}
        />
      </div>
      <ChatMessageList
        myId={id || ""}
        messagesEndRef={messagesEndRef}
        messages={messages}
        fetchMessages={fetchMessages}
        newMessage={newMessage}
        onNewMessageChange={onNewMessageChange}
        onSendMessage={onSendMessage}
      />
      <div className="input-group">
        <SquareButton
          title="약속잡기"
          fill={false}
          backgroundColor="#212121"
          onClick={makePromise}
        />
        <SquareButton
          title="신고하기"
          fill={false}
          backgroundColor="#212121"
          onClick={reportUser}
        />
        <SquareButton
          title="차단하기"
          fill={false}
          backgroundColor="#212121"
          onClick={blockUser}
        />
        <SquareButton
          title="채팅방 나가기"
          fill={false}
          backgroundColor="#FF614E"
          onClick={leaveChatroom}
        />
      </div>
    </div>
  );
};

const Name = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #212121;
  margin-left: 30px;
`;

export default ChatMessagePage;
