import styled from "@emotion/styled";

type Props = {
  /**
   * tag contents
   */
  txt: string;
  /**
   * bold tag 여부
   */
  bold?: boolean;
};

export default function TagDefault({ txt, bold = false }: Props) {
  return <Container bold={bold}>{txt}</Container>;
}

const Container = styled.div<{ bold: boolean }>`
  background-color: #eeeeee;
  color: #424242;
  font-weight: ${({ bold }) => (bold ? 700 : 500)};
  width: fit-content;
  padding: 3px 6px;
  border-radius: 40px;
  line-height: ${({ bold }) => (bold ? "20px" : "22px")};
  font-size: 14px;
`;
