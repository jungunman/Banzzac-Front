import { DoubleProfileImage } from "@components/ProfileImage/ProfileImage";
import Mangu from "@assets/images/mangu.jpg";
import Mangu2 from "@assets/images/mangu2.jpg";
import styled from "@emotion/styled";

import { ChatRoom } from "@models/chat";
import NumberAlert from "@components/Badge/NumberAlert";

export default function ChatItem({
  dogName,
  memberNickname,
  lastMessage,
  lastMessageSendtimeStr,
  unreadMessagesCount,
}: ChatRoom) {
  return (
    <Container>
      <Profile>
        <DoubleProfileImage
          size={48}
          border={3}
          borderColor="#fff"
          left={40}
          img={Mangu}
          img2={Mangu2}
        />
        <div style={{ width: "50px" }} />
        <div>
          <Name>{`${memberNickname} | ${dogName}`}</Name>
          <ChatMsg>{lastMessage}</ChatMsg>
        </div>
      </Profile>
      <Alert>
        <Time>{lastMessageSendtimeStr}</Time>
        {unreadMessagesCount ? (
          <NumberAlert color="#BF8BFC" filled number={unreadMessagesCount} />
        ) : (
          ""
        )}
      </Alert>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px 12px 24px;
`;

const Profile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #212121;
`;

const ChatMsg = styled.div`
  color: #757575;
  max-width: 200px;
  height: 16px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Alert = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Time = styled.div`
  color: #757575;
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
`;
