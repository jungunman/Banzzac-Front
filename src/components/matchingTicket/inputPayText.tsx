import styled from "@emotion/styled";

type Props = {
  title: string;
  placeholder: string;
  id: string;
  width: string;
  value: string;
  height: string;
  readOnly: boolean;
  btnTitle: string;
  cancel?: boolean;
  onClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputPayText({
  title,
  id,
  placeholder,
  width,
  value,
  height,
  readOnly,
  btnTitle,
  cancel,
  onClick,
  onChange,
}: Props) {
  return (
    <>
      <Container>
        <Label htmlFor={id}>{title}</Label>
        <InputItem
          value={readOnly ? value : undefined}
          onChange={onChange}
          type="text"
          id={id}
          placeholder={placeholder}
          width={width}
          height={height}
          readOnly={readOnly}
        />
      </Container>

      <MainButton onClick={onClick}>{btnTitle}</MainButton>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #212121;
  line-height: 22px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #212121;
  padding-bottom: 10px;
`;

const InputItem = styled.input<{
  width: string;
  height: string;
}>`
  border: none;
  border-bottom: 1.5px solid #757575;
  width: ${({ width }) => {
    return width;
  }};
  height: ${({ height }) => {
    return height;
  }};
  line-height: 22px;
  font-size: 14px;
`;

const MainButton = styled.button<{ cancelBtn?: boolean }>`
  padding-top: 20px;
  width: ${({ cancelBtn }) => (cancelBtn ? "40%" : "80%")};
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 5;
  margin-left: ${({ cancelBtn }) => (cancelBtn ? "10px" : "0")};
`;
