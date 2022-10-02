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
      // className='text-3xl underline shadow-xl text-opacity-5 text-tertiary-50'
      className='btn-primary'
    >
      {text}
    </button>
  );
};

export default Button;
