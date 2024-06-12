import { SingleProfileImage } from "@components/ProfileImage/ProfileImage";
import pet from "@assets/images/pet2.jpeg";
import styled from "@emotion/styled";
import InputDefault from "@components/Input";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import Seperator from "@components/Seperator";
import ButtonSelect from "@components/Input/ButtonSelect";
import RoundButton from "@components/Button/RoundButton";
import SvgSelector from "@components/Svg/SvgSelector";
import { Pet, Profile } from "@models/profile";
import {
  ACTIVITY,
  BREEDS,
  DOG_PERSONALITY,
  NEUTRIFICATION,
  SIZE,
} from "@constants/profile";
import useEditProfile from "@hooks/profile/useEditProfile";

type Props = {
  petInfo: Pet;
  setPetInfo: Dispatch<SetStateAction<{ user: Profile; pets: Pet[] }>>;
};

export default function PetEdit({ petInfo, setPetInfo }: Props) {
  const { deletePet } = useEditProfile();

  const handleChangeAge = (e: ChangeEvent<HTMLInputElement>) => {
    if (!/^[0-9]*$/.test(e.target.value)) return;
    setPetInfo((prev) => ({
      ...prev,
      pets: prev.pets.map((pet) =>
        pet.name === petInfo.name
          ? { ...pet, age: Number(e.target.value) }
          : pet,
      ),
    }));
  };

  const handleChanteWeight = (e: ChangeEvent<HTMLInputElement>) => {
    if (!/^[0-9]*$/.test(e.target.value)) return;
    setPetInfo((prev) => ({
      ...prev,
      pets: prev.pets.map((pet) =>
        pet.name === petInfo.name
          ? { ...pet, weight: Number(e.target.value) }
          : pet,
      ),
    }));
  };

  const handleChangeNeutrification = (idxArr: number[]) => {
    const neutrification = idxArr.map((i) => NEUTRIFICATION[i]);
    setPetInfo((prev) => ({
      ...prev,
      pets: prev.pets.map((pet) =>
        pet.name === petInfo.name
          ? { ...pet, neutrification: neutrification[0] }
          : pet,
      ),
    }));
  };

  const handleChangeSize = (idxArr: number[]) => {
    const size = idxArr.map((i) => SIZE[i]);
    setPetInfo((prev) => ({
      ...prev,
      pets: prev.pets.map((pet) =>
        pet.name === petInfo.name ? { ...pet, size: size[0] } : pet,
      ),
    }));
  };

  const handleChangeBreed = (idxArr: number[]) => {
    const kind = idxArr.map((i) => BREEDS[i]);
    setPetInfo((prev) => ({
      ...prev,
      pets: prev.pets.map((pet) =>
        pet.name === petInfo.name ? { ...pet, kind: kind[0] } : pet,
      ),
    }));
  };

  const handleChangePersonality = (idxArr: number[]) => {
    const personalityArr = idxArr.map((i) => DOG_PERSONALITY[i]);
    setPetInfo((prev) => ({
      ...prev,
      pets: prev.pets.map((pet) =>
        pet.name === petInfo.name ? { ...pet, personalityArr } : pet,
      ),
    }));
  };

  const handleChangeActivity = (idxArr: number[]) => {
    const activity = idxArr.map((i) => ACTIVITY[i]);
    setPetInfo((prev) => ({
      ...prev,
      pets: prev.pets.map((pet) =>
        pet.name === petInfo.name ? { ...pet, activity: activity[0] } : pet,
      ),
    }));
  };

  const handleDeletePet = () => {
    deletePet(petInfo.name);
    setPetInfo((prev) => ({
      ...prev,
      pets: prev.pets.filter((pet) => pet.name !== petInfo.name),
    }));
  };

  return (
    <Container>
      <SingleProfileImage
        img={pet}
        size={208}
        border={3}
        borderColor="#21212180"
      />
      <Seperator height={40} />
      <InputDefault
        width="100%"
        title="나이"
        id="age"
        placeholder=""
        value={petInfo.age}
        onChange={handleChangeAge}
      />
      <Seperator height={24} />
      <InputDefault
        width="100%"
        title="몸무게"
        id="weight"
        placeholder=""
        value={petInfo.weight}
        onChange={handleChanteWeight}
      />
      <Seperator height={24} />
      <ButtonSelection
        label="중성화"
        isDuplicate={false}
        maxSelection={1}
        buttonList={NEUTRIFICATION}
        value={[
          NEUTRIFICATION.findIndex(
            (neutirfication) => petInfo.neutrification === neutirfication,
          ),
        ]}
        onChangeButton={handleChangeNeutrification}
      />
      <Seperator height={24} />
      <ButtonSelection
        gridStyle={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}
        label="크기"
        isDuplicate={false}
        maxSelection={1}
        buttonList={SIZE}
        value={[SIZE.findIndex((size) => petInfo.size === size)]}
        onChangeButton={handleChangeSize}
      />
      <Seperator height={24} />
      <ButtonSelection
        gridStyle={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}
        label="견종"
        isDuplicate={false}
        maxSelection={1}
        buttonList={BREEDS}
        value={[BREEDS.findIndex((breed) => petInfo.kind === breed)]}
        onChangeButton={handleChangeBreed}
      />
      <Seperator height={24} />
      <ButtonSelection
        gridStyle={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}
        label="성격"
        isDuplicate={true}
        maxSelection={2}
        buttonList={DOG_PERSONALITY}
        value={petInfo.personalityArr
          .map((personality) =>
            DOG_PERSONALITY.findIndex((v) => v === personality),
          )
          .filter((v) => v >= 0)}
        onChangeButton={handleChangePersonality}
      />
      <Seperator height={24} />
      <ButtonSelection
        gridStyle={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}
        label="활동량"
        isDuplicate={false}
        maxSelection={1}
        buttonList={ACTIVITY}
        value={[ACTIVITY.findIndex((v) => v === petInfo.activity)]}
        onChangeButton={handleChangeActivity}
      />
      <Seperator height={24} />
      {
        <RoundButton
          title={
            <>
              <SvgSelector
                svg="filledCloseRound"
                width={24}
                height={24}
                stroke="#212121"
              />
              반려견 삭제
            </>
          }
          onClick={handleDeletePet}
          active
          fill={false}
          backgroundColor="#212121"
        />
      }
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonSelection = styled(ButtonSelect)`
  width: 100%;
`;
