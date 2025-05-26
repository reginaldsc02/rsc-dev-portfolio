type BorderControlProps = {
  children: React.ReactNode;
  borderTop?: boolean;
  borderRight?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;
  borderFull?: boolean;
  borderX?: boolean;
  borderY?: boolean;
  isRounded?: boolean;
};

export const BorderControl = ({
  children,
  borderTop = false,
  borderRight = false,
  borderBottom = false,
  borderLeft = false,
  borderFull = false,
  borderX = false,
  borderY = false,
  isRounded = false,
}: Readonly<BorderControlProps>) => {
  const borderMap = {
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
    borderFull,
    borderX,
    borderY,
  };

  const borderActiveProp = Object.entries(borderMap)
    .filter(([_, value]) => value)
    .map(([key]) => key);

  if (borderActiveProp.length > 1) {
    throw new Error(
      `BorderControl: Only one border prop can be true. You passed: ${borderActiveProp.join(
        ", "
      )}`
    );
  }

  const roundedClass = isRounded ? "rounded-lg" : "rounded-none";

  const borderClass = [
    borderTop && `border-t-default ${roundedClass}`,
    borderRight && `border-r-default ${roundedClass}`,
    borderBottom && `border-b-default ${roundedClass}`,
    borderLeft && `border-l-default ${roundedClass}`,
    borderFull && `border-full-default ${roundedClass}`,
    borderX && `border-x-default ${roundedClass}`,
    borderY && `border-y-default ${roundedClass}`,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={borderClass}>{children}</div>;
};
