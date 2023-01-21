import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Button, ButtonProps } from '..';

describe('Button', () => {
  const renderEl = (props?: ButtonProps) => {
    const utils = render(<Button {...props} data-testid='btn' />);
    const button = screen.getByTestId('btn');
    const svg: SVGElement | null = button.querySelector('svg');
    return { ...utils, button, svg };
  };

  afterEach(cleanup);

  describe('default behavior', () => {
    const { button, svg } = renderEl();

    it('should be empty', () => {
      expect(button).toBeEmptyDOMElement();
    });

    it('should render with primary variant class', () => {
      expect(button).toHaveClass('btn-primary');
    });

    it('should render without inner loading svg', () => {
      expect(svg).toBeNull();
    });
  });

  it('should support text prop', () => {
    const { button } = renderEl({ text: 'Cancel' });
    expect(button).toHaveTextContent('Cancel');
  });

  describe('when variant is secondary', () => {
    it('should render with secondary class', () => {
      const { button } = renderEl({ variant: 'secondary' });
      expect(button).toHaveClass('btn-secondary');
    });
  });

  describe('when onClick prop is provided', () => {
    it('should keep track of button click when not disabled', () => {
      const clickFn = jest.fn();
      const { button } = renderEl({ onClick: clickFn });
      button.click();
      expect(clickFn).toHaveBeenCalledTimes(1);
      expect(button).not.toBeDisabled();
    });

    it('should not allow clicks when disabled', () => {
      const clickFn = jest.fn();
      const { button } = renderEl({ onClick: clickFn, disabled: true });
      button.click();
      expect(clickFn).toHaveBeenCalledTimes(0);
      expect(button).toBeDisabled();
    });
  });

  it('should support error, selected, and outlined props', () => {
    const { button } = renderEl({
      outlined: true,
      error: true,
      selected: true,
    });
    expect(button).toHaveClass('outlined', 'error', 'selected');
  });

  describe('when button is loading', () => {
    it('should render with svg spinner', () => {
      const { svg } = renderEl({ loading: true });
      expect(svg).toBeDefined();
      expect(svg).toHaveClass('m-0');
    });

    it('should render with aligned text', () => {
      const { svg } = renderEl({ loading: true, text: 'View' });
      expect(svg).toHaveClass('mr-2 rtl:mr-0 rtl:ml-2');
    });
  });
});
