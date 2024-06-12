import FriendCard from "./FriendCard";
import styled from "@emotion/styled";
import Text from "@components/Text";
import { FontStyle } from "@utils/StyleUtil";
import { Friend } from "@models/friends";

type Props = {
  friendList: Friend[];
};

export default function FriendList({ friendList }: Props) {
  return (
    <Container>
      <StyledText
        {...FontStyle(14, 700, 20, "#9e9e9e")}
      >{`친구 ${friendList.length}`}</StyledText>
      <FriendListWrapper>
        {friendList.map((friend, idx) => (
          <li key={`${friend.mnickname}-${idx}`}>
            <FriendCard {...friend} />
          </li>
        ))}
      </FriendListWrapper>
    </Container>
  );
}

const Container = styled.ul`
  padding: 0 20px 0 24px;
`;

const StyledText = styled(Text)`
  padding: 8px 0;
`;

const FriendListWrapper = styled.ul`
  li {
    padding: 8px 0;
  }
`;
