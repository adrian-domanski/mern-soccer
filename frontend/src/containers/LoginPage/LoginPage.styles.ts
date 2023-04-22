import tw, { styled } from 'twin.macro';
import { FontTypes, setTypography } from '../../styles/mixins';

export const Container = styled.section`
  background: url('/bg/bg_1.webp') no-repeat center bottom;
  background-size: cover;
  position: relative;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }

  ${tw`h-full flex items-center min-h-[80vh] w-full bg-neutral-200 dark:bg-neutral-700`}
`;
export const MainContainer = tw.div`h-full w-full p-4 lg:p-10 flex flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200`;

export const Card = tw.div`block max-w-xl mx-auto rounded-lg bg-white shadow-2xl dark:bg-neutral-800 lg:flex lg:flex-wrap w-full`;

export const GlobalContainer = tw.div`px-4 md:px-0 lg:w-full`;

export const GlobalContent = tw.div`md:mx-6 p-12`;

export const Logo = tw.img`mx-auto w-10`;

export const Title = styled.h4`
  ${setTypography(FontTypes.Heading3)}
  ${tw`mb-12 text-center mt-3 text-primaryDark pb-1 text-xl font-semibold`}
`;
export const Text = tw.p`mb-4`;

export const InputGroup = tw.div`relative mb-4`;

export const LoginButtonWrapper = styled.div`
  button {
    width: 100%;
  }
`;
export const JoinUs = tw.p`block mt-3 text-primaryDark`;

export const RightContainer = tw.div`flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none`;

export const RightContent = tw.div`px-4 py-6 text-white md:mx-6 md:p-12`;

export const SubTitle = tw.h4`mb-6 text-xl font-semibold`;

export const Description = tw.p`text-sm`;

export const RegisterContainer = tw.div`flex items-center justify-between pb-6`;

export const RegisterText = tw.p`mb-0 mr-2 text-white!`;
