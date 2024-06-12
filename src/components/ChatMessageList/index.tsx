import SvgSelector from "@components/Svg/SvgSelector";
import React, { Ref } from "react";
import InfiniteScroll from "react-infinite-scroller";
import styled from "@emotion/styled";

const MyMsgContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  align-items: flex-end;
`;

const YourMsgContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  align-items: flex-end;
`;

const MyMsgbox = styled.div`
  min-height: 28px;
  padding: 8px 12px;
  max-width: 270px;
  border-radius: 12px;
  font-weight: 500;
  font-size: 14px;
  line-height: 28px;
  word-wrap: break-word;
  background-color: #b2ebf2;
`;

const YourMsgbox = styled.div`
  min-height: 28px;
  padding: 8px 12px;
  max-width: 270px;
  border-radius: 12px;
  font-weight: 500;
  font-size: 14px;
  line-height: 28px;
  word-wrap: break-word;
  background-color: #ffffff;
`;

const Alert = styled.div`
  width: 50px;
  height: 38px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-evenly;
`;

const Time = styled.div`
  color: #9e9e9e;
  font-size: 10px;
  line-height: 20px;
  font-weight: 600;
`;

const AlertIsRead = styled.div`
  font-size: 10px;
  color: #bf8bfc;
  display: flex;
  line-height: 20px;
`;

interface ChatDTO {
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

interface ChatMessageListProps {
  myId: string;
  messagesEndRef: Ref<HTMLDivElement>;
  messages: ChatDTO[];
  fetchMessages: () => Promise<void>;
  newMessage: string;
  onNewMessageChange: (value: string) => void;
  onSendMessage: () => void;
}

const ChatMessageList: React.FC<ChatMessageListProps> = ({
  myId,
  messagesEndRef,
  messages,
  fetchMessages,
  newMessage,
  onNewMessageChange,
  onSendMessage,
}) => {
  const handleLoadMore = () => {
    fetchMessages();
  };

  return (
    <>
      <div id="scrollableDiv" className="chat-messages" ref={messagesEndRef}>
        <InfiniteScroll
          loadMore={handleLoadMore}
          hasMore={false} // 무한 스크롤 관련 로직을 사용하지 않음
          loader={<h4>Loading...</h4>}
          useWindow={false}
        >
          {messages.map((msg, idx) =>
            msg.senderId === myId ? (
              <YourMsgContainer key={idx}>
                <Alert>
                  <AlertIsRead>{msg.isRead ? msg.isRead : ""}</AlertIsRead>
                  <Time>{msg.sendTimeStr}</Time>
                </Alert>
                <YourMsgbox>{msg.message}</YourMsgbox>
              </YourMsgContainer>
            ) : (

              <MyMsgContainer key={idx}>
                <MyMsgbox>{msg.message}</MyMsgbox>
                <Alert>
                  <Time>{msg.sendTimeStr}</Time>
                  <AlertIsRead>{msg.isRead ? msg.isRead : ""}</AlertIsRead>
                </Alert>
              </MyMsgContainer>
            )
          )}
        </InfiniteScroll>
      </div>

      <div className="input-group">
        <input
          type="text"
          value={newMessage}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onNewMessageChange(e.target.value)
          }
        />
        <button className="send-button" onClick={onSendMessage}>
          <SvgSelector svg="sendButton" width={35} height={35} stroke="" />
        </button>
      </div>
    </>
  );
};

export default ChatMessageList;
