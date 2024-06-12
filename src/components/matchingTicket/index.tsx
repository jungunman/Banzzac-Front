import SvgSelector from "@components/Svg/SvgSelector";
import Text from "@components/Text";
import { FontStyle } from "@utils/StyleUtil";
import styled from "@emotion/styled";

type Props = {
  semiTitle: String;
  eventDate?: String;
  afterPay?: boolean;
  quantity?: number;
  isClcik?: boolean;
};

function MatchingTicket({ semiTitle, eventDate, afterPay = false }: Props) {
  return (
    <>
      <Container>
        <SvgSelector svg="payment" height={30} width={30} stroke={"#A86EFA"} />
        <Content>
          <Text {...FontStyle(13, 670, 23, "#212121")}>{semiTitle}</Text>
          {afterPay && (
            <Text {...FontStyle(11, 600, 20, "#333")}>{eventDate}</Text>
          )}
        </Content>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 50vw;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7%;
  width: max-content;
`;

export const ButtonContainer = styled.button`
  width: 70px;
  height: 25px;
  font-size: 13px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 0.8px solid;
`;

export default MatchingTicket;
