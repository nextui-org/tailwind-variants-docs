import React from "react";

export interface CollapseProps {
  title: string;
  children: React.ReactNode;
}

const Collaspe: React.FC<CollapseProps> = ({ title, children }) => {
  return (
    <details>
      <summary>{title}</summary>
      <p className="pl-3 py-2">{children}</p>
    </details>
  );
};

export default Collaspe;
