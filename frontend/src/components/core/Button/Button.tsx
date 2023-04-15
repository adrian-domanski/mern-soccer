import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import * as Styled from './Button.styles';

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: ButtonVariant;
  $as?: 'button' | 'a';
  children?: React.ReactNode;
}

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DARKER = 'darker',
  TEXT = 'text',
}

const Button: FC<IButtonProps> = ({ variant, $as, children, ...props }) => {
  return (
    <Styled.Wrapper as={$as} variant={variant} onClick={props.onClick}>
      {children}
    </Styled.Wrapper>
  );
};

export default Button;
