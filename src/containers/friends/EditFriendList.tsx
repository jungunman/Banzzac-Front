import { Friend } from "@models/friends";
import FriendCard from "./FriendCard";
import styled from "@emotion/styled";
import Text from "@components/Text";
import { FontStyle } from "@utils/StyleUtil";
import { useState } from "react";
import useDeleteFriend from "@hooks/friends/useDeleteFriend";
import { TEST_EMAIL } from "@constants/index";
import useModal from "@hooks/common/useModal";
import useBlockFriend from "@hooks/friends/useBlockFriend";

type Props = {
  friendList: Friend[];
};

export default function EditFriendList({ friendList }: Props) {
  const [selectedFriends, setSelectedFriends] = useState<Friend[]>([]);
  const { deleteFriend } = useDeleteFriend(TEST_EMAIL);
  const { addBlockfriend } = useBlockFriend(TEST_EMAIL);
  const { removeCurrentModal } = useModal();

  const handleChange = (selectedFriend: Friend) => {
    const idx = selectedFriends.findIndex(
      (v) => v.friendId === selectedFriend.friendId,
    );
    if (idx === -1) {
      setSelectedFriends((prev) => [...prev, selectedFriend]);
    } else {
      setSelectedFriends((prev) =>
        prev.filter((v) => v.friendId !== selectedFriend.friendId),
      );
    }
  };

  const finishEditing = () => {
    removeCurrentModal();
  };

  const clearSelectedFriends = () => {
    setSelectedFriends([]);
  };

  const handleDeleteFriend = () => {
    if (selectedFriends.length === 0) return;
    selectedFriends.map((selectedFriend) =>
      deleteFriend(selectedFriend.friendId),
    );
    removeCurrentModal();
  };

  const handleBlockFriend = () => {
    if (selectedFriends.length === 0) return;
    selectedFriends.map((selectedFriend) =>
      addBlockfriend(selectedFriend.friendId),
    );
    removeCurrentModal();
  };

  return (
    <Container>
      <Header>
        <button onClick={finishEditing}>
          <Text {...FontStyle(16, 500, 24, "#212121")}>완료</Text>
        </button>
        <Text {...FontStyle(16, 600, 24, "#212121")}>리스트 편집</Text>
        <button onClick={clearSelectedFriends}>
          <Text {...FontStyle(16, 600, 24, "#212121")}>선택 해제</Text>
        </button>
      </Header>
      <ListContainer>
        {friendList.map((friend) => (
          <li key={friend.friendId}>
            <input
              id={friend.friendId}
              checked={
                selectedFriends.findIndex(
                  (v) => v.friendId === friend.friendId,
                ) !== -1
              }
              onChange={() => handleChange(friend)}
              type="checkbox"
            />
            <label htmlFor={friend.friendId}>
              <FriendCard {...friend} />
            </label>
          </li>
        ))}
      </ListContainer>
      <ButtonContainer>
        <button onClick={handleDeleteFriend}>
          <Text
            {...FontStyle(
              16,
              500,
              24,
              selectedFriends.length === 0 ? "#9e9e9e" : "#212121",
            )}
          >
            친구삭제
          </Text>
        </button>
        <Divider
          borderColor={selectedFriends.length === 0 ? "#9e9e9e" : "#212121"}
        />
        <button onClick={handleBlockFriend}>
          <Text
            {...FontStyle(
              16,
              500,
              24,
              selectedFriends.length === 0 ? "#9e9e9e" : "#E72B23",
            )}
          >
            차단하기
          </Text>
        </button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px 8px 24px;
`;

const ListContainer = styled.ul`
  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    padding: 8px 20px;
  }
`;

const ButtonContainer = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 16px 70px 36px 70px;
  display: flex;
  gap: 48px;
  justify-content: center;
  align-items: center;
`;

const Divider = styled.div<{ borderColor: string }>`
  height: 24px;
  border-left: 1px solid;
  border-color: ${({ borderColor }) => borderColor};
`;
