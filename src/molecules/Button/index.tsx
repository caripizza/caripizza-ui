import React from 'react';

export interface ButtonProps {
  /** button text content */
  text: string;
  /** button id attribute */
  id: string;
  /** take some action on button click */
  onClick?: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLButtonElement>
  ) => void;
}

/** Use Button to handle user interactions etc */
const Button = ({ text, id, onClick }: ButtonProps): JSX.Element => {
  return (
    <button id={id} className='btn-primary' onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
