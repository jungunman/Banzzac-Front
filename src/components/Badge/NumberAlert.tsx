import styled from "@emotion/styled";

type Props = {
  number: number;
  color: string;
  filled: boolean;
};

export default function NumberAlert({ number, color, filled }: Props) {
  return (
    <Container color={color} filled={filled}>
      {number}
    </Container>
  );
}

const Container = styled.div<{ color: string; filled: boolean }>`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: ${({ filled, color }) => (filled ? color : "#fff")};
  border: ${({ color }) => `1px solid ${color}`};
  color: ${({ color, filled }) => (filled ? "#fff" : color)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
`;
