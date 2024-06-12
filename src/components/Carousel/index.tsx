import styled from "@emotion/styled";
import { useMemo } from "react";

type Props = {
  srcs: string[];
  currentIdx: number;
  handleClick: (idx: number) => void;
};

const Carousel = ({ srcs, currentIdx, handleClick }: Props) => {
  const prevList = useMemo(() => {
    return srcs.filter((_, idx) => idx < currentIdx);
  }, [currentIdx]);

  const followingList = useMemo(() => {
    return srcs.filter((_, idx) => idx > currentIdx);
  }, [currentIdx]);

  return (
    <CarouselContainer>
      {prevList.map((prevImg, idx) => (
        <Circle
          onClick={() => handleClick(idx)}
          size={80}
          pos={{ left: (prevList.length - idx - 1) * 20 }}
          idx={idx}
          length={prevList.length}
        >
          <Image
            size={"100%"}
            src={prevImg}
            alt="profile"
            key={`${prevImg}-${idx}`}
          />
        </Circle>
      ))}
      <CenterImage src={srcs[currentIdx]} alt="profile" />
      {followingList.map((followingImg, idx) => (
        <Circle
          length={followingList.length}
          onClick={() => handleClick(idx + currentIdx + 1)}
          size={80}
          pos={{ right: idx * 20 }}
          idx={-1 * idx}
        >
          <Image
            size={"100%"}
            src={followingImg}
            alt="profile"
            key={`${followingImg}-${idx}`}
          />
        </Circle>
      ))}
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  width: 100%;
`;

const CenterImage = styled.img`
  width: 208px;
  height: 208px;
  display: block;
  border-radius: 50%;
  border: 4px solid #fff;
  z-index: 10;
  box-shadow: 0px 2px 6px 2px #00000026;
  box-shadow: 0px 1px 2px 0px #0000004d;
`;

const Image = styled.img<{ size: number | string }>`
  width: ${({ size }) => (typeof size === "number" ? `${size}px` : size)};
  height: ${({ size }) => (typeof size === "number" ? `${size}px` : size)};
  display: block;
  border-radius: 50%;
  border: 3px solid #fff;
`;

const Circle = styled.button<{
  size: number;
  pos?: { left?: number; right?: number };
  idx: number;
  length: number;
}>`
  --width-height: calc(50% - 104px);
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  position: absolute;
  left: ${({ pos }) => `calc(50% - 104px - 40px - ${pos?.left}px)`};
  right: ${({ pos }) => `calc(50% - 104px - 40px - ${pos?.right}px)`};
  z-index: ${({ idx }) => idx};
  box-shadow: 0px 2px 6px 2px #00000026;
  box-shadow: 0px 1px 2px 0px #0000004d;
`;

const Indicator = ({ srcs, currentIdx, handleClick }: Props) => {
  const handleClickIndicator = (idx: number) => {
    handleClick(idx);
  };
  return (
    <IndicatorContainer>
      {srcs.map((_, idx) => (
        <li key={idx}>
          <IndicatorButton
            active={currentIdx === idx}
            onClick={() => handleClickIndicator(idx)}
          />
        </li>
      ))}
    </IndicatorContainer>
  );
};

const IndicatorContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

const IndicatorButton = styled.button<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border: 2px solid #212121;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#212121" : "#fff")};
`;

export default { Carousel, Indicator };
