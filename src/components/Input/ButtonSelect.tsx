import RoundButton from "@components/Button/RoundButton";
import styled, { CSSObject } from "@emotion/styled";

type Props = {
  label: string;
  buttonList: string[];
  isDuplicate: boolean;
  maxSelection: number;
  value: number[];
  gridStyle?: CSSObject;
  className?: string;
  onChangeButton: (idxArr: number[]) => void;
};

export default function ButtonSelect({
  className,
  label,
  buttonList,
  gridStyle = { gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" },
  isDuplicate,
  maxSelection,
  value,
  onChangeButton,
}: Props) {
  const handleClick = (idx: number) => {
    // 중복선택 불가능
    if (!isDuplicate) {
      if (value.includes(idx)) {
        const newArr = value.filter((v) => v !== idx && v >= 0);
        onChangeButton(newArr);
      } else {
        const newArr = [idx].filter((v) => v >= 0);
        onChangeButton(newArr);
      }
    } else {
      if (!value.includes(idx) && value.length >= maxSelection) return;
      if (value.includes(idx)) {
        const newArr = value.filter((v) => v !== idx && v >= 0);
        onChangeButton(newArr);
      } else {
        const newArr = value.concat(idx).filter((v) => v >= 0);
        onChangeButton(newArr);
      }
    }
  };

  return (
    <Container gridStyle={gridStyle} className={className}>
      <Label>{label}</Label>
      <div style={{ height: "14px" }} />
      <ul>
        {buttonList.map((button, idx) => (
          <li key={button}>
            <RoundButton
              active={value.includes(idx)}
              onClick={() => handleClick(idx)}
              title={button}
              fill={false}
              backgroundColor={value.includes(idx) ? "#212121" : "#757575"}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div<{ gridStyle: CSSObject }>`
  ul {
    display: grid;
    ${({ gridStyle }) => gridStyle}
  }
  ul li {
    width: 100%;
  }
`;

const Label = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #000;
  line-height: 24px;
`;
