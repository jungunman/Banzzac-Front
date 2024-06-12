import { DoubleProfileImage } from "@components/ProfileImage/ProfileImage";
import { TEST_EMAIL } from "@constants/index";
import useProfile from "@hooks/profile/useProfile";
import mangu from "@assets/images/mangu.jpg";
import mangu2 from "@assets/images/mangu2.jpg";
import styled from "@emotion/styled";
import usePets from "@hooks/profile/usePets";
import SvgSelector from "@components/Svg/SvgSelector";
import Text from "@components/Text";
import { FontStyle } from "@utils/StyleUtil";
import { Link } from "react-router-dom";

export default function ProfileCard() {
  const { data: profileData } = useProfile();
  const { data: petData } = usePets();

  if (!profileData || !petData) return <></>;

  return (
    <Container>
      <ProfileWrapper>
        <DoubleProfileImage
          img={mangu}
          img2={mangu2}
          size={50}
          left={40}
          border={3}
        />
        <div style={{ width: "50px" }} />
        <div>
          <Text
            {...FontStyle(16, 600, 24, "#212121")}
          >{`${profileData.data[0].nickname} | ${petData.data[0].name}`}</Text>
          <Text {...FontStyle(12, 500, 20, "#757575")}>
            {profileData.data[0].statusMessage}
          </Text>
        </div>
      </ProfileWrapper>
      <Link to="/profile">
        <SvgSelector svg="chatPlus" width={24} height={24} stroke="#212121" />
      </Link>
    </Container>
  );
}

const Container = styled.div`
  padding: 14px 20px 14px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  display: flex;
`;
