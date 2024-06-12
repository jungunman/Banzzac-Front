type Props = {
  width?: number;
  height?: number;
};

export default function Seperator({ width, height }: Props) {
  return (
    <div
      style={{
        width: width ? `${width}px` : 0,
        height: height ? `${height}px` : 0,
      }}
    />
  );
}
