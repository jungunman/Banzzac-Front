import styled from "@emotion/styled";

type Props = {
  /**
   * 볼드체
   */
  bold?: boolean;
  /**
   * 그라데이션 여부
   */
  gradient?: boolean;
  /**
   * 배지 내용
   */
  txt: string;
};

export const Badge = ({ bold = false, gradient = false, txt }: Props) => {
  return (
    <InfoBadge bold={bold} gradient={gradient}>
      <Text bold={bold}>{txt}</Text>
    </InfoBadge>
  );
};

const InfoBadge = styled.div<{ bold: boolean; gradient: boolean }>`
  width: fit-content;
  height: ${({ bold }) => (bold ? "42px" : "30px")};
  background-color: black;
  border-radius: ${({ bold }) => (bold ? "16px" : "10px")};
  background-image: ${({ gradient }) =>
    gradient && "linear-gradient(#A463FF,#26C6DA)"};
  padding: ${({ bold }) => (bold ? "9px 20px" : "5px 15PX")};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.p<{ bold: boolean }>`
  font-weight: ${({ bold }) => (bold ? 700 : 600)};
  font-size: ${({ bold }) => (bold ? "16px" : "12px")};
  color: white;
  white-space: nowrap;
`;
