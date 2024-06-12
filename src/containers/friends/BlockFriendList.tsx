import { TEST_EMAIL } from "@constants/index";
import Text from "@components/Text";
import useBlockFriendList from "@hooks/friends/useBlockFriendList";
import FriendCard from "./FriendCard";
import styled from "@emotion/styled";
import { FontStyle } from "@utils/StyleUtil";

export default function BlockFriendList() {

  const { data: blockFriendList } = useBlockFriendList();


  if (!blockFriendList) return <></>;
  return (
    <Container>
      <StyledText {...FontStyle(14, 700, 20, "#9e9e9e")}>
        차단친구목록
      </StyledText>
      <FriendListWrapper>
        {blockFriendList.map((blockFriend) => (
          <li>
            <FriendCard {...blockFriend} />
          </li>
        ))}
      </FriendListWrapper>
    </Container>
  );
}

const Container = styled.div`
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
