import InputDefault from "@components/Input";
import styled from "@emotion/styled";
import useModal from "@hooks/common/useModal";
import useWithdrawal from "@hooks/profile/useWithdrawal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ModalContents() {
  const { withdrawal } = useWithdrawal();
  const { removeCurrentModal } = useModal();
  const [password, setPassword] = useState("");
  const navigator = useNavigate();

  const handleClick = (password: string) => {
    if (!password) return;
    withdrawal(password);
    removeCurrentModal();
    navigator("/login");
  };

  return (
    <Container>
      <InputDefault
        title="비밀번호를 입력하세요"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        width="100%"
        placeholder=""
        id="password"
      />
      <button
        onClick={() => handleClick(password)}
        style={{
          borderTop: "1px solid rgba(60, 60, 67, 0.36)",
          width: "100%",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        확인
      </button>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 20px;
`;
