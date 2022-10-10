import React from 'react';

export interface ButtonProps {
  /** button text content */
  text?: string;
  /** button id attribute */
  id?: string;
  /** take some action on button click */
  onClick?: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLButtonElement>
  ) => void;
  /** is button loading */
  loading?: boolean;
  /** button variant, primary is turquoise and secondary is gold */
  variant?: 'primary' | 'secondary';
}

/** Use Button to handle user interactions etc */
const Button = ({
  text,
  id,
  onClick,
  loading,
  variant = 'primary',
}: ButtonProps): JSX.Element => {
  return (
    <button
      id={id}
      className={`btn ${
        variant === 'primary' ? 'btn-primary' : 'btn-secondary'
      }`}
      onClick={onClick}
    >
      <svg
        className={`animate-spin text-base flex-none h-5 w-5 text-primary inline transition-opacity duration-500
          ${loading ? 'opacity-100' : 'opacity-0 hidden'} ${
          text ? 'mr-2 rtl:mr-0 rtl:ml-2' : 'm-0'
        }`}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
      >
        <circle
          className='opacity-25'
          cx='12'
          cy='12'
          r='10'
          stroke='currentColor'
          strokeWidth='4'
        ></circle>
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        ></path>
      </svg>
      {text && <span className='truncate'>{text}</span>}
    </button>
  );
};

export default Button;
