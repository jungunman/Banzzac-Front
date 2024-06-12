import Seperator from "@components/Seperator";
import SvgSelector from "@components/Svg/SvgSelector";
import TemperatureBar from "@components/TemperatureBar/TemperatureBar";
import styled from "@emotion/styled";
import { Profile } from "@models/profile";
import { FontStyle } from "@utils/StyleUtil";
import Text from "@components/Text";
import { Link } from "react-router-dom";

export default function UserCharacteristic({
  nickname,
  temperature,
  quantity,
}: Profile) {
  return (
    <>
      <Box display={false} height={113}>
        <Text {...FontStyle(16, 600, 22, "#222")}>
          {`지금 ${nickname}님의 반짝온도는?`}
        </Text>
        <Seperator height={14} />
        <TemperatureBar point={temperature / 10} />
      </Box>
      <Seperator height={18} />
      <Seperator height={18} />
      <Box display={true} height={80}>
        <StyledLink to="/payment">
          <SvgSelector
            svg="payment"
            height={30}
            width={30}
            stroke={"#A86EFA"}
          />
          <Text {...FontStyle(12, 600, 22, "#333")}>매칭권 구매</Text>
        </StyledLink>
        <StyledLink to="/payment/list">
          <SvgSelector
            svg="paymentHistory"
            height={30}
            width={30}
            stroke={"#A86EFA"}
          />
          <Text {...FontStyle(12, 600, 22, "#333")}>구매내역</Text>
        </StyledLink>
      </Box>
    </>
  );
}

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

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 24px;
  font-weight: 600;
`;
