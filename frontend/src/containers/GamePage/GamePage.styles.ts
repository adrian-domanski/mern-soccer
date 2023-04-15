import tw, { styled } from 'twin.macro';
import { FontTypes, setTypography } from '../../styles/mixins';

export const Wrapper = styled.div`
  ${tw`bg-gray-100 h-full`}
  min-height: 70vh;
  padding: 2rem 0;

  & > section {
    height: 100%;
  }
`;

export const Title = styled.h1`
  ${setTypography(FontTypes.Heading1)}
  ${tw`px-6 mb-10 mt-4 text-center`}
`;

export const Grid = tw.div`grid gap-4 pb-10 px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3`;

export const GridItem = tw.div``;
