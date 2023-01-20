import React from "react";

interface LinkIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const LinkIcon: React.FC<LinkIconProps> = (props) => {
  const { width = "1em", height = "1em", className } = props;

  return (
    <svg
      className={className}
      fill="none"
      height={height}
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width={width}
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14L21 3" />
    </svg>
  );
};

export default LinkIcon;
