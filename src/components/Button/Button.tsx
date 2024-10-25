import React from 'react';

export interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  style: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
  );
};

export default Button;
