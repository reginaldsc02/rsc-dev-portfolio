type DividerProps = {
  m?: number;
  mt?: number;
  ml?: number;
  mr?: number;
  mb?: number;
  my?: number;
  mx?: number;
};

/**
 * **Values are pixel (px) based.**
 * @description Divider component used to apply customizable margin spacing.
 * @param {number} [m] - Sets all margins (overridden by more specific values if provided).
 * @param {number} [mt] - Sets top margin.
 * @param {number} [ml] - Sets left margin.
 * @param {number} [mr] - Sets right margin.
 * @param {number} [mb] - Sets bottom margin.
 * @param {number} [my] - Sets vertical margin (top and bottom).
 * @param {number} [mx] - Sets horizontal margin (left and right).
 *
 * @returns {JSX.Element} A div element with the specified margin styling applied.
 */
export const Divider = ({ m, mt, ml, mr, mb, my, mx }: DividerProps) => {
  const style = {
    margin: m !== undefined ? `${m}px` : undefined,
    marginTop: mt !== undefined ? `${mt}px` : undefined,
    marginLeft: ml !== undefined ? `${ml}px` : undefined,
    marginRight: mr !== undefined ? `${mr}px` : undefined,
    marginBottom: mb !== undefined ? `${mb}px` : undefined,
    marginBlock: my !== undefined ? `${my}px` : undefined,
    marginInline: mx !== undefined ? `${mx}px` : undefined,
  };

  return <div style={style}></div>;
};
