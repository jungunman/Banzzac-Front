import InputDefault from "@components/Input";
import Seperator from "@components/Seperator";
import {
  ACTIVITY,
  BREEDS,
  DOG_PERSONALITY,
  NEUTRIFICATION,
  GENDER,
  SIZE,
} from "@constants/profile";
import styled from "@emotion/styled";
import { userInformationState } from "@recoil/signup";
import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import pet from "@assets/images/pet2.jpeg";
import ButtonSelect from "@components/Input/ButtonSelect";
import DividerDefault from "@components/Divider/Divider";
import ImageInput from "@components/Input/ImageInput";
import SquareButton from "@components/Button/SquareButton";
import { Link } from "react-router-dom";
import { TEST_EMAIL } from "@constants/index";
import useSignup from "@hooks/signup/useSignup";

export default function PetInfo() {
  const [userInfo, setUserInfo] = useRecoilState(userInformationState);
  const { addUser, addPet } = useSignup(TEST_EMAIL);

  const handleChangeAge = (e: ChangeEvent<HTMLInputElement>) => {
    if (!/^[0-9]*$/.test(e.target.value)) return;
    setUserInfo((prev) => ({
      ...prev,
      pet: { ...prev.pet, age: Number(e.target.value) },
    }));
  };

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prev) => ({
      ...prev,
      pet: { ...prev.pet, name: e.target.value },
    }));
  };

  const handleChangeWeight = (e: ChangeEvent<HTMLInputElement>) => {
    if (!/^[0-9]*$/.test(e.target.value)) return;

    setUserInfo((prev) => ({
      ...prev,
      pet: { ...prev.pet, weight: Number(e.target.value) },
    }));
  };

  const handleChangeGender = (
    genderIdxs: number[] | ((prev: number[]) => number[]),
  ) => {
    if (Array.isArray(genderIdxs)) {
      setUserInfo((prev) => {
        const gender = genderIdxs.map((genderIdx) => GENDER[genderIdx]).join();
        return { ...prev, pet: { ...prev.pet, gender } };
      });
    }
  };

  const handleChangeNeutrification = (
    neutrificationIdxs: number[] | ((prev: number[]) => number[]),
  ) => {
    if (Array.isArray(neutrificationIdxs)) {
      setUserInfo((prev) => {
        const neutrification = neutrificationIdxs
          .map((neutrificationIdx) => NEUTRIFICATION[neutrificationIdx])
          .join();
        return { ...prev, pet: { ...prev.pet, neutrification } };
      });
    }
  };

  const handleChangeSize = (
    sizeIdxs: number[] | ((prev: number[]) => number[]),
  ) => {
    if (Array.isArray(sizeIdxs)) {
      setUserInfo((prev) => {
        const size = sizeIdxs.map((sizeIdx) => SIZE[sizeIdx]).join();
        return { ...prev, pet: { ...prev.pet, size } };
      });
    }
  };

  const handleChangeBreed = (
    breedIdxs: number[] | ((prev: number[]) => number[]),
  ) => {
    if (Array.isArray(breedIdxs)) {
      setUserInfo((prev) => {
        const kind = breedIdxs.map((breedIdx) => BREEDS[breedIdx]).join();
        return { ...prev, pet: { ...prev.pet, kind } };
      });
    }
  };

  const handleChangePersonality = (
    personalityIdxs: number[] | ((prev: number[]) => number[]),
  ) => {
    if (Array.isArray(personalityIdxs)) {
      setUserInfo((prev) => {
        const personalityArr = personalityIdxs.map(
          (personalityIdx) => DOG_PERSONALITY[personalityIdx],
        );
        const personality = personalityArr.join();
        return { ...prev, pet: { ...prev.pet, personality, personalityArr } };
      });
    }
  };

  const handleChangeActivity = (
    activityIdxs: number[] | ((prev: number[]) => number[]),
  ) => {
    if (Array.isArray(activityIdxs)) {
      setUserInfo((prev) => {
        const activity = activityIdxs
          .map((activityIdx) => ACTIVITY[activityIdx])
          .join();
        return { ...prev, pet: { ...prev.pet, activity } };
      });
    }
  };

  const handleSignupButton = () => {
    const { user, pet } = userInfo;
    addUser(user);
    addPet({ ...pet, id: user.id });
  };

  return (
    <Container>
      <ImageInput
        img={pet}
        label="사진"
        border={3}
        borderColor="#e0e0e0"
        size={208}
      />
      <InputDefault
        value={userInfo.pet.age}
        onChange={handleChangeAge}
        title="나이"
        width="100%"
        placeholder="출생년도"
        id="age"
      />
      <Seperator height={24} />
      <InputDefault
        value={userInfo.pet.name}
        onChange={handleChangeName}
        title="이름"
        width="100%"
        placeholder="직접입력"
        id="name"
      />
      <Seperator height={24} />
      <InputDefault
        value={userInfo.pet.weight}
        onChange={handleChangeWeight}
        title="몸무게"
        width="100%"
        placeholder="직접입력"
        id="weight"
      />
      <Seperator height={24} />
      <ButtonSelection
        buttonList={GENDER}
        onChangeButton={handleChangeGender}
        label="성별"
        isDuplicate={false}
        maxSelection={1}
        value={[GENDER.findIndex((gender) => gender === userInfo.pet.gender)]}
      />
      <Seperator height={24} />
      <ButtonSelection
        buttonList={NEUTRIFICATION}
        onChangeButton={handleChangeNeutrification}
        label="중성화"
        isDuplicate={false}
        maxSelection={1}
        value={[
          NEUTRIFICATION.findIndex(
            (neutrification) => neutrification === userInfo.pet.neutrification,
          ),
        ]}
      />
      <Seperator height={24} />
      <ButtonSelection
        gridStyle={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}
        buttonList={SIZE}
        onChangeButton={handleChangeSize}
        label="크기"
        isDuplicate={false}
        maxSelection={1}
        value={[SIZE.findIndex((size) => size === userInfo.pet.size)]}
      />
      <Seperator height={24} />
      <ButtonSelection
        gridStyle={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}
        buttonList={BREEDS}
        onChangeButton={handleChangeBreed}
        label="견종"
        isDuplicate={false}
        maxSelection={1}
        value={[BREEDS.findIndex((breed) => breed === userInfo.pet.kind)]}
      />
      <Seperator height={24} />
      <ButtonSelection
        gridStyle={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}
        buttonList={DOG_PERSONALITY}
        onChangeButton={handleChangePersonality}
        label="성격"
        isDuplicate={false}
        maxSelection={1}
        value={[
          DOG_PERSONALITY.findIndex(
            (personality) => personality === userInfo.pet.personality,
          ),
        ]}
      />
      <Seperator height={24} />
      <ButtonSelection
        gridStyle={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}
        buttonList={ACTIVITY}
        onChangeButton={handleChangeActivity}
        label="활동량"
        isDuplicate={false}
        maxSelection={1}
        value={[
          ACTIVITY.findIndex((activity) => activity === userInfo.pet.activity),
        ]}
      />
      <Seperator height={24} />
      <DividerDefault width="100%" />
      <Seperator height={24} />
      <ButtonContainer>
        <Link to={"/signup/user"}>
          <SquareButton title="이전" fill={false} backgroundColor="#212121" />
        </Link>
        <Link to="/signup/complete" onClick={handleSignupButton}>
          <SquareButton title="다음" fill backgroundColor="#212121" />
        </Link>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 24px;
`;

const ButtonSelection = styled(ButtonSelect)`
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  *:nth-of-type(1) {
    flex: 1 1;
  }
  *:nth-of-type(2) {
    flex: 2 2;
  }
`;
