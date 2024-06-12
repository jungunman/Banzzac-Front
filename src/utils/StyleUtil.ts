/**
 *
 * @param fontSize
 * @param fontWeight
 * @param lineHeight
 * @param color
 * @returns
 */

export const FontStyle = (
  fontSize: number,
  fontWeight: number,
  lineHeight: number,
  color: string = "#000000",
) => {
  return {
    fontSize: fontSize,
    lineHeight,
    fontWeight,
    color,
  };
};
