import Text from "@components/Text";
import FriendCard from "./FriendCard";
import styled from "@emotion/styled";
import { FontStyle } from "@utils/StyleUtil";
import { useRecoilValue } from "recoil";
import { favoriteFriendListState } from "@recoil/friends";
import useFavoriteFriendList from "@hooks/friends/useFavoriteFriendList";
import { TEST_EMAIL } from "@constants/index";

export default function FavoriteFriendList() {
  const favoriteFriendList = useRecoilValue(favoriteFriendListState);
  useFavoriteFriendList(TEST_EMAIL, true);

  if (!favoriteFriendList) return <></>;

  return (
    <Container>
      <StyledText {...FontStyle(14, 700, 20, "#9e9e9e")}>즐겨찾기</StyledText>
      <FriendListWrapper>
        {favoriteFriendList.map((favoriteFriend, idx) => (
          <li key={`${favoriteFriend.friendId}-${idx}`}>
            <FriendCard {...favoriteFriend} />
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
