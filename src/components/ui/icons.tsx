import { SVGAttributes } from "react";

type Icon = SVGAttributes<HTMLOrSVGElement>;

export const ArrowIcon = ({ width = 464, height = 465, ...props }: Icon) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 464 465"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M464 0H93.5v101.5h198L0 393l71.5 71.5 292-292v216H464z"
      fill="#D6F379"
    />
  </svg>
);
