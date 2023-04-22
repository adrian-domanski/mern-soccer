import tw, { css, styled } from 'twin.macro';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { ButtonVariant } from './Button';

interface WrapperProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: ButtonVariant;
}

export const Wrapper = styled.button<WrapperProps>`
  /* Default styles for button */
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid #888888;
  backdrop-filter: blur(5px);
  padding: 10px 16px;
  height: fit-content;
  white-space: nowrap;
  font-size: 12px;

  width: fit-content;
  border-radius: 50px;
  text-transform: uppercase;
  ${tw`font-primary transition-colors duration-300 ease-in-out`}

  /* Styles for each variant */
  ${({ variant = ButtonVariant.PRIMARY }) => {
    switch (variant) {
      case ButtonVariant.PRIMARY:
        return css``;
      case ButtonVariant.SECONDARY:
        return tw`bg-white text-gray-700 hover:bg-gray-100`;
      case ButtonVariant.DARKER:
        return tw`text-gray-200 bg-gray-600 hover:bg-gray-700`;
      case ButtonVariant.DANGER:
        return tw`text-white bg-red-600 hover:bg-red-700 border-0`;

      default:
        return css``;
    }
  }}
`;
