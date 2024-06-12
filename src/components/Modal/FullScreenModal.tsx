import SvgSelector from "@components/Svg/SvgSelector";
import styled from "@emotion/styled";
import useModal from "@hooks/common/useModal";

type Props = {
  contents: React.ReactNode;
  hasCloseButton: boolean;
};

export default function FullScreenModal({ contents, hasCloseButton }: Props) {
  const { removeCurrentModal } = useModal();

  return (
    <Container>
      {hasCloseButton && (
        <CloseButton onClick={removeCurrentModal}>
          <SvgSelector svg={"close"} width={24} height={24} stroke="#212121" />
        </CloseButton>
      )}
      <div>{contents}</div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  position: relative;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 24px;
  top: 8px;
`;
