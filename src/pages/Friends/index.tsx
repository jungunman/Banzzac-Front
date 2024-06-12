import Seperator from "@components/Seperator";
import { TEST_EMAIL } from "@constants/index";
import FavoriteFriendList from "@containers/friends/FavoriteFriendList";
import FriendList from "@containers/friends/FriendList";
import FriendMenu from "@containers/friends/FriendMenu";
import ProfileCard from "@containers/friends/ProfileCard";
import styled from "@emotion/styled";
import useFriendList from "@hooks/friends/useFriendList";
import Navigator from "@layouts/Navigator";
import SquareHeader from "@layouts/SquareHeader";
import { friendListState } from "@recoil/friends";
import { useState } from "react";
import { useRecoilValue } from "recoil";

export default function Friends() {
  const [openMenu, setOpenMenu] = useState(false);
  const friendList = useRecoilValue(friendListState);

  useFriendList(TEST_EMAIL, true);

  if (!friendList) return <></>;

  return (
    <>
      <SquareHeader
        title="친구"
        headerIcons={[
          {
            icon: "search",
            onClick: () => {},
          },
          {
            icon: "friendAdd",
            onClick: () => {},
          },
          {
            icon: "setting",
            onClick: () => setOpenMenu(!openMenu),
          },
        ]}
      />
      {openMenu && <FriendMenu friendList={friendList} />}
      <ProfileCard />
      <Divider />
      <FavoriteFriendList />
      <Divider />
      <FriendList friendList={friendList} />
      <Seperator height={80} />
      <Navigator />
    </>
  );
}

const Divider = styled.div`
  width: 100%;
  border-top: 1px solid #e0e0e0;
`;
