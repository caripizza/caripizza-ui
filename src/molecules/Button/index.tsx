import React, { FC } from 'react';

export interface ButtonProps {
  /** button text content */
  text: string;
  /** button id attribute */
  id: string;
}

/** Use Button to handle user interactions etc */
const Button: FC<ButtonProps> = ({ text, id }: ButtonProps) => {
  return (
    <button
      id={id}
      style={{ color: 'cyan', width: '140px', backgroundColor: 'transparent' }}
    >
      {text}
    </button>
  );
};

export default Button;
