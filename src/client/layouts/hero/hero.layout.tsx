import React from "react";
import { Layout } from "src/types/layout.types";

interface Props extends Layout {
  title: string;
}

export const HeroLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <div>
      <h1 className="font-bold text-5xl">{title}</h1>
      {children}
    </div>
  );
};
