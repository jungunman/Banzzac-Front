import styled, { CSSObject } from "@emotion/styled";
import { IPopup } from "@models/common";
import React from "react";

export default function Popup({ contents, buttonProps }: IPopup) {
  return (
    <Container>
      <div>{contents}</div>
      <ButtonContainer>
        {buttonProps.map(({ handleClick, text, style }, idx) => (
          <React.Fragment key={text}>
            <Button onClick={handleClick} buttonStyle={style}>
              {text}
            </Button>
            {idx !== buttonProps.length - 1 && <Seperator />}
          </React.Fragment>
        ))}
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #ffffff;
  min-width: 228px;
  min-height: 133px;
  transform: translate(-50%, -50%);
  border-radius: 14px;
  padding-top: 19px;
`;

const ButtonContainer = styled.div`
  height: 44px;
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const Button = styled.button<{ buttonStyle: CSSObject }>`
  border-top: 1px solid rgba(60, 60, 67, 0.36);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ buttonStyle }) => buttonStyle}
`;

const Seperator = styled.div`
  border-left: 1px solid rgba(60, 60, 67, 0.36);
  height: 44px;
  width: 1px;
`;
