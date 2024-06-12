import DividerDefault from "@components/Divider/Divider";
import styled from "@emotion/styled";

import React from "react";

interface Props {
  pos: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
  menuList: {
    handleClick: () => void;
    menu: React.ReactNode | string;
  }[];
  className?: string;
}

export default function MenuPopup({ menuList, pos, className }: Props) {
  return (
    <Container pos={pos} className={className}>
      {menuList.map(({ menu, handleClick }, idx) => (
        <React.Fragment key={`${menu}`}>
          <li>
            <button onClick={handleClick}>{menu}</button>
          </li>
          {idx !== menuList.length - 1 && <DividerDefault width="100%" />}
        </React.Fragment>
      ))}
    </Container>
  );
}

const Container = styled.ul<{
  pos: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
}>`
  width: 228px;
  border-radius: 12px;
  box-shadow: 0px 0px 32px 0px #00000033;
  position: absolute;
  top: ${({ pos }) => `${pos.top}px`};
  left: ${({ pos }) => `${pos.left}px`};
  right: ${({ pos }) => `${pos.right}px`};
  bottom: ${({ pos }) => `${pos.bottom}px`};
  z-index: 999;
  background-color: #fff;
  li {
    padding: 8px 16px;
  }

  li button {
    width: 100%;
  }
`;
