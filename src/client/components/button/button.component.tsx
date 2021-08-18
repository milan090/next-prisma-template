import React from "react";

type Props = {
  children: React.ReactNode;
  handleClick?: () => void;
};

export const Button: React.FC<Props> = ({ children, handleClick = () => {} }) => (
  <button
    className="border-2 border-blue-400 text-white bg-blue-400 rounded-full px-5 py-1 transition-colors duration-300 ease-in-out
hover:text-blue-500 hover:bg-white"
    onClick={handleClick}
  >
    {children}
  </button>
);
