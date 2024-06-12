import styled from "@emotion/styled";

export type Props = {
  children: React.ReactNode;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  color: string;
  className?: string;
};

export default function Text({
  children,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  className,
}: Props) {
  return (
    <StyledText
      className={className}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      color={color}
    >
      {children}
    </StyledText>
  );
}

const StyledText = styled.div<Omit<Props, "children">>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => `${lineHeight}px`};
  color: ${({ color }) => color};
`;
