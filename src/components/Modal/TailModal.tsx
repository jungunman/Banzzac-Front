import styled from "@emotion/styled";

type Props = {
  contents: React.ReactNode;
};

export default function TailModal({ contents }: Props) {
  return (
    <Container>
      <Contents>{contents}</Contents>
      <Triangle />
    </Container>
  );
}

const Container = styled.div`
  width: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid red;
`;

const Contents = styled.div`
  border: 1px solid #212121;
  background-color: #fff;
  border-radius: 12px;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-top: 39px solid #555;
  position: absolute;
  right: 44px;
`;
