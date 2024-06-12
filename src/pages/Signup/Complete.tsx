import Text from "@components/Text";
import styled from "@emotion/styled";
import { FontStyle } from "@utils/StyleUtil";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupComplete() {
  const navigator = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigator("/login");
    }, 3000);
  }, []);

  return (
    <Container>
      <Text {...FontStyle(24, 700, 32, "#000")}>반갑습니다!</Text>
      <Text {...FontStyle(20, 700, 28, "#000")}>
        회원이 되신 것을 환영합니다.
      </Text>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
