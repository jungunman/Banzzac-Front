import { useState } from "react";
import styled from "@emotion/styled";
import { SingleProfileImage } from "@components/ProfileImage/ProfileImage";
import SvgSelector from "@components/Svg/SvgSelector";

type DogProfile = {
  name: string;
  img: string;
};

type Props = {
  dogProfile: DogProfile;
  contents: React.ReactElement;
};

export default function Collapsible({ dogProfile, contents }: Props) {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <Container>
      {isOpen ? (
        <ContentsContainer>
          <ChevronButton onClick={toggleOpen}>
            <SvgSelector
              svg={"expandUp"}
              width={24}
              height={24}
              stroke={"#212121"}
            />
          </ChevronButton>
          <div>{contents}</div>
        </ContentsContainer>
      ) : (
        <ProfileHeader>
          <ProfileWrapper>
            <SingleProfileImage
              img={dogProfile.img}
              size={77}
              border={2}
              borderColor="#00000080"
            />
            {dogProfile.name}
          </ProfileWrapper>
          <button onClick={toggleOpen}>
            <SvgSelector
              svg={"expandDown"}
              width={24}
              height={24}
              stroke={"#212121"}
            />
          </button>
        </ProfileHeader>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 3px 6px;
  cursor: pointer;
  padding: 18px 24px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const ContentsContainer = styled.div`
  padding: 56px 24px 24px 24px;
`;

const ChevronButton = styled.button`
  position: absolute;
  top: 17px;
  right: 24px;
`;
