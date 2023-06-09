import tw, { styled } from 'twin.macro';
import { FontTypes, setTypography } from '../../../styles/mixins';

export const Title = styled.h2`
  ${setTypography(FontTypes.Heading3)}
`;

export const Paragraph = styled.p`
  ${setTypography(FontTypes.Paragraph)}

  ${tw`my-3 opacity-60 flex items-center`}

  svg {
    ${tw`mr-2`}
  }
`;

export const Wrapper = tw.div`flex flex-col rounded-xl bg-white bg-clip-border`;

export const Content = tw.div`flex-1 p-6`;

export const ButtonWrapper = styled.div`
  button {
    width: 100%;

    ${tw`lg:w-fit`}
  }
`;
