import Carousel from "@components/Carousel";
import styled from "@emotion/styled";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import Seperator from "@components/Seperator";
import Text from "@components/Text";
import { FontStyle } from "@utils/StyleUtil";
import { Badge } from "@components/Badge/Badge";
import TemperatureBar from "@components/TemperatureBar/TemperatureBar";
import useFriend from "@hooks/friends/useFriend";
import usePets from "@hooks/profile/usePets";
import mangu from "@assets/images/mangu.jpg";
import petImg from "@assets/images/pet2.jpeg";
import { defaultPet } from "@models/profile";

import { Link, useNavigate } from "react-router-dom";
import useProfile from "@hooks/profile/useProfile";

type Props = {
  friendId: string;
};

export const ProfileDetail = ({ friendId }: Props) => {
  const [carouselIdx, setCarouselIdx] = useState(0);

  const { data: friendDetail } = useFriend(friendId);
  const { data: pets } = usePets();

  const profileImages = useMemo(() => {
    const petImages = pets?.data.map((_) => petImg) ?? [];
    const images = [mangu].concat(petImages);
    return images;
  }, [pets, friendDetail]);

  const friendCharacterArr = useMemo(() => {
    const { walkingStyle, age } = friendDetail ?? { walkingStyle: [], age: 0 };
    const arr = ["mbti", `${age}세`, ...walkingStyle];
    return arr;
  }, [friendDetail]);

  const petCharacterArr = useMemo(() => {
    const { size, kind, personalityArr } =
      pets?.data?.[carouselIdx - 1] ?? defaultPet;
    const arr = [size, kind, ...personalityArr];
    return arr;
  }, [pets, carouselIdx]);

  if (!pets || !friendDetail) return <></>;

  return (
    <Container>
      <ProfileContainer>
        <Carousel.Indicator
          currentIdx={carouselIdx}
          handleClick={setCarouselIdx}
          srcs={profileImages}
        />
        <Seperator height={30} />
        <Carousel.Carousel
          currentIdx={carouselIdx}
          handleClick={setCarouselIdx}
          srcs={profileImages}
        />
        <Seperator height={30} />
        <Text {...FontStyle(24, 700, 24, "#000")}>
          {carouselIdx === 0
            ? friendDetail.nickName
            : pets.data[carouselIdx - 1].name}
        </Text>
        <Seperator height={18} />
        <Text
          {...FontStyle(16, 700, 20, "#000")}
        >{`${carouselIdx === 0 ? friendDetail.nickName : pets.data[carouselIdx - 1].name} | ${carouselIdx === 0 ? friendDetail.age : pets.data[carouselIdx - 1].age}`}</Text>
      </ProfileContainer>
      <Seperator height={20} />
      <BadgeContainer oneSentence={false}>
        {carouselIdx === 0 ? (
          <>
            {friendCharacterArr.map((v) => (
              <Badge key={v} bold txt={v} />
            ))}
          </>
        ) : (
          <>
            {petCharacterArr.map((character) => (
              <Badge key={character} bold txt={character} />
            ))}
          </>
        )}
      </BadgeContainer>
      <Seperator height={23} />
      <Box display={false} height={113}>
        <Text {...FontStyle(16, 600, 22, "#222")}>
          {`지금 ${friendDetail.nickName}님의 반짝온도는?`}
        </Text>
        <Seperator height={14} />
        <TemperatureBar point={friendDetail.temperature / 10} />
      </Box>
      <Seperator height={18} />
      <Box display={true} height={80}>
        <IconBox>
          <Text {...FontStyle(24, 600, 22, "#333")}>{friendDetail.cnt}</Text>
          <Text {...FontStyle(12, 600, 22, "#333")}>주간 산책 횟수</Text>
        </IconBox>
        <IconBox>
          <Text {...FontStyle(24, 600, 22, "#333")}>40</Text>
          <Text {...FontStyle(12, 600, 22, "#333")}>평균 산책 시간</Text>
        </IconBox>
        <IconBox>
          <Text {...FontStyle(24, 600, 22, "#333")}>리뷰</Text>
          <Text {...FontStyle(12, 600, 22, "#333")}>리뷰조회</Text>
        </IconBox>
      </Box>
    </Container>
  );
};

const Container = styled.div``;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BadgeContainer = styled.ul<{ oneSentence: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 18px;
  overflow-y: scroll;
`;

const Box = styled.div<{ height: number; display: boolean }>`
  height: ${({ height }) => height + "px"};
  padding: 10px 20px;
  border-radius: 16px;
  border: 2px solid #212121;
  display: ${({ display }) => display && "flex"};
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 24px;
  font-weight: 600;
`;


const BottomButton = () => {
  return (
    <ButtonContainer>
      <button>
        <Text {...FontStyle(16, 500, 24, "#E72B23")}>친구추가</Text>
      </button>
      <button>
        <Text {...FontStyle(16, 500, 24, "#007AFF")}>대화하기</Text>
      </button>
    </ButtonContainer>
  );
};

type MatchingButtonProps = {
  friendId:string,
  setIdx:Dispatch<SetStateAction<number>>,
}


export const MatchingBottomButton = ({friendId, setIdx}:MatchingButtonProps) => {

  const navigate = useNavigate()
  const {data : profile} = useProfile()
  function CheckTicket(){
    if(profile?.data[0].quantity == 0){
      alert("매칭권이 없습니다. 구매 부탁쓰~")
      navigate("/profile")
    }else{
      navigate("/chat/5l6l@naver.com/zkdlwjsxm@example.com/6")
    }
  }

  return (
    <ButtonContainer>
      <button onClick={CheckTicket}>
        <Text {...FontStyle(16, 500, 24, "#007AFF")}>대화하기</Text>
      </button>
      <button onClick={()=>{setIdx((prev)=>prev+1)}}>
        <Text {...FontStyle(16, 500, 24, "#E72B23")}>PASS</Text>
      </button>
    </ButtonContainer>
  );
};




const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #3c3c435c;
  button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
  }
`;

const ProfileDetailModal = { ProfileDetail, BottomButton, MatchingBottomButton };

export default ProfileDetailModal;
