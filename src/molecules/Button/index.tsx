import React from 'react';

export interface ButtonProps
  extends Omit<React.ComponentPropsWithRef<'button'>, 'id' | 'disabled'> {
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
  /** when `true`, button renders with loading svg animation */
  loading?: boolean;
  /** button variant, primary is turquoise and secondary is gold
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary';
  /** when `true`, button renders with outline and transparent background
   * @default false
   */
  outlined?: boolean;
  /** when `true`, button renders with error styles */
  error?: boolean;
  /** when `true`, button renders with disabled styles */
  disabled?: boolean;
  /** when `true`, button renders with selected styles */
  selected?: boolean;
}

/** Use Button to allow users to take some action with a single click. */
const Button = ({
  text,
  id,
  onClick,
  loading,
  variant = 'primary',
  outlined = false,
  error,
  disabled,
  selected,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      {...props}
      id={id}
      className={`btn ${
        variant === 'primary' ? 'btn-primary' : 'btn-secondary'
      }${error ? ' error' : ''}${selected ? ' selected' : ''}${
        outlined ? ' outlined' : ''
      }`}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      <svg
        className={`animate-spin text-base flex-none h-5 w-5 text-current inline transition-opacity duration-500
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
