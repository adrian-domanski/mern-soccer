import tw, { css, styled } from 'twin.macro';
import { FontTypes, setTypography } from '../../../styles/mixins';

export const Title = styled.h2`
  ${setTypography(FontTypes.Heading2)}
`;

export const Paragraph = styled.p`
  ${setTypography(FontTypes.Paragraph)}

  ${tw`my-3 opacity-60 flex items-center`}

  svg {
    ${tw`mr-2`}
  }
`;

export const Wrapper = styled.div<{ isLoggedIn: boolean }>`
  height: 100%;
  ${({ isLoggedIn }) =>
    isLoggedIn &&
    css`
      cursor: pointer;
      button {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1.5rem;
      }
    `}

  ${tw`flex flex-col justify-center items-center  rounded-xl border-4 border-dashed border-primaryDark  bg-clip-border`}

  ${({ isLoggedIn }) =>
    !isLoggedIn &&
    tw`opacity-70 transition-opacity duration-300 hover:opacity-100`}
`;

export const Content = tw.div`flex flex-col justify-center items-center p-6`;

export const CTAWrapper = styled.div`
  button {
    width: 100px;
  }

  ${tw`flex flex-row space-x-2 mt-6 justify-center items-center`}
`;
