import type { FC, ReactNode } from 'react';

export interface CollapseProps {
  title: string;
  children: ReactNode;
}

const Collaspe: FC<CollapseProps> = ({ title, children }) => {
  return (
    <details>
      <summary>{title}</summary>
      <p className="py-2 pl-3">{children}</p>
    </details>
  );
};

export default Collaspe;
