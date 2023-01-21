import React from "react";
import { tv as t } from "tailwind-variants";

interface TVComponentProps {
  as: React.ElementType;
  tv: object;
  children?: React.ReactNode;
}

const TVComponent: React.FC<TVComponentProps> = ({
  as = "div",
  tv = {},
  children,
  ...otherProps
}) => {
  const Component = as as React.ReactNode;
  const styles = t(tv);

  return (
    <Component className={styles({ ...otherProps })}>{children}</Component>
  );
};

export default TVComponent;
