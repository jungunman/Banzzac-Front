import styled from "@emotion/styled";

type Props = {
  text: string;
  onClick: () => void;
};

export default function PayButton({ text, onClick }: Props) {
  return <PayButtonContainer onClick={onClick}>{text}</PayButtonContainer>;
}

export const PayButtonContainer = styled.button`
  width: 70px;
  height: 25px;
  font-size: 13px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 0.8px solid;
`;
