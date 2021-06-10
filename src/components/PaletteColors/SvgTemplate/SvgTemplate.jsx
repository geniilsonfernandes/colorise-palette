import React from "react";

const SvgTemplate = ({ colors }) => {
  return (
    <svg
      width={48 * colors.length}
      height="48"
      viewBox={`0 0  ${48 * colors.length} 48 `}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {colors.map((color,i) => (
        <rect key={color} x={48*i} width="48" height="48" fill={`#${color}`} />
      ))}
    </svg>
  );
};


export default SvgTemplate;
