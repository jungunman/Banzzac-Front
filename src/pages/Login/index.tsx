import authInstance from "@api/authInterceptor";
import KakaoLoginImg from "@assets/images/kakao_login@3x.png";
import LogoImg from "@assets/images/Logo@3x.png";
import Seperator from "@components/Seperator";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const SocialKakao = () => {
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_KAKAO_LOGIN}&redirect_uri=${import.meta.env.VITE_KAKAO_LOGIN_REDIRECT}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  const navigation = useNavigate();

  const handleLoginButton = async () => {
    const res = await authInstance.post("/api/login", {
      id: "zkdlwjsxm@example.com",
      pwd: "1111",
    });
    navigation("/friends");
    return res;
  };

  return (
    <Container>

      <img src={LogoImg} alt="logo" width={80} />
      <Seperator height={40} />

        <button onClick={handleLoginButton}>로그인</button>
      
      <Seperator height={40} />
      <button onClick={handleLogin}>
        <img src={KakaoLoginImg} alt="kakao-login" width={342} />
      </button>
      <button 
        onClick={handleLoginButton}
        style={{
          border: "1px solid",
          padding: "10px 30px",
          borderRadius: "10px",
        }}
      >
        login
      </button>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default SocialKakao;
