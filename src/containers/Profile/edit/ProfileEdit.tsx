import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

import { SingleProfileImage } from "@components/ProfileImage/ProfileImage";
import mangu from "@assets/images/mangu.jpg";
import { FontStyle } from "@utils/StyleUtil";
import Text from "@components/Text";
import Seperator from "@components/Seperator";
import InputDefault from "@components/Input";
import SvgSelector from "@components/Svg/SvgSelector";
import { Pet, Profile } from "@models/profile";
import useEditProfile from "@hooks/profile/useEditProfile";
import useModal from "@hooks/common/useModal";

type Props = {
  user: Profile;
  pets: Pet[];
  setUser: Dispatch<SetStateAction<{ user: Profile; pets: Pet[] }>>;
};

export default function ProfileEdit({ user, setUser, pets }: Props) {
  const { updatePet, updateStatusMessage } = useEditProfile();
  const { addModal, removeCurrentModal } = useModal();
  const navigate = useNavigate();

  const handleChangeStatusMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({
      ...prev,
      user: { ...prev.user, statusMessage: e.target.value },
    }));
  };

  const editPets = () => {
    pets.forEach((pet) => updatePet(pet));
  };

  const editUser = () => {
    updateStatusMessage(user.statusMessage);
  };

  const handleClickYes = () => {
    editPets();
    editUser();
    removeCurrentModal();
    navigate("/profile");
  };

  const finishEdit = () => {
    addModal({
      type: "popup",
      props: {
        contents: <div>편집 끝?</div>,
        buttonProps: [
          {
            text: "ㄴㄴ",
            handleClick: removeCurrentModal,
            style: {},
          },
          {
            text: "ㅇㅇ",
            handleClick: handleClickYes,
            style: {},
          },
        ],
      },
    });
  };

  return (
    <Container>
      <ProfileContainer>
        <SingleProfileImage
          img={mangu}
          size={208}
          border={3}
          borderColor="#21212180"
        />
        <Seperator height={30} />
        <Text {...FontStyle(24, 700, 24, "#000")}>{user.nickname}</Text>
        <Seperator height={18} />
        <Text
          {...FontStyle(16, 700, 19, "#000")}
        >{`${user.nickname} | ${user.age}세`}</Text>
        <FinishButton onClick={finishEdit}>
          <SvgSelector
            svg="filledPin"
            stroke="#212121"
            width={24}
            height={24}
          />
          <Text {...FontStyle(16, 700, 19, "#212121")}>완료</Text>
        </FinishButton>
      </ProfileContainer>
      <Seperator height={28} />
      <InputDefault
        title="자기소개 한마디"
        placeholder="10자 이내 입력"
        id="statusMessage"
        value={user.statusMessage ?? ""}
        onChange={handleChangeStatusMessage}
        width="100%"
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

const FinishButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  border: 2px solid #212121;
  padding: 3px 15px 3px 8px;
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin-left: 3px;
  }
`;
