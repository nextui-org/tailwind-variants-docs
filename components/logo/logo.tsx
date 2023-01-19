import React from "react";

interface LogoProps {
  width?: number;
  height?: number;
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = (props) => {
  const { size = 30, width, height } = props;

  return (
    <svg
      fill="none"
      height={height || size}
      viewBox="0 0 68 68"
      width={width || size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="fill-black dark:fill-white"
        d="M50 0H18C8.05888 0 0 8.05888 0 18V50C0 59.9411 8.05888 68 18 68H50C59.9411 68 68 59.9411 68 50V18C68 8.05888 59.9411 0 50 0Z"
        fill="white"
      />
      <path
        className="stroke-white dark:stroke-black"
        d="M50 24.0571L33.6138 33.4286L25.3069 28.7429M50 24.0571L33.6138 14L17 24.0571L25.3069 28.7429M50 24.0571L41.8069 39.0286M33.6138 54L17 43.4857L25.3069 28.7429M33.6138 54L49.7724 43.9429L41.8069 39.0286M33.6138 54L41.8069 39.0286"
        stroke="black"
        strokeLinejoin="round"
        strokeWidth={4}
      />
    </svg>
  );
};

export default Logo;
