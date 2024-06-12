import mangu from "@assets/images/mangu.jpg";
import styled from "@emotion/styled";
import { WALKING_STYLE } from "@constants/profile";
import Seperator from "@components/Seperator";
import { useRecoilState } from "recoil";
import { userInformationState } from "@recoil/signup";
import ButtonSelect from "@components/Input/ButtonSelect";
import SquareButton from "@components/Button/SquareButton";
import { Link, useSearchParams } from "react-router-dom";
import ImageInput from "@components/Input/ImageInput";
import { useEffect } from "react";

export default function UserInfo() {
  const [userInfo, setUserInfo] = useRecoilState(userInformationState);
  const [searchParams] = useSearchParams();

  const handleWalkingStyle = (idxArr: number[]) => {
    setUserInfo((prev) => {
      const walkingStyle = idxArr.map((idx) => WALKING_STYLE[idx]);
      return { ...prev, user: { ...prev.user, walkingStyle } };
    });
  };

  useEffect(() => {
    const nickname = searchParams.get("nickname") ?? "";
    const phone = searchParams.get("phone") ?? "";
    const id = searchParams.get("id") ?? "";
    const gender = Number(searchParams.get("gender")) ?? 1;

    setUserInfo((prev) => ({
      ...prev,
      user: { ...prev.user, nickname, phone, id, gender },
    }));
  }, []);

  return (
    <Container>
      <ImageInput
        label="사진"
        img={mangu}
        size={208}
        border={3}
        borderColor="#e0e0e0"
      />
      <Seperator height={24} />
      <ButtonSelection
        gridStyle={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}
        buttonList={WALKING_STYLE}
        value={userInfo.user.walkingStyle.map((v) =>
          WALKING_STYLE.findIndex((walkingStyle) => walkingStyle === v),
        )}
        onChangeButton={handleWalkingStyle}
        label="산책 스타일"
        isDuplicate={true}
        maxSelection={5}
      />
      <Seperator height={24} />
      <ButtonContainer>
        <Link to={"/login"}>
          <SquareButton title="이전" fill={false} backgroundColor="#212121" />
        </Link>
        <Link to="/signup/pet">
          <SquareButton title="다음" fill backgroundColor="#212121" />
        </Link>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 24px;
  padding-top: 24px;
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
