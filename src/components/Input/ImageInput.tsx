import { SingleProfileImage } from "@components/ProfileImage/ProfileImage";
import Seperator from "@components/Seperator";
import styled from "@emotion/styled";

type Props = {
  img: string;
  label: string;
  size: number;
  border: number;
  borderColor: string;
};

export default function ImageInput({
  img,
  label,
  size,
  border,
  borderColor,
}: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      <Seperator height={10} />
      <SingleProfileImage
        img={img}
        size={size}
        border={border}
        borderColor={borderColor}
      />
    </Container>
  );
}

const Container = styled.div`
  img {
    display: block;
    margin: auto;
  }
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #000;
`;
