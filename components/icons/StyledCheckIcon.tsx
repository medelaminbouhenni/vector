
import React from 'react';

const StyledCheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.75 12.75L10.25 15.25L16.25 9.25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.375 10.75C4.0189 7.03295 7.15882 4.125 11 4.125C15.2802 4.125 18.875 7.71979 18.875 12C18.875 16.2802 15.2802 19.875 11 19.875"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default StyledCheckIcon;
