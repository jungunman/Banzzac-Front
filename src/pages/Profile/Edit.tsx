import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import petImg from "@assets/images/pet2.jpeg";
import Collapsible from "@components/Collapsible/Collapsible";
import SvgSelector from "@components/Svg/SvgSelector";
import MenuPopup from "@components/Modal/MenuPopup";
import Seperator from "@components/Seperator";
import RoundButton from "@components/Button/RoundButton";
import ProfileEdit from "@containers/Profile/edit/ProfileEdit";
import PetEdit from "@containers/Profile/edit/PetEdit";
import useProfile from "@hooks/profile/useProfile";
import usePets from "@hooks/profile/usePets";
import { Pet, Profile, defaultProfile } from "@models/profile";
import ModalContents from "@containers/Profile/edit/WithDrawModal";
import useModal from "@hooks/common/useModal";
import useLogout from "@hooks/profile/useLogout";

export default function ProfileEditPage() {
  const { data: profile } = useProfile();
  const { data: pets } = usePets();
  const logout = useLogout();

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileInfo, setProfileInfo] = useState<{
    user: Profile;
    pets: Pet[];
  }>({ user: defaultProfile, pets: [] });

  // 이거... 리렌더링 세번인데 좋지 않은 것 같은데..
  useEffect(() => {
    if (profile?.data && pets?.data) {
      setProfileInfo((prev) => ({
        ...prev,
        user: profile.data[0],
        pets: pets.data,
      }));
    } else {
      setProfileInfo({ user: defaultProfile, pets: [] });
    }
  }, [profile, pets]);

  const { addModal } = useModal();

  const handleWithdrawal = () => {
    addModal({
      type: "popup",
      props: {
        contents: <ModalContents />,
        buttonProps: [],
      },
    });
  };

  if (!profile?.data || !pets?.data) return <></>;

  return (
    <Container>
      <ExitButton onClick={() => setMenuOpen(!menuOpen)}>
        <SvgSelector svg="exit" width={22} height={20} stroke="" />
      </ExitButton>
      {menuOpen && (
        <MenuPopup
          menuList={[
            {
              menu: "로그아웃",
              handleClick: () => {
                logout();
              },
            },
            {
              menu: "탈퇴하기",
              handleClick: handleWithdrawal,
            },
          ]}
          pos={{ top: 50, right: 24 }}
        />
      )}
      <ProfileEdit
        user={profileInfo.user}
        setUser={setProfileInfo}
        pets={profileInfo.pets}
      />
      <Seperator height={30} />
      <ul>
        <Divider />
        {profileInfo.pets.map((pet, idx) => (
          <React.Fragment key={pet.name}>
            <li key={pet.name}>
              <Collapsible
                dogProfile={{ name: pet.name, img: petImg }}
                contents={
                  <PetEdit
                    petInfo={profileInfo.pets[idx]}
                    setPetInfo={setProfileInfo}
                  />
                }
              />
            </li>
            <Divider />
          </React.Fragment>
        ))}
      </ul>
      <Seperator height={30} />
      <ButtonContainer>
        <Link to={"/profile/add-pet"}>
          <RoundButton
            title="반려견 추가"
            fill={false}
            backgroundColor="#212121"
            onClick={() => {}}
          />
        </Link>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 65px;
  padding-bottom: 24px;
  position: relative;
`;

const ExitButton = styled.div`
  position: absolute;
  top: 26px;
  right: 24px;
`;

const Divider = styled.div`
  width: 100%;
  border-top: 1px solid #757575;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
