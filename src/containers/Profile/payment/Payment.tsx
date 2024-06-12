import MatchingTicket from "@components/matchingTicket";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import axios from "axios";
import Seperator from "@components/Seperator";
import DividerDefault from "@components/Divider/Divider";
import PayButton from "@components/matchingTicket/payButton";
import SvgSelector from "@components/Svg/SvgSelector";
import useProfile from "@hooks/profile/useProfile";

function Payment() {
  const quantity: number[] = [1, 5, 10, 30, 50, 100];
  quantity.reverse();
  const { data: profile } = useProfile();
  const price: number = 1000;
  return (
    <>
      <TopWrap>
        <Link to={"/profile"}>
          <SvgSelector svg="close" width={23} height={23} stroke="#212121" />
        </Link>
        <Text isTitle={true} color={"#212121"} size={13.5}>
          매칭권 충전
        </Text>
      </TopWrap>
      <Content>
        <Text color={"#333"} size={11}>
          현재 보유한 매칭권
        </Text>
        <Text color={"#212121"} size={18}>
          {profile?.data[0].quantity}
        </Text>
      </Content>
      {quantity.map((v, i) => (
        <>
          <PayStyledDiv key={i}>
            <MatchingTicket
              quantity={v}
              isClcik={true}
              semiTitle={`매칭권 ${v}개`}
            ></MatchingTicket>
            <PayButton
              text={`₩${v * price}`}
              onClick={() => {
                axios
                  .post("http://localhost/api/payment/ready", {
                    quantity: v,
                    totalAmount: v * price,
                  })
                  .then(({ data }) => {
                    data.data.next_redirect_pc_url != null
                      ? (location.href = data.data.next_redirect_pc_url)
                      : (location.href = data.data.nextRedirect_mobile_url);
                  });
              }}
            />
          </PayStyledDiv>
          <Seperator height={7} />
          <DividerDefault width={"100%"} />
          <Seperator height={7} />
        </>
      ))}
    </>
  );
}

export const PayStyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  margin: 10% 0 10%;
  padding: 2% 2%;
  box-shadow: inset 0 0 6px rgba(105, 105, 105, 0.1);
`;

const Text = styled.div<{ isTitle?: boolean; color: string; size: number }>`
  width: 100%;
  color: ${({ color }) => color};
  font-weight: 600;
  font-size: ${({ size }) => size + "px"};
  text-align: ${({ isTitle }) => isTitle && "center"};
  margin-bottom: ${({ color }) => (color = "333" && "7px")};
`;

const TopWrap = styled.div`
  display: flex;
  align-items: center;
`;
export default Payment;
